import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
}

const BASE_URL = 'https://aklilholdings.com'
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-default.png`

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE
}: SEOProps) {
  const fullTitle = title === 'Home'
    ? 'Aklil Holdings - Building Ethiopia\'s Future Through Strategic Investment'
    : `${title} | Aklil Holdings`

  const canonicalUrl = canonical || BASE_URL

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Aklil Holdings" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
