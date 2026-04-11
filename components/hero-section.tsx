"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

/**
 * Hero background gallery — cycles through product & farmer images
 * with a cinematic cross-fade + subtle Ken Burns scale effect.
 */
const heroImages = [
  {
    src: "/images/hero-farmer.jpg",
    alt: "Indonesian farmer in vanilla plantation",
  },
  {
    src: "/images/vanilla-beans.jpg",
    alt: "Premium Grade A Planifolia vanilla beans",
  },
  {
    src: "/images/coconut-charcoal.jpg",
    alt: "Coconut shell charcoal briquettes",
  },
  {
    src: "/images/cinnamon-sticks.jpg",
    alt: "Korintje cinnamon sticks from Kerinci Valley",
  },
  {
    src: "/images/vanilla-flower.jpg",
    alt: "Vanilla orchid flower in bloom",
  },
]

const SLIDE_INTERVAL = 5000 // 5 seconds per slide

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length)
  }, [])

  // Auto-slide interval
  useEffect(() => {
    const timer = setInterval(nextImage, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [nextImage])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* ═══ Auto-Changing Background Gallery ═══ */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: SLIDE_INTERVAL / 1000 + 1.5, ease: "linear" },
            }}
          >
            <Image
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              fill
              className="object-cover object-center"
              priority={currentIndex === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay — consistent across all slides */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-emerald-950/70 via-emerald-950/50 to-emerald-950/95" />
      </div>

      {/* ═══ Content ═══ */}
      <div className="relative z-40 flex h-full flex-col items-center justify-center px-4 pb-20 text-center sm:pb-24 md:pb-28">
        {/* Subtle gradient backdrop behind text for better readability */}
        <div className="absolute inset-x-0 top-1/4 -z-10 h-72 bg-gradient-to-b from-transparent via-emerald-950/70 to-transparent md:h-96" />
        
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 md:mb-5 md:text-sm md:tracking-[0.3em]">
          Premium Indonesian Exports
        </p>
        
        {/* High-fashion headline */}
        <h1 className="mb-4 text-5xl font-extrabold tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:text-6xl md:mb-6 md:text-7xl lg:text-8xl xl:text-9xl">
          Java Essence
        </h1>
        
        <p className="mb-4 text-base font-light italic tracking-wide text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] sm:text-lg md:text-xl lg:text-2xl">
          The Soul of Indonesian Earth
        </p>
        
        <p className="mx-auto max-w-xs text-sm font-light leading-relaxed text-white/70 sm:max-w-md md:max-w-lg md:text-base lg:max-w-xl">
          Expertly curated by Hari Santoso &amp; Dani Febriana. Bridging local
          traditions with global export standards.
        </p>

        {/* CTA Button */}
        <a
          href="#products"
          className="group relative z-50 mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-amber-400/60 hover:bg-amber-400/15 hover:text-amber-50 hover:shadow-[0_0_40px_rgba(251,191,36,0.4),0_0_80px_rgba(251,191,36,0.15)] active:scale-95 sm:mt-10 sm:px-9 sm:py-4 md:text-base"
        >
          Explore Our Products
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* ═══ Slide Indicator Dots ═══ */}
      <div className="absolute bottom-16 left-1/2 z-40 flex -translate-x-1/2 gap-2 sm:bottom-20 md:bottom-24">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "w-7 bg-amber-400"
                : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ═══ Scroll Indicator ═══ */}
      <div className="absolute bottom-4 left-1/2 z-40 -translate-x-1/2 sm:bottom-6 md:bottom-8">
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-5 rounded-full border-2 border-white/30 p-1 md:h-12 md:w-6">
            <div className="h-2 w-full animate-bounce rounded-full bg-amber-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
