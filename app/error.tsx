"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertCircle, RefreshCw, Home, ArrowRight, Phone } from "lucide-react"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log non-sensitive error metric if monitoring configured
    console.error("Application error encountered")
  }, [error])

  return (
    <main className="bg-[#fafbfc] text-[#0a2540] font-sans min-h-screen flex flex-col justify-between">
      <Header />

      <section className="pt-32 sm:pt-40 pb-20 px-5 sm:px-8 max-w-3xl mx-auto text-center space-y-6 flex-1 flex flex-col justify-center items-center">
        <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 shadow-sm">
          <AlertCircle className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold text-red-600 uppercase tracking-[0.2em] block">
          SYSTEM NOTICE
        </span>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2540]">
          Something Went Wrong
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          An unexpected issue occurred while processing your request. Please try reloading the page, or return to one of our primary sections below.
        </p>

        {/* Buttons: Try Again, Home, Services, Contact */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0a2540] text-xs font-semibold uppercase tracking-wider transition-colors"
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
            <span>Contact</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
