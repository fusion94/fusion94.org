# fusion94.org

Personal site and blog of Tony Guntharp ([@fusion94](https://github.com/fusion94)).

**Live:** [https://fusion94.org](https://fusion94.org)

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | [Astro 6](https://astro.build) |
| Content | Markdown + MDX |
| Diagrams | [Mermaid](https://mermaid.js.org) via custom `MermaidDiagram` component |
| RSS | `@astrojs/rss` |
| Sitemap | `@astrojs/sitemap` |
| Image processing | `sharp` |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions (push to `main` → auto-deploy) |
| Node | ≥ 22.12.0 |

---

## Local Development

```bash
npm install
npm run dev
```

Dev server runs on `http://localhost:4321` (also available at `http://fusion94.test` if you have a local Caddy setup).

```bash
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

---

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which:

1. Checks out the repo
2. Installs dependencies with `npm ci`
3. Runs `astro build`
4. Uploads `dist/` to GitHub Pages

No manual deploy steps required.

---

## Content Structure

```
src/content/blog/     # All blog posts (.md and .mdx)
src/pages/            # Astro pages (index, about, contact, opensource, blog index, RSS)
src/components/       # Shared components (Header, Footer, MermaidDiagram, etc.)
src/layouts/          # BlogPost layout
src/styles/           # global.css — navy/amber design system
public/images/        # Static images and post assets
```

Blog posts use frontmatter:

```yaml
---
title: "Post Title"
description: "Short description"
pubDate: '2026-04-23 20:45 -0500'
updatedDate: '2026-04-23 21:07 -0500'   # optional
tags:
  - tag-one
  - tag-two
heroImage: /images/some-image.jpg        # optional
---
```

MDX posts can use the `MermaidDiagram` component:

```mdx
import MermaidDiagram from '../../components/MermaidDiagram.astro';

<MermaidDiagram
  title="Optional chart title"
  caption="Optional caption shown below the diagram"
  chart={`flowchart TD
    A[Start] --> B[End]`}
/>
```

---

## Topics

3D printing · Drones · Gaming · Conservation & hunting · Whiskey & bourbon · Golf · Sports cards · Tech & software engineering · Personal writing

---

## Security

One known Dependabot alert (moderate): `uuid < 14.0.0` via `mermaid` as a transitive dependency. Fixing requires downgrading mermaid to 9.1.7, which is a breaking change — deferred pending an upstream mermaid release that resolves the dep.
