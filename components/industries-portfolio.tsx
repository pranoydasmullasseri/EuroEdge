"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Home,
  Building2,
  Hotel,
  UtensilsCrossed,
  ShoppingBag,
  Factory,
  Building,
  GraduationCap,
  Settings,
  Star,
  Check,
  ArrowRight,
  Trees,
} from "lucide-react"

export interface IndustrySector {
  id: string
  number: string
  category: string
  sectorLabel: string
  title: string
  subtitle: string
  approach: string
  description: string
  image: string
  badgeTitle: string
  badgeSubtitle: string
  badgeIconType: "home" | "building2" | "hotel" | "utensils" | "shopping" | "factory" | "building" | "graduation"
  propertyScope: string[]
  appliedDivisions: string[]
  keyDeliverables: string[]
  ctaText: string
}

export const primaryIndustries: IndustrySector[] = [
  {
    id: "residential",
    number: "01",
    category: "RESIDENTIAL",
    sectorLabel: "SECTOR 01 • VILLAS & APARTMENTS",
    title: "Residential & Villas",
    subtitle: "Villas & Apartments",
    approach: "Turnkey Craftsmanship & Complete Home Engineering",
    description:
      "Complete technical solutions for modern living spaces, combining quality workmanship, functional design and reliable execution.",
    image: "/images/industries/sector-01-residential.jpg",
    badgeTitle: "VILLAS & APARTMENTS",
    badgeSubtitle: "Turnkey Craftsmanship & Complete Home Engineering",
    badgeIconType: "home",
    propertyScope: [
      "Villas",
      "Apartments",
      "Townhouses",
      "Residential Communities",
    ],
    appliedDivisions: [
      "Civil & Finishing",
      "MEP & Technical",
      "Swimming Pool",
      "Landscaping",
      "Maintenance",
    ],
    keyDeliverables: [
      "Luxury villa renovation & painting",
      "Premium tiling & flooring",
      "Pool construction & maintenance",
      "Electrical & AC upgrades",
    ],
    ctaText: "Discuss Your Project",
  },
  {
    id: "commercial",
    number: "02",
    category: "COMMERCIAL",
    sectorLabel: "SECTOR 02 • OFFICES & BUSINESS SPACES",
    title: "Commercial & Offices",
    subtitle: "Offices & Business Spaces",
    approach: "Corporate Fit-Out, MEP Infrastructure & Facilities Care",
    description:
      "Technical solutions for commercial spaces that support modern business environments, with a focus on functionality, quality and seamless execution.",
    image: "/images/industries/sector-02-commercial.jpg",
    badgeTitle: "OFFICES & BUSINESS SPACES",
    badgeSubtitle: "Functional Spaces for Growing Businesses",
    badgeIconType: "building2",
    propertyScope: [
      "Offices",
      "Commercial Buildings",
      "Retail Spaces",
      "Business Centers",
      "Showrooms",
    ],
    appliedDivisions: [
      "MEP & Technical",
      "Civil & Finishing",
      "General Maintenance",
    ],
    keyDeliverables: [
      "Office partitions & false ceilings",
      "Electrical distribution & lighting",
      "HVAC & ventilation systems",
      "AMC with scheduled servicing",
    ],
    ctaText: "Discuss Your Project",
  },
  {
    id: "hospitality",
    number: "03",
    category: "HOSPITALITY",
    sectorLabel: "SECTOR 03 • HOTELS & RESORTS",
    title: "Hotels & Hospitality",
    subtitle: "Hotels & Resorts",
    approach: "High-Aesthetic Finishing & Guest-First Engineering",
    description:
      "Turnkey technical works for premier hospitality venues, upholding continuous five-star guest comfort, luxury finishes, and zero operational disruption.",
    image: "/images/industries/sector-03-hospitality.jpg",
    badgeTitle: "HOTELS & RESORTS",
    badgeSubtitle: "Guest-First Comfort & High-Aesthetic Engineering",
    badgeIconType: "hotel",
    propertyScope: [
      "Hotels",
      "Resorts",
      "Guest Houses",
      "Hospitality Properties",
      "Leisure Facilities",
    ],
    appliedDivisions: [
      "Swimming Pool",
      "MEP & Technical",
      "Landscaping",
      "Civil & Finishing",
      "Maintenance",
    ],
    keyDeliverables: [
      "Pool engineering & maintenance",
      "Landscaping & outdoor finishing",
      "High-traffic area tiling & painting",
      "Responsive technical support",
    ],
    ctaText: "Discuss Your Project",
  },
  {
    id: "restaurants",
    number: "04",
    category: "RESTAURANTS & F&B",
    sectorLabel: "SECTOR 04 • RESTAURANTS & CAFÉS",
    title: "Restaurants & F&B",
    subtitle: "Restaurants & Cafés",
    approach: "Specialized Kitchen MEP, Sanitary Drainage & Dining Ambiance",
    description:
      "End-to-end technical contracting for culinary and dining spaces, balancing heavy-duty commercial kitchen MEP with warm, captivating dining ambiance.",
    image: "/images/industries/sector-04-restaurants.jpg",
    badgeTitle: "RESTAURANTS & CAFÉS",
    badgeSubtitle: "Specialized Kitchen MEP & Dining Ambiance",
    badgeIconType: "utensils",
    propertyScope: [
      "Restaurants",
      "Cafés",
      "Commercial Kitchens",
      "F&B Spaces",
      "Outdoor Dining",
    ],
    appliedDivisions: [
      "MEP & Technical",
      "Civil & Finishing",
      "General Maintenance",
    ],
    keyDeliverables: [
      "Kitchen plumbing & drainage",
      "HVAC & ventilation systems",
      "Slip-resistant flooring & finishes",
      "Decorative lighting & carpentry",
    ],
    ctaText: "Discuss Your Project",
  },
  {
    id: "retail",
    number: "05",
    category: "RETAIL & SHOPPING",
    sectorLabel: "SECTOR 05 • STORES & SHOWROOMS",
    title: "Retail & Shopping",
    subtitle: "Stores & Showrooms",
    approach: "High-Traffic Floor Finishes, Showroom Lighting & Quick Handover",
    description:
      "Precision commercial fit-out and rapid maintenance solutions built for high-footfall retail environments with fast-track project handovers.",
    image: "/images/industries/sector-05-retail.jpg",
    badgeTitle: "STORES & SHOWROOMS",
    badgeSubtitle: "High-Footfall Finishes & Precision Lighting",
    badgeIconType: "shopping",
    propertyScope: [
      "Retail Stores",
      "Shopping Centers",
      "Boutiques",
      "Showrooms",
      "Outlets",
    ],
    appliedDivisions: [
      "Civil & Finishing",
      "MEP & Technical",
      "General Maintenance",
    ],
    keyDeliverables: [
      "Durable floor tiling",
      "Accent & track lighting",
      "Feature ceilings & displays",
      "Refurbishment support",
    ],
    ctaText: "Discuss Your Project",
  },
  {
    id: "industrial",
    number: "06",
    category: "INDUSTRIAL & LOGISTICS",
    sectorLabel: "SECTOR 06 • WAREHOUSES & FACILITIES",
    title: "Industrial & Warehouses",
    subtitle: "Warehouses & Facilities",
    approach: "Heavy-Duty Civil Contracting, High-Load Power & Storage MEP",
    description:
      "High-load electromechanical engineering, industrial-grade coatings, and planned maintenance engineered for demanding logistics and manufacturing hubs.",
    image: "/images/industries/sector-06-industrial.jpg",
    badgeTitle: "WAREHOUSES & FACILITIES",
    badgeSubtitle: "Heavy-Duty Electromechanical & Storage MEP",
    badgeIconType: "factory",
    propertyScope: [
      "Warehouses",
      "Industrial Facilities",
      "Workshops",
      "Production Facilities",
      "Storage",
    ],
    appliedDivisions: [
      "MEP & Technical",
      "Civil & Finishing",
      "General Maintenance",
    ],
    keyDeliverables: [
      "Industrial flooring & coatings",
      "Electrical cabling & distribution",
      "Waterproofing & roof repair",
      "Ventilation & electromechanical",
    ],
    ctaText: "Discuss Your Project",
  },
  {
    id: "property-management",
    number: "07",
    category: "BUILDINGS & ASSET CARE",
    sectorLabel: "SECTOR 07 • BUILDINGS & COMMUNITIES",
    title: "Property & Facility Management",
    subtitle: "Buildings & Communities",
    approach: "Comprehensive Asset Preservation, Planned Maintenance & AMCs",
    description:
      "Integrated facilities maintenance partnerships providing scheduled preventive servicing, rapid reactive dispatch, and long-term asset value enhancement.",
    image: "/images/industries/sector-07-property.jpg",
    badgeTitle: "BUILDINGS & COMMUNITIES",
    badgeSubtitle: "Turnkey AMC Support & Asset Preservation",
    badgeIconType: "building",
    propertyScope: [
      "Residential",
      "Commercial",
      "Building Portfolios",
      "Managed Facilities",
      "Communities",
    ],
    appliedDivisions: [
      "General Maintenance",
      "MEP & Technical",
      "Civil & Finishing",
      "Landscaping",
      "Swimming Pool",
    ],
    keyDeliverables: [
      "Planned maintenance & AMC support",
      "Multi-skilled maintenance teams",
      "Irrigation & common area upkeep",
      "Pool maintenance & testing",
    ],
    ctaText: "Discuss Your Project",
  },
  {
    id: "healthcare-education",
    number: "08",
    category: "SPECIALIZED INSTITUTIONS",
    sectorLabel: "SECTOR 08 • SPECIALIZED FACILITIES",
    title: "Healthcare & Educational Facilities",
    subtitle: "Specialized Facilities",
    approach: "Strict Code Compliance, Sterile Environments & Safe Spaces",
    description:
      "Strict adherence to safety codes, sterile surfaces, and cleanroom air handling systems across clinical facilities, schools, and higher education campuses.",
    image: "/images/industries/sector-08-healthcare.jpg",
    badgeTitle: "SPECIALIZED FACILITIES",
    badgeSubtitle: "Strict Code Compliance & Sterile Environments",
    badgeIconType: "graduation",
    propertyScope: [
      "Clinics",
      "Medical Centers",
      "Schools & Campuses",
      "Training Centers",
      "Student Facilities",
    ],
    appliedDivisions: [
      "MEP & Technical",
      "Civil & Finishing",
      "Maintenance",
      "Landscaping",
    ],
    keyDeliverables: [
      "Hygienic paint & cleanroom finishes",
      "HVAC, filtration & ventilation",
      "Safe electrical & plumbing systems",
      "Campus grounds & outdoor works",
    ],
    ctaText: "Discuss Your Project",
  },
]

