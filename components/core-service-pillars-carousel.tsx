"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Hammer,
  Zap,
  ShieldCheck,
  House,
  Brush,
  Waves,
  Compass,
} from "lucide-react"

const iconMap: Record<string, any> = {
  Building2,
  Hammer,
  Zap,
  ShieldCheck,
  House,
  Brush,
  Waves,
  Compass,
}

export function CoreServicePillarsCarousel({ pillars }: { pillars: any[] }) {
  return (
    <>
      {/* Mobile Swipeable View (Hidden on sm and above) */}
      <div className="sm:hidden">
        <div className="flex gap-4 overflow-x-auto overflow-y-hidden touch-pan-x snap-x snap-mandatory pb-4 hide-scrollbar -mx-4 px-4">
          {pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.iconName] || Building2
            return (
              <div 
                key={pillar.num}
                className="group relative rounded-3xl overflow-hidden h-[410px] w-[85vw] max-w-[320px] shrink-0 snap-center flex flex-col justify-end p-6 shadow-md transition-all duration-300"
              >
                {/* Background Image */}
                <Image
                  src={pillar.img}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 640px) 85vw, 320px"
                  quality={90}
                  className="object-cover z-0"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a2540]/60 to-[#051833]/95 z-10" />
                
                {/* Content */}
                <div className="relative z-20 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-white mb-1">
                    <IconComponent className="w-8 h-8 text-sky-400" />
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md">
                      {pillar.num}
                    </span>
                  </div>
                  
                  <h3 className="font-serif font-bold text-xl text-white leading-tight">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs text-white/80 leading-relaxed font-sans line-clamp-3 font-medium">
                    {pillar.desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center justify-center gap-2 text-[12px] font-bold text-white bg-white/10 hover:bg-white hover:text-[#051833] backdrop-blur-sm px-5 py-2 rounded-full border border-white/30 transition-all duration-200 w-max"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Swipe Indicator */}
        <div className="flex items-center justify-end gap-2 text-xs font-semibold text-muted-foreground pt-1 pr-2">
          <span>Swipe to explore 5 pillars</span>
          <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
        </div>
      </div>

      {/* Desktop Grid View (Hidden on mobile) */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
        {pillars.map((pillar) => {
          const IconComponent = iconMap[pillar.iconName] || Building2
          return (
            <div
              key={pillar.num}
              className="group relative rounded-[1.75rem] overflow-hidden h-[460px] flex flex-col justify-end p-5 lg:p-6 transition-all duration-300 shadow-md hover:shadow-2xl border border-border/50"
            >
              {/* Background Image */}
              <Image
                src={pillar.img}
                alt={pillar.title}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                quality={90}
                className="object-cover z-0"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0a2540]/60 to-[#051833]/95 z-10 transition-opacity duration-300 group-hover:opacity-90" />
              
              {/* Content */}
              <div className="relative z-20 flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-white mb-1">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <IconComponent className="w-5 h-5 text-sky-300" />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/15 text-white/90 border border-white/20">
                    {pillar.num}
                  </span>
                </div>
                
                <h3 className="font-serif font-bold text-lg lg:text-xl text-white leading-tight drop-shadow-md">
                  {pillar.title}
                </h3>
                
                <p className="text-[12px] text-white/80 leading-relaxed font-sans line-clamp-3 font-medium mb-1 drop-shadow-sm">
                  {pillar.desc}
                </p>

                <div className="pt-2">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-white/10 hover:bg-white hover:text-[#051833] backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 transition-all duration-300 w-max"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
