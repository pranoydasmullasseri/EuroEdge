import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { HomeScrollAnimations } from "@/components/home-scroll-animations"
import { DivisionsMobileRow } from "@/components/divisions-mobile-row"
import { FAQSection } from "@/components/faq-section"
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Play,
  Hammer,
  Zap,
  Waves,
  Sprout,
  Settings,
  Building2,
  Award,
  Users,
  MapPin,
  Clock,
  Briefcase,
  Compass,
  MessageSquare,
  FileSpreadsheet,
  Cog,
  Headphones,
  Phone,
  Layers,
  HeartHandshake,
  Home,
  Hotel,
  ShoppingBag,
  Factory,
  Building,
  ChevronRight,
  ChevronLeft,
  HardHat,
  FileText,
} from "lucide-react"

export const metadata = {
  title: "Euro Edge Technical Services L.L.C. | MEP, HVAC & Contracting Dubai",
  description:
    "The Edge of Quality Built on Trust. Euro Edge Technical Services L.L.C. delivers certified civil, MEP, swimming pool, landscaping, and turnkey technical contracting in Dubai and across the UAE.",
  alternates: {
    canonical: "https://euroedgets.com",
  },
  openGraph: {
    title: "Euro Edge Technical Services L.L.C. | Dubai, UAE",
    description:
      "The Edge of Quality Built on Trust. Professional civil, MEP, swimming pool, landscaping, and facilities maintenance in Dubai, UAE.",
    type: "website",
    url: "https://euroedgets.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Euro Edge Technical Services L.L.C. | Dubai, UAE",
    description:
      "The Edge of Quality Built on Trust. Professional civil, MEP, swimming pool, landscaping, and facilities maintenance in Dubai, UAE.",
  },
}

