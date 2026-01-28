import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Contact', path: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy border-t border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-heading font-bold text-white">
                AKLIL <span className="text-gold">HOLDINGS</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm max-w-xs">
              Building Ethiopia's future through strategic investment across banking,
              insurance, hospitality, and industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-muted hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-text-muted text-sm">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <a href="mailto:info@aklilholdings.com" className="hover:text-gold transition-colors">
                  info@aklilholdings.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-text-muted text-sm">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-light">
          <p className="text-text-muted text-sm text-center">
            &copy; {currentYear} Aklil Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
