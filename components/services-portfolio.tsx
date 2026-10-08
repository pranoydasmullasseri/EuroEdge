"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Zap,
  Hammer,
  ShieldCheck,
  Wind,
  Waves,
  Droplet,
  Compass,
  Sprout,
  Layers,
  Grid,
  Paintbrush,
  Wrench,
  Trees,
  Lightbulb,
  Clock,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Phone,
  FileText,
  Search,
  ClipboardCheck,
  Settings,
  Headphones,
} from "lucide-react"

// Types
export interface DisciplineCard {
  id: string
  number: string
  title: string
  division: string
  category: "all" | "civil" | "mep" | "pool" | "landscaping" | "maintenance"
  image: string
  icon: React.ComponentType<{ className?: string }>
  badge: string
  description: string
  highlights: string[]
  slug: string
}

// 22 Official Services across Euro Edge's Technical Scope
const disciplinesList: DisciplineCard[] = [
  // 1. Civil & Finishing (5 Services)
  {
    id: "painting-interior-exterior",
    number: "01",
    title: "Painting – Interior & Exterior",
    division: "Civil & Finishing",
    category: "civil",
    image: "/images/services/painting-contracting.jpg",
    icon: Paintbrush,
    badge: "Jotun Certified",
    description:
      "Professional interior decorative and exterior protective coatings utilizing premium Jotun and Caparol elastomeric paints engineered for UAE climate resilience.",
    highlights: [
      "Jotashield & Fenomastic certified application",
      "Anti-fungal, washable & crack-bridging coatings",
      "Precision airless spray & artisan roller finishes",
    ],
    slug: "civil-finishing-works",
  },
  {
    id: "wall-floor-tiling",
    number: "02",
    title: "Wall & Floor Tiling",
    division: "Civil & Finishing",
    category: "civil",
    image: "/images/services/tiling-works.jpg",
    icon: Grid,
    badge: "Zero Lippage",
    description:
      "Laser-leveled installation of large-format Italian porcelain, natural marble slabs, exterior stone pavers, and waterproof stainproof epoxy joint grouting.",
    highlights: [
      "Large-format porcelain & bookmatched marble",
      "Zero-lippage laser leveling system",
      "Waterproof & stain-resistant epoxy grouting",
    ],
    slug: "civil-finishing-works",
  },
  {
    id: "plastering",
    number: "03",
    title: "Plastering",
    division: "Civil & Finishing",
    category: "civil",
    image: "/images/services/plaster-works.jpg",
    icon: Wrench,
    badge: "Structural Grade",
    description:
      "Precision structural blockwork, cementitious wall rendering, floor screeding, and laser-flat skim-coating providing the ideal substrate for luxury finishes.",
    highlights: [
      "Fiber-reinforced screeds with laser level",
      "Mesh-reinforced joints preventing settlement cracks",
      "Ultra-smooth interior skim & render finishes",
    ],
    slug: "civil-finishing-works",
  },
  {
    id: "false-ceiling-gypsum-partitions",
    number: "04",
    title: "False Ceiling & Gypsum Partitions",
    division: "Civil & Finishing",
    category: "civil",
    image: "/images/services/false-ceiling.jpg",
    icon: Layers,
    badge: "DCD Fire-Rated",
    description:
      "Dubai Civil Defense compliant fire-rated drywall partitions, moisture-resistant suspended ceilings, acoustic baffling, and concealed shadow-gap LED cove profiles.",
    highlights: [
      "Dubai Civil Defense fire-rated drywall assemblies",
      "Acoustic insulation core for noise dampening",
      "Seamless shadowline & architectural LED coves",
    ],
    slug: "civil-finishing-works",
  },
  {
    id: "carpentry-wood-flooring",
    number: "05",
    title: "Carpentry & Wood Flooring",
    division: "Civil & Finishing",
    category: "civil",
    image: "/images/services/carpentry-flooring.jpg",
    icon: Trees,
    badge: "Master Joinery",
    description:
      "Bespoke architectural joinery, solid timber doors, customized floor-to-ceiling wardrobes, and luxury parquet and herringbone hardwood installations.",
    highlights: [
      "Custom wardrobes with integrated illumination",
      "Luxury parquet & herringbone solid hardwood",
      "Acoustic dampening underlayment systems",
    ],
    slug: "civil-finishing-works",
  },

  // 2. MEP & Technical Works (5 Services)
  {
    id: "electrical-works",
    number: "06",
    title: "Electrical Works",
    division: "MEP & Technical",
    category: "mep",
    image: "/images/services/electrical-works.jpg",
    icon: Lightbulb,
    badge: "DEWA Certified",
    description:
      "Distribution board (DB) dressing, three-phase load balancing, certified cabling infrastructure, architectural lighting automation, and DEWA approvals.",
    highlights: [
      "DEWA-certified load calculations & inspections",
      "Neat distribution board dressing & circuit tagging",
      "Smart lighting control (DALI / 0-10V automation)",
    ],
    slug: "mep-technical-works",
  },
  {
    id: "plumbing-sanitary-works",
    number: "07",
    title: "Plumbing & Sanitary Works",
    division: "MEP & Technical",
    category: "mep",
    image: "/images/services/plumbing-sanitary.jpg",
    icon: Droplet,
    badge: "Pressure Tested",
    description:
      "PPR/PEX potable water networks, acoustic drainage piping, booster pump sets, central water heaters, and luxury concealed sanitary fixture installations.",
    highlights: [
      "Hydrostatic pipe pressure testing protocols",
      "Automatic booster pumps & multi-stage filtration",
      "Concealed thermostatic mixers & sanitaryware",
    ],
    slug: "mep-technical-works",
  },
  {
    id: "ac-hvac-works",
    number: "08",
    title: "AC & HVAC Works",
    division: "MEP & Technical",
    category: "mep",
    image: "/images/services/hvac-systems.jpg",
    icon: Wind,
    badge: "Chilled Water & VRF",
    description:
      "High-efficiency inverter HVAC installations, chilled water fan coil unit (FCU) chemical servicing, air balancing, and smart digital thermostat integrations.",
    highlights: [
      "Chilled water FCU & AHU chemical descaling",
      "Energy-saving VRF/VRV inverter systems",
      "Precision airflow balancing & thermal audits",
    ],
    slug: "mep-technical-works",
  },
  {
    id: "ventilation-air-filtration",
    number: "09",
    title: "Ventilation & Air Filtration",
    division: "MEP & Technical",
    category: "mep",
    image: "/images/services/ventilation-filtration.jpg",
    icon: Wind,
    badge: "Clean Air IAQ",
    description:
      "Fresh air handling units (FAHU), energy recovery ventilators (ERV), galvanized acoustic duct fabrication, and antibacterial UV filtration for indoor air quality.",
    highlights: [
      "FAHU & ERV balanced fresh air networks",
      "GI & pre-insulated ductwork with acoustic lining",
      "Antibacterial UV & HEPA air sanitization",
    ],
    slug: "mep-technical-works",
  },
  {
    id: "electromechanical-works",
    number: "10",
    title: "Electromechanical Works",
    division: "MEP & Technical",
    category: "mep",
    image: "/images/services/mep-technical.jpg",
    icon: Zap,
    badge: "Turnkey Plant",
    description:
      "Comprehensive electromechanical engineering for commercial hubs, industrial facilities, and residential complexes with end-to-end commissioning.",
    highlights: [
      "Motor control centers (MCC) & pump panels",
      "Full electromechanical testing & commissioning",
      "Preventive predictive plant vibration analysis",
    ],
    slug: "mep-technical-works",
  },

  // 3. Swimming Pool Works (5 Services)
  {
    id: "pool-construction",
    number: "11",
    title: "Pool Construction",
    division: "Swimming Pools",
    category: "pool",
    image: "/images/services/swimming-pool.jpg",
    icon: Waves,
    badge: "Engineered Shell",
    description:
      "Turnkey reinforced concrete shell casting, overflow channels, infinity horizons, and designer pool engineering compliant with Dubai Municipality standards.",
    highlights: [
      "Heavy-duty reinforced concrete casting",
      "Infinity horizon & perimeter overflow gutters",
      "Full Dubai Municipality structural compliance",
    ],
    slug: "swimming-pool-works",
  },
  {
    id: "waterproofing",
    number: "12",
    title: "Waterproofing",
    division: "Swimming Pools",
    category: "pool",
    image: "/images/services/waterproofing.jpg",
    icon: ShieldCheck,
    badge: "72-Hr Flood Test",
    description:
      "Specialized multi-layer elastomeric and cementitious waterproofing membranes for pools, balance tanks, wet areas, and sub-structures backed by warranty.",
    highlights: [
      "Certified 72-hour hydrostatic flood test protocol",
      "High-elasticity polyurethane & cementitious coatings",
      "Reinforced expansion joints & penetration seals",
    ],
    slug: "swimming-pool-works",
  },
  {
    id: "pool-tiling-finishing",
    number: "13",
    title: "Pool Tiling & Finishing",
    division: "Swimming Pools",
    category: "pool",
    image: "/images/services/pool-tiling.jpg",
    icon: Grid,
    badge: "Designer Glass",
    description:
      "Artisan installation of imported Spanish and Italian glass mosaics, bullnose coping stones, underwater LED lighting, and chemical-proof epoxy grouting.",
    highlights: [
      "Designer Italian & Spanish glass mosaics",
      "Anti-slip natural stone & granite pool copings",
      "Submersible IP68 LED illumination systems",
    ],
    slug: "swimming-pool-works",
  },
  {
    id: "pool-equipment-installation",
    number: "14",
    title: "Pool Equipment Installation",
    division: "Swimming Pools",
    category: "pool",
    image: "/images/services/pool-equipment.jpg",
    icon: Wrench,
    badge: "Smart Automation",
    description:
      "Variable-speed filtration pumps, high-rate sand filters, automated salt chlorinators, titanium reverse-cycle heat pumps, and remote monitoring controls.",
    highlights: [
      "Energy-saving variable speed pump setups",
      "Titanium heat & chill reverse-cycle pumps",
      "Automated digital pH/ORP dosing controllers",
    ],
    slug: "swimming-pool-works",
  },
  {
    id: "pool-maintenance",
    number: "15",
    title: "Pool Maintenance",
    division: "Swimming Pools",
    category: "pool",
    image: "/images/services/swimming-pool-clean.jpg",
    icon: Droplet,
    badge: "Crystal Clear",
    description:
      "Scheduled chemical water balancing, vacuuming, filter backwashing, algae preventative treatments, and comprehensive plant room health inspections.",
    highlights: [
      "Bi-weekly laboratory water balancing (pH & Cl)",
      "Bottom vacuuming & surface skimming",
      "Plant room pump & seal preventive checkups",
    ],
    slug: "swimming-pool-works",
  },

  // 4. Landscaping Works (5 Services)
  {
    id: "soft-hard-landscaping",
    number: "16",
    title: "Soft & Hard Landscaping",
    division: "Landscaping Works",
    category: "landscaping",
    image: "/images/services/soft-hard-landscaping.jpg",
    icon: Compass,
    badge: "Architectural Living",
    description:
      "Harmonious exterior transformations combining drought-resilient flora, mature date palms, natural stone walkways, decorative pergolas, and ambient lighting.",
    highlights: [
      "Desert-adapted horticulture & turfing",
      "Custom timber & aluminium pergolas",
      "Architectural low-voltage exterior lighting",
    ],
    slug: "landscaping-works",
  },
  {
    id: "paving-interlock",
    number: "17",
    title: "Paving & Interlock",
    division: "Landscaping Works",
    category: "landscaping",
    image: "/images/services/fit-out-renovation.jpg",
    icon: Layers,
    badge: "Heavy Duty",
    description:
      "Heavy-duty concrete interlock block paving for villa driveways, commercial walkways, pedestrian plazas, and natural travertine terrace patios.",
    highlights: [
      "Laser-leveled sand screed & sub-base compaction",
      "Heavy vehicle load interlock installations",
      "Natural granite, flagstone & travertine paving",
    ],
    slug: "landscaping-works",
  },
  {
    id: "irrigation",
    number: "18",
    title: "Irrigation",
    division: "Landscaping Works",
    category: "landscaping",
    image: "/images/services/irrigation.jpg",
    icon: Sprout,
    badge: "Smart Water Saver",
    description:
      "Computerized weather-sensing drip networks and pop-up rotor sprinklers designed to sustain lush gardens while reducing water usage by up to 40%.",
    highlights: [
      "Automated weather-responsive smart controllers",
      "Pressure-compensating root-zone drip lines",
      "Zoned solenoid valve manifold assemblies",
    ],
    slug: "landscaping-works",
  },
  {
    id: "garden-outdoor-works",
    number: "19",
    title: "Garden & Outdoor Works",
    division: "Landscaping Works",
    category: "landscaping",
    image: "/images/services/landscaping.jpg",
    icon: Trees,
    badge: "Outdoor Leisure",
    description:
      "Bespoke outdoor kitchens, built-in masonry BBQ stations, soothing water fountains, decorative boundary wall cladding, and composite deck platforms.",
    highlights: [
      "Custom stainless steel BBQ islands & sinks",
      "Architectural water features & pond cascades",
      "Weather-resistant composite & hardwood decks",
    ],
    slug: "landscaping-works",
  },
  {
    id: "landscape-maintenance",
    number: "20",
    title: "Landscape Maintenance",
    division: "Landscaping Works",
    category: "landscaping",
    image: "/images/services/landscaping-hedge.jpg",
    icon: Sprout,
    badge: "Year-Round Care",
    description:
      "Dedicated horticultural maintenance contracts covering precision lawn mowing, tree pruning, soil fertilization, organic pest management, and valve audits.",
    highlights: [
      "Scheduled lawn mowing, edging & aeration",
      "Palm frond pruning & pest management",
      "Routine irrigation line pressure & leak audits",
    ],
    slug: "landscaping-works",
  },

  // 5. General Maintenance (2 Services)
  {
    id: "building-villa-maintenance",
    number: "21",
    title: "Building & Villa Maintenance",
    division: "General Maintenance",
    category: "maintenance",
    image: "/images/services/building-maintenance.jpg",
    icon: ShieldCheck,
    badge: "Annual AMC",
    description:
      "Comprehensive Annual Maintenance Contracts (AMC) engineered to protect asset value, ensure uninterrupted MEP performance, and provide 24/7 hotline care.",
    highlights: [
      "Guaranteed priority SLA response times",
      "Scheduled quarterly multi-point MEP audits",
      "Comprehensive digital asset logging & reports",
    ],
    slug: "general-maintenance-amc",
  },
  {
    id: "renovation-repair-works",
    number: "22",
    title: "Renovation & Repair Works",
    division: "General Maintenance",
    category: "maintenance",
    image: "/images/services/renovation-repair.jpg",
    icon: Clock,
    badge: "Rapid Turnkey",
    description:
      "Rapid-turnaround turnkey renovations, bathroom & kitchen updates, structural wall crack repairs, and 24/7 emergency troubleshooting for unexpected breakdowns.",
    highlights: [
      "Dedicated 24/7 emergency troubleshooting dispatch",
      "Turnkey kitchen & bathroom modernization",
      "Fast-track mobilization & permanent defect repair",
    ],
    slug: "general-maintenance-amc",
  },
]



