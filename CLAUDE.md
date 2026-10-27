# Aklil Holdings Website

## Project Overview
Corporate website for Aklil Holdings, a diversified investment company led by Mr. Mekdes Aklilu with 30+ years of business experience in Ethiopia.

## Tech Stack
- React 19 + TypeScript + Vite
- Tailwind CSS + shadcn/ui components
- React Router 7 in framework mode: every page is prerendered to static HTML at build time (`ssr: false`), then hydrates in the browser
- Firebase Hosting for deployment

## Key Stats (as of Jan 2025)
- 11 Group Companies (featured on portfolio page)
- 30+ Total Investments
- 10+ Sectors
- 30+ Years Experience

## Portfolio Structure
- **Key Holdings**: 11 detailed companies grouped by sector with status badges (Operational, Under Construction, Coming Soon)
- **Other Investments**: Additional sectors shown as a simple grid (Education, Logistics, Fintech, Construction, Import/Export, Agriculture)

## Deployment
- **CI/CD**: GitHub Actions runs lint, build and `npm run verify`, then deploys `build/client` to Firebase on push to `main`
- **Live URL**: https://aklilholdings.com
- **Firebase Project**: aklil-holdings

## Important Notes
- Company data is in `src/data/portfolio.ts` - update there to add/modify companies
- Sector order is defined in `sectorOrder` array - Financial Services is first by design

## Common Tasks
- Add a company: Edit `src/data/portfolio.ts`, add to `companies` array
- Change sector order: Edit `sectorOrder` in `src/data/portfolio.ts`
- Update stats: Edit `stats` in `src/data/site.ts` (used by the home stats bar, the portfolio page and llms.txt)
- Change a page title or description: Edit `pages` in `src/data/site.ts`
- Preview the production build locally: `npm run build && npm run preview` (Firebase hosting emulator on http://127.0.0.1:5050, same 404 and headers as live)

## Search and AI
- Pages are prerendered, so crawlers that don't run JavaScript (GPTBot, ClaudeBot, PerplexityBot, partly Bing) get each page's own title, description, canonical URL, link preview tags, JSON-LD and full text.
- Facts live in `src/data/site.ts` (page titles and descriptions, company facts, founder bio, stats, press) and `src/data/portfolio.ts` (companies, milestones). Head tags come from `src/lib/seo.ts`, structured data (Organization, WebSite, Person) from `src/lib/jsonld.ts`.
- Generated at build time from the same data: `/robots.txt` (all crawlers allowed, AI included), `/sitemap.xml` and `/llms.txt` (routes in `src/routes/`), plus `404.html`, which Firebase serves with status 404 for unknown URLs (there is no catch-all rewrite).
- Add a page: create it in `src/pages/` with a `meta` export (`seo(pages.x, ...)`), add it to `src/routes.ts` and to `pages` in `src/data/site.ts`, then `npm run build && npm run verify`. Bump `UPDATED` in `site.ts` when content changes (sitemap lastmod).
- `npm run verify` fails if a built page lacks its title, description, canonical, one h1 or text, if robots.txt, sitemap.xml, llms.txt or 404.html is missing, or if the sitemap doesn't match the built pages.
- Link preview image: `public/images/og-default.png`, made from `scripts/og-image.html` (command in that file).
- Rules: only facts already on the site; describe holdings by their role in portfolio.ts (investments are not subsidiaries); Mr. Mekdes's Nile Insurance chairmanship is in the past; `sameAs` only for profiles Daniel confirms.
- Submitted 27 Oct 2026: Google Search Console (domain property `sc-domain:aklilholdings.com`, daniadane@gmail.com, which is /u/1/ in Daniel's Chrome): sitemap submitted (Success, 5 pages) and indexing requested for all five pages. Bing Webmaster Tools (`https://aklilholdings.com/`, verified): sitemap and all five URLs submitted. Bing's index also feeds Copilot and other AI assistants.

## Domain and email DNS (Namecheap, account daniadane)
- `aklilholdings.com`: A `@` 199.36.158.100 (Firebase). `www`: CNAME to `aklil-holdings.web.app`, set up in Firebase Hosting as a redirect to aklilholdings.com (27 Oct 2026). The Firebase project is under daniel@garrilogistics.com.
- Email is Google Workspace only: MX via Namecheap's Gmail setting, SPF `v=spf1 include:_spf.google.com ~all`, DKIM `google._domainkey`, DMARC `v=DMARC1; p=quarantine` (since 27 Oct 2026, no report emails). Before another service sends as @aklilholdings.com, add its SPF include and DKIM record first, or its mail lands in spam.
