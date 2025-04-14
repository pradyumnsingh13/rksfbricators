"use client"

import type React from "react"

import { useState, useRef, type TouchEvent } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type Tank = {
  id: string
  name: string
  description: string
  features: string[]
  specifications: { label: string; value: string }[]
  image: string
}

export default function TanksSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const tanks: Tank[] = [
    {
      id: "storage-tank",
      name: "Storage Tank",
      description:
        "Our Storage Tanks are designed for safe and efficient storage of pharmaceutical liquids, chemicals, and raw materials. Built to the highest industry standards, these tanks ensure product integrity while meeting regulatory requirements for pharmaceutical manufacturing.",
      features: [
        "Sanitary design with polished surfaces",
        "CIP/SIP compatibility",
        "Various capacity options",
        "Level indication systems",
        "Optional agitation systems",
        "Custom port configurations",
      ],
      specifications: [
        { label: "Capacity", value: "100L to 50,000L" },
        { label: "Material", value: "SS 304 / SS 316L" },
        { label: "Surface Finish", value: "Ra ≤ 0.5μm for product contact parts" },
        { label: "Design Pressure", value: "Full vacuum to 3 bar" },
        { label: "Temperature Range", value: "-10°C to 150°C" },
        { label: "Compliance", value: "cGMP, ASME BPE, FDA" },
      ],
      image: "/tanks/storagetanks.webp",
    },
    {
      id: "manufacturing-tank-1",
      name: "Manufacturing Tank 1",
      description:
        "Manufacturing Tank 1 is designed for primary processing in pharmaceutical manufacturing. These tanks feature advanced mixing capabilities, precise temperature control, and are built to meet the most stringent requirements for pharmaceutical production processes.",
      features: [
        "High-efficiency mixing system",
        "Precise temperature control",
        "Sanitary design with no dead legs",
        "Multiple port configurations",
        "Automated control systems",
        "Full validation documentation",
      ],
      specifications: [
        { label: "Capacity", value: "200L to 10,000L" },
        { label: "Material", value: "SS 316L with electropolished finish" },
        { label: "Agitator Type", value: "Top-mounted or side-entry" },
        { label: "Temperature Control", value: "Jacketed with PID control" },
        { label: "Pressure Rating", value: "Full vacuum to 4 bar" },
        { label: "Control System", value: "PLC with HMI interface" },
      ],
      image: "/tanks/manufacturingtank.webp",
    },
    {
      id: "manufacturing-tank-2",
      name: "Manufacturing Tank 2",
      description:
        "Manufacturing Tank 2 is specialized for secondary processing stages in pharmaceutical production. These tanks incorporate advanced features for more complex mixing operations, reaction control, and enhanced process monitoring capabilities.",
      features: [
        "Multi-stage mixing systems",
        "Enhanced temperature uniformity",
        "Integrated CIP/SIP systems",
        "Process monitoring sensors",
        "Customizable port layouts",
        "SCADA integration ready",
      ],
      specifications: [
        { label: "Capacity", value: "300L to 15,000L" },
        { label: "Material", value: "SS 316L with mirror polish" },
        { label: "Agitator Options", value: "Multiple impeller configurations" },
        { label: "Jacket Type", value: "Dimple or conventional" },
        { label: "Instrumentation", value: "Temperature, pressure, pH, level" },
        { label: "Compliance", value: "cGMP, ASME BPE, FDA, EU GMP" },
      ],
      image: "/tanks/manufacturingtank2.jpeg",
    },
    {
      id: "manufacturing-tank-3",
      name: "Manufacturing Tank 3",
      description:
        "Manufacturing Tank 3 is designed for tertiary processing in pharmaceutical manufacturing. These tanks feature specialized capabilities for final formulation, blending, and preparation of products before filling or packaging operations.",
      features: [
        "High-precision mixing systems",
        "Rapid heating/cooling capability",
        "Enhanced surface finishes",
        "Multiple sampling ports",
        "Integrated filtration options",
        "21 CFR Part 11 compliant controls",
      ],
      specifications: [
        { label: "Capacity", value: "500L to 20,000L" },
        { label: "Material", value: "SS 316L with electropolished finish" },
        { label: "Surface Finish", value: "Ra ≤ 0.25μm for product contact parts" },
        { label: "Heating/Cooling", value: "Multi-zone jacket control" },
        { label: "Mixing Speed", value: "Variable 10-150 RPM" },
        { label: "Validation", value: "IQ/OQ/PQ documentation included" },
      ],
      image: "/tanks/manufacturingtank3.jpeg",
    },
    {
      id: "manufacturing-tank-4",
      name: "Manufacturing Tank 4",
      description:
        "Manufacturing Tank 4 represents our most advanced processing vessel for pharmaceutical manufacturing. These tanks incorporate state-of-the-art features for complex formulations, critical reactions, and processes requiring the highest levels of precision and control.",
      features: [
        "Advanced multi-stage mixing",
        "Ultra-precise temperature control",
        "Integrated process analytical technology",
        "Automated sampling systems",
        "Complete batch documentation",
        "Remote monitoring capabilities",
      ],
      specifications: [
        { label: "Capacity", value: "1,000L to 30,000L" },
        { label: "Material", value: "SS 316L with mirror polish" },
        { label: "Surface Finish", value: "Ra ≤ 0.2μm for product contact parts" },
        { label: "Control System", value: "Fully automated with recipe management" },
        { label: "Instrumentation", value: "Comprehensive PAT integration" },
        { label: "Compliance", value: "cGMP, ASME BPE, FDA, EU GMP, GAMP 5" },
      ],
      image: "/tanks/manufacturimgtank4.jpeg",
    },
    {
      id: "soft-gelating-tank",
      name: "Soft Gelating Tank",
      description:
        "Our Soft Gelating Tanks are specifically designed for the production of soft gelatin capsules in pharmaceutical manufacturing. These specialized vessels provide precise control of temperature, viscosity, and mixing parameters critical for consistent gelatin formulation.",
      features: [
        "Specialized mixing for gelatin formulations",
        "Precise temperature control systems",
        "Vacuum capabilities for degassing",
        "Homogeneous heating distribution",
        "Automated viscosity monitoring",
        "Clean-in-place compatibility",
      ],
      specifications: [
        { label: "Capacity", value: "200L to 5,000L" },
        { label: "Material", value: "SS 316L with pharmaceutical finish" },
        { label: "Temperature Range", value: "20°C to 90°C (±0.5°C precision)" },
        { label: "Mixing System", value: "Low-shear anchor or ribbon" },
        { label: "Vacuum System", value: "Down to 50 mbar absolute" },
        { label: "Control Features", value: "Automated recipe control with data logging" },
      ],
      image: "/tanks/sgt.jpg",
    },
    {
      id: "wfi-jacketed-tank",
      name: "WFI Jacketed Tank",
      description:
        "WFI (Water for Injection) Jacketed Tanks are designed for storage and distribution of WFI in pharmaceutical facilities. These tanks maintain water quality through precise temperature control and sanitary design, ensuring compliance with pharmacopeia requirements.",
      features: [
        "Sanitary design exceeding USP/EP requirements",
        "Temperature-controlled jacket",
        "Spray ball CIP system",
        "HEPA filtered vents",
        "Continuous circulation capability",
        "TOC and conductivity monitoring options",
      ],
      specifications: [
        { label: "Capacity", value: "500L to 30,000L" },
        { label: "Material", value: "SS 316L with electropolished finish" },
        { label: "Surface Finish", value: "Ra ≤ 0.2μm for water contact surfaces" },
        { label: "Temperature Control", value: "65-80°C (±1°C)" },
        { label: "Insulation", value: "High-efficiency with stainless steel jacket" },
        { label: "Compliance", value: "cGMP, ASME BPE, FDA, USP, EP" },
      ],
      image: "/tanks/wfijacketedtank.webp",
    },
    {
      id: "multimill",
      name: "Multimill",
      description:
        "Our Multimill systems provide versatile size reduction solutions for pharmaceutical processing. These mills offer interchangeable screens and impellers to handle various materials and achieve precise particle size specifications for different formulation requirements.",
      features: [
        "Multiple milling configurations",
        "Interchangeable screens and impellers",
        "Adjustable rotor speed",
        "Quick-change tooling",
        "Low heat generation design",
        "Easy cleaning and validation",
      ],
      specifications: [
        { label: "Capacity", value: "10 kg/hr to 1,000 kg/hr" },
        { label: "Material", value: "SS 316L product contact parts" },
        { label: "Speed Range", value: "500-3,600 RPM" },
        { label: "Screen Sizes", value: "0.2mm to 10mm" },
        { label: "Drive", value: "Variable frequency with digital display" },
        { label: "Containment", value: "OEL down to 1μg/m³ available" },
      ],
      image: "/tanks/multimill.webp",
    },
    {
      id: "hot-air-dryer",
      name: "Hot Air Dryer",
      description:
        "Our Hot Air Dryers provide efficient and controlled drying for pharmaceutical products. These systems utilize HEPA-filtered air with precise temperature and humidity control to ensure consistent drying while maintaining product quality and integrity.",
      features: [
        "HEPA filtered air circulation",
        "Precise temperature and humidity control",
        "Uniform air distribution design",
        "Energy-efficient heat recovery",
        "Automated cycle control",
        "21 CFR Part 11 compliant data recording",
      ],
      specifications: [
        { label: "Capacity", value: "50kg to 2,000kg per batch" },
        { label: "Material", value: "SS 316L product contact parts" },
        { label: "Temperature Range", value: "Ambient to 120°C" },
        { label: "Humidity Control", value: "Optional 10-90% RH" },
        { label: "Air Flow", value: "Adjustable up to 5,000 m³/hr" },
        { label: "Control System", value: "PLC with recipe management" },
      ],
      image: "/tanks/hotairdryer.webp",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === tanks.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? tanks.length - 1 : prevIndex - 1))
  }

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!touchStartX.current) return

    touchEndX.current = e.touches[0].clientX

    // Get the horizontal distance moved
    const diffX = touchStartX.current - e.touches[0].clientX

    // Only prevent default if it's a significant horizontal swipe
    // This allows vertical scrolling to work normally
    if (Math.abs(diffX) > 10) {
      // Prevent default only for horizontal swipes
      e.preventDefault()
    }
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const difference = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50 // Minimum swipe distance in pixels

    if (difference > minSwipeDistance) {
      // Swipe left, go to next slide
      nextSlide()
    } else if (difference < -minSwipeDistance) {
      // Swipe right, go to previous slide
      prevSlide()
    }

    // Reset touch positions
    touchStartX.current = null
    touchEndX.current = null
  }

  const { toast } = useToast()

  // Enhance the request quote functionality for equipment items
  const handleQuoteRequest = (itemName: string) => {
    // Create mailto URL with all parameters
    const mailtoLink = `mailto:rksfabricators.com,rajnikantsharma@rksfabricators.com?subject=${encodeURIComponent(
      `Quote Request for ${itemName}`,
    )}&body=${encodeURIComponent(
      `I would like to request a quote for ${itemName}.\n\nPlease provide pricing and availability information.`,
    )}`

    // Open the email client
    window.location.href = mailtoLink

    // Show toast notification
    toast({
      title: "Email Client Opened",
      description: `Your request for ${itemName} is ready to send. Please review and send from your email client.`,
    })
  }

  return (
    <section className="py-12 md:py-20 bg-white" id="pharmaceuticals-equipments">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pharmaceuticals Equipments</h2>
          <p className="text-lg text-gray-700">
            We design and manufacture high-quality clean room and pharmaceutical equipment that meets the most stringent
            industry standards and regulatory requirements.
          </p>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden touch-pan-x"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: "pan-y" }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {tanks.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0" id={item.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden border">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={`${item.name} - RKS Fabricators high-quality pharmaceutical equipment`}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                      <p className="text-gray-700">{item.description}</p>

                      <Tabs defaultValue="features">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="features">Features</TabsTrigger>
                          <TabsTrigger value="specifications">Specifications</TabsTrigger>
                        </TabsList>
                        <TabsContent value="features" className="mt-4">
                          <Card>
                            <CardContent className="pt-6">
                              <ul className="space-y-2">
                                {item.features.map((feature, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <div className="h-2 w-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="specifications" className="mt-4">
                          <Card>
                            <CardContent className="pt-6">
                              <div className="grid gap-2">
                                {item.specifications.map((spec, index) => (
                                  <div key={index} className="grid grid-cols-2 gap-2 py-1 border-b last:border-0">
                                    <span className="font-medium text-gray-700">{spec.label}:</span>
                                    <span>{spec.value}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>

                      <Button
                        className="bg-blue-800 hover:bg-blue-900 text-white"
                        onClick={() => handleQuoteRequest(item.name)}
                      >
                        Request Quote <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {tanks.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

