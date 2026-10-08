import React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound, permanentRedirect } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { ServiceQuoteForm } from "@/components/service-quote-form"
import { ServiceShareButton } from "@/components/share-button"
import { ServiceFaqAccordion } from "@/components/service-faq-accordion"
import { servicesData, legacySlugMap } from "@/lib/services-data"
import { CheckCircle2, ChevronLeft } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (legacySlugMap[slug]) {
    permanentRedirect(`/services/${legacySlugMap[slug]}`)
  }
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return { title: "Service Not Found | Euro Edge Technical Services" }

  const pageTitle = service.titleTag || `${service.title} in Dubai | Euro Edge Technical Services`

  return {
    title: pageTitle,
    description: service.shortDesc,
    keywords: [
      service.title,
      `${service.title} Dubai`,
      `${service.title} UAE`,
      "Euro Edge Technical Services",
      "technical contractor Dubai",
      "MEP contractor Dubai",
    ],
    alternates: {
      canonical: `https://www.euroedgets.com/services/${service.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: service.shortDesc,
      type: "website",
      url: `https://www.euroedgets.com/services/${service.slug}`,
      siteName: "Euro Edge Technical Services L.L.C.",
      locale: "en_AE",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: service.shortDesc,
    },
  }
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (legacySlugMap[slug]) {
    permanentRedirect(`/services/${legacySlugMap[slug]}`)
  }
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDesc,
    "url": `https://www.euroedgets.com/services/${service.slug}`,
    "areaServed": {
      "@type": "City",
      "name": "Dubai",
      "sameAs": "https://www.wikidata.org/wiki/Q612"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Euro Edge Technical Services L.L.C.",
      "url": "https://www.euroedgets.com/",
      "telephone": "+971543909946",
      "email": "info@euroedgets.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Quoz Industrial Area",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    "serviceType": service.title,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "areaServed": "Dubai, UAE",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Euro Edge Technical Services L.L.C."
      }
    }
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://euroedgets.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://euroedgets.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://euroedgets.com/services/${service.slug}`
      }
    ]
  }

  return (
    <main className="bg-background text-foreground font-sans min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      {/* Breadcrumb & Navigation */}
      <div className="bg-secondary py-3 sm:py-4 px-4 lg:px-12">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between text-xs">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground font-medium transition-colors min-h-[44px]"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
          <span className="text-muted-foreground hidden sm:inline">Euro Edge Technical Services L.L.C.</span>
        </div>
      </div>

      {/* Service Header */}
      <section className="relative overflow-hidden bg-background text-foreground py-6 sm:py-12 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
                {service.title}
              </h1>
              <div className="flex-shrink-0 mt-1">
                <ServiceShareButton slug={service.slug} title={service.title} shortDesc={service.shortDesc} />
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-5xl leading-relaxed font-sans">
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-6 sm:py-12 lg:py-14 px-4 lg:px-12 bg-background">
        {/* Top Section: Overview & Interactive Fast Quote Form */}
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8 order-1">
            {/* Service Visual Image */}
            <div className="relative h-[240px] sm:h-[420px] w-full rounded-2xl overflow-hidden border border-border shadow-md">
              <Image
                src={service.imageUrl}
                alt={service.imageAlt || `${service.title} — Euro Edge Technical Services L.L.C. Dubai`}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">Service Overview</h2>
              <p className="text-muted-foreground text-sm sm:text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {service.fullDesc}
              </p>
            </div>
          </div>

          {/* Sidebar Interactive Fast Quote Form — below image on mobile, sticky on desktop */}
          <div className="lg:sticky lg:top-24 order-2">
            <ServiceQuoteForm serviceTitle={service.title} />
          </div>
        </div>

        {/* Full-Width Specialized Sub-Services & Capabilities Section */}
        {service.subServices && service.subServices.length > 0 ? (
          <div className="max-w-[1600px] mx-auto space-y-8 pt-12 sm:pt-16 mt-12 sm:mt-16">
            <div className="space-y-2 pb-5">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600 flex-shrink-0" />
                Specialized Services &amp; Capabilities
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
                Certified craftsmanship and specialized technical delivery across all division scopes in Dubai.
              </p>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {service.subServices.map((sub, idx) => (
                <div
                  key={idx}
                  className="group rounded-3xl bg-card border border-border/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-stretch"
                >
                  {/* Left Side: Photo */}
                  <div className="relative w-full md:w-[420px] lg:w-[480px] xl:w-[520px] min-h-[200px] sm:min-h-[260px] md:min-h-[320px] flex-shrink-0 overflow-hidden bg-muted">
                    <Image
                      src={sub.imageUrl}
                      alt={sub.imageAlt || `${sub.title} — Euro Edge Technical Services L.L.C. Dubai`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 md:hidden">
                      <span className="w-8 h-8 rounded-xl bg-[#0a2540] text-white text-xs font-bold flex items-center justify-center shadow-lg">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Stretches all the way across to the right */}
                  <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-center space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="hidden md:flex w-10 h-10 rounded-xl bg-[#0a2540] text-white text-sm font-bold items-center justify-center flex-shrink-0 shadow-sm">
                          0{idx + 1}
                        </span>
                        <h4 className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl text-foreground group-hover:text-[#0a2540] transition-colors leading-snug">
                          {sub.title}
                        </h4>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-5xl">
                      {sub.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-[1600px] mx-auto space-y-6 pt-12 mt-12">
            <h3 className="text-xl font-serif font-bold text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Key Deliverables &amp; Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {service.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-card border border-border flex items-start gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>



      {/* Centered Interactive FAQs Accordion */}
      <ServiceFaqAccordion faqs={service.faqs} />

      <Footer />
      <StickyContactWidget />
    </main>
  )
}
