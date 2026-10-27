import { achievements, companies, education, otherInvestments, sectorOrder, type CompanyStatus } from '@/data/portfolio'
import { absolute, company, founder, press, sitemapPages, stats } from '@/data/site'

const statusLabel: Record<CompanyStatus, string> = {
  operational: 'Operational',
  'under-construction': 'Under construction',
  'coming-soon': 'Coming soon',
}

const holdingsBySector = () =>
  sectorOrder
    .map((sector) => {
      const list = companies.filter((c) => c.sector === sector)
      if (list.length === 0) return ''
      const lines = list.map(
        (c) =>
          `- ${c.name}. Role: ${c.role}. Status: ${statusLabel[c.status]}.${c.description ? ` ${c.description}` : ''}`,
      )
      return `### ${sector}\n\n${lines.join('\n')}\n`
    })
    .filter(Boolean)
    .join('\n')

// llms.txt (https://llmstxt.org): a plain summary for AI assistants, built
// from the same facts as the pages. Prerendered to build/client/llms.txt.
export function loader() {
  const body = `# ${company.name}

> ${company.summary}

Key facts:
- Founder and chairman: ${founder.displayName} (Amharic: ${founder.amharicName}).
- ${founder.bio[0]}
- He is a co-founder and shareholder of Bank of Abyssinia and Nile Insurance, and a former chairman of the board of Nile Insurance.
- His education: ${education.map((e) => `${e.degree}, ${e.institution}`).join('; ')}.
- At a glance: ${stats.map((s) => `${s.value} ${s.label.toLowerCase()}`).join(', ')}.
- Based in: ${company.city}, ${company.country}.
- Contact: ${company.email}

## Holdings by sector

Each entry gives the role shown for it on the portfolio page.

${holdingsBySector()}
## Other investments

${otherInvestments.map((o) => o.name).join(', ')}.

## Milestones

${achievements.map((a) => `- ${a.year}: ${a.title}. ${a.description}`).join('\n')}

## Pages

${sitemapPages.map((p) => `- [${p.name}](${absolute(p.path)}): ${p.description}`).join('\n')}

## In the press

${press.map((p) => `- [${p.headline}](${p.url}): ${p.publisher}, ${p.dateLabel}. ${p.note}`).join('\n')}
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
