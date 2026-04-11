"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, MessageCircle } from "lucide-react"
import { useProductModal, type Product } from "@/components/product-modal-context"

const whatsappBase = "https://wa.me/6285161200509"
const whatsappMessage = encodeURIComponent(
  "Halo Java Essence, saya tertarik dengan produk ekspor Anda."
)

const EASE = "cubic-bezier(0.32, 0.72, 0, 1)"

/**
 * "Modern Slide Showcase" — replaces the standard popup modal entirely.
 *
 * When the user clicks "See More":
 *  1. The carousel background stays visible (frozen).
 *  2. A full-viewport overlay appears.
 *  3. The product image slides from full-screen → bottom-left corner (25vh) on desktop.
 *  4. A description panel slides in from the right (75% width).
 *  5. On mobile, the panel is full-width with a hero image at top.
 *
 * All transitions are pure CSS with state-driven classes.
 */
function ProductDetailShowcaseInner() {
  const { selectedProduct, isModalOpen, closeProductModal } = useProductModal()

  // Keep product data alive during exit animation (context clears on close)
  const [localProduct, setLocalProduct] = useState<Product | null>(null)
  const [mounted, setMounted] = useState(false)
  const [animated, setAnimated] = useState(false)
  const [activeGallery, setActiveGallery] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isModalOpen && selectedProduct) {
      setLocalProduct(selectedProduct)
      setActiveGallery(0)
      setMounted(true)
      // Two-frame delay: render initial state → then trigger CSS transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimated(true)
        })
      })
      document.body.style.overflow = "hidden"
    } else {
      setAnimated(false)
      const timer = setTimeout(() => {
        setMounted(false)
        document.body.style.overflow = ""
      }, 800) // match longest transition duration
      return () => clearTimeout(timer)
    }
  }, [isModalOpen, selectedProduct])

  // Reset scroll position on open
  useEffect(() => {
    if (animated && scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }
  }, [animated])

  // Escape key to close
  useEffect(() => {
    if (!mounted) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProductModal()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [mounted, closeProductModal])

  if (!mounted || !localProduct) return null

  const product = localProduct
  const activeImage = product.gallery[activeGallery] ?? {
    src: product.image,
    alt: product.title,
  }

  return (
    <div
      className="fixed inset-0 z-[60]"
      style={{ pointerEvents: animated ? "auto" : "none" }}
    >
      {/* ═══════════════════════════════════════════════════════════
          DIM BACKDROP — radial gradient for cinematic depth
          ═══════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 50%, rgba(6,78,59,0.5) 0%, rgba(0,0,0,0.88) 100%)",
          opacity: animated ? 1 : 0,
          transition: `opacity 0.7s ${EASE}`,
        }}
        onClick={closeProductModal}
      />

      {/* ═══════════════════════════════════════════════════════════
          PRODUCT IMAGE — Desktop only (md+)
          Starts: fullscreen (inset 0, matches carousel)
          Animated: bottom-left corner, 25vh tall, rounded
          ═══════════════════════════════════════════════════════════ */}
      <div
        className="absolute z-10 hidden overflow-hidden shadow-2xl md:block"
        style={{
          transition: `all 0.8s ${EASE}`,
          willChange: "top, left, width, height, border-radius",
          top: animated ? "calc(100vh - 25vh - 2rem)" : "0",
          left: animated ? "2rem" : "0",
          width: animated ? "22%" : "100%",
          height: animated ? "25vh" : "100vh",
          borderRadius: animated ? "1rem" : "0",
        }}
      >
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          className="object-cover"
          priority
        />

        {/* Carousel-matching gradients — visible at full-screen, fade on collapse */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/60 to-transparent"
          style={{ opacity: animated ? 0 : 1, transition: `opacity 0.5s ${EASE}` }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-emerald-950/40"
          style={{ opacity: animated ? 0 : 1, transition: `opacity 0.5s ${EASE}` }}
        />

        {/* Collapsed-state styling: gradient + ring + label */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"
          style={{ opacity: animated ? 1 : 0, transition: `opacity 0.8s ${EASE}` }}
        />
        <div
          className="absolute inset-0 ring-1 ring-inset ring-white/10"
          style={{
            opacity: animated ? 1 : 0,
            borderRadius: animated ? "1rem" : "0",
            transition: `all 0.8s ${EASE}`,
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 p-4"
          style={{
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(1rem)",
            transition: `all 0.8s ${EASE}`,
          }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
            {product.subtitle}
          </p>
          <p className="text-sm font-bold text-white">{product.shortTitle}</p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          DESCRIPTION PANEL — slides in from right
          Desktop: 75% width | Mobile: 100% width
          ═══════════════════════════════════════════════════════════ */}
      <div
        className="absolute bottom-0 right-0 top-0 z-20 w-full md:w-[75%]"
        style={{
          transform: animated ? "translateX(0)" : "translateX(100%)",
          opacity: animated ? 1 : 0,
          transition: `all 0.8s ${EASE}`,
        }}
      >
        {/* Close Button — outside scroll, always visible at top-right */}
        <button
          onClick={closeProductModal}
          className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-emerald-950/60 text-white/60 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-emerald-950/80 hover:text-white md:right-8 md:top-8"
          aria-label="Close detail view"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Top fade gradient — hides content scrolling behind close button */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-emerald-950/70 to-transparent" />

        {/* ── Scrollable Content Area ── */}
        <div
          ref={scrollRef}
          className="h-full overflow-y-auto"
          style={{
            background:
              "linear-gradient(195deg, rgba(6,78,59,0.6) 0%, rgba(6,45,30,0.7) 50%, rgba(0,0,0,0.55) 100%)",
            backdropFilter: "blur(48px) saturate(180%)",
            WebkitBackdropFilter: "blur(48px) saturate(180%)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* ── Mobile only: Hero Image at top ── */}
          <div className="relative aspect-[16/10] w-full overflow-hidden md:hidden">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
          </div>

          {/* ── Main Content ── */}
          <div className="relative px-7 pb-12 pt-6 sm:px-10 md:px-16 md:pb-20 md:pt-20 lg:px-20">
            {/* Subtitle badge */}
            <div className="mb-4">
              <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-400 backdrop-blur-sm">
                {product.subtitle}
              </span>
            </div>

            {/* Title — large, gold gradient, Plus Jakarta Sans */}
            <h2
              className="mb-2 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl"
              style={{
                fontFamily:
                  "'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif",
                background:
                  "linear-gradient(135deg, #FBBF24 0%, #D97706 50%, #F59E0B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {product.title}
            </h2>

            {/* Origin */}
            <p className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-amber-400/50 md:text-base">
              {product.origin}
            </p>

            {/* Gallery thumbnail strip — clickable to update the preview image */}
            <div className="mb-10 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveGallery(i)}
                  className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 md:h-24 md:w-32 ${
                    i === activeGallery
                      ? "border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                      : "border-white/10 opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Decorative divider */}
            <div className="mb-10 h-px bg-gradient-to-r from-amber-400/30 via-amber-400/10 to-transparent" />

            {/* ── Description Sections ── */}
            <div className="space-y-10">
              <section>
                <h3
                  className="mb-4 text-xl font-semibold text-amber-400 md:text-2xl"
                  style={{
                    fontFamily:
                      "'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif",
                  }}
                >
                  Origin Story
                </h3>
                <p className="text-sm leading-relaxed text-white/75 md:text-base md:leading-loose">
                  {product.longDescription}
                </p>
              </section>

              <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

              <section>
                <h3
                  className="mb-4 text-xl font-semibold text-amber-400 md:text-2xl"
                  style={{
                    fontFamily:
                      "'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif",
                  }}
                >
                  Quality Standards
                </h3>
                <p className="text-sm leading-relaxed text-white/75 md:text-base md:leading-loose">
                  {product.quality}
                </p>
              </section>

              <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

              <section>
                <h3
                  className="mb-4 text-xl font-semibold text-amber-400 md:text-2xl"
                  style={{
                    fontFamily:
                      "'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif",
                  }}
                >
                  Recommended Usage
                </h3>
                <p className="text-sm leading-relaxed text-white/75 md:text-base md:leading-loose">
                  {product.usage}
                </p>
              </section>
            </div>

            {/* ── Technical Specs ── */}
            <div className="mt-12 rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
              <h3
                className="mb-6 text-lg font-semibold text-white md:text-xl"
                style={{
                  fontFamily:
                    "'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif",
                }}
              >
                Technical Specifications
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-white/[0.06] pb-3"
                  >
                    <span className="text-sm text-white/40">{spec.label}</span>
                    <span className="font-medium text-white/90">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── WhatsApp CTA ── */}
            <a
              href={`${whatsappBase}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-600 to-green-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-green-500 hover:to-green-400 hover:shadow-[0_4px_20px_rgba(34,197,94,0.4)] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Inquiry via WhatsApp
            </a>

            <div className="mt-4 pb-4 text-center">
              <p className="text-xs text-white/30">
                WA: +62 851-6120-0509 &nbsp;|&nbsp; Tel: +62 853-1419-1696
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * React.memo ensures this component only re-renders when its own
 * context values change — completely immune to carousel state updates.
 */
export const ProductDetailModal = React.memo(ProductDetailShowcaseInner)
