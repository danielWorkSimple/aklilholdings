import { Briefcase, Building2, TrendingUp, Clock } from 'lucide-react'

const stats = [
  {
    icon: Building2,
    value: "11",
    label: "Group Companies"
  },
  {
    icon: TrendingUp,
    value: "30+",
    label: "Total Investments"
  },
  {
    icon: Briefcase,
    value: "10+",
    label: "Sectors"
  },
  {
    icon: Clock,
    value: "30+",
    label: "Years Experience"
  }
]

export default function StatsBar() {
  return (
    <section className="bg-navy-light/50 border-y border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-center space-x-4 text-center md:text-left"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-gold" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
