import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { IndustriesPortfolio } from "@/components/industries-portfolio"

export const metadata = {
  title: "Industries We Serve | Euro Edge Technical Services — Dubai, UAE",
  description:
    "Euro Edge delivers integrated technical contracting for private villas, commercial buildings, hotels, retail, healthcare, and industrial facilities across Dubai and the wider UAE.",
  keywords: [
    "technical services for villas Dubai",
    "commercial property maintenance Dubai",
    "hospitality technical services UAE",
    "industrial contractor Dubai",
    "villa contractor Dubai",
  ],
  alternates: {
    canonical: "https://www.euroedgets.com/industries",
  },
  openGraph: {
    title: "Industries We Serve | Euro Edge Technical Services — Dubai, UAE",
    description:
      "Euro Edge delivers integrated technical contracting for private villas, commercial buildings, hotels, retail, healthcare, and industrial facilities across Dubai and the UAE.",
    type: "website",
    url: "https://www.euroedgets.com/industries",
    siteName: "Euro Edge Technical Services L.L.C.",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Euro Edge Technical Services — Dubai, UAE",
    description:
      "Integrated technical contracting for villas, commercial buildings, hotels, retail, healthcare, and industrial facilities across Dubai and the UAE.",
  },
}

export default function IndustriesPage() {
  return (
    <main className="bg-background text-foreground font-sans min-h-screen">
      <Header />
      <IndustriesPortfolio />

      <Footer />
      <StickyContactWidget />
    </main>
  )
}
