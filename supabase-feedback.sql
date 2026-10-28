create table if not exists public.feedbacks (
  id uuid primary key default gen_random_uuid(),
  name text not null default 'Cliente',
  text text not null,
  rating integer not null check (rating between 0 and 5),
  created_at timestamptz not null default now()
);

alter table public.feedbacks enable row level security;

drop policy if exists "Feedbacks are readable" on public.feedbacks;
create policy "Feedbacks are readable"
on public.feedbacks
for select
using (true);

drop policy if exists "Anyone can publish feedback" on public.feedbacks;
create policy "Anyone can publish feedback"
on public.feedbacks
for insert
with check (true);

drop policy if exists "Admin page can delete feedback" on public.feedbacks;
create policy "Admin page can delete feedback"
on public.feedbacks
for delete
using (true);
