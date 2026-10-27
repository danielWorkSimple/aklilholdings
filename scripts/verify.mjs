// Checks the built site in build/client (run `npm run build` first). It fails
// if a page lacks what search engines and AI crawlers read without running
// JavaScript, or if robots.txt, sitemap.xml, llms.txt or 404.html is wrong.
import { access, readdir, readFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const OUT = join(ROOT, 'build', 'client')
const SITE = 'https://aklilholdings.com'

const failures = []
const check = (ok, message) => {
  if (!ok) failures.push(message)
}

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(p)))
    else out.push(p)
  }
  return out
}

const exists = (p) => access(p).then(() => true, () => false)
const decode = (s) =>
  s
    ?.replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
const first = (html, re) => decode(html.match(re)?.[1])
const textOf = (html) =>
  decode(
    html
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim()

if (!(await exists(OUT))) {
  console.error('verify: build/client is missing. Run `npm run build` first.')
  process.exit(1)
}

const files = await walk(OUT)
const rel = (f) => relative(OUT, f).split('\\').join('/')
const pageFiles = files.filter((f) => rel(f).endsWith('index.html'))
const urlOf = (f) => `${SITE}/${rel(f).replace(/\/?index\.html$/, '')}`
const pages = []

for (const file of pageFiles) {
  const html = await readFile(file, 'utf8')
  const url = urlOf(file)
  const where = rel(file)

  const title = first(html, /<title>([^<]*)<\/title>/)
  const description = first(html, /<meta name="description" content="([^"]*)"/)
  check(title && title.length >= 10 && title.length <= 60, `${where}: title missing or over 60 characters (${title?.length}): ${title}`)
  check(
    description && description.length >= 50 && description.length <= 160,
    `${where}: description missing or not 50 to 160 characters (${description?.length})`,
  )
  check(first(html, /<link rel="canonical" href="([^"]*)"/) === url, `${where}: canonical is not ${url}`)
  check(first(html, /<meta property="og:url" content="([^"]*)"/) === url, `${where}: og:url is not ${url}`)
  check(first(html, /<meta property="og:title" content="([^"]*)"/) === title, `${where}: og:title differs from the title`)
  const ogImage = first(html, /<meta property="og:image" content="([^"]*)"/)
  check(ogImage?.startsWith(`${SITE}/`), `${where}: og:image missing or not absolute`)
  if (ogImage?.startsWith(`${SITE}/`)) {
    check(await exists(join(OUT, new URL(ogImage).pathname)), `${where}: og:image file missing: ${ogImage}`)
  }
  check(!/<meta name="robots" content="[^"]*noindex/.test(html), `${where}: page is marked noindex`)

  const h1s = html.match(/<h1[\s>][\s\S]*?<\/h1>/g) ?? []
  check(h1s.length === 1, `${where}: expected one h1, found ${h1s.length}`)
  check(h1s.length > 0 && textOf(h1s[0]).length > 0, `${where}: empty h1`)

  const main = html.match(/<main[\s>][\s\S]*<\/main>/)?.[0] ?? ''
  const text = textOf(main)
  check(text.split(' ').length >= 40, `${where}: under 40 words of text in <main> (${text.split(' ').length})`)
  check(/Ethiopia/.test(text), `${where}: text never says where (Ethiopia)`)
  check(!text.includes('—'), `${where}: em dash in page text`)

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  check(blocks.length === 1, `${where}: expected one JSON-LD block, found ${blocks.length}`)
  let graph = []
  try {
    graph = JSON.parse(blocks[0]?.[1] ?? '{}')['@graph'] ?? []
  } catch {
    check(false, `${where}: JSON-LD does not parse`)
  }
  const types = graph.map((n) => n['@type']).flat()
  check(types.includes('Organization') && types.includes('WebSite'), `${where}: JSON-LD lacks Organization or WebSite`)
  const org = graph.find((n) => n['@type'] === 'Organization')
  check(org?.founder?.name === 'Mekdes Aklilu', `${where}: Organization has no founder`)
  if (url === `${SITE}/about`) {
    const person = graph.find((n) => n['@type'] === 'Person')
    check(person?.name === 'Mekdes Aklilu' && person?.alternateName, `${where}: About lacks the Person node`)
  }

  pages.push({ url, title, description })
}

