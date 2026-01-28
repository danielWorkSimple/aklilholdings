import { CheckCircle } from 'lucide-react'
import type { Achievement } from '@/data/portfolio'

interface MilestoneCardProps {
  achievement: Achievement
  index: number
  isLast: boolean
}

export default function MilestoneCard({ achievement, index, isLast }: MilestoneCardProps) {
  const isEven = index % 2 === 0

  return (
    <div className={`flex items-start gap-4 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <div className="bg-dark-bg-light rounded-xl p-6 border border-navy-light card-hover">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gold/10 text-gold mb-3">
            {achievement.year}
          </span>
          <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
          <p className="text-text-muted text-sm">{achievement.description}</p>
        </div>
      </div>

      {/* Timeline marker - hidden on mobile, shown on md+ */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
          <CheckCircle className="h-5 w-5 text-navy" />
        </div>
        {!isLast && <div className="w-0.5 h-24 bg-navy-light" />}
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </div>
  )
}
