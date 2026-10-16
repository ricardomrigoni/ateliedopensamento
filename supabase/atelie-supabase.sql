-- =====================================================================
-- Ateliê do Pensamento — sincronização com o Supabase
-- Cole tudo no SQL Editor do seu projeto Supabase e clique em "Run".
-- Pode ser executado mais de uma vez sem estragar nada.
--
-- O que cria:
--   atelie_estado     uma linha por usuário com todos os seus dados (JSON)
--   atelie_historico  cópias anteriores, para recuperar algo (90 dias)
--   atelie_salvar()   grava com controle de versão, para que um aparelho
--                     não sobrescreva sem querer o que outro acabou de salvar
-- Segurança: Row Level Security — cada usuário só vê e altera as próprias linhas.
-- =====================================================================

-- 1. Estado atual -------------------------------------------------------
create table if not exists public.atelie_estado (
  user_id       uuid primary key default auth.uid() references auth.users (id) on delete cascade,
  dados         jsonb       not null,
  versao        bigint      not null default 1,
  dispositivo   text,
  atualizado_em timestamptz not null default now()
);

-- 2. Histórico de versões ----------------------------------------------
create table if not exists public.atelie_historico (
  id          bigint generated always as identity primary key,
  user_id     uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  dados       jsonb       not null,
  versao      bigint,
  origem      text        not null default 'automatico',  -- automatico | conflito | antes-de-restaurar
  dispositivo text,
  criado_em   timestamptz not null default now()
);
create index if not exists atelie_historico_usuario_data on public.atelie_historico (user_id, criado_em desc);

-- 3. Segurança (RLS) ----------------------------------------------------
alter table public.atelie_estado    enable row level security;
alter table public.atelie_historico enable row level security;

drop policy if exists "estado: ler o próprio"      on public.atelie_estado;
drop policy if exists "estado: criar o próprio"    on public.atelie_estado;
drop policy if exists "estado: alterar o próprio"  on public.atelie_estado;
drop policy if exists "estado: apagar o próprio"   on public.atelie_estado;
create policy "estado: ler o próprio"     on public.atelie_estado for select to authenticated using ((select auth.uid()) = user_id);
create policy "estado: criar o próprio"   on public.atelie_estado for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "estado: alterar o próprio" on public.atelie_estado for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "estado: apagar o próprio"  on public.atelie_estado for delete to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "histórico: ler o próprio"   on public.atelie_historico;
drop policy if exists "histórico: criar o próprio" on public.atelie_historico;
drop policy if exists "histórico: apagar o próprio" on public.atelie_historico;
create policy "histórico: ler o próprio"    on public.atelie_historico for select to authenticated using ((select auth.uid()) = user_id);
create policy "histórico: criar o próprio"  on public.atelie_historico for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "histórico: apagar o próprio" on public.atelie_historico for delete to authenticated using ((select auth.uid()) = user_id);

-- Permissões explícitas (projetos novos do Supabase não expõem tabelas novas automaticamente)
revoke all on public.atelie_estado, public.atelie_historico from anon;
grant select, insert, update, delete on public.atelie_estado    to authenticated;
grant select, insert, delete         on public.atelie_historico to authenticated;

-- 4. Cópia automática no histórico (no máximo uma por hora) -------------
create or replace function public.atelie_guardar_historico()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not exists (
    select 1 from public.atelie_historico h
    where h.user_id = old.user_id and h.origem = 'automatico' and h.criado_em > now() - interval '1 hour'
  ) then
    insert into public.atelie_historico (user_id, dados, versao, origem, dispositivo)
    values (old.user_id, old.dados, old.versao, 'automatico', old.dispositivo);
  end if;
  delete from public.atelie_historico h
  where h.user_id = old.user_id and h.criado_em < now() - interval '90 days';
  return new;
end;
$$;
revoke execute on function public.atelie_guardar_historico() from public, anon, authenticated;

drop trigger if exists atelie_estado_historico on public.atelie_estado;
create trigger atelie_estado_historico
  before update on public.atelie_estado
  for each row
  when (old.dados is distinct from new.dados)
  execute function public.atelie_guardar_historico();

-- 5. Gravar com controle de versão -------------------------------------
-- p_versao_base = a versão da nuvem que este aparelho conhecia.
-- Se outro aparelho salvou depois disso, nada é gravado e r_ok volta false.
create or replace function public.atelie_salvar(p_dados jsonb, p_versao_base bigint, p_dispositivo text default null)
returns table (r_ok boolean, r_versao bigint, r_atualizado_em timestamptz)
language plpgsql
security invoker
set search_path = ''
as $$
declare
  v_uid   uuid := auth.uid();
  v_atual bigint;
  v_data  timestamptz;
begin
  if v_uid is null then
    raise exception 'É preciso entrar com e-mail e senha.' using errcode = '28000';
  end if;
  if p_dados is null or jsonb_typeof(p_dados) <> 'object' then
    raise exception 'Dados inválidos.' using errcode = '22023';
  end if;

  select e.versao, e.atualizado_em into v_atual, v_data
  from public.atelie_estado e where e.user_id = v_uid
  for update;

  if not found then
    -- primeira gravação deste usuário (ou a linha foi apagada no painel do Supabase)
    insert into public.atelie_estado (user_id, dados, versao, dispositivo)
    values (v_uid, p_dados, 1, p_dispositivo)
    on conflict (user_id) do nothing;
    if not found then
      -- outro aparelho criou a linha neste mesmo instante
      select e.versao, e.atualizado_em into v_atual, v_data from public.atelie_estado e where e.user_id = v_uid;
      return query select false, v_atual, v_data;
      return;
    end if;
    return query select true, 1::bigint, now();
    return;
  end if;

  if p_versao_base is distinct from v_atual then
    return query select false, v_atual, v_data;
    return;
  end if;

  update public.atelie_estado e
     set dados = p_dados, versao = v_atual + 1, dispositivo = p_dispositivo, atualizado_em = now()
   where e.user_id = v_uid;
  return query select true, v_atual + 1, now();
end;
$$;
revoke execute on function public.atelie_salvar(jsonb, bigint, text) from public, anon;
grant  execute on function public.atelie_salvar(jsonb, bigint, text) to authenticated;
