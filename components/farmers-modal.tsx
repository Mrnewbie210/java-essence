"use client"

import * as React from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const farmerImages = [
  {
    src: "/images/farmer-1.jpg",
    alt: "Farmer harvesting vanilla beans",
  },
  {
    src: "/images/farmer-2.jpg",
    alt: "Farmers working in cinnamon field",
  },
  {
    src: "/images/farmer-3.jpg",
    alt: "Farmer processing coconut shells",
  },
]

interface FarmersModalProps {
  children: React.ReactNode
}

export function FarmersModal({ children }: FarmersModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl border-emerald-800/30 bg-emerald-950/95 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-white">
            The Heart of Java Essence
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <p className="text-center text-white/80 leading-relaxed">
            Our products are hand-picked by local Indonesian farmers who have preserved 
            traditional harvesting methods for generations. We ensure fair wages and 
            direct-from-source quality.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {farmerImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