export function ServicesPortfolio() {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null)

  const handleCardClick = (id: string) => {
    // Allows tap-to-flip on mobile devices
    setFlippedCardId(flippedCardId === id ? null : id)
  }

  return (
    <div className="w-full bg-background text-foreground">
      {/* =========================================
          1. ARCHITECTURAL HERO (Exact Warm Parchment Style from User Image)
          Font: Cormorant Garamond (500, -0.02em) + Inter (400 / 600)
      ========================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/90 via-slate-50 to-white pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
        <div className="container-wide max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Clean Brand Typography */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow / Label: Inter 600, Letter-spacing 0.18em */}
              <div className="flex items-center gap-3">
                <span className="font-editorial-eyebrow text-xs sm:text-[11px] text-[#0066cc] tracking-[0.18em] uppercase font-semibold">
                  OUR SERVICES
                </span>
              </div>

              {/* H1 / Display: Cormorant Garamond 500, Letter-spacing -0.02em */}
              <h1 className="font-editorial-h1 text-[clamp(2.4rem,4.6vw,4rem)] text-[#0a2540] font-medium leading-[1.02] tracking-[-0.02em]">
                Built With Precision.
                <span className="block">Delivered Under One Team.</span>
              </h1>

              {/* Action Buttons: Clean Navy & White Architectural Styling */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#capabilities"
                  className="font-editorial-nav inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0a2540] text-white text-xs uppercase tracking-wider hover:bg-[#0066cc] transition-colors shadow-sm"
                >
                  Explore Capabilities
                  <ArrowRight className="w-4 h-4 text-[#fbb03b]" />
                </a>

                <Link
                  href="/contact"
                  className="font-editorial-nav inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-slate-300 bg-white text-[#0a2540] text-xs uppercase tracking-wider hover:border-[#0a2540] hover:bg-slate-50 transition-colors shadow-2xs"
                >
                  Request a Site Visit
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Hero Showcase (Prominent & Clean, No Badge) */}
            <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-none h-80 sm:h-96 lg:h-[26rem] xl:h-[28rem] rounded-[2rem] lg:rounded-tl-[6rem] lg:rounded-br-[4rem] overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100">
                <Image
                  src="/images/services/civil-finishing.jpg"
                  alt="Euro Edge Technical Services Engineer Reviewing Modern Construction Plans Dubai"
                  fill
                  priority
                  quality={85}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. MAIN CAPABILITIES SECTION WITH 3D FLIP CARDS
          Font: Cormorant Garamond H2 (500) + Inter
      ========================================= */}
      <section id="capabilities" className="py-14 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-background scroll-mt-20">
        <div className="container-wide max-w-[1800px] mx-auto">
          {/* Header & Subtitle */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] tracking-tight">
              WHAT WE DELIVER
            </h2>
            <p className="font-serif text-xl sm:text-2xl text-[#0066cc] font-medium tracking-tight">
              Capabilities, end to end.
            </p>
          </div>

          {/* Interactive 3D Flip Card Grid (Directly under description, without filter pills) */}
          <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {disciplinesList.map((item) => {
              const IconComponent = item.icon
              const isManuallyFlipped = flippedCardId === item.id

              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item.id)}
                  className="group block h-[22rem] sm:h-[23rem] perspective-1600 cursor-pointer select-none"
                  aria-label={`${item.title} — click or hover to view technical scope`}
                >
                  <div
                    className={`relative h-full w-full transform-style-3d transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-y-180 group-focus-visible:rotate-y-180 ${
                      isManuallyFlipped ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* =========================================
                        FRONT FACE (Clean Bright Image + Localized Bottom Gradient + Title)
                        Strictly NO image zoom/scale distortion
                    ========================================= */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm backface-hidden bg-slate-100">
                      <Image
                        src={item.image}
                        alt={`${item.title} - Euro Edge Technical Services Dubai`}
                        fill
                        quality={85}
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Minimal localized bottom gradient ONLY behind the text at the bottom */}
                      <div className="absolute bottom-0 inset-x-0 h-28 sm:h-32 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />

                      {/* Bottom: ONLY Service Title */}
                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="font-editorial-h2 text-xl sm:text-2xl text-white font-medium leading-snug drop-shadow-md">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* =========================================
                        BACK FACE (Detailed Technical Scope + Single Enquire Now Button)
                        Styling: Logo Metallic Light Gray (#f1f5f9 / #e2e8f0)
                        Rotated 180 degrees
                    ========================================= */}
                    <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-slate-300/80 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] p-6 text-[#0a2540] backface-hidden rotate-y-180 shadow-xl">
                      {/* Top Header on Back */}
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-200 text-[#0066cc] shadow-xs">
                            <IconComponent className="w-5 h-5" />
                          </span>
                          <span className="font-editorial-eyebrow text-[10px] font-semibold tracking-wider uppercase text-[#0a2540] bg-white/90 border border-slate-300 px-2.5 py-1 rounded-md shadow-2xs">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="mt-4 font-editorial-h2 text-xl font-medium text-[#0a2540]">
                          {item.title}
                        </h3>

                        <p className="font-editorial-body mt-2 text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="mt-4 space-y-2">
                          {item.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0066cc] shrink-0 mt-0.5" />
                              <span className="font-editorial-body leading-tight font-medium">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Button on Back: Clean full-width Enquire Now button linking directly to Contact */}
                      <div className="pt-4 border-t border-slate-200">
                        <Link
                          href={`/contact?service=${encodeURIComponent(item.title)}`}
                          onClick={(e) => e.stopPropagation()}
                          className="font-editorial-eyebrow w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#fbb03b] text-[#0a2540] font-semibold text-xs uppercase tracking-wider hover:bg-[#0a2540] hover:text-white transition-colors group/btn shadow-sm"
                        >
                          Enquire Now
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          4. OUR PROCESS — FROM REQUIREMENT TO COMPLETION
      ========================================= */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-white">
        <div className="container-wide max-w-[1800px] mx-auto space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#0066cc] block">
              OUR PROCESS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-bold tracking-tight">
              From Requirement to Completion.
            </h2>
          </div>

          {/* 5-Step Process Timeline Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-4 items-start">
            {[
              {
                number: "01",
                title: "Understand",
                desc: "We understand your space, goals and technical requirements.",
                icon: FileText,
                lineStyle: "dotted",
              },
              {
                number: "02",
                title: "Assess",
                desc: "We assess the scope and provide the right technical approach.",
                icon: Search,
                lineStyle: "solid",
              },
              {
                number: "03",
                title: "Propose",
                desc: "We propose a clear plan tailored to your requirements.",
                icon: ClipboardCheck,
                lineStyle: "solid",
              },
              {
                number: "04",
                title: "Execute",
                desc: "We deliver quality work with coordination and care.",
                icon: Settings,
                lineStyle: "dotted",
              },
              {
                number: "05",
                title: "Support",
                desc: "We remain available for ongoing support and maintenance.",
                icon: Headphones,
                lineStyle: "none",
              },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col space-y-3">
                {/* Top Row: Circle with gold notch + Number & Title + Desktop Connecting Line */}
                <div className="flex items-center gap-3.5 relative">
                  {/* Circle with gold notch */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-amber-300 bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    {/* Gold top notch tab */}
                    <div className="w-3.5 h-1.5 bg-[#fbb03b] rounded-full absolute -top-1 left-1/2 -translate-x-1/2" />
                    <step.icon className="w-6 h-6 text-[#fbb03b]" />
                  </div>

                  {/* Step Number & Title */}
                  <div className="flex-shrink-0">
                    <span className="text-sm font-bold text-[#0066cc] block leading-none font-sans">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#0a2540] leading-tight mt-1">
                      {step.title}
                    </h3>
                  </div>

                  {/* Connecting Line to next step (Desktop) */}
                  {step.lineStyle !== "none" && (
                    <div
                      className="hidden lg:block flex-1 h-[2px] mx-2"
                      style={{
                        borderTop: step.lineStyle === "dotted" ? "2px dotted #cbd5e1" : "2px solid #cbd5e1",
                      }}
                    />
                  )}
                </div>

                {/* Description Text */}
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-sans max-w-[220px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* =========================================
              5. HAVE A TECHNICAL REQUIREMENT? (Contained Banner)
          ========================================= */}
          <div className="pt-4 sm:pt-6">
            <div className="relative overflow-hidden rounded-3xl bg-[#06182a] text-white shadow-2xl min-h-[300px] sm:min-h-[340px] flex items-center p-8 sm:p-12 lg:p-16 border border-slate-800">
              {/* Modern Commercial Building Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/services-technical-requirement-banner.jpg"
                  alt="Modern illuminated commercial architectural facade at twilight"
                  fill
                  className="object-cover object-right"
                  sizes="(max-width: 1200px) 100vw, 1600px"
                />
                {/* Left gradient for high-contrast text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#06182a] via-[#06182a]/90 to-transparent sm:max-w-2xl lg:max-w-3xl pointer-events-none" />
              </div>

              {/* Banner Content */}
              <div className="relative z-10 max-w-xl space-y-5">
                {/* Eyebrow with vertical gold line */}
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 sm:h-7 bg-[#fbb03b] rounded-full" />
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#fbb03b] uppercase">
                    LET&apos;S WORK TOGETHER
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-md leading-[1.12]">
                  Have a Technical Requirement?
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-slate-200/90 font-sans leading-relaxed drop-shadow-sm max-w-lg">
                  Tell us about your project, space or maintenance requirement and our team can help you with the right technical solutions.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#fbb03b] hover:bg-[#e59e2f] text-[#0a2540] font-bold text-xs tracking-wider transition-all duration-300 shadow-md group"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full border border-white/40 hover:bg-white/10 text-white font-semibold text-xs tracking-wider transition-all duration-300"
                  >
                    <span>Contact Euro Edge</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
