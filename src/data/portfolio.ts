export type CompanyStatus = 'operational' | 'under-construction' | 'coming-soon'

export interface Company {
  name: string
  sector: string
  role: string
  description?: string
  logo?: string
  /** Plate behind the logo: 'light' for logos with dark text or their own white background. */
  logoBg?: 'light' | 'dark'
  /** Photo of the business, shown in the Our Assets section on the home page. */
  photo?: { src: string; alt: string; caption: string }
  status: CompanyStatus
}

export const sectorOrder = [
  'Financial Services',
  'Food Production & Agro-Processing',
  'Trading & Distribution',
  'Garment Manufacturing',
  'Hospitality',
  'Real Estate',
  'Healthcare',
  'Technology'
]

export const companies: Company[] = [
  // Food Production & Agro-Processing
  {
    name: "Menave Industrial",
    sector: "Food Production & Agro-Processing",
    role: "Owner",
    description: "Runs maize (110 tonnes/day) and teff (60 tonnes/day) mills at the group's 36,000 m² industrial site in Bahir Dar, with a 9,500 m² warehouse. Produces maize flour, teff flour, grits for baby food and semi-processed animal feed. Also imports Miavit feed premixes from Germany (dairy, layer, grower and starter) and supplies them to feed manufacturers in Ethiopia.",
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
    name: "Multiple Trading Companies",
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
    photo: { src: "/images/hub-hotel-lobby.jpg", alt: "Lobby and reception of The Hub Hotel in Addis Ababa", caption: "Addis Ababa" },
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
    description: "Fully leased office building in Piazza and mixed-use development near CMC Michael in Addis Ababa; mixed-use building in Bahir Dar nearing completion.",
    photo: { src: "/images/tesfa-midir-1888-building.jpg", alt: "The 1888 Building, Tesfa Midir's office building in Piazza, Addis Ababa", caption: "1888 Building, Piazza, Addis Ababa" },
    status: "operational"
  },
  // Healthcare
  {
    name: "Medical Plaza",
    sector: "Healthcare",
    role: "Owner",
    description: "Healthcare complex designed to provide comprehensive outpatient and specialized medical services.",
    status: "under-construction"
  },
  // Financial Services
  {
    name: "Bank of Abyssinia",
    sector: "Financial Services",
    role: "Co-Founder & Shareholder",
    description: "Co-founded flagship banking institution modernizing Ethiopian financial services.",
    logo: "/images/boa.png",
    logoBg: "light",
    status: "operational"
  },
  {
    name: "Nile Insurance",
    sector: "Financial Services",
    role: "Co-Founder & Shareholder",
    description: "Co-founded insurance company providing comprehensive coverage solutions.",
    logo: "/images/nile.png",
    logoBg: "light",
    status: "operational"
  },
  {
    name: "Nisir Microfinance",
    sector: "Financial Services",
    role: "Founding Shareholder",
    description: "Founding shareholder of innovative microfinance institution serving SMEs and the missing middle since 2014.",
    logo: "/images/nisir.png",
    logoBg: "light",
    status: "operational"
  },
  {
    name: "Dynamic Microfinance",
    sector: "Financial Services",
    role: "Shareholder",
    description: "Strategic turnaround investment in microfinance institution serving micro and small enterprises.",
    logo: "/images/dynamic.jpg",
    logoBg: "light",
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

// Other sectors with investments, shown as a grid on the portfolio page
export const otherInvestments = [
  { name: 'Education & Training', icon: 'GraduationCap', description: 'Educational institutions and vocational training centers' },
  { name: 'Logistics & Supply Chain', icon: 'Truck', description: 'Transportation, warehousing, and distribution networks' },
  { name: 'Fintech', icon: 'Smartphone', description: 'Digital financial services and payment solutions' },
  { name: 'Construction', icon: 'HardHat', description: 'Building and infrastructure development projects' },
  { name: 'Import/Export', icon: 'Ship', description: 'International trade and commodity trading' },
  { name: 'Agriculture', icon: 'Leaf', description: 'Farming operations and agricultural supply chains' }
] as const

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
    title: "Co-Founded Bank of Abyssinia",
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
    year: "2026",
    title: "Agro-Processing and Animal Feed",
    description: "Commissioned a teff mill alongside the maize mill at the Bahir Dar industrial site, and began importing Miavit feed premixes from Germany for Ethiopian feed manufacturers."
  },
  {
    year: "Present",
    title: "Diversified Portfolio",
    description: "Successfully managing investments across 10+ sectors including banking, insurance, hospitality, agro-processing, animal feed, and technology."
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
