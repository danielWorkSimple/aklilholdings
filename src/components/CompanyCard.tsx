import { Building2, CheckCircle, Clock, Hammer } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Company, CompanyStatus } from '@/data/portfolio'

interface CompanyCardProps {
  company: Company
  showSector?: boolean
}

function StatusBadge({ status }: { status: CompanyStatus }) {
  const config = {
    operational: {
      label: 'Operational',
      className: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      icon: CheckCircle
    },
    'under-construction': {
      label: 'Under Construction',
      className: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      icon: Hammer
    },
    'coming-soon': {
      label: 'Coming Soon',
      className: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      icon: Clock
    }
  }

  const { label, className, icon: Icon } = config[status]

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border ${className}`}>
      <Icon className="h-3 w-3" />
      {label}
    </span>
  )
}

export default function CompanyCard({ company, showSector = true }: CompanyCardProps) {
  return (
    <Card className="card-hover h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
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
          <StatusBadge status={company.status} />
        </div>
        <CardTitle className="mt-4">{company.name}</CardTitle>
        {showSector && (
          <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-navy text-gold border border-gold/30 mt-2">
            {company.sector}
          </span>
        )}
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