const unique = (key) => new Set(pages.map((p) => p[key])).size === pages.length
check(pages.length >= 5, `expected at least 5 built pages, found ${pages.length}`)
check(unique('title'), 'two pages share a title')
check(unique('description'), 'two pages share a description')

// robots.txt
const robots = (await exists(join(OUT, 'robots.txt'))) ? await readFile(join(OUT, 'robots.txt'), 'utf8') : ''
check(/^User-agent: \*\nAllow: \/$/m.test(robots), 'robots.txt missing or does not allow all crawlers')
check(!/^Disallow: \/\s*$/m.test(robots), 'robots.txt blocks the whole site')
check(robots.includes(`Sitemap: ${SITE}/sitemap.xml`), 'robots.txt has no Sitemap line')

// sitemap.xml lists exactly the built pages
const sitemap = (await exists(join(OUT, 'sitemap.xml'))) ? await readFile(join(OUT, 'sitemap.xml'), 'utf8') : ''
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const built = pages.map((p) => p.url)
check(sitemap.startsWith('<?xml'), 'sitemap.xml missing or not XML')
check(new Set(locs).size === locs.length, 'sitemap.xml has duplicate URLs')
for (const url of built) check(locs.includes(url), `sitemap.xml misses ${url}`)
for (const url of locs) check(built.includes(url), `sitemap.xml lists ${url}, which has no built page`)

// llms.txt
const llms = (await exists(join(OUT, 'llms.txt'))) ? await readFile(join(OUT, 'llms.txt'), 'utf8') : ''
check(llms.startsWith('# Aklil Holdings\n'), 'llms.txt missing or has no title')
for (const url of built) check(llms.includes(`(${url})`), `llms.txt does not link ${url}`)

// 404 page
const notFound = (await exists(join(OUT, '404.html'))) ? await readFile(join(OUT, '404.html'), 'utf8') : ''
check(notFound.includes('<h1'), '404.html missing or has no h1')
check(/<meta name="robots" content="noindex/.test(notFound), '404.html is not noindex')
check(!notFound.includes('rel="canonical"'), '404.html has a canonical URL')

// Leftovers that would turn unknown URLs into 200 pages or clutter the site
check(!(await exists(join(OUT, '__spa-fallback.html'))), '__spa-fallback.html is still in the build')
check(!files.some((f) => f.endsWith('.data')), '.data files are still in the build')

// Link preview image is a 1200x630 PNG
const png = (await exists(join(OUT, 'images', 'og-default.png'))) ? await readFile(join(OUT, 'images', 'og-default.png')) : null
check(png && png.readUInt32BE(16) === 1200 && png.readUInt32BE(20) === 630, 'images/og-default.png missing or not 1200x630')

// Hosting: no catch-all rewrite (unknown URLs must get 404.html with a 404)
const firebase = JSON.parse(await readFile(join(ROOT, 'firebase.json'), 'utf8')).hosting
check(firebase.public === 'build/client', 'firebase.json does not serve build/client')
check(!(firebase.rewrites ?? []).some((r) => r.source === '**'), 'firebase.json rewrites every URL, so nothing returns 404')

if (failures.length > 0) {
  console.error(`verify: ${failures.length} problem(s)\n${failures.map((f) => `  - ${f}`).join('\n')}`)
  process.exit(1)
}
console.log(`verify: ${pages.length} pages, robots.txt, sitemap.xml, llms.txt, 404.html and og image OK`)
for (const p of pages) console.log(`  ${p.url.padEnd(38)} ${p.title}`)
