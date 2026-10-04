import React from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { FileText, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Terms and Conditions | Euro Edge Technical Services L.L.C.",
  description:
    "Terms and Conditions governing technical services, quotations, MEP contracting, civil works, and maintenance agreements provided by Euro Edge Technical Services L.L.C. in Dubai, UAE.",
  alternates: {
    canonical: "https://euroedgets.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Euro Edge Technical Services L.L.C.",
    description:
      "Terms and Conditions for engineering, technical services, and contracting contracts with Euro Edge Technical Services L.L.C.",
    type: "website",
    url: "https://euroedgets.com/terms-and-conditions",
    siteName: "Euro Edge Technical Services L.L.C.",
    locale: "en_AE",
  },
}

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#fafbfc] text-[#0a2540] font-sans min-h-screen">
      <Header />

      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-5 sm:px-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0066cc] text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Service Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a2540]">
            Terms and Conditions
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Effective Date: January 2026 • Euro Edge Technical Services L.L.C. (Dubai, UAE)
          </p>

          <div className="prose prose-slate max-w-none space-y-8 pt-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">1. Agreement to Terms</h2>
              <p>
                By accessing this website (<Link href="/" className="text-[#0066cc] hover:underline">https://euroedgets.com/</Link>) or engaging Euro Edge Technical Services L.L.C. (&quot;Euro Edge&quot;, &quot;Company&quot;) for technical contracting, MEP works, civil finishes, pool works, landscaping, or maintenance services in the UAE, you agree to comply with and be bound by the following Terms and Conditions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">2. Scope of Technical Services</h2>
              <p>
                Euro Edge provides engineering and contracting services across five defined divisions: Civil &amp; Finishing Works, MEP &amp; Technical Works, Swimming Pool Works, Landscaping Works, and General Building Maintenance. All project-specific deliverables, material specifications, and project durations are detailed in formal proposals or Annual Maintenance Contracts (AMC) executed between the parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">3. Quotations &amp; Work Authorizations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Quotations provided by Euro Edge remain valid for thirty (30) days from issuance unless otherwise specified in writing.</li>
                <li>Site inspections and technical evaluations are conducted to determine exact requirements before issuing binding project quotes.</li>
                <li>Work commences upon mutual written agreement, official purchase order, or initial mobilization payment as outlined in the proposal.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">4. Regulatory Compliance &amp; Standards</h2>
              <p>
                All works executed by Euro Edge comply strictly with UAE Federal Laws, Dubai Municipality codes, Dubai Electricity and Water Authority (DEWA) regulations, and Dubai Civil Defence (DCD) life-safety requirements. Necessary authority approvals and work permits are coordinated in accordance with project contracts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">5. Intellectual Property</h2>
              <p>
                All content, brand trademarks, logos, photography, graphics, and text on this website are the proprietary property of Euro Edge Technical Services L.L.C. and are protected under UAE intellectual property laws. Unauthorized reproduction or commercial distribution without written consent is strictly prohibited.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">6. Governing Law &amp; Jurisdiction</h2>
              <p>
                These Terms and Conditions and any contractual disputes arising out of technical service engagements shall be governed by and construed in accordance with the laws of the Emirate of Dubai and the Federal Laws of the United Arab Emirates. The courts of Dubai shall have exclusive jurisdiction.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">7. Contact &amp; Inquiries</h2>
              <p>For inquiries regarding these Terms and Conditions, please contact:</p>
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
              <span>Request a Quote</span>
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
