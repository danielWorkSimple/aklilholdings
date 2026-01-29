import { useMemo } from 'react'
import CompanyCard from '@/components/CompanyCard'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/AnimatedSection'
import { companies, sectorOrder } from '@/data/portfolio'

export default function Portfolio() {
  const companiesBySector = useMemo(() => {
    const grouped: Record<string, typeof companies> = {}
    for (const sector of sectorOrder) {
      const sectorCompanies = companies.filter(c => c.sector === sector)
      if (sectorCompanies.length > 0) {
        grouped[sector] = sectorCompanies
      }
    }
    return grouped
  }, [])

  return (
    <main className="pt-20">
      <SEO
        title="Portfolio"
        description="Explore Aklil Holdings' investment portfolio across food production, trading, hospitality, real estate, healthcare, financial services, and technology in Ethiopia."
        canonical="https://aklilholdings.com/portfolio"
      />
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-navy to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              Investment <span className="text-gold">Portfolio</span>
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              A diversified portfolio of 11 companies spanning 8 sectors including food production, trading, hospitality, real estate, healthcare, and financial services.
            </p>
          </AnimatedSection>

          {/* Stats Summary */}
          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-gold">11</p>
                <p className="text-text-muted text-sm">Companies</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold">8</p>
                <p className="text-text-muted text-sm">Sectors</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold">30+</p>
                <p className="text-text-muted text-sm">Years Experience</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Companies by Sector */}
      {sectorOrder.map((sector, sectorIndex) => {
        const sectorCompanies = companiesBySector[sector]
        if (!sectorCompanies) return null

        return (
          <section
            key={sector}
            className={sectorIndex % 2 === 0 ? "py-16 bg-dark-bg" : "py-16 bg-dark-bg-light"}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <h2 className="text-2xl font-heading font-semibold text-white mb-8 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gold rounded-full"></span>
                  {sector}
                </h2>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectorCompanies.map((company, index) => (
                  <AnimatedSection
                    key={company.name}
                    animation="scale"
                    delay={index * 0.1}
                  >
                    <CompanyCard company={company} showSector={false} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </main>
  )
}
