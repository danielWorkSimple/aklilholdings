// schema.org structured data. Search engines and AI answer engines read it to
// understand who Aklil Holdings is, who leads it and how the pages relate.
// Built only from facts in src/data/site.ts and src/data/portfolio.ts.
import { companies, education, sectorOrder } from '@/data/portfolio'
import { absolute, company, founder, OG_IMAGE, pages, press, SITE_URL, type Page } from '@/data/site'

const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const PERSON_ID = `${absolute(pages.about.path)}#person`
const HOLDINGS_ID = `${absolute(pages.portfolio.path)}#holdings`

const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: company.name,
  url: absolute('/'),
  description: company.summary,
  email: company.email,
  image: absolute(OG_IMAGE.path),
  address: {
    '@type': 'PostalAddress',
    addressLocality: company.city,
    addressCountry: company.countryCode,
  },
  areaServed: { '@type': 'Country', name: company.country },
  founder: { '@type': 'Person', '@id': PERSON_ID, name: founder.name, url: absolute(pages.about.path) },
  ...(company.sameAs.length > 0 && { sameAs: company.sameAs }),
}

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: absolute('/'),
  name: company.name,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
}

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: founder.name,
  alternateName: founder.amharicName,
  honorificPrefix: 'Mr.',
  jobTitle: founder.role,
  worksFor: { '@id': ORG_ID },
  nationality: { '@type': 'Country', name: company.country },
  description: founder.bio[0],
  url: absolute(pages.about.path),
  alumniOf: education.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.institution })),
  subjectOf: press.map((p) => ({
    '@type': 'NewsArticle',
    headline: p.headline,
    url: p.url,
    datePublished: p.date,
    publisher: { '@type': 'Organization', name: p.publisher },
  })),
  ...(founder.sameAs.length > 0 && { sameAs: founder.sameAs }),
}

// Each holding with its role, as shown on the portfolio page. A list, not a
// claim that the companies are subsidiaries.
const holdings = {
  '@type': 'ItemList',
  '@id': HOLDINGS_ID,
  name: `Key holdings of ${company.name}`,
  itemListElement: sectorOrder
    .flatMap((sector) => companies.filter((c) => c.sector === sector))
    .map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      description: `Role: ${c.role}. Sector: ${c.sector}.${c.description ? ` ${c.description}` : ''}`,
    })),
}

const webPage = (page: Page, type = 'WebPage', extra: Record<string, unknown> = {}) => ({
  '@type': type,
  '@id': `${absolute(page.path)}#webpage`,
  url: absolute(page.path),
  name: page.title,
  description: page.description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  inLanguage: 'en',
  ...extra,
})

const breadcrumb = (page: Page) => ({
  '@type': 'BreadcrumbList',
  '@id': `${absolute(page.path)}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: pages.home.name, item: absolute(pages.home.path) },
    { '@type': 'ListItem', position: 2, name: page.name, item: absolute(page.path) },
  ],
})

const graph = (...nodes: Record<string, unknown>[]) => ({
  '@context': 'https://schema.org',
  '@graph': [organization, website, ...nodes],
})

export const homeGraph = () => graph(webPage(pages.home))

export const aboutGraph = () =>
  graph(webPage(pages.about, 'AboutPage', { mainEntity: { '@id': PERSON_ID } }), person, breadcrumb(pages.about))

export const portfolioGraph = () =>
  graph(
    webPage(pages.portfolio, 'CollectionPage', { mainEntity: { '@id': HOLDINGS_ID } }),
    holdings,
    breadcrumb(pages.portfolio),
  )

export const achievementsGraph = () => graph(webPage(pages.achievements), breadcrumb(pages.achievements))

export const contactGraph = () => graph(webPage(pages.contact, 'ContactPage'), breadcrumb(pages.contact))
