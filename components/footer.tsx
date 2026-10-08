"use client"

import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  ArrowRight,
  ArrowUp,
} from "lucide-react"

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  )
}

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#071f33] bg-gradient-to-b from-[#103d63] via-[#0b2d49] to-[#071f33] text-white relative font-sans pt-10 sm:pt-12 md:pt-14 overflow-hidden border-t border-sky-400/20" style={{ paddingBottom: 'max(40px, env(safe-area-inset-bottom, 40px))' }}>
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/10 rounded-full blur-[120px]" />
        
        {/* Subtle Curved Accent Line */}
        <svg
          className="absolute bottom-16 left-0 w-full h-[180px] md:h-[240px] opacity-25"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 280 C 450 310, 850 80, 1600 60"
            stroke="url(#footer-arc-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M-100 295 C 470 320, 870 95, 1600 75"
            stroke="url(#footer-arc-gradient)"
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />
          <defs>
            <linearGradient id="footer-arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.2" />
              <stop offset="45%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-wide max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        {/* Top Section: Refined 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8">
          
          {/* Column 1: Reduced Brand Logo & White Name (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <Link href="/" className="inline-flex items-center gap-3 w-fit select-none">
              {/* Reduced & Refined Logo with anti-copy protection */}
              <div
                className="relative w-10 h-10 md:w-11 md:h-11 flex-shrink-0 drop-shadow-md select-none"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src="/images/logo-footer.png"
                  alt="Euro Edge Technical Services Logo"
                  fill
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="object-contain pointer-events-none select-none [-webkit-user-drag:none] [-webkit-touch-callout:none]"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg md:text-xl leading-tight text-white tracking-tight">
                  EURO EDGE
                </span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.22em] text-white font-semibold">
                  TECHNICAL SERVICES L.L.C
                </span>
              </div>
            </Link>
            <p className="mt-3 text-xs text-sky-100/90 font-medium italic">
              &quot;The Edge of Quality Built on Trust&quot;
            </p>
            <p className="mt-2 text-xs text-white/75 leading-relaxed max-w-sm font-sans">
              Certified technical contracting solutions for residential, commercial, and industrial properties in Dubai and across the UAE.
            </p>
          </div>

          {/* Column 2: Official Services (Span 3) — hidden on mobile */}
          <div className="hidden sm:block lg:col-span-3">
            <p className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              Our Main Services
            </p>
            <ul className="space-y-2.5 text-xs text-white/85 font-normal">
              <li>
                <Link href="/services" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Painting, Tiling &amp; Gypsum Finishing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Electrical, Plumbing &amp; HVAC Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Swimming Pool Construction &amp; Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Soft &amp; Hard Landscaping &amp; Paving
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Building &amp; Villa Maintenance (AMC)
                </Link>
              </li>
              <li className="pt-1.5">
                <Link href="/services" className="text-sky-100 hover:text-white text-[11px] font-semibold inline-flex items-center gap-1 group">
                  <span>View All Capabilities</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Navigation — hidden on mobile, visible sm+ */}
          <div className="hidden sm:block lg:col-span-2">
            <p className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              Company
            </p>
            <ul className="space-y-2.5 text-xs text-white/85 font-normal">
              <li>
                <Link href="/" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact (Span 3) - Real WhatsApp Icon & No Hover Flash */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              Direct Contact
            </p>
            <ul className="space-y-3 text-xs text-white/90">
              <li>
                <a
                  href="tel:+971543909946"
                  className="flex items-center gap-2.5 text-white/90 hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">+971 54 390 9946</span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/971543909946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/90 hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center text-white flex-shrink-0">
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">+971 54 390 9946</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@euroedgets.com"
                  className="flex items-center gap-2.5 text-white/90 hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span>info@euroedgets.com</span>
                </a>
              </li>

              <li>
                <div className="flex items-center gap-2.5 text-white/90">
                  <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Prominent Architectural "EURO EDGE" Statement Typography */}
        <div className="pt-6 sm:pt-8 pb-3 sm:pb-4 text-center relative select-none border-t border-white/15 overflow-hidden">
          <div className="inline-block relative">
            <h2 className="footer-brand-text font-sans font-black tracking-tight sm:tracking-wider leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/95 via-sky-100/70 to-white/15 uppercase block filter drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]" style={{ fontSize: 'clamp(42px, 13vw, 140px)' }}>
              EURO EDGE
            </h2>
            <div className="flex items-center justify-center gap-2.5 sm:gap-4 mt-2 sm:mt-3 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] text-white uppercase font-semibold">
              <span>Technical Services L.L.C</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
              <span>Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* Official Company Details & Copyright */}
        <div className="border-t border-white/15 mt-4 sm:mt-6 pt-4 sm:pt-6 pb-4 sm:pb-6 md:pb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 text-center lg:text-left lg:pr-24">
            {/* Primary Required Text: Company Name, Dubai UAE, and Copyright */}
            <div className="space-y-1.5 max-w-xl">
              <p className="text-xs sm:text-sm text-white font-semibold tracking-normal sm:tracking-wide">
                EURO EDGE — Technical Services L.L.C. • Dubai, United Arab Emirates
              </p>
              <div className="flex items-center gap-2.5 text-[11px] sm:text-xs text-sky-100/80 font-normal justify-center lg:justify-start flex-wrap">
                <span>© 2026 Euro Edge Technical Services L.L.C. All rights reserved.</span>
                <span className="text-white/40">•</span>
                <Link href="/privacy-policy" className="hover:text-white underline underline-offset-2 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-white/40">•</span>
                <Link href="/terms-and-conditions" className="hover:text-white underline underline-offset-2 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>

            {/* Social Media Channels & Back to Top */}
            <div className="flex items-center gap-2.5 flex-wrap justify-center">
              {/* WhatsApp */}
              <a
                href="https://wa.me/971543909946"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                aria-label="Euro Edge WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>

              {/* Phone */}
              <a
                href="tel:+971543909946"
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                aria-label="Euro Edge Phone"
                title="Call Directly"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/euro_edge?stkn=Zno1OGRpZjVpdGMw&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-[#E1306C] text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                aria-label="Euro Edge Instagram"
                title="Follow on Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/euro-edge-technical-services-llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-[#0077b5] text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                aria-label="Euro Edge LinkedIn"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>

              {/* Email */}
              <a
                href="mailto:info@euroedgets.com"
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                aria-label="Euro Edge Email"
                title="Send an Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#103d63] border border-white/30 flex items-center justify-center transition-all duration-200 ml-1.5 group shadow-sm hover:scale-105"
                aria-label="Back to Top"
                title="Back to Top"
              >
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
