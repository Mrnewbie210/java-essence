"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Menu,
  X,
  Home,
  ShoppingBag,
  Users,
  Leaf,
  Phone,
  MessageCircle,
  ChevronRight,
} from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  const linkStyles =
    "text-sm font-medium text-white/90 transition-all duration-300 hover:text-white hover:underline hover:underline-offset-4 cursor-pointer"

  const navLinks = [
    { href: "#", label: "Home", icon: Home },
    { href: "#products", label: "Products", icon: ShoppingBag },
    { href: "#about", label: "About", icon: Users },
    { href: "#farmers", label: "Our Farmers", icon: Users },
    { href: "#sustainability", label: "Sustainability", icon: Leaf },
    { href: "#contact", label: "Contact", icon: Phone },
  ]

  const whatsappLink =
    "https://wa.me/6285161200509?text=" +
    encodeURIComponent("Halo Java Essence, saya tertarik dengan produk ekspor Anda.")

  return (
    <>
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
                <Link key={link.href + link.label} href={link.href} className={linkStyles}>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition-all duration-200 hover:bg-white/10 md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== Glassmorphism Sidebar Overlay ===== */}
      <div
        className={`fixed inset-0 z-[80] transition-all duration-400 md:hidden ${
          open
            ? "pointer-events-auto bg-black/50 backdrop-blur-[5px]"
            : "pointer-events-none bg-transparent backdrop-blur-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ===== Glassmorphism Sidebar Menu ===== */}
      <div
        className={`fixed inset-y-0 right-0 z-[90] w-[300px] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          fontFamily: "'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif",
          transition: "transform 0.45s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        <div
          className="flex h-full flex-col border-l border-white/10"
          style={{
            background:
              "linear-gradient(195deg, rgba(6,78,59,0.55) 0%, rgba(6,45,30,0.7) 50%, rgba(0,0,0,0.5) 100%)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
          }}
        >
          {/* Header: Logo + Close */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <div>
              <p className="font-serif text-2xl font-bold tracking-tight text-white">
                Java Essence
              </p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-400/60">
                Premium Exports
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-90"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Decorative Divider */}
          <div className="mx-6 h-px bg-gradient-to-r from-amber-400/30 via-amber-400/10 to-transparent" />

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 pt-4 pb-2">
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
              Menu
            </p>
            {navLinks.map((link, index) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3.5 rounded-xl px-3 py-3.5 transition-all duration-250 hover:bg-white/[0.07] active:scale-[0.98]"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(16px)",
                  transition: `opacity 0.35s ease ${index * 50 + 150}ms, transform 0.35s ease ${index * 50 + 150}ms, background 0.2s`,
                }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] transition-all duration-200 group-hover:border-amber-400/20 group-hover:bg-amber-400/10">
                  <link.icon className="h-4 w-4 text-white/40 transition-colors duration-200 group-hover:text-amber-400" />
                </div>
                <span className="flex-1 text-[15px] font-medium text-white/70 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white">
                  {link.label}
                </span>
                <ChevronRight className="h-3.5 w-3.5 text-white/10 transition-all duration-200 group-hover:text-white/30" />
              </Link>
            ))}
          </nav>

          {/* WhatsApp CTA at bottom */}
          <div className="px-5 pb-2">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3.5 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/20 active:scale-[0.98]"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.4s ease 500ms, transform 0.4s ease 500ms, background 0.3s, border-color 0.3s",
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 shadow-[0_4px_12px_rgba(52,211,153,0.3)]">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white/90">Chat WhatsApp</p>
                <p className="text-[11px] text-white/40">+62 851-6120-0509</p>
              </div>
              <ChevronRight className="h-4 w-4 text-emerald-400/50" />
            </a>
          </div>

          {/* Footer */}
          <div className="px-6 pb-4 pt-2" style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom))" }}>
            <p className="text-[10px] font-medium tracking-wider text-white/15">
              © {new Date().getFullYear()} Java Essence
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
