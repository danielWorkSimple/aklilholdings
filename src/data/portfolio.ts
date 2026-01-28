export interface Company {
  name: string
  sector: string
  role: string
  description?: string
  logo?: string
}

export const companies: Company[] = [
  {
    name: "Bank of Abyssinia",
    sector: "Banking",
    role: "Founder & Shareholder",
    description: "One of Ethiopia's leading private banks, providing comprehensive financial services.",
    logo: "/images/boa.png"
  },
  {
    name: "Nile Insurance",
    sector: "Insurance",
    role: "Founder & Shareholder",
    description: "A pioneering insurance company offering a wide range of insurance products.",
    logo: "/images/nile.png"
  },
  {
    name: "WebSprix PLC",
    sector: "Technology",
    role: "Chairman & Major Shareholder",
    description: "Internet Service Provider (ISP) and networking technology company providing connectivity solutions and IT infrastructure services.",
    logo: "/images/websprix.png"
  },
  {
    name: "The Hub Hotel",
    sector: "Hospitality",
    role: "Owner",
    description: "A premier hospitality establishment providing exceptional guest experiences.",
    logo: "/images/hubhotel.png"
  },
  {
    name: "Halcyon Hotels PLC",
    sector: "Hospitality",
    role: "Promoter",
    description: "A 4-star hotel development under The Hub Hotels brand, expanding hospitality offerings."
  },
  {
    name: "Wagtech Ethiopia PLC",
    sector: "Scientific Instruments",
    role: "Owner",
    description: "Ethiopian branch of Wagtech Projects (UK), supplying laboratory and field testing instruments, water quality testing equipment, and scientific equipment to organizations including UNICEF, WHO, and UNESCO."
  }
]

export const sectors = [
  "Financial Services (Banking)",
  "Insurance",
  "Hospitality",
  "Education & Training",
  "Scientific Instruments Supply",
  "Industrial Trading",
  "Agro-processing",
  "Garment Manufacturing",
  "Construction",
  "Technology-enabled Logistics"
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
    description: "Became Chairman of WebSprix PLC, driving technology-enabled logistics and digital transformation."
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
