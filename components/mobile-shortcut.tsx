"use client"

import { useState, useEffect, useCallback } from "react"
import { useOverlay } from "@/components/overlay-context"
import {
  MessageCircle,
  Mail,
  BookOpen,
  Users,
  Leaf,
  Phone,
  X,
  Home,
  Sparkles,
  ArrowUpRight,
} from "lucide-react"

export function MobileShortcut() {
  const [open, setOpen] = useState(false)
  const { registerOverlay, unregisterOverlay } = useOverlay()

  const whatsappLink =
    "https://wa.me/6285161200509?text=" +
    encodeURIComponent("Halo Java Essence, saya tertarik dengan produk ekspor Anda.")

  const quickActions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      desc: "Chat langsung",
      href: whatsappLink,
      external: true,
      gradient: "from-emerald-400 to-green-600",
      glow: "rgba(52,211,153,0.35)",
    },
    {
      icon: Phone,
      label: "Call Us",
      desc: "+62 851-6120-0509",
      href: "tel:+6285161200509",
      external: false,
      gradient: "from-sky-400 to-blue-600",
      glow: "rgba(56,189,248,0.35)",
    },
    {
      icon: Mail,
      label: "Email",
      desc: "Kirim pesan",
      href: "mailto:javaessence@inter.site",
      external: false,
      gradient: "from-violet-400 to-purple-600",
      glow: "rgba(167,139,250,0.35)",
    },
  ]

  const navLinks = [
    { icon: Home, label: "Home", href: "#" },
    { icon: BookOpen, label: "Products", href: "#products" },
    { icon: Users, label: "About Us", href: "#about" },
    { icon: Leaf, label: "Sustainability", href: "#sustainability" },
  ]

  // Toggle body scroll + Escape key
  const handleClose = useCallback(() => setOpen(false), [])

  // Escape key + body scroll lock + overlay registration
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    if (open) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
      registerOverlay()
    } else {
      document.body.style.overflow = ""
      unregisterOverlay()
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
      if (open) unregisterOverlay()
    }
  }, [open, handleClose, registerOverlay, unregisterOverlay])

  return (
    <>
      {/* ===== FAB Trigger Button ===== */}
      <div className="fixed bottom-5 right-5 z-50 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="group relative flex h-[56px] w-[56px] items-center justify-center rounded-full shadow-[0_4px_24px_rgba(251,191,36,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_36px_rgba(251,191,36,0.6)] active:scale-95"
          style={{
            background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
          }}
          aria-label="Quick actions menu"
        >
          <Sparkles className="h-6 w-6 text-emerald-950 transition-transform duration-300 group-hover:rotate-12" />
          {/* Animated pulse ring */}
          <span
            className="absolute inset-0 rounded-full bg-amber-400/25"
            style={{
              animation: "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
            }}
          />
        </button>
      </div>

      {/* ===== Dark Overlay Backdrop ===== */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-400 md:hidden ${
          open
            ? "pointer-events-auto bg-black/60 backdrop-blur-[6px]"
            : "pointer-events-none bg-transparent backdrop-blur-0"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* ===== Floating Bottom Sheet ===== */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[70] md:hidden ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          fontFamily: "'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif",
          transition: "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        <div
          className="mx-3 mb-3 overflow-hidden rounded-t-3xl rounded-b-2xl border border-white/20 shadow-[0_-12px_50px_rgba(0,0,0,0.4)]"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,78,59,0.85) 0%, rgba(6,45,30,0.92) 100%)",
            backdropFilter: "blur(32px) saturate(200%)",
            WebkitBackdropFilter: "blur(32px) saturate(200%)",
          }}
        >
          {/* Drag Handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="h-[5px] w-12 rounded-full bg-white/25" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-6 pb-2 pt-1">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-white">
                Quick Actions
              </h3>
              <p className="text-[11px] font-medium tracking-wide text-amber-400/70">
                JAVA ESSENCE
              </p>
            </div>
            <button
              onClick={handleClose}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:border-white/25 hover:bg-white/15 hover:text-white active:scale-90"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Elegant Divider */}
          <div className="mx-6 h-px bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />

          {/* ===== Quick Action Cards ===== */}
          <div className="flex gap-3 px-5 pt-5 pb-1">
            {quickActions.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={handleClose}
                className="group flex flex-1 flex-col items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] active:scale-[0.96]"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.4s ease ${index * 70 + 100}ms, transform 0.4s ease ${index * 70 + 100}ms, background 0.3s, border-color 0.3s`,
                }}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} transition-transform duration-300 group-hover:scale-110`}
                  style={{
                    boxShadow: `0 6px 20px ${item.glow}`,
                  }}
                >
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-[13px] font-semibold leading-tight text-white/90">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-[10px] font-medium text-white/35">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* ===== Navigation Links ===== */}
          <div className="px-5 pt-3 pb-2">
            <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Navigate
            </p>
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleClose}
                  className="group flex items-center gap-3.5 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-white/[0.07] active:scale-[0.98]"
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translateX(0)" : "translateX(-10px)",
                    transition: `opacity 0.35s ease ${index * 50 + 300}ms, transform 0.35s ease ${index * 50 + 300}ms, background 0.2s`,
                  }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                    <link.icon className="h-4 w-4 text-amber-400/70" />
                  </div>
                  <span className="flex-1 text-sm font-medium text-white/80 group-hover:text-white">
                    {link.label}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-white/20 transition-all duration-200 group-hover:text-amber-400/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Branding */}
          <div className="mx-6 mt-1 mb-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <p className="pb-3 pt-2 text-center text-[10px] font-medium tracking-wider text-white/20"
            style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
          >
            Premium Indonesian Exports
          </p>
        </div>
      </div>

      {/* Keyframe for pulse */}
      <style jsx global>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.6; }
          75%, 100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </>
  )
}