export default function HomePage() {
  return (
    <main className="overflow-x-clip bg-[#fafbfc] text-[#0a2540] font-sans min-h-screen">
      <HomeScrollAnimations />
      <Header />

      {/* =========================================================================
          SECTION 1: HERO SECTION (Wallpaper Background with Smiling Engineer)
      ========================================================================= */}
      <section data-section="hero" className="relative min-h-[520px] sm:min-h-[640px] lg:min-h-[720px] flex items-end overflow-hidden text-white bg-[#071a2e]">
        {/* Full-width Hero Background Wallpaper */}
        <div data-anim="hero-bg" className="absolute inset-0 z-0">
          <Image
            src="/images/euro-edge-hero-wallpaper.jpg"
            alt="Euro Edge Technical Services Engineer Overlooking Dubai Skyline"
            fill
            priority
            quality={85}
            className="object-cover object-[78%_top] sm:object-[82%_top] sm:object-[right_top]"
            sizes="100vw"
          />
        </div>
        {/* Bottom gradient scrim for text readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/30 to-transparent sm:from-black/70 sm:via-black/20" />

        <div className="relative z-10 container-wide max-w-[1800px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-20 lg:pb-24 w-full">
          <div className="max-w-2xl xl:max-w-3xl space-y-4 sm:space-y-6">
            {/* Brand Statement - White Color */}
            <div className="font-editorial-h1 text-[2.2rem] sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.1] sm:leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              The Edge of Quality <br />
              Built on Trust.
            </div>

            {/* Service & Location Headline - Two Lines in Goldish Tone */}
            <h1 data-anim="hero-heading" className="font-editorial-h1 text-lg sm:text-2xl lg:text-3xl text-[#fbb03b] font-normal leading-snug tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] max-w-xl">
              Professional Technical Services <br />
              And Contracting in Dubai.
            </h1>

            {/* Action Buttons: Primary Quote + Secondary Services */}
            <div data-anim="hero-cta" className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="font-editorial-nav inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#fbb03b] hover:bg-[#e09b2d] text-[#0a2540] text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-[#fbb03b]/20 hover:shadow-[#fbb03b]/30 hover:-translate-y-0.5 group text-center"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="font-editorial-nav inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 text-xs uppercase tracking-wider font-semibold transition-all backdrop-blur-md hover:-translate-y-0.5 text-center"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT EURO EDGE (Delivering Engineering Excellence Across Dubai)
      ========================================================================= */}
      <section data-section="about" className="py-14 sm:py-24 px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-white">
        <div className="container-wide max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <span data-anim="about-label" className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
              ABOUT EURO EDGE
            </span>

            <h2 data-anim="about-heading" className="font-editorial-h2 text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-medium tracking-tight leading-[1.12]">
              Delivering Engineering Excellence Across Dubai
            </h2>

            <p data-anim="about-desc" className="font-editorial-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Euro Edge Technical Services L.L.C. is a Dubai-based technical
              services company delivering reliable and high-quality solutions
              for civil, MEP, maintenance and specialist works. We combine
              technical expertise, skilled teams and a commitment to quality to
              create spaces that are functional, safe and built for the future.
            </p>

            {/* Checklist with Golden Checks */}
            <div className="space-y-3 pt-1">
              {[
                "Experienced and skilled technical team",
                "Quality materials and proven methods",
                "On-time project delivery",
                "Solutions tailored to your requirements",
              ].map((item, idx) => (
                <div key={idx} data-anim="about-list-item" className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0 border border-[#c8924b]/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-editorial-body text-xs sm:text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div data-anim="about-cta" className="pt-3">
              <Link
                href="/about"
                className="font-editorial-nav inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md group"
              >
                <span>Learn More About Our Company</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Collage Layout — desktop only for complex overlap, mobile shows single image */}
          <div data-anim="about-image" className="lg:col-span-6 relative">
            {/* Mobile: simple single image, clean */}
            <div className="block lg:hidden relative h-[280px] sm:h-[340px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/images/about-burj-sunset.jpg"
                alt="Dubai Skyline — Euro Edge Technical Services"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Mobile floating stat badge */}
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-editorial-h1 text-xl font-bold text-[#0a2540] leading-none">100%</div>
                  <div className="font-editorial-body text-[11px] text-slate-500 mt-0.5">Certified Technical Team</div>
                </div>
              </div>
            </div>

            {/* Desktop: original collage with overlapping images */}
            <div className="hidden lg:block relative">
              {/* Top-right floating stat badge */}
              <div data-anim="about-badge" className="absolute -top-6 right-4 sm:right-8 z-20 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
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
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR EXPERTISE - FIVE SPECIALIZED DIVISIONS
      ========================================================================= */}
      <section data-section="divisions" className="py-14 sm:py-24 px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#f8fafc]">
        <div className="container-wide max-w-[1800px] mx-auto space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl lg:max-w-4xl mx-auto space-y-3">
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
                className="group relative h-[220px] sm:h-[280px] lg:h-[380px] xl:h-[395px] rounded-2xl sm:rounded-[24px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-3 sm:p-5 border border-slate-200/60 hover:-translate-y-1"
              >
                {/* Full Card Background Image */}
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: division.objectPosition }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 20vw"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent group-hover:via-black/35 transition-colors pointer-events-none" />

                {/* Card Content */}
                <div className="relative z-10 space-y-1.5 sm:space-y-2.5">
                  <h3 className="font-editorial-h2 text-sm sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#fbb03b] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                    {division.title}
                  </h3>

                  <div className="block">
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
          <div data-anim="divisions-cta" className="text-center pt-2 sm:pt-4">
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
          SECTION 4: WHY CHOOSE EURO EDGE - BUILT FOR EVERY ENVIRONMENT
      ========================================================================= */}
      <section data-section="why-choose" className="py-14 sm:py-24 px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-white">
        <div className="container-wide max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Modern Architecture Photo with Floating Card */}
          <div data-anim="why-image" className="lg:col-span-6 relative">
            <div className="relative h-[360px] sm:h-[460px] lg:h-[520px] xl:h-[580px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/home-quality-spaces.jpg"
                alt="Quality Modern Architectural Spaces by Euro Edge Dubai"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating Bottom Card */}
              <div data-anim="why-image-card" className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-editorial-h2 text-sm sm:text-base font-medium text-[#0a2540] leading-snug">
                    Quality Spaces for a Better Tomorrow
                  </h4>
                  <p className="font-editorial-body text-[11px] text-slate-500 mt-0.5">
                    Residential | Commercial | Industrial
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Built for Every Environment */}
          <div className="lg:col-span-6 space-y-6">
            <span data-anim="why-label" className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
              WHY CHOOSE EURO EDGE
            </span>

            <h2 data-anim="why-heading" className="font-editorial-h2 text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-medium tracking-tight leading-[1.12]">
              Built for Every Environment.
            </h2>

            <p data-anim="why-desc" className="font-editorial-body text-slate-600 text-sm sm:text-base leading-relaxed">
              From residential communities to commercial developments and
              industrial facilities, we deliver reliable technical solutions
              that meet the highest standards of quality, safety and performance.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
              <div data-anim="why-card" className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-editorial-nav text-xs font-bold text-[#0a2540] uppercase tracking-wide">
                    Quality Workmanship
                  </h4>
                  <p className="font-editorial-body text-[11px] text-slate-500 mt-0.5">
                    Built to Last
                  </p>
                </div>
              </div>

              <div data-anim="why-card" className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-editorial-nav text-xs font-bold text-[#0a2540] uppercase tracking-wide">
                    Reliable &amp; Professional
                  </h4>
                  <p className="font-editorial-body text-[11px] text-slate-500 mt-0.5">
                    Technical Team
                  </p>
                </div>
              </div>

              <div data-anim="why-card" className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-editorial-nav text-xs font-bold text-[#0a2540] uppercase tracking-wide">
                    Safety &amp; Compliance
                  </h4>
                  <p className="font-editorial-body text-[11px] text-slate-500 mt-0.5">
                    Industry Standards
                  </p>
                </div>
              </div>

              <div data-anim="why-card" className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-editorial-nav text-xs font-bold text-[#0a2540] uppercase tracking-wide">
                    Client-Focused Approach
                  </h4>
                  <p className="font-editorial-body text-[11px] text-slate-500 mt-0.5">
                    Your Goals, Our Priority
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: INDUSTRIES WE SERVE - SOLUTIONS FOR EVERY INDUSTRY (BENTO LAYOUT)
      ========================================================================= */}
      <section data-section="industries" className="relative overflow-hidden py-14 sm:py-24 px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-gradient-to-b from-[#f8fafc] via-slate-50 to-[#f8fafc] border-y border-slate-200/60">
        {/* Soft architectural subtle ambient glow matching website backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,102,204,0.03),transparent_50%)] pointer-events-none" />

        <div className="container-wide max-w-[1800px] mx-auto relative z-10">
          {/* Asymmetric 3-Column Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 items-stretch">

            {/* ================= COLUMN 1 (LEFT) ================= */}
            <div className="flex flex-col gap-5 xl:gap-6">
              {/* Top: Header Introduction Card */}
              <div data-anim="industries-header" className="flex flex-col justify-center p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xs border border-slate-200/80 shadow-2xs h-full min-h-[340px] lg:min-h-[380px]">
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase">
                      INDUSTRIES WE SERVE
                    </span>
                    <span className="w-8 h-[2px] bg-[#fbb03b] inline-block" />
                  </div>

                  <h2 className="font-editorial-h1 font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0a2540] font-medium tracking-tight leading-[1.12]">
                    Solutions for <br className="hidden sm:inline" />
                    Every Industry<span className="text-[#fbb03b]">.</span>
                  </h2>

                  <p className="font-editorial-body text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
                    We provide technical services for a wide range of sectors, including residential, commercial and industrial properties across the UAE.
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/industries"
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0a2540] hover:bg-[#071a2e] text-white text-xs font-semibold tracking-wide transition-all shadow-md group"
                    >
                      <span>Explore All Industries</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom: Card 03 - Hospitality */}
              <Link
                href="/industries#hospitality"
                data-anim="industry-card"
                className="group relative h-[320px] lg:h-[360px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-500 block"
              >
                <Image
                  src="/images/industries/sector-03-hospitality.jpg"
                  alt="Hospitality Technical Services"
                  fill
                  quality={90}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Text Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-transparent pointer-events-none" />

                {/* Card Header Text */}
                <div className="absolute top-0 inset-x-0 p-6 z-10 space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-white drop-shadow-xs">
                    Hospitality
                  </h3>
                  <p className="font-sans text-xs text-white/90 leading-relaxed max-w-[240px]">
                    Hotels, resorts and hospitality facilities with high-quality technical services.
                  </p>
                </div>
              </Link>
            </div>

            {/* ================= COLUMN 2 (MIDDLE) ================= */}
            <div className="flex flex-col gap-5 xl:gap-6">
              {/* Top: Card 01 - Residential */}
              <Link
                href="/industries#residential"
                data-anim="industry-card"
                className="group relative h-[340px] lg:h-[380px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-500 block"
              >
                <Image
                  src="/images/industries/sector-01-residential.jpg"
                  alt="Residential Technical Services"
                  fill
                  quality={90}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Text Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-transparent pointer-events-none" />

                {/* Card Header Text */}
                <div className="absolute top-0 inset-x-0 p-6 z-10 space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-white drop-shadow-xs">
                    Residential
                  </h3>
                  <p className="font-sans text-xs text-white/90 leading-relaxed max-w-[240px]">
                    Villas, apartments and residential communities with complete technical solutions.
                  </p>
                </div>
              </Link>

              {/* Bottom: Card 04 - Retail */}
              <Link
                href="/industries#retail"
                data-anim="industry-card"
                className="group relative h-[320px] lg:h-[360px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-500 block"
              >
                <Image
                  src="/images/industries/sector-05-retail.jpg"
                  alt="Retail Technical Services"
                  fill
                  quality={90}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Text Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-transparent pointer-events-none" />

                {/* Card Header Text */}
                <div className="absolute top-0 inset-x-0 p-6 z-10 space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-white drop-shadow-xs">
                    Retail
                  </h3>
                  <p className="font-sans text-xs text-white/90 leading-relaxed max-w-[240px]">
                    Retail outlets, showrooms and commercial spaces with tailored solutions.
                  </p>
                </div>
              </Link>
            </div>

            {/* ================= COLUMN 3 (RIGHT) ================= */}
            <div className="flex flex-col gap-5 xl:gap-6 md:col-span-2 lg:col-span-1">
              {/* Top: Card 02 - Commercial */}
              <Link
                href="/industries#commercial"
                data-anim="industry-card"
                className="group relative h-[340px] lg:h-[380px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-500 block"
              >
                <Image
                  src="/images/industries/sector-02-commercial.jpg"
                  alt="Commercial Technical Services"
                  fill
                  quality={90}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Text Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-transparent pointer-events-none" />

                {/* Card Header Text */}
                <div className="absolute top-0 inset-x-0 p-6 z-10 space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-white drop-shadow-xs">
                    Commercial
                  </h3>
                  <p className="font-sans text-xs text-white/90 leading-relaxed max-w-[240px]">
                    Office buildings, retail spaces and commercial developments.
                  </p>
                </div>
              </Link>

              {/* Bottom: Stacked Cards (Card 05 Industrial + Card 06 Property Management) */}
              <div className="flex flex-col gap-4 h-[320px] lg:h-[360px]">
                {/* Card 05 - Industrial */}
                <Link
                  href="/industries#industrial"
                  data-anim="industry-card"
                  className="group relative flex-1 rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-500 block"
                >
                  <Image
                    src="/images/industries/sector-06-industrial.jpg"
                    alt="Industrial Technical Services"
                    fill
                    quality={90}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Scrim Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent pointer-events-none" />

                  {/* Text Overlay */}
                  <div className="absolute top-0 inset-x-0 p-4 sm:p-5 z-10 space-y-0.5">
                    <h3 className="font-serif text-lg font-bold text-white drop-shadow-xs">
                      Industrial
                    </h3>
                    <p className="font-sans text-[11px] text-white/85 leading-tight max-w-[210px]">
                      Industrial facilities and specialized spaces with reliable technical support.
                    </p>
                  </div>
                </Link>

                {/* Card 06 - Property Management */}
                <Link
                  href="/industries#property-management"
                  data-anim="industry-card"
                  className="group relative flex-1 rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-500 block"
                >
                  <Image
                    src="/images/industries/sector-07-property.jpg"
                    alt="Property Management Technical Services"
                    fill
                    quality={90}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Scrim Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent pointer-events-none" />

                  {/* Text Overlay */}
                  <div className="absolute top-0 inset-x-0 p-4 sm:p-5 z-10 space-y-0.5">
                    <h3 className="font-serif text-lg font-bold text-white drop-shadow-xs">
                      Property Management
                    </h3>
                    <p className="font-sans text-[11px] text-white/85 leading-tight max-w-[210px]">
                      Ongoing maintenance and technical support for properties.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR WORK PROCESS - A SIMPLE & RELIABLE PROCESS (TIMELINE FLOW)
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
          SECTION 7: OUR IMPACT - NUMBERS THAT REFLECT OUR COMMITMENT (Light Version)
      ========================================================================= */}
      <section data-section="impact" className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-white border-b border-slate-200">
        <div className="container-wide max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline */}
            <div data-anim="impact-heading" className="lg:col-span-5 space-y-2">
              <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
                OUR IMPACT
              </span>
              <h2 className="font-editorial-h2 text-3xl sm:text-4xl text-[#0a2540] font-medium leading-tight tracking-tight">
                Numbers That <br className="hidden sm:inline" />
                Reflect Our Commitment
              </h2>
              <div className="w-16 h-0.5 bg-[#c8924b] mt-2" />
            </div>

            {/* Right 4 Metric Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div data-anim="impact-metric" className="space-y-1.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center mx-auto sm:mx-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-bold text-[#0a2540]">
                  100%
                </div>
                <div className="font-editorial-body text-xs text-slate-500">
                  Certified In-House Team
                </div>
              </div>

              <div data-anim="impact-metric" className="space-y-1.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center mx-auto sm:mx-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-bold text-[#0a2540]">
                  5
                </div>
                <div className="font-editorial-body text-xs text-slate-500">
                  Specialized Divisions
                </div>
              </div>

              <div data-anim="impact-metric" className="space-y-1.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center mx-auto sm:mx-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-bold text-[#0a2540]">
                  24/7
                </div>
                <div className="font-editorial-body text-xs text-slate-500">
                  Rapid Response Hotline
                </div>
              </div>

              <div data-anim="impact-metric" className="space-y-1.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center mx-auto sm:mx-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-bold text-[#0a2540]">
                  7
                </div>
                <div className="font-editorial-body text-xs text-slate-500">
                  Emirates Covered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: FREQUENTLY ASKED QUESTIONS
      ========================================================================= */}
      <FAQSection />

      {/* =========================================================================
          SECTION 8: READY TO BUILD TOGETHER? (Contained Sunset Skyline Banner)
      ========================================================================= */}
      <section data-section="final-cta" className="py-14 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-slate-200 min-h-[360px] sm:min-h-[400px] flex items-center">
            {/* Background Dubai Sunset Skyline Image */}
            <div data-anim="cta-bg" className="absolute inset-0 z-0">
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
              <div data-anim="cta-content" className="space-y-6">
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
