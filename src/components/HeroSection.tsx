import { Link } from 'react-router-dom'
import { ArrowRight, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-navy to-dark-bg-light" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-navy-light/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-8 animate-fade-in">
            <Building2 className="h-8 w-8 text-gold" />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in-up">
            AKLIL <span className="text-gold-gradient">HOLDINGS</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-text-light font-light mb-4 animate-fade-in-up animation-delay-100">
            Building Ethiopia's Future Through
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl text-gold font-semibold mb-8 animate-fade-in-up animation-delay-200">
            Strategic Investment
          </p>

          {/* Description */}
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-300">
            Four decades of leadership across banking, insurance, hospitality, and industry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button asChild size="lg">
              <Link to="/portfolio">
                Explore Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
