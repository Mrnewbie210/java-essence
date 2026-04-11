"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FocusedCarousel } from "@/components/focused-carousel"
import { AboutSection } from "@/components/about-section"
import { StorySections } from "@/components/story-sections"
import { ContactFooter } from "@/components/contact-footer"
import { MobileShortcut } from "@/components/mobile-shortcut"
import { OverlayProvider } from "@/components/overlay-context"

export default function Home() {
  return (
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
    </OverlayProvider>
  )
}
