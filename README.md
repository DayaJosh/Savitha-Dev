# savitha.us

Production website for Savitha Rameshkumar, built with React, TypeScript, Vite, and Tailwind CSS.

## Local development

1. Copy `.env.example` to `.env` and add the public Supabase values.
2. Install dependencies with `pnpm install --frozen-lockfile`.
3. Start the site with `pnpm dev`.
4. Run all production checks with `pnpm check`.

## Lead form setup

Apply `supabase/migrations/20260919000000_create_leads.sql` to the configured Supabase project before launch. Both website forms write to the protected `public.leads` table; anonymous visitors can insert but cannot read submissions.

## Cloudflare Pages

- Build command: `pnpm build`
- Build output directory: `dist`
- Deploy command: `pnpm run deploy` (only when the Cloudflare project requires a deploy command)
- Node.js version: 22
- Environment variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`

Do not use `npx wrangler deploy`: that command is for Workers and will fail for this static Pages site. If the project is Git-integrated, leave the Cloudflare **Deploy command** blank so Pages uploads `dist` after the build; otherwise use `pnpm run deploy`, which runs `wrangler pages deploy dist`.

The repository includes `wrangler.toml`, security headers, search metadata, and SPA routing support for Cloudflare Pages.
