"use client"

import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from "react"

// ── Product type definition (shared across carousel & modal) ──────────────
export interface ProductGalleryImage {
  src: string
  alt: string
}

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: number
  title: string
  shortTitle: string
  subtitle: string
  origin: string
  image: string
  description: string
  longDescription: string
  quality: string
  usage: string
  gallery: ProductGalleryImage[]
  specs: ProductSpec[]
}

// ── Context type ──────────────────────────────────────────────────────────
interface ProductModalContextType {
  /** The product currently displayed in the modal, or null if closed */
  selectedProduct: Product | null
  /** Whether the modal is open */
  isModalOpen: boolean
  /** Open the modal with a specific product */
  openProductModal: (product: Product) => void
  /** Close the modal */
  closeProductModal: () => void
}

const ProductModalContext = createContext<ProductModalContextType>({
  selectedProduct: null,
  isModalOpen: false,
  openProductModal: () => {},
  closeProductModal: () => {},
})

export function useProductModal() {
  return useContext(ProductModalContext)
}

/**
 * Provider that manages product-detail modal state at the top level,
 * completely decoupled from the carousel. This ensures that carousel
 * re-renders (slide changes, auto-play ticks) NEVER affect the modal.
 */
export function ProductModalProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  // Use a ref to guarantee the product data persists even if carousel re-renders
  const productRef = useRef<Product | null>(null)

  const openProductModal = useCallback((product: Product) => {
    // Deep-clone the product data into a ref so it's immune to parent re-renders
    productRef.current = { ...product }
    setSelectedProduct({ ...product })
  }, [])

  const closeProductModal = useCallback(() => {
    productRef.current = null
    setSelectedProduct(null)
  }, [])

  const isModalOpen = selectedProduct !== null

  return (
    <ProductModalContext.Provider
      value={{
        selectedProduct,
        isModalOpen,
        openProductModal,
        closeProductModal,
      }}
    >
      {children}
    </ProductModalContext.Provider>
  )
}
