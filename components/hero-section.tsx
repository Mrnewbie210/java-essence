"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-emerald-950">
      {/* Background - Farmer in Plantation (HIDDEN per request, kept in code) */}
      <div className="absolute inset-0 hidden">
        <Image
          src="/images/hero-farmer.jpg"
          alt="Indonesian farmer in vanilla plantation"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-950/50 to-emerald-950/95" />
      </div>

      {/* Ambient Background — replaces hidden farmer image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(6,78,59,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 55%, rgba(251,191,36,0.04) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-transparent to-emerald-950/90" />
      </div>

      {/* Decorative accent lines */}
      <div className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent md:h-32" />
      <div className="absolute bottom-20 left-1/2 h-20 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-400/15 to-transparent md:bottom-24 md:h-28" />

      {/* Content — w-full, centered, Plus Jakarta Sans */}
      <div
        className="relative z-40 flex h-full w-full flex-col items-center justify-center px-6 text-center"
        style={{
          fontFamily: "'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif",
        }}
      >
        {/* Eyebrow badge */}
        <div className="mb-6 md:mb-8">
          <span className="inline-block rounded-full border border-amber-400/25 bg-amber-400/5 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-400 backdrop-blur-sm md:text-xs md:tracking-[0.35em]">
            Premium Indonesian Exports
          </span>
        </div>

        {/* Main headline */}
        <h1 className="mb-5 font-serif text-6xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl md:mb-7 md:text-8xl lg:text-9xl xl:text-[10rem]">
          Java Essence
        </h1>

        {/* Thin decorative divider */}
        <div className="mb-5 h-px w-16 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent md:mb-7 md:w-24" />

        {/* Tagline */}
        <p className="mb-5 text-base font-light italic tracking-wide text-white/80 md:mb-6 md:text-xl lg:text-2xl">
          The Soul of Indonesian Earth
        </p>

        {/* Description — full width */}
        <p className="mx-auto mb-10 max-w-sm text-sm leading-relaxed text-white/50 md:mb-12 md:max-w-lg md:text-base md:leading-loose lg:max-w-xl">
          Expertly curated by Hari Santoso &amp; Dani Febriana. Bridging local
          traditions with global export standards.
        </p>

        {/* CTA Button */}
        <a
          href="#products"
          className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-50 hover:shadow-[0_0_50px_rgba(251,191,36,0.2)] active:scale-95 sm:px-10 md:text-base"
        >
          Explore Our Products
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 z-40 -translate-x-1/2 sm:bottom-7 md:bottom-9">
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-5 rounded-full border-2 border-white/20 p-1 md:h-12 md:w-6">
            <div className="h-2 w-full animate-bounce rounded-full bg-amber-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
