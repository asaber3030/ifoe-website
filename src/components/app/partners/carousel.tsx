import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"

const partners = [
  { id: 1, name: "Acme Corp", logo: "/placeholder.svg?height=100&width=200" },
  { id: 2, name: "Globex", logo: "/placeholder.svg?height=100&width=200" },
  { id: 3, name: "Initech", logo: "/placeholder.svg?height=100&width=200" },
  { id: 4, name: "Umbrella Corp", logo: "/placeholder.svg?height=100&width=200" },
  { id: 5, name: "Hooli", logo: "/placeholder.svg?height=100&width=200" },
  { id: 6, name: "Pied Piper", logo: "/placeholder.svg?height=100&width=200" }
]

export function PartnerCarousel() {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <CarouselContent>
        {partners.map((partner) => (
          <CarouselItem key={partner.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={200}
                height={100}
                className="w-full h-auto object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
