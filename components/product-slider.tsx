"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const products = [
  {
    id: 1,
    title: "Premium Vanilla Beans",
    description: "Grade A Planifolia, rich aroma",
    image: "/images/vanilla-beans.jpg",
  },
  {
    id: 2,
    title: "Square Coconut Briquettes",
    description: "Eco-friendly, long burn, smoke-free",
    image: "/images/coconut-charcoal.jpg",
  },
  {
    id: 3,
    title: "Authentic Cinnamon Sticks",
    description: "Korintje quality, warm flavor",
    image: "/images/cinnamon-sticks.jpg",
  },
]

export function ProductSlider() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="products" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-md md:p-12">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Featured Products
          </h2>

          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-5xl"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="overflow-hidden rounded-2xl border-0 bg-white/10 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="mb-2 text-lg font-semibold text-white">
                          {product.title}
                        </h3>
                        <p className="text-sm text-white/70">
                          {product.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-0 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white md:-left-12" />
            <CarouselNext className="right-0 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white md:-right-12" />
          </Carousel>

          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  current === index
                    ? "w-6 bg-white"
                    : "bg-white/40 hover:bg-white/60"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
