"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { ProductDetailModal } from "@/components/product-detail-modal"

const products = [
  {
    id: 1,
    title: "Premium Vanilla Beans",
    shortTitle: "Vanilla",
    subtitle: "Grade A Planifolia",
    origin: "Highlands of Java, Indonesia",
    image: "/images/vanilla-beans.jpg",
    description:
      "Our vanilla beans are hand-pollinated and sun-cured using centuries-old techniques passed down through generations of Javanese farmers. Each pod undergoes a meticulous 9-month curing process that develops its complex, creamy flavor profile. The rich aroma carries notes of caramel and dried fruit.",
    longDescription:
      "Sourced from the misty highlands of Java, our Grade A Planifolia vanilla beans represent the pinnacle of Indonesian vanilla cultivation. Each bean is hand-pollinated during the brief morning flowering window, then carefully nurtured for nine months before harvest. The traditional Bourbon curing method involves repeated cycles of sun-drying and sweating, developing the rich vanillin content that discerning chefs and artisan producers demand.",
    quality:
      "We select only Grade A Planifolia beans measuring 16cm or longer, with a moisture content of 25-35% for optimal flavor extraction. Each batch is tested for vanillin content exceeding 2.0%, ensuring the rich, aromatic intensity chefs demand.",
    usage:
      "Perfect for fine pastry, ice cream production, and artisanal baking. Split lengthwise and scrape seeds directly into custards, or steep whole beans in cream for infusions. Spent pods can be used to make vanilla sugar or extract.",
    gallery: [
      { src: "/images/vanilla-flower.jpg", alt: "Vanilla orchid flower in bloom" },
      { src: "/images/vanilla-green.jpg", alt: "Fresh green vanilla pods on vine" },
      { src: "/images/vanilla-drying.jpg", alt: "Traditional sun-drying process" },
      { src: "/images/vanilla-beans.jpg", alt: "Cured premium vanilla beans" },
    ],
    specs: [
      { label: "Grade", value: "A Premium" },
      { label: "Length", value: "16-20 cm" },
      { label: "Moisture", value: "25-35%" },
      { label: "Vanillin Content", value: "> 2.0%" },
      { label: "Origin", value: "Java, Indonesia" },
      { label: "Curing Process", value: "9 months" },
    ],
  },
  {
    id: 2,
    title: "Coconut Shell Briquettes",
    shortTitle: "Briquettes",
    subtitle: "Zero-Waste Charcoal",
    origin: "Coastal Villages of Sulawesi",
    image: "/images/coconut-charcoal.jpg",
    description:
      "Born from our zero-waste philosophy, these premium briquettes are crafted from upcycled coconut shells sourced from small-scale coconut farmers. The traditional low-emission carbonization process ensures eco-friendly production. Each cube delivers exceptional burn time with minimal ash.",
    longDescription:
      "Our coconut shell briquettes embody the perfect marriage of sustainability and performance. Sourced from the coastal communities of Sulawesi, each shell is carbonized using traditional low-emission kilns, then compressed without chemical binders into uniform cubes. The result is a premium fuel source with exceptional burn time, minimal ash, and zero added odor—making them the choice of discerning shisha lounges and BBQ establishments worldwide.",
    quality:
      "Our briquettes feature an exceptionally low ash content below 3%, ensuring clean burning and easy cleanup. With fixed carbon exceeding 80%, they deliver consistent heat output and an impressive burn time of over 2 hours per cube.",
    usage:
      "Ideal for hookah/shisha lounges seeking premium, odorless charcoal. Also perfect for high-end BBQ restaurants requiring consistent heat. Light using a charcoal burner and wait until fully glowing before use.",
    gallery: [
      { src: "/images/coconut-shells.jpg", alt: "Raw coconut shell material" },
      { src: "/images/charcoal-production.jpg", alt: "Traditional kiln production" },
      { src: "/images/charcoal-quality.jpg", alt: "Premium finished briquettes" },
      { src: "/images/coconut-charcoal.jpg", alt: "Packaged cube briquettes" },
    ],
    specs: [
      { label: "Ash Content", value: "< 3%" },
      { label: "Fixed Carbon", value: "> 80%" },
      { label: "Burn Time", value: "2+ hours" },
      { label: "Shape", value: "Square Cube" },
      { label: "Moisture", value: "< 5%" },
      { label: "Calorific Value", value: "7500+ kcal" },
    ],
  },
  {
    id: 3,
    title: "Korintje Cinnamon Sticks",
    shortTitle: "Cinnamon",
    subtitle: "Kerinci Valley Origin",
    origin: "Kerinci Valley, Sumatra",
    image: "/images/cinnamon-sticks.jpg",
    description:
      "Harvested from the ancient cinnamon forests of the Kerinci Valley, our Korintje cinnamon represents the finest Indonesian cassia variety. Hand-harvested from mature trees by families who have tended these forests for generations. Each stick is sun-dried naturally to preserve its essential oils.",
    longDescription:
      "From the volcanic slopes of Sumatra's Kerinci Valley comes our signature Korintje cinnamon—a variety prized for its bold, sweet-spicy character and deep red-brown quills. Hand-harvested from mature trees by families who have tended these forests for generations, each stick is sun-dried naturally to preserve its essential oils. This artisanal approach yields cinnamon with unmatched aromatic intensity, favored by commercial bakers and craft beverage producers globally.",
    quality:
      "Our cinnamon grades A-quality with essential oil content exceeding 3%, delivering intense aroma and flavor. Each quill is carefully selected for uniform thickness and rich red-brown color, indicating optimal maturity and flavor development.",
    usage:
      "The bold flavor profile makes it ideal for baking, hot beverages, and savory dishes. Use whole sticks for infusing liquids, or grind fresh for maximum potency. Popular in commercial bakeries, spice blends, and craft beverage production.",
    gallery: [
      { src: "/images/cinnamon-tree.jpg", alt: "Cinnamon bark harvesting" },
      { src: "/images/cinnamon-bark.jpg", alt: "Fresh bark curling" },
      { src: "/images/cinnamon-powder.jpg", alt: "Ground cinnamon with sticks" },
      { src: "/images/cinnamon-sticks.jpg", alt: "Bundled cinnamon quills" },
    ],
    specs: [
      { label: "Grade", value: "A Korintje" },
      { label: "Oil Content", value: "> 3%" },
      { label: "Moisture", value: "< 12%" },
      { label: "Length", value: "8-10 cm" },
      { label: "Origin", value: "Sumatra, Indonesia" },
      { label: "Type", value: "Cassia Vera" },
    ],
  },
]

