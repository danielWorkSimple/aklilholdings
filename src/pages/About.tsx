import { GraduationCap, BookOpen, Award, User, ExternalLink } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { founder, pages, press } from '@/data/site'
import { aboutGraph } from '@/lib/jsonld'
import { seo } from '@/lib/seo'

const education = [
  {
    degree: "BA in Business Management",
    institution: "Addis Ababa University",
    icon: GraduationCap
  },
  {
    degree: "Postgraduate Diploma in Educational Planning",
    institution: "University of London",
    icon: BookOpen
  },
  {
    degree: "MSc in Finance",
    institution: "University of Strathclyde",
    icon: Award
  }
]

export const meta = () => seo(pages.about, aboutGraph())

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-navy to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              About the <span className="text-gold">Chairman</span>
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              Four decades of visionary leadership in Ethiopian business and investment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Photo Placeholder */}
            <AnimatedSection animation="fade-right" className="lg:col-span-2">
              <div className="bg-dark-bg-light rounded-2xl border border-navy-light p-8 text-center">
                <div className="w-48 h-48 mx-auto rounded-full bg-navy-light flex items-center justify-center mb-6">
                  <User className="w-24 h-24 text-gold/50" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-white mb-2">
                  {founder.displayName}
                </h2>
                <p lang="am" className="text-text-muted mb-2">{founder.amharicName}</p>
                <p className="text-gold">{founder.role}</p>
              </div>
            </AnimatedSection>

            {/* Bio */}
            <AnimatedSection animation="fade-left" delay={0.2} className="lg:col-span-3 space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-white">
                Biography
              </h3>
              <div className="space-y-4 text-text-light">
                {founder.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Aklil Holdings Section */}
      <section className="py-16 bg-dark-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              About Aklil Holdings
            </h3>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="max-w-4xl mx-auto bg-dark-bg rounded-xl p-8 border border-navy-light">
              <p className="text-text-light leading-relaxed mb-4">
                Aklil Holdings is a diversified corporate body controlling a group of companies across Ethiopia and East Africa.
                Under the leadership of Mr. Mekdes Aklilu, the holding company has built a portfolio spanning multiple strategic sectors
                including food production and agro-processing, international trading and distribution, garment manufacturing,
                hospitality, real estate development, healthcare, financial services, and technology.
              </p>
              <p className="text-text-light leading-relaxed">
                With over three decades of business experience, Aklil Holdings continues to identify opportunities
                that contribute to Ethiopia's economic development while creating sustainable value for stakeholders.
                The company's approach combines local expertise with international best practices to build enterprises
                that serve both domestic and regional markets.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h3 className="text-2xl font-heading font-semibold text-white">
              Education & Credentials
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 0.15}
              >
                <div className="bg-dark-bg rounded-xl p-6 border border-navy-light text-center card-hover h-full">
                  <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <edu.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-gold text-sm">{edu.institution}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-16 bg-dark-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h3 className="text-2xl font-heading font-semibold text-white">
              In the Press
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {press.map((item, index) => (
              <AnimatedSection
                key={item.url}
                animation="fade-up"
                delay={index * 0.15}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-dark-bg rounded-xl p-6 border border-navy-light card-hover h-full"
                >
                  <p className="text-gold text-sm mb-3">
                    {item.publisher} · <time dateTime={item.date}>{item.dateLabel}</time>
                  </p>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                    {item.headline}
                  </h4>
                  <p className="text-text-muted text-sm mb-4">{item.note}</p>
                  <span className="inline-flex items-center text-sm text-gold">
                    Read the article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </span>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
