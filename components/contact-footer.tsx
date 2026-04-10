"use client"

import { Mail, Phone, MessageCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactFooter() {
  const phoneNumber = "+6285161200509"
  const phoneNumberAlt = "+6285314191696"
  const whatsappLink = "https://wa.me/6285161200509?text=" + encodeURIComponent("Halo Java Essence, saya tertarik dengan produk ekspor Anda.")

  return (
    <footer id="contact" className="relative bg-[#064E3B] py-16 md:py-24">
      {/* Decorative Top Border */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center md:mb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-amber-400 md:mb-4 md:text-sm md:tracking-[0.3em]">
            International Orders
          </p>
          <h2 className="mb-3 font-serif text-3xl font-bold text-white md:mb-4 md:text-4xl lg:text-5xl">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto max-w-lg text-sm text-white/70 md:max-w-2xl md:text-base">
            Connect with Hari and Dani for wholesale inquiries, custom orders, or
            to request our complete export catalog. We ship worldwide with proper
            documentation for international trade.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {/* Phone */}
          <div className="rounded-xl border border-amber-500/20 bg-white/5 p-6 text-center backdrop-blur-sm md:rounded-2xl md:p-8">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 md:mb-4 md:h-14 md:w-14">
              <Phone className="h-5 w-5 text-amber-400 md:h-6 md:w-6" />
            </div>
            <h3 className="mb-2 font-serif text-base font-semibold text-white md:text-lg">
              International Line
            </h3>
            <a
              href={`tel:${phoneNumber}`}
              className="text-lg font-medium text-amber-400 transition-colors hover:text-amber-300 md:text-xl"
            >
              +62 851-6120-0509
            </a>
            <p className="mt-1 text-xs text-white/50 md:mt-2 md:text-sm">
              Alt: +62 853-1419-1696
            </p>
          </div>

          {/* Email */}
          <div className="rounded-xl border border-amber-500/20 bg-white/5 p-6 text-center backdrop-blur-sm md:rounded-2xl md:p-8">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 md:mb-4 md:h-14 md:w-14">
              <Mail className="h-5 w-5 text-amber-400 md:h-6 md:w-6" />
            </div>
            <h3 className="mb-2 font-serif text-base font-semibold text-white md:text-lg">
              Email Us
            </h3>
            <a
              href="mailto:javaessence@inter.site"
              className="break-all text-lg font-medium text-amber-400 transition-colors hover:text-amber-300 md:text-xl"
            >
              javaessence@inter.site
            </a>
            <p className="mt-1 text-xs text-white/50 md:mt-2 md:text-sm">Response within 24 hours</p>
          </div>

          {/* WhatsApp */}
          <div className="rounded-xl border border-amber-500/20 bg-white/5 p-6 text-center backdrop-blur-sm sm:col-span-2 md:col-span-1 md:rounded-2xl md:p-8">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 md:mb-4 md:h-14 md:w-14">
              <MessageCircle className="h-5 w-5 text-amber-400 md:h-6 md:w-6" />
            </div>
            <h3 className="mb-2 font-serif text-base font-semibold text-white md:text-lg">
              Direct WhatsApp Inquiry
            </h3>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-medium text-amber-400 transition-colors hover:text-amber-300 md:text-xl"
            >
              Chat Now
            </a>
            <p className="mt-1 text-xs text-white/50 md:mt-2 md:text-sm">Fastest response</p>
          </div>
        </div>

        {/* Request Catalog Button */}
        <div className="mt-8 text-center md:mt-12">
          <Button
            size="lg"
            className="gap-2 border-2 border-amber-400 bg-amber-400 px-6 py-5 text-base font-semibold text-[#064E3B] transition-all hover:bg-amber-300 md:px-10 md:py-6 md:text-lg"
            asChild
          >
            <a href="mailto:javaessence@inter.site?subject=Export%20Catalog%20Request&body=Hello%20Java%20Essence%20Team%2C%0A%0AI%20am%20interested%20in%20receiving%20your%20complete%20export%20catalog.%0A%0AThank%20you.">
              <FileText className="h-4 w-4 md:h-5 md:w-5" />
              Request Export Catalog
            </a>
          </Button>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 md:mt-20 md:pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:gap-6 md:text-left">
            <div>
              <p className="font-serif text-xl font-bold text-white md:text-2xl">
                Java Essence
              </p>
              <p className="mt-1 text-xs text-white/50 md:text-sm">
                Premium Indonesian Natural Products
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-xs text-white/60 md:text-sm">
                Founded by Hari Santoso & Dani Febriana
              </p>
              <p className="mt-1 text-[10px] text-white/40 md:text-xs">
                &copy; {new Date().getFullYear()} Java Essence. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
