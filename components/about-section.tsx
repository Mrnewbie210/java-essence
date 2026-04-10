"use client"

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-2xl border border-amber-500/20 bg-white/10 p-6 backdrop-blur-lg md:rounded-3xl md:p-8 lg:p-16">
          {/* Section Header */}
          <div className="mb-8 text-center md:mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-amber-400 md:mb-4 md:text-sm md:tracking-[0.3em]">
              Our Story
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:mb-6 md:text-4xl lg:text-5xl">
              About Java Essence
            </h2>
            <div className="mx-auto h-1 w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent md:w-24" />
          </div>

          {/* Content Grid */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left - Main Narrative */}
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-base leading-relaxed text-white/90 md:mb-6 md:text-lg">
                Founded by <span className="font-semibold text-amber-400">Hari Santoso</span> and{" "}
                <span className="font-semibold text-amber-400">Dani Febriana</span>, Java Essence
                is built on a profound respect for Indonesia&apos;s natural wealth. We operate as
                a premier gateway for the finest earth-born products.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-white/80 md:mb-6 md:text-base">
                Every vanilla bean, cinnamon stick, and coconut briquette is meticulously
                inspected to ensure it exceeds global expectations. Under the leadership of
                Hari and Dani, we prioritize integrity, ensuring that our partners receive
                products handled with care and processed with traditional wisdom.
              </p>
              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                Our mission is simple yet profound: to deliver premium, export-grade natural
                products from Indonesia with a quality-first approach. We believe that the
                richness of Indonesian soil, combined with generations of farming expertise,
                creates products that stand unmatched in the global marketplace.
              </p>
            </div>

            {/* Right - Founders & Values */}
            <div className="space-y-6 md:space-y-8">
              {/* Founders Card */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:rounded-2xl md:p-6">
                <h3 className="mb-4 font-serif text-lg font-semibold text-white md:text-xl">
                  Meet Our Founders
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 font-serif text-base font-bold text-amber-400 md:h-12 md:w-12 md:text-lg">
                      HS
                    </div>
                    <div>
                      <p className="font-semibold text-white">Hari Santoso</p>
                      <p className="text-xs text-white/60 md:text-sm">
                        Co-Founder & Export Director
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 font-serif text-base font-bold text-amber-400 md:h-12 md:w-12 md:text-lg">
                      DF
                    </div>
                    <div>
                      <p className="font-semibold text-white">Dani Febriana</p>
                      <p className="text-xs text-white/60 md:text-sm">
                        Co-Founder & Quality Assurance Lead
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm md:rounded-xl md:p-4">
                  <p className="font-serif text-2xl font-bold text-amber-400 md:text-3xl">10+</p>
                  <p className="text-xs text-white/60 md:text-sm">Years Experience</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm md:rounded-xl md:p-4">
                  <p className="font-serif text-2xl font-bold text-amber-400 md:text-3xl">50+</p>
                  <p className="text-xs text-white/60 md:text-sm">Partner Farmers</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm md:rounded-xl md:p-4">
                  <p className="font-serif text-2xl font-bold text-amber-400 md:text-3xl">20+</p>
                  <p className="text-xs text-white/60 md:text-sm">Export Countries</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm md:rounded-xl md:p-4">
                  <p className="font-serif text-2xl font-bold text-amber-400 md:text-3xl">100%</p>
                  <p className="text-xs text-white/60 md:text-sm">Quality Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
