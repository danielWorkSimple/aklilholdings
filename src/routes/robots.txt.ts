import { SITE_URL } from '@/data/site'

// Every crawler is welcome, AI assistants included (GPTBot, ClaudeBot,
// PerplexityBot, Google-Extended): being found and quoted is the goal.
// Prerendered to build/client/robots.txt at build time.
export function loader() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
