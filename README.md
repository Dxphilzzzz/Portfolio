# Dev Portfolio

Built with [Astro](https://astro.build) — a Node.js-based static site framework.
It compiles to plain HTML/CSS/JS, which is exactly what Cloudflare Pages wants,
so there's no server runtime to configure.

> **Why not Laravel?** Laravel is a PHP framework and needs a PHP server to run.
> Cloudflare Pages serves static files (and optionally JS-based Functions) —
> it can't run PHP. Astro (Node.js) builds to static output, so it deploys
> to Pages with zero extra setup.

## Pages

- `/` — Work (hero + your featured project)
- `/info` — About you, background, experience

All editable content is marked with `<!-- EDIT: ... -->` comments directly
in `src/pages/index.astro` and `src/pages/info.astro`, and in the nav/footer
in `src/layouts/Layout.astro`.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:4321

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Cloudflare Pages

**Option A — Git integration (recommended)**
1. Push this project to a GitHub/GitLab repo.
2. In the Cloudflare dashboard: Workers & Pages → Create → Pages → Connect to Git.
3. Select the repo. Framework preset: **Astro**.
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Every push to your main branch redeploys automatically.

**Option B — Direct upload with Wrangler**
```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist
```

## What to edit first

1. `src/layouts/Layout.astro` — your name in the nav, footer links (GitHub, LinkedIn, email)
2. `src/pages/index.astro` — your name, role, bio, resume link, and the `projects` array
3. `src/pages/info.astro` — your about statement, background story, and the `experience` array
4. `src/styles/global.css` — colors/fonts live under `:root` at the top if you want to re-theme
