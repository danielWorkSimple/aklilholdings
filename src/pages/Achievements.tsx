import MilestoneCard from '@/components/MilestoneCard'
import SEO from '@/components/SEO'
import { achievements } from '@/data/portfolio'

export default function Achievements() {
  return (
    <main className="pt-20">
      <SEO
        title="Achievements"
        description="Four decades of milestones: from founding Bank of Abyssinia and Nile Insurance to building a diversified portfolio across 10+ sectors in Ethiopia."
        canonical="https://aklilholdings.com/achievements"
      />
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-navy to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              Our <span className="text-gold">Journey</span>
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              Four decades of milestones, building Ethiopia's economic future one investment at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-semibold text-white mb-12 text-center">
            Key Milestones
          </h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <MilestoneCard key={index} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-dark-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-white mb-6">
            A Legacy of Excellence
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            From founding pioneering financial institutions to diversifying across multiple sectors,
            Aklil Holdings continues to contribute to Ethiopia's economic development. Our journey
            is defined by strategic vision, sustainable growth, and unwavering commitment to excellence.
          </p>
        </div>
      </section>
    </main>
  )
}
