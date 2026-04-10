"use client"

import Image from "next/image"
import { Leaf, Recycle, Trees, Heart, Users, Globe } from "lucide-react"

export function StorySections() {
  return (
    <div className="relative">
      {/* Fixed Forest Background for Parallax Effect */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Image
          src="/images/rainforest-bg.jpg"
          alt="Tropical rainforest"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-emerald-950/70" />
      </div>

      {/* Our Farmers Section */}
      <section id="farmers" className="relative py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-2xl border border-amber-500/20 bg-white/10 p-6 backdrop-blur-lg md:rounded-3xl md:p-8 lg:p-16">
            {/* Section Header */}
            <div className="mb-8 text-center md:mb-12">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-amber-400 md:mb-4 md:text-sm md:tracking-[0.3em]">
                The People Behind Our Products
              </p>
              <h2 className="mb-4 font-serif text-3xl font-bold text-white md:mb-6 md:text-4xl lg:text-5xl">
                The Heart of Java Essence
              </h2>
              <div className="mx-auto h-1 w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent md:w-24" />
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <p className="mb-4 text-base leading-relaxed text-white/90 md:mb-6 md:text-lg">
                  Our products are hand-picked by local Indonesian farmers who have
                  preserved traditional harvesting methods for generations. These are
                  not just suppliers—they are the soul of Java Essence, artisans whose
                  weathered hands carry centuries of wisdom.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-white/80 md:mb-6 md:text-base">
                  We ensure fair wages and direct-from-source quality, cutting out
                  middlemen to guarantee that the farmers who nurture our products
                  receive the compensation they deserve. Each partnership we forge
                  represents more than business—it is a commitment to preserving
                  cultural heritage while providing sustainable livelihoods for rural
                  communities across the Indonesian archipelago.
                </p>
                <p className="mb-6 text-sm leading-relaxed text-white/70 md:mb-8 md:text-base">
                  When you see the smile of a vanilla farmer in the highlands of Java,
                  or watch the careful hands of a cinnamon harvester in Sumatra, you
                  understand that Java Essence is not just a company—it is a family
                  that spans islands, generations, and traditions.
                </p>

                {/* Farmer Stats */}
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center md:rounded-xl md:p-4">
                    <Heart className="mx-auto mb-1 h-5 w-5 text-amber-400 md:mb-2 md:h-6 md:w-6" />
                    <p className="font-serif text-xl font-bold text-white md:text-2xl">50+</p>
                    <p className="text-[10px] text-white/60 md:text-xs">Partner Families</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center md:rounded-xl md:p-4">
                    <Users className="mx-auto mb-1 h-5 w-5 text-amber-400 md:mb-2 md:h-6 md:w-6" />
                    <p className="font-serif text-xl font-bold text-white md:text-2xl">3</p>
                    <p className="text-[10px] text-white/60 md:text-xs">Generations</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center md:rounded-xl md:p-4">
                    <Globe className="mx-auto mb-1 h-5 w-5 text-amber-400 md:mb-2 md:h-6 md:w-6" />
                    <p className="font-serif text-xl font-bold text-white md:text-2xl">5</p>
                    <p className="text-[10px] text-white/60 md:text-xs">Islands</p>
                  </div>
                </div>
              </div>

              {/* Photo Gallery */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="relative col-span-2 aspect-video overflow-hidden rounded-lg border border-amber-500/20 md:rounded-xl">
                  <Image
                    src="/images/farmer-1.jpg"
                    alt="Farmer harvesting vanilla"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border border-amber-500/20 md:rounded-xl">
                  <Image
                    src="/images/farmer-2.jpg"
                    alt="Farmers working together"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border border-amber-500/20 md:rounded-xl">
                  <Image
                    src="/images/farmer-3.jpg"
                    alt="Farmer processing coconuts"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Founders Spotlight */}
            <div className="mt-8 md:mt-12">
              <div className="relative overflow-hidden rounded-xl border border-amber-400/20 bg-gradient-to-br from-amber-400/[0.08] via-white/[0.04] to-emerald-400/[0.06] p-6 backdrop-blur-sm md:rounded-2xl md:p-8">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 h-12 w-12 border-t-2 border-l-2 border-amber-400/40 rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-amber-400/40 rounded-br-xl" />

                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-amber-400/70 md:text-sm">
                  Founded &amp; Led By
                </p>

                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6 md:gap-10">
                  {/* Hari Santoso */}
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 md:text-3xl lg:text-4xl"
                      style={{ WebkitBackgroundClip: "text" }}>
                      Hari Santoso
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-white/50 md:text-sm">
                      Co-Founder &amp; Export Director
                    </p>
                  </div>

                  {/* Elegant separator */}
                  <div className="hidden sm:flex flex-col items-center gap-1.5">
                    <div className="h-6 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
                    <span className="font-serif text-lg text-amber-400/60 italic">&amp;</span>
                    <div className="h-6 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
                  </div>
                  <span className="font-serif text-lg text-amber-400/60 italic sm:hidden">&amp;</span>

                  {/* Dani Febriana */}
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 md:text-3xl lg:text-4xl"
                      style={{ WebkitBackgroundClip: "text" }}>
                      Dani Febriana
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-white/50 md:text-sm">
                      Co-Founder &amp; Quality Lead
                    </p>
                  </div>
                </div>

                {/* Subtle tagline */}
                <p className="mt-4 text-center text-xs italic text-white/40 md:mt-5 md:text-sm">
                  &ldquo;Bridging Indonesian traditions with global excellence&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="relative py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-2xl border border-amber-500/20 bg-white/10 p-6 backdrop-blur-lg md:rounded-3xl md:p-8 lg:p-16">
            {/* Section Header */}
            <div className="mb-8 text-center md:mb-12">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-amber-400 md:mb-4 md:text-sm md:tracking-[0.3em]">
                Environmental Responsibility
              </p>
              <h2 className="mb-4 font-serif text-3xl font-bold text-white md:mb-6 md:text-4xl lg:text-5xl">
                Our Commitment to the Earth
              </h2>
              <div className="mx-auto h-1 w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent md:w-24" />
            </div>

            {/* Long Description */}
            <div className="mx-auto mb-8 max-w-4xl text-center md:mb-12">
              <p className="mb-4 text-base leading-relaxed text-white/90 md:mb-6 md:text-lg">
                We are committed to a zero-waste process that honors the land which
                gives us so much. Our coconut briquettes are made from upcycled shells
                that would otherwise be discarded—transforming waste into premium fuel
                that burns cleaner and longer than traditional charcoal.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-white/80 md:mb-6 md:text-base">
                Our vanilla and cinnamon are grown using organic, regenerative farming
                practices that protect the rainforest ecosystem. We work hand-in-hand
                with local communities to implement agroforestry techniques that
                actually improve soil health over time, sequester carbon, and provide
                habitat for native wildlife.
              </p>
              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                Every product you purchase from Java Essence represents a vote for a
                more sustainable future—one where economic prosperity and environmental
                stewardship walk hand in hand through the lush forests of Indonesia.
              </p>
            </div>

            {/* Sustainability Pillars */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              <div className="rounded-xl border border-amber-500/20 bg-white/5 p-6 text-center backdrop-blur-sm md:rounded-2xl md:p-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 md:mb-6 md:h-16 md:w-16">
                  <Recycle className="h-6 w-6 text-amber-400 md:h-8 md:w-8" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-white md:mb-3 md:text-xl">
                  Zero Waste Philosophy
                </h3>
                <p className="text-xs leading-relaxed text-white/70 md:text-sm">
                  Every coconut shell finds new life as premium charcoal. Nothing goes
                  to landfill. We transform agricultural byproducts into valuable,
                  export-quality goods.
                </p>
              </div>

              <div className="rounded-xl border border-amber-500/20 bg-white/5 p-6 text-center backdrop-blur-sm md:rounded-2xl md:p-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 md:mb-6 md:h-16 md:w-16">
                  <Leaf className="h-6 w-6 text-amber-400 md:h-8 md:w-8" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-white md:mb-3 md:text-xl">
                  Organic Cultivation
                </h3>
                <p className="text-xs leading-relaxed text-white/70 md:text-sm">
                  No pesticides, no synthetic fertilizers. Pure, natural cultivation
                  methods that produce healthier products and protect the farmers who
                  grow them.
                </p>
              </div>

              <div className="rounded-xl border border-amber-500/20 bg-white/5 p-6 text-center backdrop-blur-sm sm:col-span-2 md:col-span-1 md:rounded-2xl md:p-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 md:mb-6 md:h-16 md:w-16">
                  <Trees className="h-6 w-6 text-amber-400 md:h-8 md:w-8" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-white md:mb-3 md:text-xl">
                  Rainforest Guardianship
                </h3>
                <p className="text-xs leading-relaxed text-white/70 md:text-sm">
                  Regenerative practices that restore soil health, protect biodiversity,
                  and ensure that Indonesia&apos;s precious rainforests thrive for
                  generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
