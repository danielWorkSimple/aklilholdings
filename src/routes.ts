import { type RouteConfig, index, route } from '@react-router/dev/routes'

// Every route without a parameter is prerendered at build time
// (react-router.config.ts). A new page also needs an entry in `pages` in
// src/data/site.ts for its title, description, the sitemap and llms.txt.
export default [
  index('pages/Home.tsx'),
  route('about', 'pages/About.tsx'),
  route('portfolio', 'pages/Portfolio.tsx'),
  route('achievements', 'pages/Achievements.tsx'),
  route('contact', 'pages/Contact.tsx'),
  route('robots.txt', 'routes/robots.txt.ts'),
  route('sitemap.xml', 'routes/sitemap.xml.ts'),
  route('llms.txt', 'routes/llms.txt.ts'),
  route('*', 'pages/NotFound.tsx'),
] satisfies RouteConfig