export function FocusedCarousel() {
  // order[0] = main background, order[1] = second layer, order[2+] = preview thumbnails
  const [order, setOrder] = useState(() => products.map((_, i) => i))
  const [isAnimating, setIsAnimating] = useState(false)
  const [animKey, setAnimKey] = useState(0) // triggers re-mount for CSS animations

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    // First item goes to the back
    setOrder((prev) => [...prev.slice(1), prev[0]])
    setAnimKey((k) => k + 1)
    setTimeout(() => setIsAnimating(false), 900)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    // Last item goes to the front
    setOrder((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)])
    setAnimKey((k) => k + 1)
    setTimeout(() => setIsAnimating(false), 900)
  }, [isAnimating])

  // Jump to a specific product as the main slide
  const goToSlide = useCallback(
    (productIndex: number) => {
      if (isAnimating) return
      const currentPos = order.indexOf(productIndex)
      if (currentPos <= 0) return // already main
      setIsAnimating(true)
      // Rotate until productIndex is at front
      const newOrder = [...order.slice(currentPos), ...order.slice(0, currentPos)]
      setOrder(newOrder)
      setAnimKey((k) => k + 1)
      setTimeout(() => setIsAnimating(false), 900)
    },
    [isAnimating, order]
  )

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide()
      if (e.key === "ArrowLeft") prevSlide()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [nextSlide, prevSlide])

  const mainProduct = products[order[0]]
  const secondProduct = products[order[1]]
  const previewIndices = order.slice(2)

  return (
    <section id="products" className="relative h-screen w-full overflow-hidden bg-emerald-950">
      {/* ===== LAYER 1: Second product background (behind main) ===== */}
      <div className="absolute inset-0 z-0">
        <Image
          key={`bg2-${secondProduct.id}`}
          src={secondProduct.image}
          alt={secondProduct.title}
          fill
          className="object-cover opacity-40 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-emerald-950/70" />
      </div>

      {/* ===== LAYER 2: Main product background (fullscreen) ===== */}
      <div
        key={`bg-${animKey}`}
        className="absolute inset-0 z-10 transition-opacity duration-700"
      >
        <Image
          src={mainProduct.image}
          alt={mainProduct.title}
          fill
          className="animate-ken-burns object-cover"
          priority
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-emerald-950/40" />
      </div>

      {/* ===== LAYER 3: Text Content with Cinematic Fade-In-Up + Blur ===== */}
      <div className="relative z-20 flex h-full flex-col justify-end px-6 pb-32 sm:justify-center sm:pb-0 md:px-12 lg:px-20">
        <div className="max-w-xl" key={`content-${animKey}`}>
          {/* Subtitle badge */}
          <div className="animate-cinematic-title mb-3 md:mb-4">
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-400 backdrop-blur-sm md:text-xs">
              {mainProduct.subtitle}
            </span>
          </div>

          {/* Title */}
          <h2 className="animate-cinematic-title mb-3 font-serif text-4xl font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-5xl md:mb-4 md:text-6xl lg:text-7xl">
            {mainProduct.title}
          </h2>

          {/* Origin */}
          <p className="animate-cinematic-subtitle mb-4 text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80 md:mb-5 md:text-base">
            {mainProduct.origin}
          </p>

          {/* Description */}
          <p className="animate-cinematic-desc mb-6 line-clamp-3 max-w-md text-sm leading-relaxed text-white/70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] md:mb-8 md:line-clamp-4 md:text-base">
            {mainProduct.description}
          </p>

          {/* CTA Button → Opens Product Detail Modal */}
          <div className="animate-cinematic-btn">
            <ProductDetailModal
              title={mainProduct.title}
              origin={mainProduct.origin}
              description={mainProduct.longDescription}
              quality={mainProduct.quality}
              usage={mainProduct.usage}
              gallery={mainProduct.gallery}
              specs={mainProduct.specs}
            >
              <button
                className="group inline-flex items-center gap-3 rounded-full border border-amber-400/40 bg-amber-400/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-amber-400 hover:bg-amber-400/20 hover:shadow-[0_0_30px_rgba(251,191,36,0.25)] md:px-8 md:py-4 md:text-base"
              >
                See More
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </ProductDetailModal>
          </div>
        </div>
      </div>

      {/* ===== LAYER 4: Preview Thumbnail Cards (bottom-right) ===== */}
      <div className="absolute bottom-6 right-4 z-30 flex gap-3 sm:bottom-8 sm:right-6 md:bottom-10 md:right-10 md:gap-4">
        {previewIndices.map((productIdx, i) => {
          const product = products[productIdx]
          return (
            <button
              key={`preview-${product.id}-${animKey}`}
              onClick={() => goToSlide(productIdx)}
              className="animate-cinematic-scale group relative h-24 w-36 overflow-hidden rounded-xl border-2 border-white/10 shadow-xl transition-all duration-300 hover:border-amber-400/50 hover:shadow-[0_4px_20px_rgba(251,191,36,0.2)] sm:h-28 sm:w-40 md:h-32 md:w-48 lg:h-36 lg:w-56"
              style={{ animationDelay: `${i * 100}ms` }}
              aria-label={`Go to ${product.title}`}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent transition-all duration-300 group-hover:from-emerald-950/70" />
              {/* Card text */}
              <div className="absolute inset-x-0 bottom-0 p-2.5 md:p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-400/80 md:text-xs">
                  {product.subtitle}
                </p>
                <p className="mt-0.5 text-xs font-bold text-white md:text-sm">
                  {product.shortTitle}
                </p>
              </div>
              {/* Hover ring effect */}
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 transition-all duration-300 group-hover:ring-amber-400/30" />
            </button>
          )
        })}
      </div>

      {/* ===== Navigation Arrows ===== */}
      <div className="absolute bottom-6 left-4 z-30 flex items-center gap-3 sm:bottom-8 sm:left-6 md:bottom-10 md:left-10">
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10 hover:text-white disabled:opacity-30 md:h-12 md:w-12"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10 hover:text-white disabled:opacity-30 md:h-12 md:w-12"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Slide Counter */}
        <div className="ml-2 flex items-center gap-1.5">
          {products.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                order[0] === i
                  ? "w-8 bg-amber-400"
                  : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ===== Section Label (top) ===== */}
      <div className="absolute left-6 top-20 z-20 md:left-10 md:top-24">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 md:text-xs">
          Our Premium Selection
        </p>
      </div>
    </section>
  )
}
