"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  const features = [
    "State-of-the-art fabrication facility",
    "Experienced team of engineers and technicians",
    "Quality control at every stage of production",
    "Customized solutions for unique requirements",
    "On-time delivery and professional installation",
  ]

  return (
    <section className="py-16 md:py-20 bg-white" id="about">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/lab-furniture.webp" alt="RKS Fabricators Workshop" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Crafting Excellence in Metal Fabrication Since 2003
            </h2>
            <p className="text-lg text-gray-700">
              At RKS Fabricators, we combine traditional craftsmanship with modern technology to deliver superior metal
              fabrication solutions. Our commitment to quality and precision has made us a trusted partner for
              businesses across multiple industries.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="border-blue-800 text-blue-800 hover:bg-blue-50"
              onClick={() => {
                const aboutSection = document.getElementById("about")
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

