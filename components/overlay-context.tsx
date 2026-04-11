"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

interface OverlayContextType {
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

  const registerOverlay = useCallback(() => {
    setOverlayCount((c) => c + 1)
  }, [])

  const unregisterOverlay = useCallback(() => {
    setOverlayCount((c) => Math.max(0, c - 1))
  }, [])

  return (
    <OverlayContext.Provider
      value={{
        isOverlayOpen: overlayCount > 0,
        registerOverlay,
        unregisterOverlay,
      }}
    >
      {children}
    </OverlayContext.Provider>
  )
}
