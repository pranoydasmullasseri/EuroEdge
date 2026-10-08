import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { AboutScrollAnimations } from "@/components/about-scroll-animations"
import { DivisionsMobileRow } from "@/components/divisions-mobile-row"
import {
  ShieldCheck,
  Users,
  Compass,
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  Hammer,
  Zap,
  Waves,
  Sprout,
  Settings,
  Award,
  Building2,
  MapPin,
  MessageSquare,
  FileSpreadsheet,
  Cog,
  Headphones,
  Phone,
  Clock,
  ChevronRight,
  ChevronLeft,
  HardHat,
  FileText,
} from "lucide-react"

export const metadata = {
  title: "About Us | Euro Edge Technical Services L.L.C. — Dubai Contractor",
  description:
    "Euro Edge Technical Services L.L.C. is a Dubai-based certified contractor delivering civil finishing, MEP, swimming pool, landscaping, and building maintenance services across Dubai and the UAE with quality-first craftsmanship.",
  keywords: [
    "technical contracting company Dubai",
    "Euro Edge Technical Services",
    "MEP company Dubai",
    "certified contractor UAE",
    "civil engineering company Dubai",
  ],
  alternates: {
    canonical: "https://www.euroedgets.com/about",
  },
  openGraph: {
    title: "About Us | Euro Edge Technical Services L.L.C. — Dubai Contractor",
    description:
      "Dubai-based certified contractor delivering civil, MEP, pool, landscaping, and maintenance services across the UAE with quality-first craftsmanship.",
    type: "website",
    url: "https://www.euroedgets.com/about",
    siteName: "Euro Edge Technical Services L.L.C.",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Euro Edge Technical Services L.L.C. — Dubai Contractor",
    description:
      "Dubai-based certified contractor delivering civil, MEP, pool, landscaping, and maintenance services across the UAE.",
  },
}

