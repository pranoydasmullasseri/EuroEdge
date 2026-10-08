"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function AboutScrollAnimations() {
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

      // Directional displacement distances
      const dist = {
        headingX: isMobile ? -20 : -45,
        headingY: isMobile ? 15 : 25,
        bodyY: isMobile ? 15 : 25,
        cardY: isMobile ? 20 : 35,
        imageX: isMobile ? 20 : 40,
        labelX: isMobile ? -12 : -20,
        labelY: isMobile ? -12 : -20,
        btnY: isMobile ? 15 : 24,
      }

      const easeCurve = "power2.out"

      // GSAP context for safe scoped cleanup
      ctx = gsap.context(() => {
      // -------------------------------------------------------------
      // 1. HERO SECTION (Entrance on load + gentle float into position)
      // -------------------------------------------------------------
      const heroTimeline = gsap.timeline({
        defaults: { ease: easeCurve, duration: 0.9 },
      })

      const heroLabel = document.querySelector("[data-anim='about-hero-label']")
      if (heroLabel) {
        heroTimeline.fromTo(
          heroLabel,
          { x: dist.labelX, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 }
        )
      }

      const heroHeading = document.querySelector("[data-anim='about-hero-heading']")
      if (heroHeading) {
        heroTimeline.fromTo(
          heroHeading,
          { x: dist.headingX, y: dist.headingY, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 0.9 },
          "-=0.4"
        )
      }

      const heroDesc = document.querySelector("[data-anim='about-hero-desc']")
      if (heroDesc) {
        heroTimeline.fromTo(
          heroDesc,
          { y: dist.bodyY, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        )
      }

      const heroBadges = document.querySelectorAll("[data-anim='about-hero-badge']")
      if (heroBadges.length > 0) {
        heroTimeline.fromTo(
          heroBadges,
          { y: dist.cardY * 0.7, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          "-=0.4"
        )
      }

      const heroImage = document.querySelector("[data-anim='about-hero-image']")
      if (heroImage) {
        heroTimeline.fromTo(
          heroImage,
          { x: dist.imageX, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          "-=0.8"
        )
      }

      const heroFloatingCard = document.querySelector("[data-anim='about-hero-float']")
      if (heroFloatingCard) {
        heroTimeline.fromTo(
          heroFloatingCard,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4"
        )
      }

      // -------------------------------------------------------------
      // 2. WHO WE ARE SECTION
      // -------------------------------------------------------------
      const whoSection = document.querySelector("[data-section='who-we-are']")
      if (whoSection) {
        const whoTL = gsap.timeline({
          scrollTrigger: {
            trigger: whoSection,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: easeCurve, duration: 0.8 },
        })

        // Left Image Collage: reveals from LEFT
        const whoImages = whoSection.querySelector("[data-anim='who-images']")
        if (whoImages) {
          whoTL.fromTo(
            whoImages,
            { x: -dist.imageX, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9 }
          )
        }

        const whoLabel = whoSection.querySelector("[data-anim='who-label']")
        if (whoLabel) {
          whoTL.fromTo(
            whoLabel,
            { x: dist.labelX, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 },
            "-=0.6"
          )
        }

        const whoHeading = whoSection.querySelector("[data-anim='who-heading']")
        if (whoHeading) {
          whoTL.fromTo(
            whoHeading,
            { x: dist.headingX * 0.7, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8 },
            "-=0.4"
          )
        }

        const whoDesc = whoSection.querySelector("[data-anim='who-desc']")
        if (whoDesc) {
          whoTL.fromTo(
            whoDesc,
            { y: dist.bodyY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.5"
          )
        }

        const whoList = whoSection.querySelectorAll("[data-anim='who-list-item']")
        if (whoList.length > 0) {
          whoTL.fromTo(
            whoList,
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
            "-=0.4"
          )
        }

        const whoCta = whoSection.querySelector("[data-anim='who-cta']")
        if (whoCta) {
          whoTL.fromTo(
            whoCta,
            { y: dist.btnY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.3"
          )
        }
      }

      // -------------------------------------------------------------
      // 3. MISSION & VISION SECTION
      // -------------------------------------------------------------
      const mvSection = document.querySelector("[data-section='mission-vision']")
      if (mvSection) {
        const mvTL = gsap.timeline({
          scrollTrigger: {
            trigger: mvSection,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: easeCurve, duration: 0.8 },
        })

        const mvCards = mvSection.querySelectorAll("[data-anim='mv-card']")
        if (mvCards.length > 0) {
          mvTL.fromTo(
            mvCards,
            { y: dist.cardY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 }
          )
        }
      }

      // -------------------------------------------------------------
      // 4. FIVE SPECIALIZED DIVISIONS SECTION
      // -------------------------------------------------------------
      const divSection = document.querySelector("[data-section='divisions']")
      if (divSection) {
        const divTL = gsap.timeline({
          scrollTrigger: {
            trigger: divSection,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: easeCurve, duration: 0.8 },
        })

        const divLabel = divSection.querySelector("[data-anim='divisions-label']")
        if (divLabel) {
          divTL.fromTo(
            divLabel,
            { y: dist.labelY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 }
          )
        }

        const divHeading = divSection.querySelector("[data-anim='divisions-heading']")
        if (divHeading) {
          divTL.fromTo(
            divHeading,
            { y: dist.cardY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.3"
          )
        }

        const divDesc = divSection.querySelector("[data-anim='divisions-desc']")
        if (divDesc) {
          divTL.fromTo(
            divDesc,
            { y: dist.bodyY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.4"
          )
        }

        const divCards = divSection.querySelectorAll("[data-anim='divisions-card']")
        if (divCards.length > 0) {
          divTL.fromTo(
            divCards,
            { y: dist.cardY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
            "-=0.3"
          )
        }

        const divCta = divSection.querySelector("[data-anim='divisions-cta']")
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
      // 5. OUR IMPACT SECTION
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
      // 7. READY TO GET STARTED? (Sunset Skyline Banner)
      // -------------------------------------------------------------
      const ctaSection = document.querySelector("[data-section='about-cta']")
      if (ctaSection) {
        const ctaTL = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSection,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: easeCurve, duration: 0.8 },
        })

        const ctaContent = ctaSection.querySelector("[data-anim='about-cta-content']")
        if (ctaContent) {
          ctaTL.fromTo(
            ctaContent,
            { y: dist.cardY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
          )
        }

        // Subtle background scale reveal on sunset banner
        const ctaBg = ctaSection.querySelector("[data-anim='about-cta-bg']")
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
