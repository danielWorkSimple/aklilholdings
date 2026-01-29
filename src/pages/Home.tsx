import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, User, Trophy } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'

const quickLinks = [
  {
    icon: User,
    title: "Meet the Chairman",
    description: "Learn about Mr. Mekdes Aklilu's vision and leadership.",
    link: "/about",
    linkText: "About Us"
  },
  {
    icon: Briefcase,
    title: "Our Portfolio",
    description: "Explore investments across banking, insurance, hospitality, and more.",
    link: "/portfolio",
    linkText: "View Portfolio"
  },
  {
    icon: Trophy,
    title: "Achievements",
    description: "Discover four decades of milestones and accomplishments.",
    link: "/achievements",
    linkText: "Our Journey"
  }
]

export default function Home() {
  return (
    <main>
      <SEO
        title="Home"
        description="Aklil Holdings is a diversified investment company led by Mr. Mekdes Aklilu, with investments in banking, insurance, hospitality, and technology across Ethiopia."
        canonical="https://aklilholdings.com"
      />
      <HeroSection />
      <StatsBar />

      {/* Quick Links Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Discover Aklil Holdings
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              A legacy of strategic investment and leadership shaping Ethiopia's economic landscape.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((item, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 0.1}
              >
                <div className="bg-dark-bg-light rounded-xl p-8 border border-navy-light card-hover text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-text-muted text-sm mb-6">{item.description}</p>
                  <Button asChild variant="ghost" className="text-gold hover:text-gold-light">
                    <Link to={item.link}>
                      {item.linkText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
