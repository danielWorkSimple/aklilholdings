import type { MetaDescriptor } from 'react-router'
import { absolute, company, notFoundPage, OG_IMAGE, type Page } from '@/data/site'

/**
 * Head tags for a page: title, description, canonical URL, link previews and
 * structured data. Pages are prerendered, so these are in the raw HTML that
 * crawlers read without running JavaScript.
 */
export function seo(page: Page, jsonLd?: Record<string, unknown>): MetaDescriptor[] {
  const url = absolute(page.path)
  const image = absolute(OG_IMAGE.path)
  return [
    { title: page.title },
    { name: 'description', content: page.description },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: company.name },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: String(OG_IMAGE.width) },
    { property: 'og:image:height', content: String(OG_IMAGE.height) },
    { property: 'og:image:alt', content: OG_IMAGE.alt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: image },
    ...(jsonLd ? [{ 'script:ld+json': jsonLd }] : []),
  ]
}

/** The 404 page: never indexed, no canonical URL. */
export function notFoundMeta(): MetaDescriptor[] {
  return [
    { title: notFoundPage.title },
    { name: 'description', content: notFoundPage.description },
    { name: 'robots', content: 'noindex' },
  ]
}
