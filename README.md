# diegozuluaga-site

Personal homepage served at **https://diegozuluaga.dev/** (replaces Linktree).

Built on the [Magic UI portfolio template](https://github.com/dillionverma/portfolio)
by Dillion Verma (MIT, see `LICENSE`). Next.js 16 + Tailwind 4.

- **Content:** almost everything lives in `src/data/resume.tsx` (work, projects, talks, links).
  Career facts come from `~/tools/git/career` (wiki profile, resume, LinkedIn copy).
- **Images:** company/event logos in `public/logos/`, project previews in `public/projects/`.
- **Blog:** the template's MDX blog is wired up (`content-collections.ts`, empty `content/`)
  but its routes were removed until there are posts to show.

```sh
pnpm install
pnpm dev     # http://localhost:3000
pnpm build
```

Routing: `diegozuluaga-router` owns the domain and rewrites `/` (and any path not claimed by
`/ap2` or `/mcpa`) to this project. Pushing to `main` deploys via Vercel's GitHub integration.
