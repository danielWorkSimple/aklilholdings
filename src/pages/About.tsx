import { GraduationCap, BookOpen, Award, User } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/AnimatedSection'

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

export default function About() {
  return (
    <main className="pt-20">
      <SEO
        title="About"
        description="Learn about Mr. Mekdes Aklilu, founder of Aklil Holdings, with four decades of visionary leadership in Ethiopian business, banking, insurance, and investment."
        canonical="https://aklilholdings.com/about"
      />
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
                  Mr. Mekdes Aklilu
                </h2>
                <p className="text-gold">Founder & Chairman</p>
              </div>
            </AnimatedSection>

            {/* Bio */}
            <AnimatedSection animation="fade-left" delay={0.2} className="lg:col-span-3 space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-white">
                Biography
              </h3>
              <div className="space-y-4 text-text-light">
                <p>
                  Mr. Mekdes Aklilu is a distinguished Ethiopian businessman and investor
                  with extensive experience spanning private and public institutional administration,
                  education, insurance, banking, and international trade.
                </p>
                <p>
                  Throughout his career, he has demonstrated exceptional leadership by chairing
                  boards of leading corporate institutions in Ethiopia. His vision and strategic
                  acumen have been instrumental in establishing and growing some of the country's
                  most significant financial and commercial enterprises.
                </p>
                <p>
                  As a founding shareholder of Bank of Abyssinia and Nile Insurance, Mr. Aklilu
                  has played a pivotal role in modernizing Ethiopia's financial services sector.
                  His investments span across banking, insurance, hospitality, technology,
                  agro-processing, and industrial trading, reflecting a diversified approach to
                  building sustainable businesses.
                </p>
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
    </main>
  )
}
