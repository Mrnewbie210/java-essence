import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl text-balance">
          OUR EARTH, YOUR HARVEST
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl text-pretty">
          Providing premium Indonesian natural products directly from local farmers, 
          ensuring purity and sustainability in every choice.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button 
            size="lg"
            className="rounded-md bg-emerald-800 px-8 py-6 text-base font-medium text-white hover:bg-emerald-900"
          >
            Explore Products
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="rounded-md border-white/50 bg-transparent px-8 py-6 text-base font-medium text-white hover:bg-white/10 hover:text-white"
          >
            Our Story
          </Button>
        </div>
      </div>
    </section>
  )
}
