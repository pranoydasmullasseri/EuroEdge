"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Wrench, Factory, Settings, HelpCircle, Headphones, Zap, Droplet, Fan, Grid, Lightbulb, Maximize, Compass, Square, Globe, Hammer, Waves, Utensils, Building, Building2, Cog, Boxes } from "lucide-react"

const iconMap: Record<string, any> = {
  Zap, Droplet, Fan, Grid, Lightbulb, Square, Maximize, Hammer, Waves, Utensils, Building, Building2, Cog, Compass, Boxes, Headphones, Factory,
}

export function FeaturedServicesCarousel({ services }: { services: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((i) => (i + 1) % services.length)
  const prev = () => setCurrentIndex((i) => (i - 1 + services.length) % services.length)

  return (
    <div className="space-y-8 sm:space-y-12">
      {services.map((srv, i) => {
        const IconComponent = iconMap[srv.iconName] || Wrench
        const isEven = i % 2 === 0

        return (
          <div
            key={srv.slug}
            className="rounded-3xl bg-card border border-border/80 p-4 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center group overflow-hidden"
          >
            {/* Image Column (Left if even, Right if odd) */}
            <div
              className={`lg:col-span-5 relative h-[200px] sm:h-[300px] w-full rounded-2xl overflow-hidden border border-border shadow-sm ${isEven ? "lg:order-1" : "lg:order-2"
                }`}
            >
              <Image
                src={srv.imageUrl}
                alt={srv.title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={90}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-card/90 backdrop-blur-md text-foreground text-[10px] sm:text-xs font-mono font-bold border border-border">
                FEATURED #{String(i + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Text Description Column (Right if even, Left if odd) */}
            <div className={`lg:col-span-7 space-y-3.5 sm:space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary flex items-center justify-center text-primary border border-border flex-shrink-0">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-xl sm:text-3xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                  {srv.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-xs sm:text-base leading-relaxed font-sans">
                {srv.fullDesc || srv.shortDesc}
              </p>

              {/* Scope Bullets */}
              {srv.keyFeatures && srv.keyFeatures.length > 0 && (
                <div className="pt-1 sm:pt-2">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                    Key Service Highlights:
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {srv.keyFeatures.slice(0, 3).map((feat: string, fIdx: number) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded-lg bg-secondary border border-border text-[11px] sm:text-xs font-medium text-foreground flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2 sm:pt-3">
                <Link
                  href="/services#capabilities"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-sm group/btn"
                >
                  <span>Explore Capabilities &amp; Disciplines</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
