export type CompanyStatus = 'operational' | 'under-construction' | 'coming-soon'

export interface Company {
  name: string
  sector: string
  role: string
  description?: string
  logo?: string
  status: CompanyStatus
}

export const sectorOrder = [
  'Food Production & Agro-Processing',
  'Trading & Distribution',
  'Garment Manufacturing',
  'Hospitality',
  'Real Estate',
  'Healthcare',
  'Financial Services',
  'Technology'
]

export const companies: Company[] = [
  // Food Production & Agro-Processing
  {
    name: "Menave Industrial",
    sector: "Food Production & Agro-Processing",
    role: "Owner",
    description: "Produces grits for baby food, maize flour (widely used in Ethiopian lowlands), and semi-processed animal feed for farms.",
    status: "operational"
  },
  {
    name: "Shober Trading",
    sector: "Food Production & Agro-Processing",
    role: "Owner",
    description: "Produces edible oil from maize flour byproducts; presses oil from sesame, niger seed, and soybeans.",
    status: "operational"
  },
  // Trading & Distribution
  {
    name: "Wagtech Ethiopia PLC",
    sector: "Trading & Distribution",
    role: "Owner",
    description: "Main trading arm for 3+ decades. International trade supplying educational materials, scientific and health instruments, exercise books, and electrical/electronics equipment for education and research.",
    status: "operational"
  },
  // Garment Manufacturing
  {
    name: "Family Garment",
    sector: "Garment Manufacturing",
    role: "Owner",
    description: "Preparing to produce various knitted clothing and woven wear for domestic and export markets.",
    status: "coming-soon"
  },
  // Hospitality
  {
    name: "The Hub Hotel",
    sector: "Hospitality",
    role: "Owner",
    description: "A premier 4-star hotel in Addis Ababa providing exceptional guest experiences.",
    logo: "/images/hubhotel.png",
    status: "operational"
  },
  {
    name: "Halcyon Hotel",
    sector: "Hospitality",
    role: "Promoter",
    description: "A 4-star hotel development in Debre Birhan under The Hub Hotels brand.",
    status: "under-construction"
  },
  // Real Estate
  {
    name: "Tesfa Midir Realstate",
    sector: "Real Estate",
    role: "Owner",
    description: "Office building in Piazza area (fully leased); Mixed-use building near CMC Michael (finishing phase).",
    status: "operational"
  },
  // Healthcare
  {
    name: "Aklil Medical Office Building",
    sector: "Healthcare",
    role: "Owner",
    description: "Outpatient medical facility providing healthcare services. Phase one completed.",
    status: "operational"
  },
  // Financial Services
  {
    name: "Bank of Abyssinia",
    sector: "Financial Services",
    role: "Co-Founder & Shareholder",
    description: "Co-founded flagship banking institution modernizing Ethiopian financial services.",
    logo: "/images/boa.png",
    status: "operational"
  },
  {
    name: "Nile Insurance",
    sector: "Financial Services",
    role: "Co-Founder & Shareholder",
    description: "Co-founded insurance company providing comprehensive coverage solutions.",
    logo: "/images/nile.png",
    status: "operational"
  },
  // Technology
  {
    name: "WebSprix PLC",
    sector: "Technology",
    role: "Chairman & Major Shareholder",
    description: "Internet service provider and networking solutions company providing connectivity and IT infrastructure.",
    logo: "/images/websprix.png",
    status: "operational"
  }
]

export const sectors = [
  "Food Production & Agro-Processing",
  "Trading & Distribution",
  "Garment Manufacturing",
  "Hospitality",
  "Real Estate",
  "Healthcare",
  "Financial Services",
  "Technology"
]

export interface Achievement {
  year: string
  title: string
  description: string
}

export const achievements: Achievement[] = [
  {
    year: "1995",
    title: "Co-Founded Nile Insurance",
    description: "Launched a leading insurance company to serve Ethiopian businesses and individuals."
  },
  {
    year: "1996",
    title: "Founded Bank of Abyssinia",
    description: "Established one of Ethiopia's first private banks, pioneering modern banking services."
  },
  {
    year: "2010s",
    title: "Expanded into Hospitality",
    description: "Developed The Hub Hotel and promoted Halcyon Hotels PLC under The Hub Hotels brand."
  },
  {
    year: "2020s",
    title: "Technology Ventures",
    description: "Became Chairman of WebSprix PLC (ISP & networking), and expanded into technology-enabled logistics and digital transformation."
  },
  {
    year: "Present",
    title: "Diversified Portfolio",
    description: "Successfully managing investments across 10+ sectors including banking, insurance, hospitality, and technology."
  }
]

export const education = [
  {
    degree: "BA in Business Management",
    institution: "Addis Ababa University",
    icon: "GraduationCap"
  },
  {
    degree: "Postgraduate Diploma in Educational Planning",
    institution: "University of London",
    icon: "BookOpen"
  },
  {
    degree: "MSc in Finance",
    institution: "University of Strathclyde",
    icon: "Award"
  }
]
