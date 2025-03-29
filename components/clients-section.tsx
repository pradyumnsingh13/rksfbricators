"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function ClientsSection() {
  const clients = [
    { name: "L'Oreal", logo: "/clients/loreal.png" },
    { name: "Cipla", logo: "/clients/cipla.jpeg" },
    { name: "Acme", logo: "/clients/acme.png" },
    { name: "Unichem", logo: "/clients/unichem.png" },
    { name: "Allrite Pharma", logo: "/clients/allrite.jpg" },
    { name: "Venus", logo: "/clients/venus.png" },
    { name: "Dabur", logo: "/clients/dabur.jpeg" },
    { name: "Ranbaxy", logo: "/clients/sunpharma.jpeg" },
    { name: "Wipro", logo: "/clients/wipro.webp" },
    { name: "Torrent Pharma", logo: "/clients/torrent.png" },
    { name: "Panacea Biotec", logo: "/clients/panacea.png" },
    { name: "DP Chocolates", logo: "/clients/dpchocolates.jpg" },
    { name: "Johnson Johnson", logo: "/clients/johnson.png" },
    { name: "Theon Pharmaceuticals", logo: "/clients/theon.jpeg" },


  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const totalWidth = scrollContainer.scrollWidth
    const containerWidth = scrollContainer.clientWidth

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += 0.5
      if (scrollPosition >= totalWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="py-16 md:py-20 bg-gray-50" id="clients">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Trusted Clients</h2>
          <p className="text-lg text-gray-700">
            We're proud to partner with leading companies in the pharmaceutical, cosmetic, and healthcare industries to
            deliver exceptional quality equipment.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex items-center gap-12 overflow-x-hidden py-8">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`client-1-${index}`}
                className="flex-shrink-0 h-20 w-40 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} - RKS Fabricators Client`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}

            {/* Duplicate set for infinite scroll */}
            {clients.map((client, index) => (
              <div
                key={`client-2-${index}`}
                className="flex-shrink-0 h-20 w-40 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} - RKS Fabricators Client`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  )
}

