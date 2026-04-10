import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"

export function ContactSection() {
  const phoneNumber = "+62 851-6120-0509"
  const whatsappLink = "https://wa.me/6285161200509?text=" + encodeURIComponent("Halo Java Essence, saya tertarik dengan produk ekspor Anda.")
  const email = "javaessence@inter.site"

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-md md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Order Now
            </h2>
            <p className="mb-10 text-white/70">
              Ready to experience the finest Indonesian natural products? 
              Contact us for international orders and inquiries.
            </p>

            <div className="mb-10 space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/20">
                  <Phone className="h-5 w-5 text-emerald-400" />
                </div>
                <a 
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  className="text-lg font-medium text-white hover:text-emerald-300 transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/20">
                  <Mail className="h-5 w-5 text-emerald-400" />
                </div>
                <a 
                  href={`mailto:${email}`}
                  className="text-lg font-medium text-white hover:text-emerald-300 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-md bg-green-600 px-8 py-6 text-base font-medium text-white hover:bg-green-700"
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
