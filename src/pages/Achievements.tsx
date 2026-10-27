import MilestoneCard from '@/components/MilestoneCard'
import AnimatedSection from '@/components/AnimatedSection'
import { achievements } from '@/data/portfolio'
import { pages } from '@/data/site'
import { achievementsGraph } from '@/lib/jsonld'
import { seo } from '@/lib/seo'

export const meta = () => seo(pages.achievements, achievementsGraph())

export default function Achievements() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-navy to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              Our <span className="text-gold">Journey</span>
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              Milestones of Mr. Mekdes Aklilu and Aklil Holdings, from co-founding Nile Insurance and Bank of Abyssinia to investments across 10+ sectors in Ethiopia.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl font-heading font-semibold text-white">
              Key Milestones
            </h2>
          </AnimatedSection>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                delay={index * 0.1}
              >
                <MilestoneCard achievement={achievement} index={index} isLast={index === achievements.length - 1} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-dark-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-heading font-semibold text-white mb-6">
              A Legacy of Excellence
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              From founding pioneering financial institutions to diversifying across multiple sectors,
              Aklil Holdings continues to contribute to Ethiopia's economic development. Our journey
              is defined by strategic vision, sustainable growth, and unwavering commitment to excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
