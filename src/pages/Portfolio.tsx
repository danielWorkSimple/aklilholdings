import { GraduationCap, Truck, Smartphone, HardHat, Ship, Leaf } from 'lucide-react'
import CompanyCard from '@/components/CompanyCard'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/AnimatedSection'
import { companies, sectorOrder, type Company } from '@/data/portfolio'

function getCompaniesBySector(): Record<string, Company[]> {
  const grouped: Record<string, Company[]> = {}
  for (const sector of sectorOrder) {
    const sectorCompanies = companies.filter(c => c.sector === sector)
    if (sectorCompanies.length > 0) {
      grouped[sector] = sectorCompanies
    }
  }
  return grouped
}

const companiesBySector = getCompaniesBySector()

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-gold">{value}</p>
      <p className="text-text-muted text-sm">{label}</p>
    </div>
  )
}

const otherInvestments = [
  { name: 'Education & Training', icon: GraduationCap, description: 'Educational institutions and vocational training centers' },
  { name: 'Logistics & Supply Chain', icon: Truck, description: 'Transportation, warehousing, and distribution networks' },
  { name: 'Fintech', icon: Smartphone, description: 'Digital financial services and payment solutions' },
  { name: 'Construction', icon: HardHat, description: 'Building and infrastructure development projects' },
  { name: 'Import/Export', icon: Ship, description: 'International trade and commodity trading' },
  { name: 'Agriculture', icon: Leaf, description: 'Farming operations and agricultural supply chains' }
]

export default function Portfolio() {

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
              A diversified portfolio spanning financial services, food production, hospitality, real estate, healthcare, technology, and beyond.
            </p>
          </AnimatedSection>

          {/* Stats Summary */}
          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <StatItem value="13" label="Group Companies" />
              <StatItem value="30+" label="Total Investments" />
              <StatItem value="10+" label="Sectors" />
              <StatItem value="30+" label="Years Experience" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Holdings Header */}
      <section className="pt-16 pb-8 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-2">
              Key <span className="text-gold">Holdings</span>
            </h2>
            <p className="text-text-muted">Our flagship group companies across strategic sectors</p>
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

      {/* Other Investments Section */}
      <section className="py-16 bg-dark-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-white mb-2">
              Other <span className="text-gold">Investments</span>
            </h2>
            <p className="text-text-muted">Additional sectors where we maintain strategic investments</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherInvestments.map((investment, index) => (
              <AnimatedSection
                key={investment.name}
                animation="scale"
                delay={index * 0.05}
              >
                <div className="bg-dark-bg rounded-xl p-4 border border-navy-light text-center card-hover h-full">
                  <div className="w-10 h-10 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-3">
                    <investment.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-white">{investment.name}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
