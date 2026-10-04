import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { ContactForm } from "@/components/contact-form"
import {
  User,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Briefcase,
} from "lucide-react"

export const metadata = {
  title: "Contact Us | Euro Edge Technical Services L.L.C. Dubai",
  description:
    "Get in touch with Euro Edge Technical Services L.L.C. in Dubai for MEP, civil finishing, HVAC, swimming pool, landscaping, or building maintenance enquiries. Fast response guaranteed.",
  keywords: [
    "contact technical contractor Dubai",
    "get a quote Dubai contractor",
    "MEP contractor contact UAE",
    "Euro Edge contact",
    "technical services enquiry Dubai",
  ],
  alternates: {
    canonical: "https://euroedgets.com/contact",
  },
  openGraph: {
    title: "Contact Us | Euro Edge Technical Services L.L.C. Dubai",
    description:
      "Get in touch with Euro Edge in Dubai for MEP, civil finishing, HVAC, swimming pool, landscaping, or building maintenance enquiries.",
    type: "website",
    url: "https://euroedgets.com/contact",
    siteName: "Euro Edge Technical Services L.L.C.",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Euro Edge Technical Services L.L.C. Dubai",
    description:
      "Contact Euro Edge in Dubai for MEP, civil finishing, HVAC, swimming pool, landscaping, or building maintenance enquiries.",
  },
}

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground font-sans min-h-screen">
      <Header />

      {/* =========================================
          1. HERO SECTION (Panoramic Wallpaper Background - Bottom-Aligned Text)
      ========================================= */}
      <section className="relative overflow-hidden min-h-[340px] sm:min-h-[440px] lg:min-h-[480px] flex items-end pb-6 sm:pb-12 lg:pb-14 pt-28 sm:pt-40 lg:pt-44">
        {/* Background Wallpaper Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero-bg.png"
            alt="Euro Edge Partnership Handshake Wallpaper"
            fill
            priority
            className="object-cover object-[70%_center] sm:object-[68%_center]"
            sizes="100vw"
          />
          {/* Directional and bottom gradient for optimal text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent sm:bg-gradient-to-r sm:from-black/95 sm:via-black/60 sm:to-transparent" />
          {/* Subtle top vignette for crystal-clear navbar separation */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full container-wide max-w-[1800px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto space-y-2 sm:space-y-3 mt-auto">
          <h1 className="font-serif text-2xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] leading-[1.12] sm:leading-[1.08]">
            <span className="block">Let&apos;s Talk About</span>
            <span className="text-[#fbb03b] block mt-1 sm:mt-2">Your Project</span>
          </h1>
          {/* Mobile subtext */}
          <p className="text-sm sm:hidden text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            Get in touch with our technical team for a fast response.
          </p>
        </div>
      </section>

      {/* Mobile quick-action tap bar — call/WhatsApp */}
      <div className="sm:hidden bg-white border-b border-slate-200 px-5 py-4 grid grid-cols-2 gap-3">
        <a
          href="tel:+971543909946"
          className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-[#0a2540] text-white font-bold text-sm min-h-[52px] active:bg-[#071a2e]"
          aria-label="Call Euro Edge: +971 54 390 9946"
        >
          <Phone className="w-4.5 h-4.5" />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/971543909946"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-[#25d366] text-white font-bold text-sm min-h-[52px] active:bg-[#1db954]"
          aria-label="WhatsApp Euro Edge"
        >
          <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" /></svg>
          <span>WhatsApp</span>
        </a>
      </div>

      {/* =========================================
          2. CONTACT INFORMATION + ENQUIRY FORM
      ========================================= */}
      <section className="py-10 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-background">
        <div className="container-wide max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

          {/* LEFT COLUMN: Official Euro Edge Contact Information */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5 sm:space-y-6">
              <div>
                <h2 className="font-editorial-h2 text-xl sm:text-3xl font-bold text-[#0a2540] tracking-tight">
                  Let&apos;s Talk About Your Project
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                  Connect directly with our engineering and operations management for immediate inquiries.
                </p>
              </div>

              {/* Official Contact Details inside Individual Outlined Rectangle Boxes */}
              <div className="grid grid-cols-1 gap-3 pt-1">

                {/* 1. Phone / WhatsApp */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/90 flex items-start gap-3.5 sm:gap-4 hover:border-[#0066cc]/40 hover:bg-blue-50/30 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#0066cc] shrink-0 border border-slate-200/90 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      PHONE / WHATSAPP
                    </span>
                    <a
                      href="tel:+971543909946"
                      className="text-sm sm:text-base font-bold text-[#0a2540] hover:text-[#0066cc] transition-colors block mt-0.5"
                    >
                      +971 54 390 9946
                    </a>
                  </div>
                </div>

                {/* 2. Official Email Box */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/90 flex items-start gap-3.5 sm:gap-4 hover:border-[#0066cc]/40 hover:bg-blue-50/30 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#0066cc] shrink-0 border border-slate-200/90 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                        OFFICIAL EMAIL
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-100/70 text-[#0066cc] tracking-wide">
                        FAST REPLY
                      </span>
                    </div>
                    <a
                      href="mailto:info@euroedgets.com"
                      className="text-sm sm:text-base font-bold text-[#0a2540] hover:text-[#0066cc] transition-colors block mt-0.5 break-all sm:break-normal"
                    >
                      info@euroedgets.com
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      Direct operations &amp; project inquiry desk
                    </span>
                  </div>
                </div>

                {/* 3. Contact Person & Position */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/90 flex items-start gap-3.5 sm:gap-4 hover:border-[#0066cc]/40 hover:bg-blue-50/30 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#0066cc] shrink-0 border border-slate-200/90 shadow-sm">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      CONTACT PERSON
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0a2540] block mt-0.5">
                      Pranoydas Mullasseri
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-xs text-slate-500 font-medium truncate">
                        Operations Manager
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. Location */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/90 flex items-start gap-3.5 sm:gap-4 hover:border-[#0066cc]/40 hover:bg-blue-50/30 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#0066cc] shrink-0 border border-slate-200/90 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      LOCATION
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0a2540] block mt-0.5">
                      Al Quoz Industrial Area, Dubai, UAE
                    </span>
                  </div>
                </div>

                {/* 5. Current Service Area */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/90 flex items-start gap-3.5 sm:gap-4 hover:border-[#0066cc]/40 hover:bg-blue-50/30 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#0066cc] shrink-0 border border-slate-200/90 shadow-sm">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      SERVICE AREA
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0a2540] block mt-0.5">
                      Dubai &amp; UAE / All Emirates
                    </span>
                  </div>
                </div>

                {/* 6. Current Working Hours */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/90 flex items-start gap-3.5 sm:gap-4 hover:border-[#0066cc]/40 hover:bg-blue-50/30 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#0066cc] shrink-0 border border-slate-200/90 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      WORKING HOURS
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0a2540] block mt-0.5">
                      Mon – Sat, 8:00 AM – 6:00 PM GST
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Enquiry Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="p-4 sm:p-7 lg:p-9 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          3. MAP / LOCATION SECTION
      ========================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-secondary/50">
        <div className="container-wide max-w-[1800px] mx-auto space-y-6">
          <div className="text-center max-w-4xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              OUR SERVICE AREA
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
              Based in Dubai — Serving All Emirates
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Euro Edge Technical Services L.L.C. is based in Al Quoz Industrial Area, Dubai. We deploy certified technical crews across all major residential and commercial districts throughout Dubai and the UAE.
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57754.53168989799!2d55.22048994999999!3d25.163399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69e5b7fc7bdf%3A0x45d05b43af72b6f8!2sAl%20Quoz%20Industrial%20Area%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Euro Edge Technical Services – Al Quoz Industrial Area, Dubai"
            />
          </div>
        </div>
      </section>

      <Footer />
      <StickyContactWidget />
    </main>
  )
}