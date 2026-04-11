"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FocusedCarousel } from "@/components/focused-carousel"
import { AboutSection } from "@/components/about-section"
import { StorySections } from "@/components/story-sections"
import { ContactFooter } from "@/components/contact-footer"
import { MobileShortcut } from "@/components/mobile-shortcut"
import { ProductModalProvider } from "@/components/product-modal-context"
import { OverlayProvider } from "@/components/overlay-context"
import { ProductDetailModal } from "@/components/product-detail-modal"

export default function Home() {
  return (
    <ProductModalProvider>
      <OverlayProvider>
        <main className="relative min-h-screen bg-emerald-950">
          <Navbar />
          <HeroSection />
          <FocusedCarousel />
          <AboutSection />
          <StorySections />
          <ContactFooter />
          <MobileShortcut />
        </main>

        {/* ===== GLOBAL PRODUCT MODAL — rendered at root level, 
             completely outside the carousel component tree.
             This is React.memo'd and only re-renders when its 
             own context (selectedProduct) changes. ===== */}
        <ProductDetailModal />
      </OverlayProvider>
    </ProductModalProvider>
  )
}
