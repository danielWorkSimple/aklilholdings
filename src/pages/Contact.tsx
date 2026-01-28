import { Mail, MapPin } from 'lucide-react'
import SEO from '@/components/SEO'

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@aklilholdings.com",
    href: "mailto:info@aklilholdings.com"
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Addis Ababa, Ethiopia",
    href: null
  },
]

export default function Contact() {
  return (
    <main className="pt-20">
      <SEO
        title="Contact"
        description="Get in touch with Aklil Holdings for investment opportunities and partnership inquiries. Email: info@aklilholdings.com"
        canonical="https://aklilholdings.com/contact"
      />
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-navy to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              We welcome inquiries about investment opportunities and partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-dark-bg-light rounded-xl p-6 border border-navy-light card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-text-muted mb-1">{item.label}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg text-white hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-dark-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-white mb-6">
            Investment Inquiries
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto mb-8">
            For investment opportunities, partnership proposals, or general inquiries,
            please reach out to us via email. Our team will respond within 2-3 business days.
          </p>
          <a
            href="mailto:info@aklilholdings.com"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-gold text-navy font-medium hover:bg-gold-light transition-colors"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send us an Email
          </a>
        </div>
      </section>
    </main>
  )
}