export function IndustriesPortfolio() {
  const renderBadgeIcon = (type: IndustrySector["badgeIconType"]) => {
    switch (type) {
      case "home":
        return <Home className="w-5 h-5 text-[#fbb03b]" />
      case "building2":
        return <Building2 className="w-5 h-5 text-[#fbb03b]" />
      case "hotel":
        return <Hotel className="w-5 h-5 text-[#fbb03b]" />
      case "utensils":
        return <UtensilsCrossed className="w-5 h-5 text-[#fbb03b]" />
      case "shopping":
        return <ShoppingBag className="w-5 h-5 text-[#fbb03b]" />
      case "factory":
        return <Factory className="w-5 h-5 text-[#fbb03b]" />
      case "building":
        return <Building className="w-5 h-5 text-[#fbb03b]" />
      case "graduation":
        return <GraduationCap className="w-5 h-5 text-[#fbb03b]" />
      default:
        return <Building2 className="w-5 h-5 text-[#fbb03b]" />
    }
  }

  return (
    <div className="bg-background">
      {/* =========================================
          SECTION 1 — HERO (Panoramic Wallpaper Background)
      ========================================= */}
      <section className="relative overflow-hidden min-h-[340px] sm:min-h-[400px] lg:min-h-[460px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
        {/* Background Wallpaper Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industries-hero-wallpaper-ultra-hd.jpg"
            alt="Euro Edge Industries We Serve Wallpaper - Dubai Skyline & Engineering"
            fill
            priority
            quality={85}
            className="object-cover object-right sm:object-[center_right] lg:object-center"
            sizes="100vw"
          />
          {/* Directional gradient ensuring 100% crystal-clear contrast and text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-45% sm:via-white/90 sm:via-55% to-transparent w-full sm:w-[92%] md:w-[82%] lg:w-[72%] xl:w-[62%] pointer-events-none" />
          {/* Soft top gradient so floating navbar stays distinct */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />
          {/* Bottom seam to blend smoothly into the cards section */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#f8fafc]/80 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 container-wide max-w-[1800px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            {/* Eyebrow Label with gold accent bar */}
            <div className="flex items-center gap-3">
              <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.22em] uppercase">
                INDUSTRIES WE SERVE
              </span>
              <span className="w-8 h-[2px] bg-[#fbb03b] inline-block" />
            </div>

            {/* Main Headline - unified in font style, weight, and color */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0a2540] font-bold tracking-tight leading-[1.12]">
              <span className="block">Built for</span>
              <span className="block mt-1 sm:mt-1.5 text-[#0a2540]">
                Every Environment<span className="text-[#fbb03b]">.</span>
              </span>
            </h1>

            {/* Supporting description for better visual balance and context */}
            <p className="font-editorial-body text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg pt-1">
              Specialized technical services engineered for residential, commercial, hospitality, healthcare, and industrial properties across Dubai and the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2 — 8 INDUSTRY SECTIONS
          Alternating Architectural Curve Cards (Matching exact design reference)
      ========================================= */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#f8fafc]/60">
        <div className="container-wide max-w-[1800px] mx-auto space-y-10 sm:space-y-12">
          {primaryIndustries.map((sector, index) => {
            const isImageLeft = index % 2 === 0

            return (
              <article
                key={sector.id}
                id={sector.id}
                className="scroll-mt-28 relative rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`flex flex-col lg:flex-row items-stretch ${
                    isImageLeft ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* =========================================
                      IMAGE COLUMN (with Organic Curved Cut & Floating Badges)
                  ========================================= */}
                  <div className="relative w-full lg:w-[48%] xl:w-[47%] min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[460px] overflow-hidden flex-shrink-0">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      quality={90}
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Gradient scrim for badge readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 pointer-events-none" />

                    {/* Desktop Architectural Wave Curve Overlay */}
                    {isImageLeft ? (
                      /* Wave on right edge of image for odd cards (image left) */
                      <svg
                        className="hidden lg:block absolute top-0 bottom-0 -right-1 h-full w-24 xl:w-32 z-10 pointer-events-none fill-white filter drop-shadow-[-6px_0_12px_rgba(0,0,0,0.08)]"
                        viewBox="0 0 100 500"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path d="M 100 0 L 30 0 C 10 120, 60 250, 40 380 C 25 430, 45 470, 70 500 L 100 500 Z" />
                      </svg>
                    ) : (
                      /* Wave on left edge of image for even cards (image right) */
                      <svg
                        className="hidden lg:block absolute top-0 bottom-0 -left-1 h-full w-24 xl:w-32 z-10 pointer-events-none fill-white filter drop-shadow-[6px_0_12px_rgba(0,0,0,0.08)]"
                        viewBox="0 0 100 500"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path d="M 0 0 L 70 0 C 90 120, 40 250, 60 380 C 75 430, 55 470, 30 500 L 0 500 Z" />
                      </svg>
                    )}

                    {/* Top-Left Number & Category Label inside Image (only on Card 1/odd layout) */}
                    {isImageLeft && (
                      <div className="absolute top-6 left-6 z-20">
                        <span className="text-3xl font-serif font-bold text-[#fbb03b] leading-none block drop-shadow-sm">
                          {sector.number}
                        </span>
                        <div className="w-8 h-[2px] bg-[#fbb03b] my-1.5" />
                        <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-white/95 uppercase block drop-shadow-sm">
                          {sector.category}
                        </span>
                      </div>
                    )}

                    {/* Floating Glass Pill / Badge inside Image */}
                    <div
                      className={`absolute z-20 ${
                        isImageLeft ? "bottom-5 sm:bottom-6 left-5 sm:left-6" : "bottom-5 sm:bottom-6 right-5 sm:right-6"
                      } bg-[#0a2540]/90 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3.5 shadow-2xl max-w-[90%] sm:max-w-md`}
                    >
                      <div className="w-9 h-9 rounded-xl border border-amber-400/50 bg-amber-400/15 flex items-center justify-center flex-shrink-0">
                        {renderBadgeIcon(sector.badgeIconType)}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold uppercase tracking-wider text-white block truncate">
                          {sector.badgeTitle}
                        </span>
                        <span className="text-[11px] text-slate-300 font-medium block truncate mt-0.5">
                          {sector.badgeSubtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* =========================================
                      CONTENT COLUMN (with Header, 3 Columns & CTA Button)
                  ========================================= */}
                  <div className="relative w-full lg:w-[52%] xl:w-[53%] p-6 sm:p-8 lg:p-10 xl:p-11 flex flex-col justify-between space-y-6">
                    {/* Decorative Concentric Rings Watermark (Top Right) */}
                    <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none overflow-hidden opacity-25">
                      <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full border-[1.5px] border-slate-300" />
                      <div className="absolute -top-5 -right-5 w-44 h-44 rounded-full border-[1.5px] border-slate-300" />
                      <div className="absolute top-2 right-2 w-32 h-32 rounded-full border-[1.5px] border-slate-300" />
                    </div>

                    {/* Top Content Area */}
                    <div className="space-y-3 relative z-10">
                      {/* For Card 2/even layout: Show Number & Category on top-left of Content */}
                      {!isImageLeft && (
                        <div className="mb-2">
                          <span className="text-2xl sm:text-3xl font-serif font-bold text-[#b4750e] leading-none block">
                            {sector.number}
                          </span>
                          <div className="w-8 h-[2px] bg-[#b4750e] my-1.5" />
                          <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-slate-600 uppercase block">
                            {sector.category}
                          </span>
                        </div>
                      )}

                      {/* Main Title */}
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] tracking-tight">
                        {sector.title}
                      </h2>

                      {/* Subtitle & Approach */}
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                        <span className="text-[#0a2540] font-bold">{sector.subtitle}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-600 font-medium">{sector.approach}</span>
                      </div>

                      {/* Brief Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl pt-0.5">
                        {sector.description}
                      </p>
                    </div>

                    {/* Middle: 3 Specialized Detail Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-5 border-t border-slate-100 relative z-10">
                      {/* Column 1: Applied Services */}
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2">
                          <Settings className="w-4 h-4 text-[#fbb03b] flex-shrink-0" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a2540] block font-sans">
                            Applied Services
                          </span>
                        </div>
                        <ul className="space-y-1.5 text-xs">
                          {sector.appliedDivisions.map((srv, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-700 font-medium leading-snug">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#fbb03b] flex-shrink-0 mt-1.5" />
                              <span>{srv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: Property Types */}
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#fbb03b] flex-shrink-0" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a2540] block font-sans">
                            Property Types
                          </span>
                        </div>
                        <ul className="space-y-1.5 text-xs">
                          {sector.propertyScope.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-700 font-medium leading-snug">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#fbb03b] flex-shrink-0 mt-1.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: Key Highlights */}
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-[#fbb03b] flex-shrink-0" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a2540] block font-sans">
                            Key Highlights
                          </span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                          {sector.keyDeliverables.map((kd, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-snug">
                              <Check className="w-3.5 h-3.5 text-slate-700 flex-shrink-0 mt-0.5" />
                              <span>{kd}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom: Discuss Your Project CTA Button */}
                    <div
                      className={`pt-2 sm:pt-4 flex ${
                        isImageLeft ? "justify-end" : "justify-start"
                      } relative z-10`}
                    >
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white font-sans font-semibold text-xs tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group"
                      >
                        <span>Discuss Your Project</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* =========================================
            SECTION 3 — OUTDOOR & LANDSCAPE APPLICATIONS
            Architectural Wave Card (Matching industry sections above)
        ========================================= */}
        <div className="container-wide max-w-[1800px] mx-auto mt-10 sm:mt-12">
          <article
            id="outdoor-landscaping"
            className="scroll-mt-28 relative rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40 transition-all duration-300 overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* =========================================
                  IMAGE COLUMN (with Organic Curved Cut & Floating Badges)
              ========================================= */}
              <div className="relative w-full lg:w-[48%] xl:w-[47%] min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[460px] overflow-hidden flex-shrink-0">
                <Image
                  src="/images/industries/outdoor-pergola.jpg"
                  alt="Luxury outdoor landscaping and pergola living space"
                  fill
                  quality={90}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Gradient scrim for badge readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 pointer-events-none" />

                {/* Desktop Architectural Wave Curve Overlay */}
                <svg
                  className="hidden lg:block absolute top-0 bottom-0 -right-1 h-full w-24 xl:w-32 z-10 pointer-events-none fill-white filter drop-shadow-[-6px_0_12px_rgba(0,0,0,0.08)]"
                  viewBox="0 0 100 500"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M 100 0 L 30 0 C 10 120, 60 250, 40 380 C 25 430, 45 470, 70 500 L 100 500 Z" />
                </svg>

                {/* Top-Left Number & Category Label inside Image */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="text-3xl font-serif font-bold text-[#fbb03b] leading-none block drop-shadow-sm">
                    09
                  </span>
                  <div className="w-8 h-[2px] bg-[#fbb03b] my-1.5" />
                  <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-white/95 uppercase block drop-shadow-sm">
                    OUTDOOR &amp; LANDSCAPING
                  </span>
                </div>

                {/* Floating Glass Pill / Badge inside Image */}
                <div className="absolute z-20 bottom-5 sm:bottom-6 left-5 sm:left-6 bg-[#0a2540]/90 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3.5 shadow-2xl max-w-[90%] sm:max-w-md">
                  <div className="w-9 h-9 rounded-xl border border-amber-400/50 bg-amber-400/15 flex items-center justify-center flex-shrink-0 text-[#fbb03b]">
                    <Trees className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-white block truncate">
                      OUTDOOR &amp; LANDSCAPING
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium block truncate mt-0.5">
                      Paving, Irrigation &amp; Garden Architecture
                    </span>
                  </div>
                </div>
              </div>

              {/* =========================================
                  CONTENT COLUMN (with Header, 3 Columns & CTA Button)
              ========================================= */}
              <div className="relative w-full lg:w-[52%] xl:w-[53%] p-6 sm:p-8 lg:p-10 xl:p-11 flex flex-col justify-between space-y-6">
                {/* Decorative Concentric Rings Watermark (Top Right) */}
                <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none overflow-hidden opacity-25">
                  <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full border-[1.5px] border-slate-300" />
                  <div className="absolute -top-5 -right-5 w-44 h-44 rounded-full border-[1.5px] border-slate-300" />
                  <div className="absolute top-2 right-2 w-32 h-32 rounded-full border-[1.5px] border-slate-300" />
                </div>

                {/* Top Content Area */}
                <div className="space-y-3 relative z-10">
                  {/* Main Title */}
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] tracking-tight">
                    Outdoor Spaces Across Every Property
                  </h2>

                  {/* Subtitle & Approach */}
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    <span className="text-[#0a2540] font-bold">Villas, Commercial &amp; Hospitality</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600 font-medium">Complete Softscape, Hardscape &amp; Irrigation Engineering</span>
                  </div>

                  {/* Brief Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl pt-0.5">
                    Landscaping, paving, irrigation, and grounds maintenance for villas, commercial developments, and hospitality venues across Dubai.
                  </p>
                </div>

                {/* Middle: 3 Specialized Detail Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-5 border-t border-slate-100 relative z-10">
                  {/* Column 1: Applied Services */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-[#fbb03b] flex-shrink-0" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a2540] block font-sans">
                        Applied Services
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs">
                      {[
                        "Soft Landscaping",
                        "Hard Landscaping",
                        "Irrigation Systems",
                        "Landscape Maintenance",
                      ].map((srv, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-700 font-medium leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fbb03b] flex-shrink-0 mt-1.5" />
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Property Types */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#fbb03b] flex-shrink-0" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a2540] block font-sans">
                        Property Types
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs">
                      {[
                        "Private Villas",
                        "Commercial Grounds",
                        "Hospitality Venues",
                        "Residential Communities",
                      ].map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-700 font-medium leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fbb03b] flex-shrink-0 mt-1.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Key Highlights */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#fbb03b] flex-shrink-0" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a2540] block font-sans">
                        Key Highlights
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                      {[
                        "Paving & Interlock",
                        "Automated Irrigation",
                        "Garden & Pergola Works",
                        "Scheduled Grounds Care",
                      ].map((kd, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-snug">
                          <Check className="w-3.5 h-3.5 text-slate-700 flex-shrink-0 mt-0.5" />
                          <span>{kd}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom: Explore Landscaping CTA Button */}
                <div className="pt-2 sm:pt-4 flex justify-end relative z-10">
                  <Link
                    href="/services/landscaping-works"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white font-sans font-semibold text-xs tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group"
                  >
                    <span>Explore Landscaping</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>

      </section>
    </div>
  )
}
