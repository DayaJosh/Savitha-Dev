create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null check (source in ('contact', 'home_valuation')),
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (char_length(email) between 3 and 255),
  phone text,
  interest text,
  areas text,
  property_address text
);

alter table public.leads enable row level security;

create policy "Anyone can submit a lead"
on public.leads
for insert
to anon
with check (true);

revoke all on table public.leads from anon;
grant insert on table public.leads to anon;
