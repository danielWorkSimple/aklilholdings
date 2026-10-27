import { Link } from 'react-router'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { notFoundMeta } from '@/lib/seo'

export const meta = () => notFoundMeta()

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-bg pt-20">
      <div className="text-center px-4">
        <h1 className="text-8xl sm:text-9xl font-heading font-bold text-gold mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-heading text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-text-muted max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/portfolio">
              <ArrowLeft className="mr-2 h-5 w-5" />
              View Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
