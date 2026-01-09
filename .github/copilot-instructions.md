# AI Copilot Instructions — SMKID Server Lab Blog

This repo is a Next.js 15 (App Router, RSC) + Tailwind CSS 4 + Contentlayer2 MDX blog used for SMKID Server Lab docs.

## Architecture & Sources

- Framework: Next 15.2 (App Router), React 19, Tailwind 4.
- Content: MDX via Contentlayer2; sources in data/blog, data/pages, data/authors.
- Routing: Blog list/pagination in app/blog, posts at app/blog/[...slug], tags under app/tags, pages rendered from data/pages via app/<page>/page.tsx (e.g., app/opstart/page.tsx).
- Search: Local kbar using public/search.json.
- Analytics: Umami via NEXT_UMAMI_ID; CSP allows analytics.umami.is.

## Contentlayer specifics

- Slugs: computed from flattened path after first folder (e.g., data/blog/nested/post.mdx → slug "nested/post").
- Computed: readingTime, toc, path, filePath; tag counts written to app/tag-data.json.
- Plugins: remark-gfm, remark-math, pliny frontmatter/code-titles/img, github alert; rehype-slug, autolink (prepend icon), katex (+notranslate), citation (data/), prism-plus, minify.

## MDX components & patterns

- components/MDXComponents.tsx maps Image, a (CustomLink), pre (Prism), table (responsive wrapper); KaTeX supports $...$ and $$...$$.
- Use explicitly typed code fences (e.g., ```ts). Images via <Image src="/static/images/..." alt="..." />.
- Blog frontmatter:
  ***
  title: 'Post Title'
  date: '2024-01-09'
  tags: ['nextjs']
  draft: false
  summary: 'Short preview'
  ***

## Dev & build workflow

- Dev: yarn dev (Contentlayer watch via next-contentlayer2). Lint: yarn lint.
- Build: yarn build → Contentlayer compiles, writes app/tag-data.json + public/search.json (onSuccess), then scripts/postbuild.mjs generates RSS (public/feed.xml and per-tag feeds).
- Serve: yarn serve. Analyze: ANALYZE=true yarn analyze.
- Static export: set EXPORT=1 for output: 'export'; set BASE_PATH for subpath deploys; UNOPTIMIZED=1 disables next/image optimization.

## Key files to know

- contentlayer.config.ts: schema, plugins, search index + tag-data generation.
- data/siteMetadata.js: identity, search provider/path, analytics, stickyNav.
- next.config.js: CSP, basePath/output, images (remote picsum.photos), SVGR.
- scripts/rss.mjs: feed and per-tag RSS using app/tag-data.json and .contentlayer.

## Conventions & tips

- Draft posts (draft: true) are excluded in production; search index contains only published posts.
- Tags are slugified (github-slugger); routes for tags are under /tags/<tag> with pagination.
- Pages: data/pages/<slug>.mdx are rendered by matching app/<slug>/page.tsx loaders (see app/guidelines, app/kontakt, app/opstart).
- Package manager: yarn@3.6.1; scripts also work with npm/pnpm if preferred.

## Common tasks

- New post: add data/blog/<slug>.mdx with required frontmatter; preview with yarn dev; publish by setting draft: false.
- New page: add data/pages/<slug>.mdx and corresponding app/<slug>/page.tsx that loads from allPages.
- Update nav: data/headerNavLinks.ts. Site-wide config: data/siteMetadata.js.

Questions or gaps? If any workflow is unclear (e.g., export vs serve, search behavior), tell me what you’re trying to do and I’ll refine this guide.
