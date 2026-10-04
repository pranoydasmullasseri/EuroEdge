import React from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Home, ArrowRight, Wrench, Phone } from "lucide-react"

export const metadata = {
  title: "Page Not Found | Euro Edge Technical Services L.L.C.",
  description: "The requested page could not be found. Navigate to Euro Edge's services or contact our Dubai technical team.",
}

export default function NotFound() {
  return (
    <main className="bg-[#fafbfc] text-[#0a2540] font-sans min-h-screen flex flex-col justify-between">
      <Header />

      <section className="pt-32 sm:pt-40 pb-20 px-5 sm:px-8 max-w-3xl mx-auto text-center space-y-6 flex-1 flex flex-col justify-center items-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#fbb03b] shadow-sm">
          <Wrench className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold text-[#0066cc] uppercase tracking-[0.2em] block">
          404 ERROR • RESOURCE NOT FOUND
        </span>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2540]">
          Page Not Found
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          The page or resource you are looking for may have been updated, relocated, or is no longer available. Explore our certified technical services or get in touch with our Dubai team.
        </p>

        {/* Action Buttons: Home, Services, Contact */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#fbb03b] hover:bg-[#e09b2d] text-[#0a2540] text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
          >
            <span>Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0a2540] border border-slate-300 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#0066cc]" />
            <span>Contact Us</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
