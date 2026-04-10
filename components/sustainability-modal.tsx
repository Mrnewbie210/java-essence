"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Leaf, Recycle, TreePine } from "lucide-react"

interface SustainabilityModalProps {
  children: React.ReactNode
}

export function SustainabilityModal({ children }: SustainabilityModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl border-emerald-800/30 bg-emerald-950/95 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-white">
            Our Commitment to Sustainability
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <p className="text-center text-white/80 leading-relaxed">
            We are committed to a zero-waste process. Our coconut briquettes are made 
            from upcycled shells, and our vanilla and cinnamon are grown using organic, 
            regenerative farming to protect the rainforest ecosystem.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-3 rounded-xl bg-white/5 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600/20">
                <Recycle className="h-6 w-6 text-emerald-400" />
              </div>
              <span className="text-center text-sm font-medium text-white">
                Zero Waste Process
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl bg-white/5 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600/20">
                <Leaf className="h-6 w-6 text-emerald-400" />
              </div>
              <span className="text-center text-sm font-medium text-white">
                Organic Farming
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl bg-white/5 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600/20">
                <TreePine className="h-6 w-6 text-emerald-400" />
              </div>
              <span className="text-center text-sm font-medium text-white">
                Rainforest Protection
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
