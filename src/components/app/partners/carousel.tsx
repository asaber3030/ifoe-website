"use client"

import Image from "next/image"

const partners = [
  { id: 1, name: "Acme Corp", logo: "/ifoe-logo.png" },
  { id: 2, name: "Globex", logo: "/ifoe-logo.png" },
  { id: 3, name: "Initech", logo: "/ifoe-logo.png" },
  { id: 4, name: "Umbrella Corp", logo: "/ifoe-logo.png" },
  { id: 5, name: "Hooli", logo: "/ifoe-logo.png" },
  { id: 6, name: "Pied Piper", logo: "/ifoe-logo.png" },
  { id: 7, name: "Acme Corp", logo: "/ifoe-logo.png" },
  { id: 8, name: "Globex", logo: "/ifoe-logo.png" },
  { id: 9, name: "Initech", logo: "/ifoe-logo.png" },
  { id: 10, name: "Umbrella Corp", logo: "/ifoe-logo.png" },
  { id: 11, name: "Hooli", logo: "/ifoe-logo.png" },
  { id: 12, name: "Pied Piper", logo: "/ifoe-logo.png" }
]

export function PartnerCarousel() {
  return (
    <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-8 container mx-auto">
      {partners.map((partner, i) => (
        <div className="p-1" key={i}>
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            width={200}
            height={100}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  )
}
