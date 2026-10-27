// Facts for search engines and AI assistants. Page titles and descriptions,
// structured data (JSON-LD), llms.txt and the sitemap read from here and from
// portfolio.ts, so a fact changes in one place.
//
// Rules:
// - Only facts already on the site. No invented figures or claims.
// - Describe each holding by its role in portfolio.ts. Investments are not subsidiaries.
// - Mr. Mekdes's Nile Insurance chairmanship is in the past. Never state it as current.
// - sameAs lists only profiles Daniel has confirmed.

export const SITE_URL = 'https://aklilholdings.com'

/** lastmod in the sitemap. Change it when page content changes. */
export const UPDATED = '2026-10-27'

/** Full URL for a site path. The home page is the bare domain with a slash. */
export const absolute = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`)

/** Link preview image (WhatsApp, LinkedIn, Telegram). Source: scripts/og-image.html. */
export const OG_IMAGE = {
  path: '/images/og-default.png',
  width: 1200,
  height: 630,
  alt: "Aklil Holdings: Building Ethiopia's Future Through Strategic Investments",
}

export const company = {
  name: 'Aklil Holdings',
  summary:
    'Aklil Holdings is a diversified investment group based in Addis Ababa, Ethiopia, founded and chaired by Mr. Mekdes Aklilu. Its companies and investments span financial services, food production, trading, garment manufacturing, hospitality, real estate, healthcare and technology.',
  email: 'info@aklilholdings.com',
  city: 'Addis Ababa',
  country: 'Ethiopia',
  countryCode: 'ET',
  /** Official profiles elsewhere (LinkedIn and so on). Only ones Daniel has confirmed. */
  sameAs: [] as string[],
}

export const founder = {
  name: 'Mekdes Aklilu',
  displayName: 'Mr. Mekdes Aklilu',
  amharicName: 'መቅደስ አክሊሉ',
  role: 'Founder & Chairman',
  bio: [
    'Mr. Mekdes Aklilu is a distinguished Ethiopian businessman and investor with extensive experience spanning private and public institutional administration, education, insurance, banking, and international trade.',
    "Throughout his career, he has demonstrated exceptional leadership by chairing boards of leading corporate institutions in Ethiopia. His vision and strategic acumen have been instrumental in establishing and growing some of the country's most significant financial and commercial enterprises. He is a former chairman of the board of Nile Insurance.",
    "As a founding shareholder of Bank of Abyssinia and Nile Insurance, Mr. Mekdes has played a pivotal role in modernizing Ethiopia's financial services sector. His investments span across banking, insurance, hospitality, technology, agro-processing, and industrial trading, reflecting a diversified approach to building sustainable businesses.",
  ],
  /** Official profiles elsewhere. Only ones Daniel has confirmed. */
  sameAs: [] as string[],
}

/** Shown on the home page stats bar and the portfolio page. */
export const stats = [
  { value: '11', label: 'Group Companies' },
  { value: '30+', label: 'Total Investments' },
  { value: '10+', label: 'Sectors' },
  { value: '30+', label: 'Years Experience' },
]

/** Press coverage of Mr. Mekdes, listed on the About page. */
export const press = [
  {
    publisher: 'The Reporter',
    date: '2018-12-22',
    dateLabel: '22 December 2018',
    headline: 'Brand Name Hotel “The Hub By Westfield” Opens Its Doors',
    url: 'https://www.thereporterethiopia.com/7078/',
    note: 'The opening of The Hub Hotel in Addis Ababa.',
  },
  {
    publisher: 'Addis Fortune',
    date: '2019-12-21',
    dateLabel: '21 December 2019',
    headline: 'Nile Bounces Back to Steady Growth',
    url: 'https://addisfortune.news/nile-bounces-back-to-steady-growth',
    note: 'Quotes Mr. Mekdes, then chairman of the board of Nile Insurance.',
  },
  {
    publisher: 'Addis Fortune',
    date: '2020-11-21',
    dateLabel: '21 November 2020',
    headline: 'Nile Insurance Registers Modest Growth',
    url: 'https://addisfortune.news/nile-insurance-registers-modest-growth',
    note: "Mr. Mekdes, then chairman of the board, addresses Nile Insurance's general assembly.",
  },
]

export type Page = {
  path: string
  /** Short name for breadcrumbs and llms.txt links. */
  name: string
  /** About 60 characters at most. */
  title: string
  /** About 155 characters at most. */
  description: string
}

/**
 * Every indexable page. A new page needs an entry here and a route in
 * src/routes.ts; `npm run verify` fails if the two drift apart.
 */
export const pages = {
  home: {
    path: '/',
    name: 'Home',
    title: 'Aklil Holdings | Diversified Investment Group in Ethiopia',
    description:
      'Aklil Holdings, led by Mr. Mekdes Aklilu, is an investment group in Addis Ababa, Ethiopia, with holdings in banking, insurance, hospitality and industry.',
  },
  about: {
    path: '/about',
    name: 'About',
    title: 'Mekdes Aklilu, Founder and Chairman | Aklil Holdings',
    description:
      'Mr. Mekdes Aklilu, founder and chairman of Aklil Holdings: Ethiopian businessman and investor, and co-founder of Bank of Abyssinia and Nile Insurance.',
  },
  portfolio: {
    path: '/portfolio',
    name: 'Portfolio',
    title: 'Portfolio: Companies and Investments | Aklil Holdings',
    description:
      'Aklil Holdings companies and investments in Ethiopia by sector, including Bank of Abyssinia, Nile Insurance, The Hub Hotel, Menave Industrial and WebSprix.',
  },
  achievements: {
    path: '/achievements',
    name: 'Achievements',
    title: 'Achievements and Milestones | Aklil Holdings',
    description:
      'Milestones of Mr. Mekdes Aklilu and Aklil Holdings: co-founding Nile Insurance in 1995 and Bank of Abyssinia in 1996, then hospitality and technology.',
  },
  contact: {
    path: '/contact',
    name: 'Contact',
    title: 'Contact Aklil Holdings | Addis Ababa, Ethiopia',
    description:
      'Contact Aklil Holdings in Addis Ababa, Ethiopia, about investment opportunities and partnerships. Email info@aklilholdings.com.',
  },
} satisfies Record<string, Page>

export const sitemapPages: Page[] = Object.values(pages)

export const notFoundPage = {
  title: 'Page Not Found | Aklil Holdings',
  description: "The page you're looking for doesn't exist. Return to the Aklil Holdings home page.",
}
