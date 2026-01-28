import { Building2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Company } from '@/data/portfolio'

interface CompanyCardProps {
  company: Company
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Card className="card-hover">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
            {company.logo ? (
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-12 h-12 object-contain"
              />
            ) : (
              <Building2 className="h-6 w-6 text-gold" />
            )}
          </div>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-navy text-gold border border-gold/30">
            {company.sector}
          </span>
        </div>
        <CardTitle className="mt-4">{company.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gold font-medium mb-2">{company.role}</p>
        {company.description && (
          <p className="text-text-muted text-sm">{company.description}</p>
        )}
      </CardContent>
    </Card>
  )
}
