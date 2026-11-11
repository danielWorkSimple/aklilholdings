import { Link } from 'react-router'
import { ArrowRight, Briefcase, MapPin, User, Trophy } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import AnimatedSection from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { companies } from '@/data/portfolio'
import { company, pages } from '@/data/site'
import { homeGraph } from '@/lib/jsonld'
import { seo } from '@/lib/seo'

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
    description: "Discover over three decades of milestones and accomplishments.",
    link: "/achievements",
    linkText: "Our Journey"
  }
]

// Businesses with a photo in portfolio.ts, shown in the Our Assets section.
const assets = companies.flatMap((c) => (c.photo ? [{ ...c, photo: c.photo }] : []))

export const meta = () => seo(pages.home, homeGraph())

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsBar />

      {/* Our Assets: the businesses that have a photo in portfolio.ts */}
      <section className="py-20 bg-dark-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Our <span className="text-gold">Assets</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Operating businesses owned by the group.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {assets.map((asset, index) => (
              <AnimatedSection key={asset.name} animation="fade-up" delay={index * 0.1}>
                <Link
                  to="/portfolio"
                  className="grid grid-cols-1 sm:grid-cols-[2fr_3fr] h-full overflow-hidden rounded-2xl border border-navy-light bg-dark-bg card-hover"
                >
                  <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-64">
                    <img
                      src={asset.photo.src}
                      alt={asset.photo.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-gold text-sm font-medium mb-2">{asset.sector}</p>
                    <h3 className="text-2xl font-heading font-semibold text-white mb-2">{asset.name}</h3>
                    <p className="flex items-center gap-1.5 text-text-muted text-sm mb-4">
                      <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
                      {asset.photo.caption}
                    </p>
                    <p className="text-text-light text-sm leading-relaxed">{asset.description}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Discover Aklil Holdings
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {company.summary}
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