export default function AboutPage() {
  return (
    <main className="bg-[#fafbfc] text-[#0a2540] font-sans min-h-screen overflow-x-clip">
      <AboutScrollAnimations />
      <Header />

      {/* =========================================================================
          SECTION 1: HERO SECTION (Exact Match to User Reference Mockup)
      ========================================================================= */}
      <section data-section="about-hero" className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 pt-24 sm:pt-36 lg:pt-40 pb-12 lg:pb-24">
        <div className="container-wide max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <span data-anim="about-hero-label" className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
                ABOUT EURO EDGE
              </span>

              <h1 data-anim="about-hero-heading" className="font-editorial-h1 text-[2rem] sm:text-5xl lg:text-[3.8rem] text-[#0a2540] font-medium leading-[1.06] tracking-tight">
                Building Better Spaces for a{" "}
                <span className="text-[#c8924b] block sm:inline font-normal">
                  Brighter Tomorrow.
                </span>
              </h1>

              <p data-anim="about-hero-desc" className="font-editorial-body text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Euro Edge Technical Services L.L.C. is a Dubai-based technical
                services company delivering high-quality civil, MEP, maintenance
                and specialist solutions for residential, commercial and
                industrial spaces across the UAE.
              </p>

              {/* 3 Core Highlight Badges - single row on mobile */}
              <div className="flex flex-row gap-4 sm:grid sm:grid-cols-3 pt-2 overflow-x-auto pb-1 scrollbar-hide">
                <div data-anim="about-hero-badge" className="flex items-center gap-3 min-w-max sm:min-w-0">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0 border border-blue-200/60 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-editorial-nav text-xs font-semibold text-[#0a2540] leading-snug">
                      Quality Workmanship
                    </p>
                    <p className="font-editorial-body text-[11px] text-slate-500">
                      Built to Last
                    </p>
                  </div>
                </div>

                <div data-anim="about-hero-badge" className="flex items-center gap-3 min-w-max sm:min-w-0">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0 border border-blue-200/60 shadow-2xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-editorial-nav text-xs font-semibold text-[#0a2540] leading-snug">
                      Reliable &amp; Professional
                    </p>
                    <p className="font-editorial-body text-[11px] text-slate-500">
                      Technical Team
                    </p>
                  </div>
                </div>

                <div data-anim="about-hero-badge" className="flex items-center gap-3 min-w-max sm:min-w-0">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0 border border-blue-200/60 shadow-2xs">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-editorial-nav text-xs font-semibold text-[#0a2540] leading-snug">
                      Serving All
                    </p>
                    <p className="font-editorial-body text-[11px] text-slate-500">
                      7 Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image - compact on mobile */}
            <div className="lg:col-span-6 relative">
              <div data-anim="about-hero-image" className="relative h-[280px] sm:h-[500px] lg:h-[560px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="/images/about-hero-technician-official.jpg"
                  alt="Euro Edge Certified Technical Services Specialist with Safety Helmet and Toolbelt Dubai"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHO WE ARE (Engineering Excellence with a People-First Approach)
      ========================================================================= */}
      <section data-section="who-we-are" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-white">
        <div className="container-wide max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Collage Layout — desktop only, mobile gets simple image */}
          <div data-anim="who-images" className="lg:col-span-6 relative">
            {/* Mobile: simple single image */}
            <div className="block lg:hidden relative h-[260px] sm:h-[340px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/images/about-burj-sunset.jpg"
                alt="Dubai Skyline — Euro Edge Technical Services"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow border border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#0a2540] leading-none">100%</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Certified Technical Team</div>
                </div>
              </div>
            </div>

            {/* Desktop: overlapping collage */}
            <div className="hidden lg:block relative">
              {/* Top-right floating stat badge */}
              <div className="absolute -top-6 right-4 sm:right-8 z-20 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-editorial-h1 text-2xl font-bold text-[#0a2540] leading-none">
                    100%
                  </div>
                  <div className="font-editorial-body text-[11px] text-slate-500 mt-0.5">
                    Certified Technical Team
                  </div>
                </div>
              </div>

              {/* Background Arched Burj Sunset Photo */}
              <div className="relative h-80 sm:h-96 w-4/5 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/images/about-burj-sunset.jpg"
                  alt="Burj Khalifa Dubai Sunset Architecture"
                  fill
                  className="object-cover object-center"
                  sizes="40vw"
                />
              </div>

              {/* Overlapping Bottom Luxury Villa & Landscaping Photo */}
              <div className="relative -mt-28 ml-auto w-3/4 h-56 sm:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                <Image
                  src="/images/about-luxury-villa.jpg"
                  alt="Euro Edge Luxury Villa Contracting & Landscaping Dubai"
                  fill
                  className="object-cover object-center"
                  sizes="35vw"
                />
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            <div className="space-y-2">
              <span data-anim="who-label" className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
                WHO WE ARE
              </span>
              <h2 data-anim="who-heading" className="font-editorial-h2 text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-medium tracking-tight leading-[1.12]">
                Engineering Excellence with a People-First Approach
              </h2>
            </div>

            <p data-anim="who-desc" className="font-editorial-body text-slate-600 text-sm sm:text-base leading-relaxed">
              At Euro Edge, we combine technical expertise, practical experience
              and a commitment to quality to deliver spaces that are
              functional, beautiful and built for the future. Our
              multidisciplinary team works closely with clients, consultants and
              facility owners to ensure every project exceeds expectations.
            </p>

            {/* Checklist with Golden Checks */}
            <div className="space-y-3 pt-1">
              {[
                "Professional and skilled technical team",
                "Quality materials and proven methods",
                "On-time project delivery",
                "Solutions tailored to your requirements",
              ].map((item, idx) => (
                <div key={idx} data-anim="who-list-item" className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0 border border-[#c8924b]/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-editorial-body text-xs sm:text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Pill CTA Button */}
            <div data-anim="who-cta" className="pt-3">
              <Link
                href="/services"
                className="font-editorial-nav inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md group"
              >
                <span>More About Our Company</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MISSION & VISION (Architectural Split Cards with Slanted Skyline Images)
      ========================================================================= */}
      <section data-section="mission-vision" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#f8fafc]">
        <div className="container-wide max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
          
          {/* Card 1: OUR MISSION */}
          <div
            data-anim="mv-card"
            className="group relative rounded-3xl sm:rounded-[32px] bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col md:flex-row hover:-translate-y-1"
          >
            {/* Left Content Area */}
            <div className="flex-1 p-7 sm:p-9 lg:p-10 flex flex-col justify-between space-y-6 relative z-10">
              {/* Background Watermark 01 */}
              <span className="font-serif text-7xl sm:text-8xl font-bold text-slate-100 select-none pointer-events-none absolute top-4 right-6 md:right-8 -z-10 leading-none">
                01
              </span>

              {/* Top Row: Icon + Label */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fdf6ec] border border-[#fbb03b]/40 flex items-center justify-center shrink-0 text-[#c8924b] shadow-2xs">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <span className="w-6 h-[2px] bg-[#fbb03b] inline-block" />
                <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#0066cc]">
                  OUR MISSION
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3">
                <h3 className="font-editorial-h2 font-serif text-2xl sm:text-3xl lg:text-[2.1rem] text-[#0a2540] font-medium tracking-tight leading-[1.12]">
                  Delivering Lasting Value<span className="text-[#fbb03b]">.</span>
                </h3>
                <p className="font-editorial-body text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                  To deliver reliable, high-quality technical services that enhance the value, safety and functionality of every space we work on, while building long-term relationships with our clients across the UAE.
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0a2540] hover:text-[#0066cc] transition-colors group/link"
                >
                  <span>OUR APPROACH</span>
                  <ArrowRight className="w-4 h-4 text-[#fbb03b] transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Slanted Image Container */}
            <div className="relative w-full md:w-[48%] min-h-[240px] md:min-h-[360px] overflow-hidden shrink-0">
              <div className="absolute inset-0 w-full h-full md:[clip-path:polygon(18%_0%,100%_0%,100%_100%,0%_100%)]">
                <Image
                  src="/images/about-luxury-villa.jpg"
                  alt="Euro Edge Mission - Delivering Lasting Value Across Dubai"
                  fill
                  className="object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
            </div>
          </div>

          {/* Card 2: OUR VISION */}
          <div
            data-anim="mv-card"
            className="group relative rounded-3xl sm:rounded-[32px] bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col md:flex-row hover:-translate-y-1"
          >
            {/* Left Content Area */}
            <div className="flex-1 p-7 sm:p-9 lg:p-10 flex flex-col justify-between space-y-6 relative z-10">
              {/* Background Watermark 02 */}
              <span className="font-serif text-7xl sm:text-8xl font-bold text-slate-100 select-none pointer-events-none absolute top-4 right-6 md:right-8 -z-10 leading-none">
                02
              </span>

              {/* Top Row: Icon + Label */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f0f7ff] border border-[#0066cc]/30 flex items-center justify-center shrink-0 text-[#0066cc] shadow-2xs">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="w-6 h-[2px] bg-[#fbb03b] inline-block" />
                <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#0066cc]">
                  OUR VISION
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3">
                <h3 className="font-editorial-h2 font-serif text-2xl sm:text-3xl lg:text-[2.1rem] text-[#0a2540] font-medium tracking-tight leading-[1.12]">
                  A Trusted Partner for Better Spaces<span className="text-[#fbb03b]">.</span>
                </h3>
                <p className="font-editorial-body text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                  To be a trusted and preferred technical services partner in the UAE, recognized for our quality, integrity, innovation and commitment to creating better spaces for communities and businesses.
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0a2540] hover:text-[#0066cc] transition-colors group/link"
                >
                  <span>OUR COMMITMENT</span>
                  <ArrowRight className="w-4 h-4 text-[#fbb03b] transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Slanted Image Container */}
            <div className="relative w-full md:w-[48%] min-h-[240px] md:min-h-[360px] overflow-hidden shrink-0">
              <div className="absolute inset-0 w-full h-full md:[clip-path:polygon(18%_0%,100%_0%,100%_100%,0%_100%)]">
                <Image
                  src="/images/about-vision-burj.jpg"
                  alt="Euro Edge Vision - A Trusted Partner for Better Spaces Dubai"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FIVE SPECIALIZED DIVISIONS (5 Cards in a Row)
      ========================================================================= */}
      <section data-section="divisions" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#f8fafc]">
        <div className="container-wide max-w-[1800px] mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span data-anim="divisions-label" className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
              OUR EXPERTISE
            </span>
            <h2 data-anim="divisions-heading" className="font-editorial-h2 text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-bold tracking-tight">
              Five Specialized Divisions
            </h2>
            <p data-anim="divisions-desc" className="font-editorial-body text-sm sm:text-base text-slate-600 leading-relaxed">
              We offer a complete range of technical services, allowing us to
              support your project from initial works to ongoing maintenance —
              all under one team.
            </p>
          </div>

          {/* Mobile View: Single Row auto-swiping peek carousel (100% first card, ~20% right peek, 3s auto-swipe, no buttons) */}
          <DivisionsMobileRow />

          {/* Desktop View: 5-column grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 xl:gap-6">
            {[
              {
                id: "facility",
                title: "Facility Management",
                image: "/images/services/facility-management-official.jpg",
                slug: "general-maintenance-amc",
                objectPosition: "center 18%",
              },
              {
                id: "fitout",
                title: "Fit-Out & Renovation",
                image: "/images/services/fit-out-renovation-official.jpg",
                slug: "civil-finishing-works",
                objectPosition: "68% 25%",
              },
              {
                id: "mep",
                title: "MEP & HVAC Systems",
                image: "/images/services/mep-technical.jpg",
                slug: "mep-technical-works",
                objectPosition: "center 20%",
              },
              {
                id: "civil",
                title: "Civil Maintenance",
                image: "/images/services/civil-maintenance-official.jpg",
                slug: "civil-finishing-works",
                objectPosition: "45% 25%",
              },
              {
                id: "pool-landscaping",
                title: "Pool & Landscaping",
                image: "/images/services/swimming-pool.jpg",
                slug: "swimming-pool-works",
                objectPosition: "center 30%",
              },
            ].map((division) => (
              <Link
                key={division.id}
                data-anim="divisions-card"
                href={`/services/${division.slug}`}
                className="group relative h-[220px] sm:h-[360px] lg:h-[380px] xl:h-[395px] rounded-2xl sm:rounded-[24px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-3 sm:p-5 border border-slate-200/60 hover:-translate-y-1"
              >
                {/* Full Card Background Image with Zoomed-Out Maximum View */}
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: division.objectPosition }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />

                {/* Soft Gradient Scrim for optimal image clarity & readable text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent group-hover:via-black/35 transition-colors pointer-events-none" />

                {/* Card Content at bottom: Service Name and Explore Button */}
                <div className="relative z-10 space-y-2.5">
                  <h3 className="font-editorial-h2 text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#fbb03b] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                    {division.title}
                  </h3>

                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 group-hover:bg-[#0a2540] border border-white/25 group-hover:border-[#fbb03b] text-white text-[11px] font-semibold backdrop-blur-sm transition-all shadow-md">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#fbb03b]" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Action Button */}
          <div data-anim="divisions-cta" className="text-center pt-4">
            <Link
              href="/services"
              className="font-editorial-nav inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md group"
            >
              <span>Explore All Capabilities &amp; Divisions</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR IMPACT (Dark Blue Strip with 4 Metrics)
      ========================================================================= */}
      <section data-section="impact" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#071a2e] text-white">
        <div className="container-wide max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline */}
            <div data-anim="impact-heading" className="lg:col-span-4 space-y-1.5">
              <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#fbb03b] tracking-[0.2em] uppercase block">
                OUR IMPACT
              </span>
              <h2 className="font-editorial-h1 text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-tight tracking-tight">
                Numbers That <br className="hidden sm:inline" />
                Reflect Our Commitment
              </h2>
            </div>

            {/* Right 4 Stats */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div data-anim="impact-metric" className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  <ShieldCheck className="w-6 h-6 text-[#fbb03b]" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-medium text-white">
                  100%
                </div>
                <div className="font-editorial-body text-xs text-slate-300">
                  Certified In-House Team
                </div>
              </div>

              <div data-anim="impact-metric" className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  <Building2 className="w-6 h-6 text-[#fbb03b]" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-medium text-white">
                  5
                </div>
                <div className="font-editorial-body text-xs text-slate-300">
                  Specialized Divisions
                </div>
              </div>

              <div data-anim="impact-metric" className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  <Clock className="w-6 h-6 text-[#fbb03b]" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-medium text-white">
                  24/7
                </div>
                <div className="font-editorial-body text-xs text-slate-300">
                  Dedicated Support &amp; SLA
                </div>
              </div>

              <div data-anim="impact-metric" className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  <MapPin className="w-6 h-6 text-[#fbb03b]" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-medium text-white">
                  7
                </div>
                <div className="font-editorial-body text-xs text-slate-300">
                  Emirates Covered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: OUR WORK PROCESS - A SIMPLE & RELIABLE PROCESS (TIMELINE FLOW)
      ========================================================================= */}
      <section data-section="work-process" className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#fbfcfe]">
        <div className="relative z-10 container-wide max-w-[1800px] mx-auto space-y-12 sm:space-y-16">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
            <div className="space-y-2 max-w-xl">
              <div data-anim="process-label" className="flex items-center gap-3">
                <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase">
                  OUR WORK PROCESS
                </span>
                <span className="w-8 h-[2px] bg-[#fbb03b] inline-block" />
              </div>
              <h2 data-anim="process-heading" className="font-editorial-h2 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-medium tracking-tight">
                A Simple &amp; Reliable Process
              </h2>
              <p data-anim="process-desc" className="font-editorial-body text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed pt-1">
                We follow a clear and structured process to ensure every project is
                delivered smoothly, on time and to the highest standards.
              </p>
            </div>

            {/* Top-Right Commitment Badge */}
            <div data-anim="process-commitment" className="flex items-center gap-4">
              <div className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-xs border border-slate-200/90 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#0a2540] leading-snug">
                    Our Commitment
                  </h4>
                  <p className="font-editorial-body text-[11px] text-slate-500 leading-tight max-w-[220px]">
                    Clear communication, professional execution and reliable support at every stage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Timeline Flow */}
          <div className="relative">
            {/* Smooth Connecting Line SVG (Visible on lg+ desktop view) */}
            <div className="hidden lg:block absolute top-[88px] xl:top-[96px] left-0 right-0 w-full h-[60px] pointer-events-none z-0">
              <svg
                viewBox="0 0 1000 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Curve 1 -> 2 (Blue) */}
                <path
                  d="M 195 24 C 235 44, 265 44, 305 24"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Curve 2 -> 3 (Amber/Gold with central node) */}
                <path
                  d="M 445 24 C 475 42, 490 42, 500 42 C 510 42, 525 42, 555 24"
                  stroke="#fbb03b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="500" cy="42" r="4.5" fill="#fbb03b" />
                {/* Curve 3 -> 4 (Amber/Gold) */}
                <path
                  d="M 695 24 C 735 44, 765 44, 805 24"
                  stroke="#fbb03b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* 4 Process Step Circular Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6 relative z-10">
              {[
                {
                  step: "01",
                  title: "Understand",
                  desc: "We discuss your requirements and site conditions to understand your goals clearly.",
                  image: "/images/process/process-01-square.jpg",
                  icon: MessageSquare,
                  accentColor: "blue",
                },
                {
                  step: "02",
                  title: "Plan",
                  desc: "We evaluate the scope and site details, then propose the best solution with a clear timeline.",
                  image: "/images/process/process-02-square.jpg",
                  icon: FileText,
                  accentColor: "blue",
                },
                {
                  step: "03",
                  title: "Execute",
                  desc: "Our team carries out the work with quality materials, safety and attention to detail.",
                  image: "/images/process/process-03-square.jpg",
                  icon: Cog,
                  accentColor: "gold",
                },
                {
                  step: "04",
                  title: "Support",
                  desc: "We remain available for ongoing support, maintenance and future requirements.",
                  image: "/images/process/process-04-square.jpg",
                  icon: Headphones,
                  accentColor: "blue",
                },
              ].map((p) => (
                <div
                  key={p.step}
                  data-anim="process-step"
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circular Image Node with Floating Badges */}
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 lg:w-48 lg:h-48 xl:w-52 xl:h-52">
                    {/* Ring Halo Container */}
                    <div className="w-full h-full rounded-full p-1.5 bg-gradient-to-br from-white via-slate-100 to-slate-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-slate-200/70 transition-transform duration-500 group-hover:scale-105">
                      <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-slate-100">
                        <Image
                          src={p.image}
                          alt={`${p.step} - ${p.title}`}
                          fill
                          sizes="(max-width: 640px) 180px, (max-width: 1024px) 200px, 220px"
                          className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                    </div>

                    {/* Step Number Badge (Bottom-Left) */}
                    <div className="absolute -bottom-1 left-2 sm:bottom-0 sm:left-2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#0a2540] font-serif font-bold text-sm sm:text-base flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.12)] border border-slate-100 transition-transform group-hover:scale-110">
                      {p.step}
                    </div>

                    {/* Category Icon Badge (Top-Right) */}
                    <div className="absolute -top-1 right-2 sm:top-0 sm:right-2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#0066cc] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.12)] border border-slate-100 transition-transform group-hover:scale-110">
                      <p.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content Below Circle */}
                  <div className="space-y-2 mt-5 sm:mt-6">
                    <h3 className="font-editorial-h2 font-serif text-xl sm:text-2xl font-bold text-[#0a2540] tracking-tight group-hover:text-[#0066cc] transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-editorial-body text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-[240px] mx-auto">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: READY TO BUILD TOGETHER? (Contained Sunset Skyline Banner)
      ========================================================================= */}
      <section data-section="about-cta" className="py-14 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-slate-200 min-h-[360px] sm:min-h-[400px] flex items-center">
            {/* Background Dubai Sunset Skyline Image */}
            <div data-anim="about-cta-bg" className="absolute inset-0 z-0">
              <Image
                src="/images/about-bottom-banner.jpg"
                alt="Dubai Skyline Sunset Burj Khalifa Silhouette"
                fill
                className="object-cover object-bottom"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* Light shade on the left side text displayed background */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent z-[1] pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-2xl">
              <div data-anim="about-cta-content" className="space-y-6">
                <div className="space-y-3">
                  <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-bold text-[#fbb03b] tracking-[0.2em] uppercase block drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                    READY TO BUILD TOGETHER?
                  </span>

                  <h2 className="font-editorial-h1 text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                    Let&apos;s Build Something Great Together.
                  </h2>

                  <p className="font-editorial-body text-sm sm:text-base text-white/95 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    Talk to our team today and get the right technical solution for your project.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="font-editorial-nav inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#fbb03b] hover:bg-[#e09b2d] text-[#0a2540] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xl group"
                  >
                    <span>Make an Enquiry</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="tel:+971543909946"
                    className="font-editorial-nav inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/30 text-xs font-semibold uppercase tracking-wider transition-colors backdrop-blur-md shadow-lg"
                  >
                    <Phone className="w-4 h-4 text-[#fbb03b]" />
                    <span>+971 54 390 9946</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyContactWidget />
    </main>
  )
}
