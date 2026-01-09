# AI Copilot Instructions for SMKID Server Lab Blog

This is a **Next.js 15 + Tailwind CSS + Contentlayer2 markdown blogging platform** customized for SMKID Server Lab documentation and technical posts.

## Project Architecture

### Core Tech Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Content**: Contentlayer2 (MDX-based content management)
- **Styling**: Tailwind CSS 4 with custom typography plugin
- **Search**: kbar (local search via `search.json`)
- **Analytics**: Umami (configured in siteMetadata.js)

### Content Pipeline

1. **Content Source**: Markdown files in `data/blog/` and `data/pages/` directories
2. **Contentlayer Processing**: `contentlayer.config.ts` transforms MDX → JSON with:
   - Automatic slug generation (from file path via GitHub slugger)
   - Reading time calculation
   - Table of contents extraction
   - Tag counting (written to `app/tag-data.json`)
3. **Build Integration**: `scripts/postbuild.mjs` generates RSS feed and search index
4. **Next.js Integration**: Generated types available via `contentlayer/generated` import

### File Structure Philosophy

- **Blog posts**: `data/blog/**/*.mdx` → routed as `/blog/[slug]` and `/blog/page/[page]`
- **Pages**: `data/pages/*.mdx` → routed as top-level pages (e.g., `opstart.mdx` → `/`)
- **Authors**: `data/authors/*.mdx` → author bio data
- **Configuration**: `data/siteMetadata.js` centralizes all site-wide config (URL, title, integrations)

## Essential Patterns & Conventions

### MDX Frontmatter Structure (Blog Posts)

```yaml
---
title: 'Post Title'
date: '2024-01-09'
tags: ['typescript', 'nextjs']
draft: false
summary: 'Brief description for preview'
---
```

- **Required**: title, date, tags, summary (draft optional, defaults false)
- **Tags**: Used for categorization; automatically slugified and counted
- **Draft posts**: Hidden in production unless explicitly viewed

### Route Structure

- **Blog listing**: `/blog` (paginated, 5 posts per page)
- **Tag filtering**: `/tags/[tag]` and `/tags/[tag]/page/[page]`
- **Single post**: `/blog/[slug]`
- **Static pages**: `/`, `/about`, `/guidelines`, `/kontakt` (routed via page layout)

### Component Integration

- **MDXComponents.tsx**: Registers custom renderers for MDX elements:
  - `Image`: Custom Next.js Image component
  - `a`: CustomLink component (handles internal/external links)
  - `pre`: Syntax-highlighted code blocks (via Prism)
  - `table`: TableWrapper for responsive tables
  - Math equations: KaTeX (rehype-katex) for `$...$` and `$$...$$`

### Post Layout Pattern

Posts use `PostLayout.tsx` which:

- Receives `CoreContent<Blog>` type (contentlayer-generated)
- Renders metadata (date, author, reading time, tags)
- Generates edit links to GitHub (via `siteMetadata.siteRepo`)
- Includes related post navigation (prev/next)
- Handles comments integration placeholder

## Build & Development Workflow

### Development

```bash
npm run dev        # Starts Next.js dev server + Contentlayer watching
npm run lint       # Runs ESLint on app, components, layouts, scripts
```

### Production Build

```bash
npm run build       # Contentlayer compiles → next build → postbuild.mjs generates RSS + search.json
npm run serve       # Serves static export (next start)
npm run analyze     # Bundle analysis with ANALYZE=true
```

### Key Build Steps

1. Contentlayer compiles all MDX to JSON with computed fields
2. `postbuild.mjs` runs after build to:
   - Generate `public/feed.xml` (RSS from all blog posts)
   - Generate `public/search.json` (kbar search index)

## Content-Specific Patterns

### Math & Science Content

- **Inline math**: Wrap in `$...$` (rendered by KaTeX)
- **Block math**: Use `$$...$$` syntax
- **Supported LaTeX**: Full KaTeX syntax (see [KaTeX docs](https://katex.org/docs/supported.html))

### Code Blocks & Syntax Highlighting

- Prism Plus handles syntax highlighting via MDX processing
- Language must be specified: ` ```typescript `
- Automatic line number generation available

### Images in Posts

- Use custom `Image` component for Next.js optimization
- MDX: `<Image src="/static/images/..." alt="..." />`
- Supports responsive sizing via Tailwind

## Configuration & Integration Points

### Site Metadata (`data/siteMetadata.js`)

All site-wide settings centralized here:

- **Site identity**: title, author, description, siteUrl
- **Navigation**: Via `data/headerNavLinks.ts`
- **Search**: kbar provider + searchDocumentsPath
- **Analytics**: Umami (via `NEXT_UMAMI_ID` env var)
- **Projects**: `data/projectsData.ts` for `/projects` page

### Environment Variables

- `NEXT_UMAMI_ID`: Analytics tracking ID
- `BASE_PATH`: Optional path prefix for deployments
- `ANALYZE`: Set to `true` to enable bundle analysis

### Search Implementation

- **Provider**: kbar (lightweight, local-first)
- **Index generation**: `createSearchIndex()` in contentlayer.config.ts
- **Search data**: Generated at `public/search.json` during build
- **Indexing**: All published blog posts via `allCoreContent(sortPosts(...))`

## Common Development Tasks

### Adding a New Blog Post

1. Create `data/blog/your-slug.mdx`
2. Add frontmatter with title, date, tags, summary
3. Write MDX content
4. Run `npm run dev` to see live preview
5. Set `draft: false` to publish

### Adding a New Page

1. Create route in `app/your-page/page.tsx`
2. For markdown-based content, create `data/pages/your-page.mdx`
3. Import and use `PostLayout` or custom layout
4. Add nav link in `data/headerNavLinks.ts` if needed

### Updating Site Metadata

- Edit `data/siteMetadata.js`
- Changes apply across site (title, URL, analytics, etc.)
- Rebuild to regenerate RSS and search index

## Performance & SEO Considerations

- **Metadata**: Auto-generated via `genPageMetadata()` from siteMetadata
- **RSS Feed**: Generated at build time; declare in canonical alternates
- **Search**: Local JSON index (no external API calls)
- **Images**: Optimized via Next.js Image component with LQIP
- **Code splitting**: Contentlayer enables incremental static generation
