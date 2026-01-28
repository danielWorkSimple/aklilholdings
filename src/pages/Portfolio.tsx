import CompanyCard from '@/components/CompanyCard'
import SEO from '@/components/SEO'
import { companies, sectors } from '@/data/portfolio'

export default function Portfolio() {
  return (
    <main className="pt-20">
      <SEO
        title="Portfolio"
        description="Explore Aklil Holdings' investment portfolio across banking, insurance, hospitality, technology, and scientific instruments in Ethiopia."
        canonical="https://aklilholdings.com/portfolio"
      />
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-navy to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              Investment <span className="text-gold">Portfolio</span>
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              A diversified portfolio spanning banking, insurance, hospitality, technology, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-semibold text-white mb-8">
            Key Investments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <CompanyCard key={index} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 bg-dark-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-semibold text-white mb-8 text-center">
            Sectors of Investment
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-navy border border-navy-light text-text-light text-sm hover:border-gold hover:text-gold transition-colors cursor-default"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
