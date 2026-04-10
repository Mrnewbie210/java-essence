"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, Mail, BookOpen, Users, X, Sparkles } from "lucide-react"

export function MobileShortcut() {
  const [open, setOpen] = useState(false)
  const sheetRef = useRef<HTMLDivElement>(null)

  const whatsappLink = "https://wa.me/6285161200509?text=" + encodeURIComponent("Halo Java Essence, saya tertarik dengan produk ekspor Anda.")

  const menuItems = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      desc: "Chat with us",
      href: whatsappLink,
      external: true,
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Mail,
      label: "Email",
      desc: "Send a message",
      href: "mailto:javaessence@inter.site",
      external: false,
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: BookOpen,
      label: "Catalog",
      desc: "View products",
      href: "#products",
      external: false,
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Users,
      label: "Founders",
      desc: "Our story",
      href: "#about",
      external: false,
      color: "from-purple-400 to-pink-500",
    },
  ]

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      {/* Google Fonts - Plus Jakarta Sans */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Floating Action Button */}
      <div className="fixed bottom-5 right-5 z-50 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full shadow-[0_4px_24px_rgba(251,191,36,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_32px_rgba(251,191,36,0.6)] active:scale-95"
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
          }}
          aria-label="Quick actions"
        >
          <Sparkles className="h-6 w-6 text-emerald-950 transition-transform duration-300 group-hover:rotate-12" />
          {/* Pulse ring */}
          <span className="absolute inset-0 animate-ping rounded-full bg-amber-400/30" style={{ animationDuration: "2s" }} />
        </button>
      </div>

      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Floating Bottom Sheet */}
      <div
        ref={sheetRef}
        className={`fixed inset-x-0 bottom-0 z-[70] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="mx-3 mb-3 overflow-hidden rounded-3xl border border-white/20 shadow-[0_-8px_40px_rgba(0,0,0,0.3)]"
          style={{
            background: "rgba(6, 45, 30, 0.75)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
        >
          {/* Drag Handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="h-1 w-10 rounded-full bg-white/30" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-5 pb-3 pt-2">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Quick Actions
              </h3>
              <p className="text-xs text-white/50 font-medium">
                Java Essence
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-200 hover:bg-white/20 hover:text-white active:scale-90"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Divider */}
          <div className="mx-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* Menu Items */}
          <div className="grid grid-cols-2 gap-3 p-5">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="group flex flex-col items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] active:scale-[0.97]"
                style={{
                  animationDelay: `${index * 60}ms`,
                  animation: open ? `slideUpItem 0.4s ease-out ${index * 60}ms both` : "none",
                }}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                  style={{
                    boxShadow: `0 4px 16px rgba(0,0,0,0.2)`,
                  }}
                >
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-white/90 leading-tight">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-[10px] font-medium text-white/40">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Safe area padding for iOS */}
          <div className="h-2" style={{ paddingBottom: "env(safe-area-inset-bottom)" }} />
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes slideUpItem {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
