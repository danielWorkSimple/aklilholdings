import { absolute, sitemapPages, UPDATED } from '@/data/site'

// Every indexable page, from `pages` in src/data/site.ts. Prerendered to
// build/client/sitemap.xml; `npm run verify` checks it against the built pages.
export function loader() {
  const urls = sitemapPages
    .map((p) => `  <url><loc>${absolute(p.path)}</loc><lastmod>${UPDATED}</lastmod></url>`)
    .join('\n')
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  )
}
