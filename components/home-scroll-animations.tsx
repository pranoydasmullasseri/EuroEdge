"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function HomeScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Accessibility check: Disable animations if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReducedMotion) return

    let ctx: gsap.Context | null = null
    const timer = setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger)

      const isMobile = window.innerWidth < 768

      // Directional distances tailored for desktop vs mobile to prevent clipping
      const dist = {
        headingX: isMobile ? -25 : -55,
        headingY: isMobile ? 15 : 25,
        bodyY: isMobile ? 18 : 30,
        cardY: isMobile ? 20 : 38,
        imageX: isMobile ? 20 : 40,
        labelY: isMobile ? -12 : -20,
        labelX: isMobile ? -15 : -25,
        btnY: isMobile ? 15 : 24,
      }

      const easeCurve = "power2.out"

      // Context for easy and safe cleanup
      ctx = gsap.context(() => {
      // -------------------------------------------------------------
      // 1. HERO SECTION (Entrance on load + gentle scroll-out)
      // -------------------------------------------------------------
      const heroTimeline = gsap.timeline({
        defaults: { ease: easeCurve, duration: 0.9 },
      })

      // Heading: Enter from slightly LEFT + slightly below
      const heroHeading = document.querySelector("[data-anim='hero-heading']")
      if (heroHeading) {
        heroTimeline.fromTo(
          heroHeading,
          { x: dist.headingX, y: dist.headingY, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1 }
        )
      }

      // Supporting Description: Enter from BOTTOM -> TOP
      const heroDesc = document.querySelector("[data-anim='hero-desc']")
      if (heroDesc) {
        heroTimeline.fromTo(
          heroDesc,
          { y: dist.bodyY, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
      }

      // CTA Buttons: Enter from BOTTOM
      const heroCta = document.querySelector("[data-anim='hero-cta']")
      if (heroCta) {
        heroTimeline.fromTo(
          heroCta,
          { y: dist.btnY, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        )
      }

      // Hero Parallax on Scroll (Subtle background shift)
      const heroBg = document.querySelector("[data-anim='hero-bg']")
      if (heroBg) {
        gsap.to(heroBg, {
          y: isMobile ? 15 : 30,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-section='hero']",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })
      }

      // -------------------------------------------------------------
      // 2. ABOUT EURO EDGE SECTION
      // -------------------------------------------------------------
      const aboutSection = document.querySelector("[data-section='about']")
      if (aboutSection) {
        const aboutTL = gsap.timeline({
          scrollTrigger: {
            trigger: aboutSection,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: easeCurve, duration: 0.8 },
        })

        const aboutLabel = aboutSection.querySelector("[data-anim='about-label']")
        if (aboutLabel) {
          aboutTL.fromTo(
            aboutLabel,
            { x: dist.labelX, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6 }
          )
        }

        const aboutHeading = aboutSection.querySelector("[data-anim='about-heading']")
        if (aboutHeading) {
          aboutTL.fromTo(
            aboutHeading,
            { x: dist.headingX * 0.7, y: dist.headingY, opacity: 0 },
            { x: 0, y: 0, opacity: 1, duration: 0.8 },
            "-=0.4"
          )
        }

        const aboutDesc = aboutSection.querySelector("[data-anim='about-desc']")
        if (aboutDesc) {
          aboutTL.fromTo(
            aboutDesc,
            { y: dist.bodyY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.5"
          )
        }

        const aboutList = aboutSection.querySelectorAll("[data-anim='about-list-item']")
        if (aboutList.length > 0) {
          aboutTL.fromTo(
            aboutList,
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
            "-=0.4"
          )
        }

        const aboutCta = aboutSection.querySelector("[data-anim='about-cta']")
        if (aboutCta) {
          aboutTL.fromTo(
            aboutCta,
            { y: dist.btnY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.3"
          )
        }

        // Image: Subtle RIGHT -> LEFT reveal
        const aboutImage = aboutSection.querySelector("[data-anim='about-image']")
        if (aboutImage) {
          aboutTL.fromTo(
            aboutImage,
            { x: dist.imageX, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9 },
            "-=0.8"
          )
        }

        // Badge: Subtle BOTTOM -> TOP reveal
        const aboutBadge = aboutSection.querySelector("[data-anim='about-badge']")
        if (aboutBadge) {
          aboutTL.fromTo(
            aboutBadge,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.5"
          )
        }
      }

      // -------------------------------------------------------------
      // 3. FIVE SPECIALIZED DIVISIONS SECTION
      // -------------------------------------------------------------
      const divisionsSection = document.querySelector("[data-section='divisions']")
      if (divisionsSection) {
        const divTL = gsap.timeline({
          scrollTrigger: {
            trigger: divisionsSection,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: easeCurve, duration: 0.8 },
        })

        const divLabel = divisionsSection.querySelector("[data-anim='divisions-label']")
        if (divLabel) {
          divTL.fromTo(
            divLabel,
            { y: dist.labelY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 }
          )
        }

        const divHeading = divisionsSection.querySelector("[data-anim='divisions-heading']")
        if (divHeading) {
          divTL.fromTo(
            divHeading,
            { y: dist.cardY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.3"
          )
        }

        const divDesc = divisionsSection.querySelector("[data-anim='divisions-desc']")
        if (divDesc) {
          divTL.fromTo(
            divDesc,
            { y: dist.bodyY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.4"
          )
        }

        // 5 Cards: BOTTOM -> TOP staggered reveal
        const divCards = divisionsSection.querySelectorAll("[data-anim='divisions-card']")
        if (divCards.length > 0) {
          divTL.fromTo(
            divCards,
            { y: dist.cardY, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.08,
            },
            "-=0.3"
          )
        }

        const divCta = divisionsSection.querySelector("[data-anim='divisions-cta']")
        if (divCta) {
          divTL.fromTo(
            divCta,
            { y: dist.btnY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.2"
          )
        }
      }

      // -------------------------------------------------------------
      // 4. WHY CHOOSE EURO EDGE SECTION
      // -------------------------------------------------------------
      const whySection = document.querySelector("[data-section='why-choose']")
      if (whySection) {
        const whyTL = gsap.timeline({
          scrollTrigger: {
            trigger: whySection,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: easeCurve, duration: 0.8 },
        })

        // Large Image: Enters from LEFT or RIGHT
        const whyImage = whySection.querySelector("[data-anim='why-image']")
        if (whyImage) {
          whyTL.fromTo(
            whyImage,
            { x: -dist.imageX, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9 }
          )
        }

        const whyLabel = whySection.querySelector("[data-anim='why-label']")
        if (whyLabel) {
          whyTL.fromTo(
            whyLabel,
            { x: dist.labelX, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6 },
            "-=0.7"
          )
        }

        const whyHeading = whySection.querySelector("[data-anim='why-heading']")
        if (whyHeading) {
          whyTL.fromTo(
            whyHeading,
            { x: dist.headingX * 0.7, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.7 },
            "-=0.5"
          )
        }

        const whyDesc = whySection.querySelector("[data-anim='why-desc']")
        if (whyDesc) {
          whyTL.fromTo(
            whyDesc,
            { y: dist.bodyY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.5"
          )
        }

        const whyCards = whySection.querySelectorAll("[data-anim='why-card']")
        if (whyCards.length > 0) {
          whyTL.fromTo(
            whyCards,
            { y: dist.cardY * 0.7, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
            "-=0.3"
          )
        }
      }

      // -------------------------------------------------------------
      // 5. INDUSTRIES WE SERVE SECTION
      // -------------------------------------------------------------
      const indSection = document.querySelector("[data-section='industries']")
      if (indSection) {
        const indTL = gsap.timeline({
          scrollTrigger: {
            trigger: indSection,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: easeCurve, duration: 0.8 },
        })

        const indHeader = indSection.querySelector("[data-anim='industries-header']")
        if (indHeader) {
          indTL.fromTo(
            indHeader,
            { y: dist.cardY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
          )
        }

        const indCards = indSection.querySelectorAll("[data-anim='industry-card']")
        if (indCards.length > 0) {
          indTL.fromTo(
            indCards,
            { y: dist.cardY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
            "-=0.5"
          )
        }
      }

      // -------------------------------------------------------------
      // 6. OUR WORK PROCESS SECTION
      // -------------------------------------------------------------
      const procSection = document.querySelector("[data-section='work-process']")
      if (procSection) {
        const procTL = gsap.timeline({
          scrollTrigger: {
            trigger: procSection,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: easeCurve, duration: 0.8 },
        })

        const procLabel = procSection.querySelector("[data-anim='process-label']")
        if (procLabel) {
          procTL.fromTo(
            procLabel,
            { x: dist.labelX, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6 }
          )
        }

        const procHeading = procSection.querySelector("[data-anim='process-heading']")
        if (procHeading) {
          procTL.fromTo(
            procHeading,
            { x: dist.headingX * 0.7, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.7 },
            "-=0.4"
          )
        }

        const procDesc = procSection.querySelector("[data-anim='process-desc']")
        if (procDesc) {
          procTL.fromTo(
            procDesc,
            { y: dist.bodyY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.4"
          )
        }

        const procCommitment = procSection.querySelector("[data-anim='process-commitment']")
        if (procCommitment) {
          procTL.fromTo(
            procCommitment,
            { x: dist.imageX, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.7 },
            "-=0.6"
          )
        }

        const procSteps = procSection.querySelectorAll("[data-anim='process-step']")
        if (procSteps.length > 0) {
          procTL.fromTo(
            procSteps,
            { y: dist.cardY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
            "-=0.3"
          )
        }
      }

      // -------------------------------------------------------------
      // 7. OUR IMPACT SECTION
      // -------------------------------------------------------------
      const impactSection = document.querySelector("[data-section='impact']")
      if (impactSection) {
        const impactTL = gsap.timeline({
          scrollTrigger: {
            trigger: impactSection,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: easeCurve, duration: 0.8 },
        })

        const impactHeading = impactSection.querySelector("[data-anim='impact-heading']")
        if (impactHeading) {
          impactTL.fromTo(
            impactHeading,
            { x: dist.headingX * 0.7, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.7 }
          )
        }

        const impactMetrics = impactSection.querySelectorAll("[data-anim='impact-metric']")
        if (impactMetrics.length > 0) {
          impactTL.fromTo(
            impactMetrics,
            { y: dist.cardY * 0.7, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
            "-=0.4"
          )
        }
      }

      // -------------------------------------------------------------
      // 8. READY TO BUILD TOGETHER (FINAL CTA BANNER)
      // -------------------------------------------------------------
      const ctaSection = document.querySelector("[data-section='final-cta']")
      if (ctaSection) {
        const ctaTL = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSection,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: easeCurve, duration: 0.8 },
        })

        const ctaContent = ctaSection.querySelector("[data-anim='cta-content']")
        if (ctaContent) {
          ctaTL.fromTo(
            ctaContent,
            { y: dist.cardY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
          )
        }

        const ctaBadges = ctaSection.querySelector("[data-anim='cta-badges']")
        if (ctaBadges) {
          ctaTL.fromTo(
            ctaBadges,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.4"
          )
        }

        // Subtle background scale reveal on sunset banner
        const ctaBg = ctaSection.querySelector("[data-anim='cta-bg']")
        if (ctaBg) {
          ctaTL.fromTo(
            ctaBg,
            { scale: 1.04 },
            { scale: 1, duration: 1.2, ease: "power1.out" },
            0
          )
        }
      }
    })
  }, 50)

  return () => {
    clearTimeout(timer)
    ctx?.revert()
  }
  }, [])

  return null
}
