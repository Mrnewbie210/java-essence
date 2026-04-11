"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { useProductModal } from "@/components/product-modal-context"

interface OverlayContextType {
  /** True when ANY overlay is active (sidebar, modal, etc.) */
  isOverlayOpen: boolean
  registerOverlay: () => void
  unregisterOverlay: () => void
}

const OverlayContext = createContext<OverlayContextType>({
  isOverlayOpen: false,
  registerOverlay: () => {},
  unregisterOverlay: () => {},
})

export function useOverlay() {
  return useContext(OverlayContext)
}

export function OverlayProvider({ children }: { children: ReactNode }) {
  const [overlayCount, setOverlayCount] = useState(0)
  const { isModalOpen } = useProductModal()

  const registerOverlay = useCallback(() => {
    setOverlayCount((c) => c + 1)
  }, [])

  const unregisterOverlay = useCallback(() => {
    setOverlayCount((c) => Math.max(0, c - 1))
  }, [])

  return (
    <OverlayContext.Provider
      value={{
        // Product modal OR any other overlay (navbar sidebar) blocks auto-play
        isOverlayOpen: overlayCount > 0 || isModalOpen,
        registerOverlay,
        unregisterOverlay,
      }}
    >
      {children}
    </OverlayContext.Provider>
  )
}
