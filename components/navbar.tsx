"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [open, setOpen] = useState(false)

  const linkStyles = cn(
    "text-sm font-medium text-white/90 transition-all duration-300",
    "hover:text-white hover:underline hover:underline-offset-4 cursor-pointer"
  )

  const mobileLinkStyles = cn(
    "block py-3 text-lg font-medium text-white/90 transition-all duration-300",
    "hover:text-amber-400"
  )

  const navLinks = [
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#farmers", label: "Our Farmers" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-emerald-950/80 to-transparent">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-6">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="font-serif text-xl font-bold tracking-wide text-white md:text-2xl"
          >
            Java Essence
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkStyles}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] border-l border-white/10 bg-emerald-950/95 backdrop-blur-lg"
              >
                <div className="mt-8 flex flex-col">
                  <p className="mb-6 font-serif text-2xl font-bold text-white">
                    Java Essence
                  </p>
                  <nav className="flex flex-col">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={mobileLinkStyles}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
