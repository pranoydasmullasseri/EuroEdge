import React from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Euro Edge Technical Services L.L.C.",
  description:
    "Privacy Policy for Euro Edge Technical Services L.L.C. (Dubai, UAE). Understand how we collect, handle, and protect your information when requesting technical services or quotations.",
  alternates: {
    canonical: "https://euroedgets.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Euro Edge Technical Services L.L.C.",
    description:
      "Privacy Policy for Euro Edge Technical Services L.L.C. Learn how we safeguard your personal and property information.",
    type: "website",
    url: "https://euroedgets.com/privacy-policy",
    siteName: "Euro Edge Technical Services L.L.C.",
    locale: "en_AE",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#fafbfc] text-[#0a2540] font-sans min-h-screen">
      <Header />

      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-5 sm:px-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0066cc] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a2540]">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Last Updated: January 2026 • Euro Edge Technical Services L.L.C.
          </p>

          <div className="prose prose-slate max-w-none space-y-8 pt-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">1. Introduction</h2>
              <p>
                Euro Edge Technical Services L.L.C. (&quot;Euro Edge&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to respecting and protecting the privacy of visitors, clients, and partners who interact with our website (<Link href="/" className="text-[#0066cc] hover:underline">https://euroedgets.com/</Link>) and engage our engineering and technical services in Dubai and across the United Arab Emirates.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">2. Information We Collect</h2>
              <p>We only collect information that you voluntarily provide to us when submitting an inquiry or quotation request:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Details:</strong> Full name, telephone number, WhatsApp number, and email address.</li>
                <li><strong>Service Requirement Details:</strong> Property type, location within Dubai/UAE, requested service division (Civil, MEP, Pool, Landscaping, or Maintenance), and project specifications.</li>
                <li><strong>Technical Usage Data:</strong> Standard server logs, IP address, browser type, and anonymous analytics solely used to enhance website responsiveness and performance.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">3. How We Use Your Information</h2>
              <p>The information collected is used strictly for legitimate business purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To evaluate your technical requirements and formulate detailed, transparent quotations.</li>
                <li>To schedule technical site surveys and communicate directly regarding your service requests.</li>
                <li>To deliver contractual obligations, engineering coordination, and customer support.</li>
                <li>We do NOT sell, rent, trade, or share your personal information with third parties for marketing purposes.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">4. Data Protection &amp; Security</h2>
              <p>
                We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data transmitted through our website is encrypted using modern Transport Layer Security (TLS/HTTPS).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">5. Cookies &amp; Tracking</h2>
              <p>
                Our website utilizes minimal, essential functional cookies and privacy-respecting analytics to analyze traffic trends and optimize mobile page speeds. You can configure your browser to reject cookies without impacting the essential functionality of this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">6. Contact Us Regarding Your Privacy</h2>
              <p>If you have any questions about this Privacy Policy or wish to review, update, or remove your contact information, please contact our management desk:</p>
              <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 space-y-2 text-sm">
                <p className="font-bold text-[#0a2540]">Euro Edge Technical Services L.L.C.</p>
                <p className="flex items-center gap-2 text-slate-600"><MapPin className="w-4 h-4 text-[#0066cc]" /> Al Quoz Industrial Area, Dubai, United Arab Emirates</p>
                <p className="flex items-center gap-2 text-slate-600"><Mail className="w-4 h-4 text-[#0066cc]" /> <a href="mailto:info@euroedgets.com" className="text-[#0066cc] hover:underline">info@euroedgets.com</a></p>
                <p className="flex items-center gap-2 text-slate-600"><Phone className="w-4 h-4 text-[#0066cc]" /> <a href="tel:+971543909946" className="text-[#0066cc] hover:underline">+971 54 390 9946</a></p>
              </div>
            </section>
          </div>

          <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066cc] hover:text-[#0a2540] transition-colors"
            >
              <span>Back to Home</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <StickyContactWidget />
    </main>
  )
}
