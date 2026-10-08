import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { CareersForm } from "@/components/careers-form"
import { Briefcase, MapPin, Users, Award, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "Careers & Engineering Opportunities | Euro Edge Technical Services L.L.C.",
  description:
    "Join Euro Edge Technical Services L.L.C. Career opportunities for MEP engineers, HVAC technicians, electricians, plumbers, and masons in Dubai, UAE.",
  alternates: {
    canonical: "https://www.euroedgets.com/careers",
  },
  openGraph: {
    title: "Careers & Engineering Opportunities | Euro Edge Technical Services L.L.C.",
    description:
      "Join Euro Edge Technical Services L.L.C. Career opportunities for MEP engineers, HVAC technicians, electricians, plumbers, and masons in Dubai, UAE.",
    type: "website",
    url: "https://euroedgets.com/careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Engineering Opportunities | Euro Edge Technical Services L.L.C.",
    description:
      "Join Euro Edge Technical Services L.L.C. Career opportunities for MEP engineers, HVAC technicians, electricians, plumbers, and masons in Dubai, UAE.",
  },
}

export default function CareersPage() {
  const openPositions = [
    {
      title: "MEP Engineer / Site Supervisor",
      location: "Dubai, UAE",
      type: "Full-Time",
      reqs: "Min 3+ years UAE experience in MEP contracting, DEWA regulations knowledge, site management skills.",
    },
    {
      title: "HVAC & AC Senior Technician",
      location: "Dubai, UAE",
      type: "Full-Time",
      reqs: "Expertise in Central AC, FCU, AHU, split units troubleshooting, gas charging, and duct repair.",
    },
    {
      title: "Licensed Electrician",
      location: "Dubai, UAE",
      type: "Full-Time",
      reqs: "Testing, commissioning, DB panel wiring, lighting fixtures, and DEWA safety standards.",
    },
    {
      title: "Plumbing & Sanitaryware Specialist",
      location: "Dubai, UAE",
      type: "Full-Time",
      reqs: "Piping installations, high-pressure pump maintenance, leak diagnostics, and sanitaryware fitting.",
    },
    {
      title: "Tile Setter & Masonry Specialist",
      location: "Dubai, UAE",
      type: "Full-Time",
      reqs: "Precision wall & floor tiling (marble, porcelain), plastering, and civil repair works.",
    },
  ]

  return (
    <main className="bg-background text-foreground font-sans min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-background text-foreground py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Join Euro Edge Team
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-3">
            Careers at Euro Edge
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
            Build your career with one of Dubai's fastest-growing technical services and facility management companies. We empower skilled professionals, engineers, and technicians.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 lg:py-20 px-4 lg:px-12 bg-background">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Work Culture</span>
            <h2 className="text-3xl font-serif font-bold text-foreground">Why Build Your Career With Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Growth",
                desc: "Work on prestigious commercial, residential, and industrial technical contracts across Dubai.",
                icon: Award,
              },
              {
                title: "Safety & Integrity",
                desc: "We follow strict UAE safety guidelines, providing top-grade personal protective equipment and training.",
                icon: ShieldCheck,
              },
              {
                title: "Competitive Rewards",
                desc: "Attractively structured compensation, performance incentives, and comprehensive benefits.",
                icon: Users,
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-card border border-border shadow-sm text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-secondary flex items-center justify-center text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Openings & Application Form */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-secondary">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Active Job Openings */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Current Opportunities</span>
              <h2 className="text-3xl font-serif font-bold text-foreground mt-1">Open Positions in Dubai</h2>
            </div>

            <div className="space-y-4">
              {openPositions.map((pos, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground">{pos.title}</h3>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-secondary text-primary">
                      {pos.type}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pos.reqs}</p>
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{pos.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form Component */}
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-10 shadow-md">
            <CareersForm />
          </div>
        </div>
      </section>

      <Footer />
            <StickyContactWidget />
    </main>
  )
}
