"use client"

import type React from "react"

import { useState, useRef, type TouchEvent } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type Equipment = {
  id: string
  name: string
  description: string
  features: string[]
  specifications: { label: string; value: string }[]
  image: string
}

export default function EquipmentSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const equipment: Equipment[] = [
    {
      id: "air-shower",
      name: "Air Shower",
      description:
        "Air showers are specialized enclosed chambers that use high-pressure air to remove dust particles from personnel and materials before entering a clean room environment. They serve as a critical contamination control measure in pharmaceutical, electronics, and food processing industries.",
      features: [
        "High-efficiency HEPA filtration system",
        "Stainless steel construction for durability",
        "Adjustable air velocity control",
        "Interlocking door system for safety",
        "Digital control panel with timer",
        "Low noise operation",
      ],
      specifications: [
        { label: "Dimensions", value: "1200 x 1000 x 2200 mm (customizable)" },
        { label: "Material", value: "SS 304 / SS 316L" },
        { label: "Air Velocity", value: "20-25 m/s" },
        { label: "HEPA Filter", value: "H14 grade with 99.99% efficiency" },
        { label: "Power Supply", value: "220-240V, 50/60Hz" },
        { label: "Capacity", value: "1-4 persons" },
      ],
      image: "/equipment/air-shower.webp",
    },
    {
      id: "mist-shower",
      name: "Mist Shower",
      description:
        "Mist showers provide a fine water mist for decontamination purposes in clean room environments. They are essential in facilities where both particulate and microbial contamination control is required, offering an additional layer of protection beyond standard air showers.",
      features: [
        "Uniform mist distribution system",
        "Stainless steel construction",
        "Programmable misting cycles",
        "Integrated drainage system",
        "Low water consumption design",
        "Easy maintenance access",
      ],
      specifications: [
        { label: "Dimensions", value: "1200 x 1000 x 2200 mm (customizable)" },
        { label: "Material", value: "SS 316L (pharmaceutical grade)" },
        { label: "Nozzle Type", value: "Fine mist atomizing nozzles" },
        { label: "Water Pressure", value: "2-4 bar" },
        { label: "Control System", value: "PLC with HMI interface" },
        { label: "Capacity", value: "1-2 persons" },
      ],
      image: "/equipment/mist-shower.jpg",
    },
    {
      id: "dedusting-tunnel",
      name: "Dedusting Tunnel",
      description:
        "Dedusting tunnels are automated systems designed to remove dust and particles from containers, packages, or products before they enter clean manufacturing areas. These tunnels use a combination of air jets, brushes, and vacuum systems to ensure thorough cleaning.",
      features: [
        "Multi-stage cleaning process",
        "Adjustable conveyor speed",
        "HEPA filtered air system",
        "Vacuum collection system",
        "Automatic operation",
        "Customizable for different product sizes",
      ],
      specifications: [
        { label: "Dimensions", value: "3000 x 800 x 1500 mm (customizable)" },
        { label: "Material", value: "SS 304 / SS 316L" },
        { label: "Conveyor Type", value: "FDA approved belt" },
        { label: "Air Pressure", value: "6-8 bar" },
        { label: "Cleaning Efficiency", value: ">99% particle removal" },
        { label: "Production Capacity", value: "Up to 30 units/minute" },
      ],
      image: "/equipment/dedusting-tunnel.jpg",
    },
    {
      id: "vertical-laf",
      name: "Vertical LAF (Laminar Air Flow)",
      description:
        "Vertical Laminar Air Flow units provide a controlled, unidirectional flow of HEPA-filtered air to create a clean working environment. The vertical flow design ensures particles are swept away from the work area, making it ideal for sensitive operations in pharmaceutical and laboratory settings.",
      features: [
        "Vertical unidirectional airflow",
        "HEPA/ULPA filtration system",
        "Low noise operation",
        "Energy-efficient design",
        "Digital control panel",
        "Optional UV germicidal lamp",
      ],
      specifications: [
        { label: "Dimensions", value: "1200 x 600 x 2000 mm (customizable)" },
        { label: "Material", value: "SS 304 / SS 316L" },
        { label: "Air Velocity", value: "0.45 ± 0.05 m/s" },
        { label: "HEPA Filter", value: "H14 grade with 99.995% efficiency" },
        { label: "Noise Level", value: "<60 dB" },
        { label: "Cleanliness Class", value: "ISO Class 5 (Class 100)" },
      ],
      image: "/equipment/vertical-laf.jpg",
    },
    {
      id: "laf-workbench",
      name: "LAF Workbench",
      description:
        "LAF Workbenches provide a controlled environment for handling sensitive materials in laboratories and production facilities. These workstations feature horizontal laminar airflow that creates a clean, particle-free workspace for critical operations.",
      features: [
        "Horizontal laminar airflow",
        "Ergonomic design for operator comfort",
        "Stainless steel work surface",
        "Built-in lighting system",
        "Easy-to-clean construction",
        "Optional electrical outlets",
      ],
      specifications: [
        { label: "Dimensions", value: "1200 x 750 x 1200 mm (customizable)" },
        { label: "Material", value: "SS 304 work surface with powder-coated body" },
        { label: "Air Velocity", value: "0.45 ± 0.05 m/s" },
        { label: "HEPA Filter", value: "H14 grade with 99.995% efficiency" },
        { label: "Lighting", value: ">800 lux LED lighting" },
        { label: "Power Consumption", value: "500W" },
      ],
      image: "/equipment/laf-workbench.jpg",
    },
    {
      id: "mobile-laf-trolley",
      name: "Mobile LAF Trolley",
      description:
        "Mobile LAF Trolleys provide portable clean air environments that can be moved to different areas as needed. These units are perfect for temporary clean operations in various locations within a facility, offering flexibility without compromising on contamination control.",
      features: [
        "Portable design with lockable wheels",
        "Battery backup option available",
        "Compact footprint",
        "Quick startup operation",
        "Height-adjustable models available",
        "Durable construction for frequent movement",
      ],
      specifications: [
        { label: "Dimensions", value: "900 x 600 x 1100 mm (customizable)" },
        { label: "Material", value: "SS 304 frame and work surface" },
        { label: "Air Velocity", value: "0.45 ± 0.05 m/s" },
        { label: "HEPA Filter", value: "H14 grade" },
        { label: "Mobility", value: "4 lockable castor wheels" },
        { label: "Power Options", value: "Standard AC or battery-powered" },
      ],
      image: "/equipment/mobile-laf-trolley.jpeg",
    },
    {
      id: "sampling-dispensing-booth",
      name: "Sampling & Dispensing Booth",
      description:
        "Sampling and Dispensing Booths provide a controlled environment for handling powders and liquids in pharmaceutical and chemical industries. These booths protect both the operator and the product during sampling and dispensing operations.",
      features: [
        "Downflow and exhaust air systems",
        "Safe containment design",
        "Ergonomic access ports",
        "Easy-to-clean interior",
        "Integrated weighing platform option",
        "Transparent viewing panels",
      ],
      specifications: [
        { label: "Dimensions", value: "1500 x 900 x 2200 mm (customizable)" },
        { label: "Material", value: "SS 316L interior with SS 304 exterior" },
        { label: "Filtration", value: "HEPA for downflow, HEPA/Carbon for exhaust" },
        { label: "Face Velocity", value: "0.5-0.7 m/s" },
        { label: "Control System", value: "Digital with pressure differential display" },
        { label: "Containment Level", value: "OEL <1μg/m³" },
      ],
      image: "/equipment/sampling-dispensing-booth.webp",
    },
    {
      id: "static-dynamic-passbox",
      name: "Static & Dynamic Passbox",
      description:
        "Passboxes serve as transfer chambers between rooms of different cleanliness classifications. Static passboxes use interlocking doors, while dynamic passboxes incorporate active air flushing to remove particles during the transfer process, providing enhanced contamination control.",
      features: [
        "Interlocking door mechanism",
        "Visual/audio indicators",
        "Durable stainless steel construction",
        "Easy-to-clean design",
        "Optional UV sterilization (dynamic)",
        "HEPA filtered air flush (dynamic)",
      ],
      specifications: [
        { label: "Dimensions", value: "600 x 600 x 600 mm (customizable)" },
        { label: "Material", value: "SS 304 / SS 316L" },
        { label: "Door Type", value: "Hinged or sliding with silicone gaskets" },
        { label: "Interlocking", value: "Mechanical or electromagnetic" },
        { label: "Air Changes (Dynamic)", value: "20-40 per cycle" },
        { label: "Control", value: "PLC based with status indicators" },
      ],
      image: "/equipment/passbox.jpeg",
    },
    {
      id: "biosafety-tank",
      name: "Biosafety",
      description:
        "Biosafety are specialized containment vessels designed for the safe handling, storage, and processing of biohazardous materials. These tanks incorporate multiple safety features to prevent contamination and protect both operators and the environment from potential biological hazards.",
      features: [
        "Hermetically sealed design",
        "Integrated sterilization systems",
        "Pressure and temperature monitoring",
        "Automated waste handling",
        "Multiple safety interlocks",
        "SCADA integration capabilities",
      ],
      specifications: [
        { label: "Capacity", value: "100L to 10,000L (customizable)" },
        { label: "Material", value: "SS 316L with electropolished finish" },
        { label: "Pressure Rating", value: "-1 to 3 bar" },
        { label: "Temperature Range", value: "-10°C to 150°C" },
        { label: "Sterilization", value: "SIP/CIP compatible" },
        { label: "Biosafety Level", value: "BSL-2 to BSL-4 compliant" },
      ],
      image: "/equipment/biosafety.jpeg",
    },
    {
      id: "pressure-vessel",
      name: "Pressure Vessel",
      description:
        "Pressure Vessels are engineered containers designed to hold gases or liquids at pressures substantially different from ambient conditions. Our pressure vessels are manufactured to the highest industry standards for pharmaceutical, chemical, and food processing applications.",
      features: [
        "ASME certified construction",
        "Custom design capabilities",
        "Various port configurations",
        "Internal/external heating/cooling jackets",
        "Pressure relief safety systems",
        "Polished internal surfaces",
      ],
      specifications: [
        { label: "Capacity", value: "50L to 20,000L" },
        { label: "Material", value: "SS 304, SS 316L, or special alloys" },
        { label: "Pressure Rating", value: "Up to 30 bar (design specific)" },
        { label: "Temperature Rating", value: "-30°C to 300°C" },
        { label: "Surface Finish", value: "Ra 0.4μm to 0.8μm" },
        { label: "Certification", value: "ASME, PED, or equivalent" },
      ],
      image: "/equipment/pressure-vessel.jpeg",
    },
    {
      id: "conveyor",
      name: "Conveyor Systems",
      description:
        "Our Conveyor Systems are designed for efficient material handling in clean room and pharmaceutical manufacturing environments. These systems ensure smooth product flow while maintaining cleanliness standards and preventing contamination during transport between processing areas.",
      features: [
        "Clean room compatible design",
        "Variable speed control",
        "Modular construction for flexibility",
        "Easy cleaning and maintenance",
        "Integration with production equipment",
        "Custom configurations available",
      ],
      specifications: [
        { label: "Width", value: "100mm to 1000mm" },
        { label: "Material", value: "SS 304 / SS 316L frame with FDA approved belting" },
        { label: "Speed Range", value: "0.1 to 30 meters/minute" },
        { label: "Drive Type", value: "Servo or VFD controlled" },
        { label: "Load Capacity", value: "Up to 100kg/meter" },
        { label: "Clean Room Class", value: "Compatible with ISO 5 to ISO 8" },
      ],
      image: "/equipment/conveyor.jpeg",
    },
    {
      id: "mixer",
      name: "IPC Bin",
      description:
        "Our IPC Bin are engineered for efficient blending of liquids, powders, and slurries in pharmaceutical and chemical processing. These mixers ensure homogeneous mixing while maintaining product integrity and meeting stringent industry requirements.",
      features: [
        "Multiple impeller options",
        "Variable speed operation",
        "CIP/SIP capabilities",
        "Sealed bearing designs",
        "Explosion-proof options",
        "Customizable tank geometries",
      ],
      specifications: [
        { label: "Capacity", value: "10L to 10,000L" },
        { label: "Material", value: "SS 316L with various surface finishes" },
        { label: "Speed Range", value: "10 to 1500 RPM (application dependent)" },
        { label: "Power", value: "0.5kW to 75kW" },
        { label: "Impeller Types", value: "Turbine, Propeller, Anchor, Ribbon, etc." },
        { label: "Control System", value: "Manual to fully automated PLC" },
      ],
      image: "/equipment/industrial-misture.jpeg",
    },
    {
      id: "blender",
      name: "Pharmaceutical Blenders",
      description:
        "Our Pharmaceutical Blenders are specifically designed for gentle yet thorough mixing of sensitive pharmaceutical powders and granules. These blenders ensure uniform product distribution while preventing degradation or damage to delicate ingredients.",
      features: [
        "GMP compliant design",
        "Low-shear mixing action",
        "Polished contact surfaces",
        "Dust-tight operation",
        "Validation documentation",
        "Easy cleaning and inspection",
      ],
      specifications: [
        { label: "Capacity", value: "5L to 5,000L" },
        { label: "Material", value: "SS 316L with mirror polish" },
        { label: "Mixing Time", value: "Typically 5-20 minutes" },
        { label: "Drive System", value: "Geared motor with VFD" },
        { label: "Surface Finish", value: "Ra ≤ 0.4μm for product contact parts" },
        { label: "Types Available", value: "V-blender, Double Cone, Ribbon, Bin" },
      ],
      image: "/equipment/blender.webp",
    },
    {
      id: "autoclave",
      name: "Pharmaceutical Autoclave",
      description:
        "Our Pharmaceutical Autoclaves provide reliable sterilization for pharmaceutical products, equipment, and materials. These systems utilize saturated steam under pressure to eliminate microorganisms and ensure sterility in critical applications.",
      features: [
        "Validation-ready design",
        "Programmable cycle parameters",
        "Data logging and reporting",
        "Multiple safety interlocks",
        "Uniform temperature distribution",
        "Rapid cooling options",
      ],
      specifications: [
        { label: "Chamber Size", value: "100L to 10,000L" },
        { label: "Material", value: "SS 316L chamber with mirror finish" },
        { label: "Operating Pressure", value: "Up to 4 bar" },
        { label: "Temperature Range", value: "105°C to 135°C" },
        { label: "Control System", value: "21 CFR Part 11 compliant" },
        { label: "Door Type", value: "Sliding or hinged with safety interlocks" },
      ],
      image: "/equipment/autoclave.webp",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === equipment.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? equipment.length - 1 : prevIndex - 1))
  }

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current || !touchEndX.current) return

    // Get the element that was touched
    const target = e.target as HTMLElement

    // Check if we're inside a scrollable tab content
    const isInTabContent = target.closest(".tabs-content") !== null

    // If we're in tab content, allow normal scrolling behavior
    if (isInTabContent) {
      touchStartX.current = null
      touchEndX.current = null
      return
    }

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
    const quoteRequest = {
      to: ["rajnikantsharma@rksfabricatorsco.in", "rksfabricators@gmail.com"],
      subject: `Quote Request for ${itemName}`,
      body: `
        I would like to request a quote for ${itemName}.
        
        Please provide pricing and availability information.
      `,
    }

    console.log("Quote request would be sent to:", quoteRequest.to)
    console.log("Quote request content:", quoteRequest.body)

    toast({
      title: "Quote Request Sent",
      description: `Your request for ${itemName} has been sent to rajnikantsharma@rksfabricatorsco.in and rksfabricators@gmail.com`,
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
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {equipment.map((item) => (
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
                        <TabsContent value="features" className="mt-4 tabs-content">
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
                        <TabsContent value="specifications" className="mt-4 tabs-content">
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
            {equipment.map((_, index) => (
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

