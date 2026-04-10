"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"

interface ProductGalleryImage {
  src: string
  alt: string
}

interface ProductSpec {
  label: string
  value: string
}

interface ProductDetailModalProps {
  children: React.ReactNode
  title: string
  origin: string
  description: string
  quality: string
  usage: string
  gallery: ProductGalleryImage[]
  specs: ProductSpec[]
}

const whatsappBase = "https://wa.me/6285161200509"
const whatsappMessage = encodeURIComponent("Halo Java Essence, saya tertarik dengan produk ekspor Anda.")

export function ProductDetailModal({
  children,
  title,
  origin,
  description,
  quality,
  usage,
  gallery,
  specs,
}: ProductDetailModalProps) {
  const [galleryIndex, setGalleryIndex] = useState(0)

  const nextImage = () => {
    setGalleryIndex((prev) => (prev + 1) % gallery.length)
  }

  const prevImage = () => {
    setGalleryIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  // Touch handling for gallery swipe
  const [touchStart, setTouchStart] = useState(0)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextImage()
      else prevImage()
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-white/10 bg-emerald-950/95 p-0 backdrop-blur-xl">
        {/* Slideable Gallery */}
        <div
          className="relative aspect-[16/9] w-full overflow-hidden bg-black/30"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {gallery.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-500 ease-out"
              style={{
                transform: `translateX(${(index - galleryIndex) * 100}%)`,
                opacity: index === galleryIndex ? 1 : 0.3,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}

          {/* Gallery Controls */}
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/80 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/80 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Gallery Dots */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setGalleryIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === galleryIndex
                    ? "w-6 bg-amber-400"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-emerald-950/95 to-transparent" />
        </div>

        <div className="p-6 pt-2 md:p-8 md:pt-3">
          {/* Title */}
          <DialogTitle className="mb-1 font-serif text-2xl font-bold text-white md:text-4xl">
            {title}
          </DialogTitle>
          <p className="mb-6 text-sm uppercase tracking-widest text-amber-400">
            {origin}
          </p>

          {/* Thumbnail Strip */}
          <div className="mb-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setGalleryIndex(index)}
                className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 md:h-20 md:w-20 ${
                  index === galleryIndex
                    ? "border-amber-400 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-75"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Description Sections */}
          <div className="mb-6 space-y-5">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-amber-400">
                Origin Story
              </h3>
              <p className="text-sm leading-relaxed text-white/80 md:text-base">{description}</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-amber-400">
                Quality Standards
              </h3>
              <p className="text-sm leading-relaxed text-white/80 md:text-base">{quality}</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-amber-400">
                Recommended Usage
              </h3>
              <p className="text-sm leading-relaxed text-white/80 md:text-base">{usage}</p>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="mb-6 rounded-xl bg-white/5 p-5 backdrop-blur-sm md:p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Technical Specifications
            </h3>
            <div className="grid gap-3 md:grid-cols-2">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-white/10 pb-2"
                >
                  <span className="text-sm text-white/60">{spec.label}</span>
                  <span className="font-medium text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Inquiry Button */}
          <a
            href={`${whatsappBase}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-600 to-green-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-green-500 hover:to-green-400 hover:shadow-[0_4px_20px_rgba(34,197,94,0.4)] active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" />
            Inquiry via WhatsApp
          </a>

          {/* Phone numbers */}
          <div className="mt-4 flex flex-col items-center gap-1 text-center">
            <p className="text-xs text-white/40">
              WA: +62 851-6120-0509 &nbsp;|&nbsp; Tel: +62 853-1419-1696
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
