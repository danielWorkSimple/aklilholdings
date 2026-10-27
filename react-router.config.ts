import type { Config } from '@react-router/dev/config'
import { readdir, rename, rm } from 'node:fs/promises'
import path from 'node:path'

// Every route in src/routes.ts is prerendered to static HTML (or a text file)
// at build time, so search engines and AI crawlers get each page's full
// content and head tags without running JavaScript. The browser then hydrates
// the page and navigation works as a single-page app.
export default {
  appDirectory: 'src',
  ssr: false,
  // "/404" renders the catch-all NotFound route; buildEnd turns it into 404.html.
  prerender: ({ getStaticPaths }) => [...getStaticPaths(), '/404'],
  async buildEnd({ reactRouterConfig }) {
    const client = path.resolve(reactRouterConfig.buildDirectory, 'client')
    // Firebase serves 404.html, with status 404, for any URL that has no file.
    await rename(path.join(client, '404', 'index.html'), path.join(client, '404.html'))
    await rm(path.join(client, '404'), { recursive: true })
    // The app-shell fallback would turn unknown URLs into empty 200 pages.
    await rm(path.join(client, '__spa-fallback.html'), { force: true })
    // Data files for the text routes; only client-side fetches would read them.
    for (const file of await readdir(client)) {
      if (file.endsWith('.data')) await rm(path.join(client, file))
    }
  },
} satisfies Config
