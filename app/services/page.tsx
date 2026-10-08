import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AMCPackages } from "@/components/amc-packages"
import { FAQSection } from "@/components/faq-section"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { ArrowRight } from "lucide-react"
import { ServicesPortfolio } from "@/components/services-portfolio"

export const metadata = {
  title: "Technical & MEP Services in Dubai | Euro Edge Technical Services L.L.C.",
  description:
    "Explore Euro Edge's 5 certified service divisions — Civil & Finishing Works, MEP & Technical Works, Swimming Pool Works, Landscaping, and Building Maintenance — serving Dubai and the UAE.",
  keywords: [
    "technical services Dubai",
    "MEP services UAE",
    "civil contracting services Dubai",
    "facility management Dubai",
    "swimming pool services Dubai",
    "landscaping services Dubai",
    "building maintenance services Dubai",
  ],
  alternates: {
    canonical: "https://www.euroedgets.com/services",
  },
  openGraph: {
    title: "Technical & MEP Services in Dubai | Euro Edge Technical Services L.L.C.",
    description:
      "Explore Euro Edge's 5 certified service divisions — Civil & Finishing Works, MEP & Technical Works, Swimming Pool Works, Landscaping, and Building Maintenance — serving Dubai and the UAE.",
    type: "website",
    url: "https://euroedgets.com/services",
    siteName: "Euro Edge Technical Services L.L.C.",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical & MEP Services in Dubai | Euro Edge Technical Services L.L.C.",
    description:
      "Certified civil finishing, MEP, swimming pool, landscaping, and building maintenance services across Dubai and the UAE.",
  },
}

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground font-sans min-h-screen">
      <Header />
      <ServicesPortfolio />

      {/* Frequently Asked Questions */}
      <FAQSection />

      <Footer />
      <StickyContactWidget />
    </main>
  )
}
