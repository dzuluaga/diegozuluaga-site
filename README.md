# diegozuluaga-site

Personal homepage served at **https://diegozuluaga.dev/** (replaces Linktree).

A single static page (`index.html`), no build step. Career content is sourced from
`~/tools/git/career` (wiki: `career/wiki/entities/diego-zuluaga.md`, resume, LinkedIn v5 copy).

Routing: `diegozuluaga-router` owns the domain and rewrites `/` (and any path not claimed by
`/ap2`, `/mcpa`, `/trusted-edgeai`) to this project's deployment.

Edit `index.html`, then redeploy (`vercel --prod`, or push if the repo is connected to Vercel).
