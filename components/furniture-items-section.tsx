"use client"

import { useState, useRef, type TouchEvent } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type FurnitureItem = {
  id: string
  name: string
  description: string
  features: string[]
  specifications: { label: string; value: string }[]
  image: string
}

export default function FurnitureItemsSection() {
  const { toast } = useToast()
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const handleRequestQuote = (itemName: string) => {
    // In a real implementation, this would open a form or send an email
    toast({
      title: "Quote Request Sent",
      description: `Your request for ${itemName} has been sent to our team.`,
    })
  }

  const furnitureItems: FurnitureItem[] = [
    {
      id: "crossover-bench",
      name: "Crossover Bench",
      description:
        "Crossover benches provide a hygienic transition point between clean and non-clean areas in pharmaceutical and clean room environments. These benches help maintain contamination control by creating a physical barrier that enforces proper gowning procedures.",
      features: [
        "Stainless steel construction for durability",
        "Smooth, crevice-free design for easy cleaning",
        "Non-shedding, non-porous surfaces",
        "Available in various sizes to fit different doorways",
        "Optional storage compartments for shoes or booties",
        "Ergonomic seating height for comfortable changing",
      ],
      specifications: [
        { label: "Dimensions", value: "1000 x 400 x 450 mm (customizable)" },
        { label: "Material", value: "SS 304 / SS 316L" },
        { label: "Surface Finish", value: "Mirror/Matt finish (Ra<0.8μm)" },
        { label: "Load Capacity", value: "Up to 150 kg" },
        { label: "Design", value: "Seamless welding with rounded edges" },
        { label: "Options", value: "With/without shoe storage compartment" },
      ],
      image: "/furniture/crossoverbench.jpg",
    },
    {
      id: "ss-locker",
      name: "SS Locker",
      description:
        "Stainless steel lockers provide secure storage for personal items in clean room environments. These lockers are designed with smooth surfaces and rounded corners to minimize particle accumulation and facilitate thorough cleaning and sanitization.",
      features: [
        "Fully stainless steel construction",
        "Sloped top to prevent dust accumulation",
        "Ventilation slots for air circulation",
        "Lockable doors with name/number plates",
        "Adjustable internal shelving",
        "Corrosion-resistant in humid environments",
      ],
      specifications: [
        { label: "Dimensions", value: "1800 x 450 x 450 mm (customizable)" },
        { label: "Material", value: "SS 304 / SS 316L" },
        { label: "Door Type", value: "Single or multiple compartments" },
        { label: "Lock Type", value: "Cam lock, digital lock, or RFID options" },
        { label: "Surface Finish", value: "Matt finish (Ra<0.8μm)" },
        { label: "Installation", value: "Free-standing or wall-mounted" },
      ],
      image: "/furniture/sslocker.jpg",
    },
    {
      id: "ms-locker",
      name: "MS Locker",
      description:
        "Mild steel lockers provide economical storage solutions for non-critical areas in pharmaceutical and industrial facilities. These powder-coated lockers offer durability and security while maintaining a clean, professional appearance.",
      features: [
        "Powder-coated mild steel construction",
        "Multiple compartment configurations",
        "Ventilation holes for air circulation",
        "Secure locking mechanisms",
        "Numbered doors with master key option",
        "Anti-rust treatment for longevity",
      ],
      specifications: [
        { label: "Dimensions", value: "1800 x 450 x 450 mm (customizable)" },
        { label: "Material", value: "Mild Steel with powder coating" },
        { label: "Thickness", value: "0.8mm to 1.2mm" },
        { label: "Compartments", value: "1, 2, 4, 6, or 8 door configurations" },
        { label: "Color Options", value: "Light grey, blue, or custom colors" },
        { label: "Lock Type", value: "Cam lock with 2 keys" },
      ],
      image: "/furniture/mslocker.jpg",
    },
    {
      id: "apron-locker",
      name: "Apron Locker",
      description:
        "Specialized lockers designed for storing clean room garments, lab coats, and protective apparel. These lockers feature hanging rods and hooks to properly store gowning materials while maintaining their cleanliness and integrity.",
      features: [
        "Dedicated hanging space for clean room garments",
        "Stainless steel or powder-coated construction",
        "Ventilated design to prevent moisture buildup",
        "Individual compartments for personal items",
        "Sloped top to prevent dust accumulation",
        "Optional UV sterilization system",
      ],
      specifications: [
        { label: "Dimensions", value: "1800 x 600 x 500 mm (customizable)" },
        { label: "Material", value: "SS 304 or powder-coated MS" },
        { label: "Capacity", value: "4-10 garments per section" },
        { label: "Door Type", value: "Full-length or compartmentalized" },
        { label: "Features", value: "Hanging rod, hooks, and optional shelves" },
        { label: "Lock Type", value: "Key, combination, or digital" },
      ],
      image: "/furniture/apronlocker.webp",
    },
    {
      id: "book-almirah",
      name: "Document Almirah",
      description:
        "Document storage cabinets designed for organizing and protecting important documentation in pharmaceutical and laboratory environments. These almirahs provide secure storage for SOPs, batch records, and other critical documents.",
      features: [
        "Adjustable shelving for flexible storage",
        "Lockable doors for document security",
        "Available in stainless steel or powder-coated MS",
        "Dust-resistant design with proper sealing",
        "Optional glass doors for visibility",
        "Reinforced construction for heavy document loads",
      ],
      specifications: [
        { label: "Dimensions", value: "1980 x 915 x 485 mm (customizable)" },
        { label: "Material", value: "SS 304 or powder-coated MS" },
        { label: "Shelves", value: "4-5 adjustable shelves" },
        { label: "Load Capacity", value: "80-100 kg per shelf" },
        { label: "Door Type", value: "Hinged with 3-way locking mechanism" },
        { label: "Finish", value: "Matt finish or powder coating" },
      ],
      image: "/furniture/bookalmirah.webp",
    },
    {
      id: "mopping-trolley",
      name: "Mopping Trolley",
      description:
        "Specialized cleaning carts designed for clean room environments. These trolleys facilitate efficient cleaning operations while maintaining contamination control with separate compartments for clean and used materials.",
      features: [
        "Stainless steel construction for clean room compatibility",
        "Separate compartments for clean and soiled mops",
        "Wringer mechanism for efficient mop processing",
        "Smooth-rolling, non-marking casters",
        "Bucket with volume markings for solution preparation",
        "Compact design for maneuverability in tight spaces",
      ],
      specifications: [
        { label: "Dimensions", value: "900 x 600 x 1050 mm (customizable)" },
        { label: "Material", value: "SS 304 / SS 316L" },
        { label: "Bucket Capacity", value: "2 x 25 liters" },
        { label: "Casters", value: "4 swivel casters (2 with brakes)" },
        { label: "Features", value: "Wringer, tool holders, waste collection" },
        { label: "Optional", value: "Additional storage bins, signage holder" },
      ],
      image: "/furniture/moppingtrolley.webp",
    },
    {
      id: "computer-table",
      name: "Computer Table",
      description:
        "Ergonomic workstations designed for clean room and laboratory environments. These tables provide stable platforms for computers and equipment while meeting clean room requirements for materials and cleanability.",
      features: [
        "Stainless steel or laminate construction",
        "Cable management system for organized wiring",
        "Adjustable height options for ergonomic comfort",
        "Smooth, easy-to-clean surfaces",
        "Keyboard tray and monitor stands",
        "ESD-safe options for sensitive electronics",
      ],
      specifications: [
        { label: "Dimensions", value: "1200 x 750 x 750 mm (customizable)" },
        { label: "Material", value: "SS 304 or laminated MDF with PVC edge banding" },
        { label: "Load Capacity", value: "Up to 100 kg" },
        { label: "Features", value: "Keyboard tray, CPU holder, cable ports" },
        { label: "Surface Treatment", value: "Anti-microbial coating option" },
        { label: "Mobility", value: "Fixed or mobile with locking casters" },
      ],
      image: "/furniture/computertable.jpg",
    },
    
    {
      id: "powder-sampler",
      name: "Powder Sampler",
      description:
        "Specialized tools designed for collecting representative samples from powder materials in pharmaceutical and chemical processing. These samplers ensure accurate sampling while maintaining product integrity and preventing contamination.",
      features: [
        "Stainless steel construction for product compatibility",
        "Various designs for different sampling needs",
        "Smooth, polished surfaces to prevent product adhesion",
        "Autoclavable for sterilization",
        "Ergonomic handles for comfortable operation",
        "Customizable lengths and volumes",
      ],
      specifications: [
        { label: "Material", value: "SS 316L (pharmaceutical grade)" },
        { label: "Surface Finish", value: "Electropolished (Ra<0.5μm)" },
        { label: "Sampling Volume", value: "5-100 ml (depending on model)" },
        { label: "Length Options", value: "300-1500 mm" },
        { label: "Types Available", value: "Zone, thief, slot, core samplers" },
        { label: "Certification", value: "Material certificates, surface finish reports" },
      ],
      image: "/furniture/powder-sampler.jpg",
    },
    
    {
      id: "step-ladder",
      name: "Step Ladder",
      description:
        "Safe access solutions for reaching elevated areas in pharmaceutical and laboratory environments. These ladders are designed with clean room compatibility in mind, featuring materials and construction that minimize contamination risks.",
      features: [
        "Stainless steel or aluminum construction",
        "Non-slip steps for safety",
        "Smooth surfaces with minimal crevices",
        "Self-locking mechanisms for stability",
        "Foldable designs for easy storage",
        "Rubber feet to prevent slipping and floor damage",
      ],
      specifications: [
        { label: "Heights", value: "2-6 steps (customizable)" },
        { label: "Material", value: "SS 304 or aluminum alloy" },
        { label: "Load Capacity", value: "150 kg" },
        { label: "Step Width", value: "80-100 mm with non-slip surface" },
        { label: "Features", value: "Foldable, self-locking mechanism" },
        { label: "Mobility", value: "Lightweight, easy to transport" },
      ],
      image: "/furniture/stepladder.jpg",
    },
    {
      id: "sink-table",
      name: "Sink Table",
      description:
        "Specialized washing stations designed for laboratory and pharmaceutical environments. These sink tables provide dedicated areas for cleaning equipment, utensils, and materials while maintaining proper drainage and contamination control.",
      features: [
        "Seamless stainless steel construction",
        "Deep bowl design to prevent splashing",
        "Rounded corners for easy cleaning",
        "Adjustable feet for leveling",
        "Backsplash to protect wall surfaces",
        "Optional drying racks and shelving",
      ],
      specifications: [
        { label: "Dimensions", value: "1200 x 600 x 850 mm (customizable)" },
        { label: "Material", value: "SS 304 / SS 316L" },
        { label: "Sink Depth", value: "250-300 mm" },
        { label: "Thickness", value: "1.2-1.5 mm" },
        { label: "Features", value: "Drain outlet, optional tap holes" },
        { label: "Options", value: "Single/double bowl, with/without drainboard" },
      ],
      image: "/furniture/sinktable.webp",
    },
    {
      id: "storage-solutions",
      name: "Storage Solutions",
      description:
        "Comprehensive storage systems including pallets, containers, and cabinets designed for pharmaceutical and laboratory environments. These solutions provide organized, clean storage while meeting regulatory requirements for materials and construction.",
      features: [
        "Stainless steel or FDA-approved plastic construction",
        "Stackable designs for space efficiency",
        "Smooth surfaces for easy cleaning",
        "Labeled for clear identification",
        "Sealed designs to protect contents",
        "Various sizes for different storage needs",
      ],
      specifications: [
        { label: "Pallet Dimensions", value: "1200 x 1000 x 150 mm (standard)" },
        { label: "Container Volumes", value: "10L to 200L" },
        { label: "Materials", value: "SS 304/316L or HDPE/PP" },
        { label: "Load Capacity", value: "Up to 1500 kg (pallets)" },
        { label: "Features", value: "Stackable, nestable, sealed lids" },
        { label: "Options", value: "With/without lids, wheels, drainage" },
      ],
      image: "/furniture/storagetank.jpg",
    },
    {
      id: "almirah",
      name: "Almirah",
      description:
        "Our Stainless Steel Almirah offers durable and secure storage for pharmaceutical and industrial environments. Designed with high-quality SS 304/316 material, it ensures hygiene, corrosion resistance, and longevity.",
      features: [
        "Rust-proof stainless steel construction",
        "Multiple adjustable shelves",
        "Lockable doors for security",
        "Smooth surface finish for easy cleaning",
        "Customizable dimensions available",
        "Ventilated design for air circulation"
      ],
      specifications: [
        { label: "Material", value: "SS 304/316" },
        { label: "Dimensions", value: "Customized as per requirement" },
        { label: "Finish", value: "Matt / Mirror finish" },
        { label: "Doors", value: "Hinged or sliding with lock" },
        { label: "Usage", value: "Pharmaceutical, Industrial, Laboratory" },
        { label: "Shelves", value: "Adjustable or fixed" }
      ],
      image: "/furniture/almirah.jpg"
    },
    {
      id: "cagetrolley",
      name: "Cage Trolley",
      description:
        "Our Stainless Steel Cage Trolley is designed for safe and efficient material handling in pharmaceutical, industrial, and laboratory environments. Built with high-quality SS 304/316, it ensures durability, corrosion resistance, and easy mobility.",
      features: [
        "Heavy-duty stainless steel construction",
        "Four swivel castor wheels for smooth movement",
        "Wire mesh design for ventilation and visibility",
        "Secure locking mechanism for safety",
        "Customizable sizes available",
        "Easy to clean and maintain"
      ],
      specifications: [
        { label: "Material", value: "SS 304/316" },
        { label: "Dimensions", value: "Customized as per requirement" },
        { label: "Finish", value: "Matt / Mirror finish" },
        { label: "Wheels", value: "Swivel castor wheels with brakes" },
        { label: "Capacity", value: "Varies based on size and requirement" },
        { label: "Usage", value: "Pharmaceutical, Industrial, Laboratory" }
      ],
      image: "/furniture/cagetrolley.jpg"
    },
    {
      id: "chair",
      name: "Chair",
      description:
        "Our Stainless Steel Chair is designed for pharmaceutical, industrial, and cleanroom environments. It provides durability, hygiene, and comfort with its ergonomic design and corrosion-resistant structure.",
      features: [
        "Ergonomic and sturdy design",
        "Made from high-quality SS 304/316",
        "Rust and corrosion-resistant finish",
        "Easy to clean and maintain",
        "Available with or without backrest",
        "Non-slip rubber feet for stability"
      ],
      specifications: [
        { label: "Material", value: "SS 304/316" },
        { label: "Finish", value: "Matt / Mirror finish" },
        { label: "Seat Type", value: "Flat / Perforated" },
        { label: "Backrest", value: "Available with or without backrest" },
        { label: "Height", value: "Standard or customized" },
        { label: "Usage", value: "Pharmaceutical, Industrial, Cleanroom" }
      ],
      image: "/furniture/chair.jpg"
    },
    {
      id: "diepunchcabinet",
      name: "DiePunch Cabinet",
      description:
        "Our Die Punch Cabinet is designed to securely store and organize dies and punches used in pharmaceutical and industrial applications. Made from high-quality stainless steel, it ensures durability, hygiene, and protection for precision tools.",
      features: [
        "High-grade stainless steel construction",
        "Multiple drawers for organized storage",
        "Lockable design for enhanced security",
        "Smooth sliding mechanism for easy access",
        "Corrosion-resistant and easy to clean",
        "Customizable drawer sizes and configurations"
      ],
      specifications: [
        { label: "Material", value: "SS 304/316" },
        { label: "Finish", value: "Matt / Mirror finish" },
        { label: "Drawer Type", value: "Sliding with lock option" },
        { label: "Capacity", value: "Customized as per requirement" },
        { label: "Usage", value: "Pharmaceutical, Industrial" },
        { label: "Dimensions", value: "Standard or customized" }
      ],
      image: "/furniture/diepunchcabinet.webp"
    },
    {
      id: "dustbin",
      name: "Food Operated Dustbin",
      description:
        "Our Stainless Steel Dustbins are designed for hygienic waste disposal in pharmaceutical, industrial, and commercial environments. Made from high-quality stainless steel, these bins are durable, easy to clean, and corrosion-resistant.",
      features: [
        "Made from high-grade stainless steel",
        "Corrosion-resistant and easy to clean",
        "Available with pedal or open-top design",
        "Lid options for odor control",
        "Customizable sizes and capacities",
        "Suitable for pharmaceutical and cleanroom environments"
      ],
      specifications: [
        { label: "Material", value: "SS 304/316" },
        { label: "Capacity", value: "5L to 100L" },
        { label: "Design", value: "Open-top, pedal-operated, or swing lid" },
        { label: "Finish", value: "Matt / Mirror finish" },
        { label: "Usage", value: "Pharmaceutical, Industrial, Commercial" },
        { label: "Dimensions", value: "Standard or customized" }
      ],
      image: "/furniture/foodopearteddustbin.jpg"
    },
    {
      id: "IPC",
      name: "IPC bin",
      description:
        "Our Intermediate Bulk Containers (IPC) are designed for the safe and efficient handling, storage, and transportation of pharmaceutical powders and granules. These containers ensure contamination-free material transfer in cleanroom environments.",
      features: [
        "Constructed from high-grade stainless steel (SS 316L)",
        "Smooth, crevice-free design to prevent material buildup",
        "Available in various capacities to suit process requirements",
        "Hermetically sealed to prevent contamination",
        "Ergonomic design with easy handling and mobility",
        "Customizable discharge valve options"
      ],
      specifications: [
        { label: "Material", value: "SS 316L with mirror/matt finish" },
        { label: "Capacity", value: "50L to 2000L" },
        { label: "Surface Finish", value: "Electropolished or mirror finish" },
        { label: "Mobility", value: "Equipped with caster wheels for easy transport" },
        { label: "Sealing", value: "Gasket-sealed lid for contamination prevention" },
        { label: "Applications", value: "Pharmaceutical, Chemical, Food industries" }
      ],
      image: "/furniture/IPC.webp"
    },
    {
      id: "linentrolley",
      name: "Linen Trolley",
      description:
        "Our Linen Trolley is designed for the efficient handling and transportation of clean and soiled linens in pharmaceutical, hospital, and industrial environments. Built from high-quality stainless steel, it ensures hygiene and durability.",
      features: [
        "High-grade stainless steel (SS 304/316) construction",
        "Smooth, easy-to-clean surfaces for maintaining hygiene",
        "Lightweight and sturdy design for easy maneuverability",
        "Fitted with durable caster wheels for smooth movement",
        "Available with or without a lid for different applications",
        "Customizable sizes to meet specific requirements"
      ],
      specifications: [
        { label: "Material", value: "SS 304/316 with polished finish" },
        { label: "Capacity", value: "50L to 500L" },
        { label: "Wheels", value: "Heavy-duty swivel caster wheels with brakes" },
        { label: "Structure", value: "Tubular frame with reinforced bottom" },
        { label: "Applications", value: "Pharmaceutical, Healthcare, Industrial use" }
      ],
      image: "/furniture/linentrolley.jpg"
    },
    {
      id: "mug",
      name: "Marking Mug",
      description:
        "Our Stainless Steel Mug is designed for use in pharmaceutical, laboratory, and industrial environments. Made from high-quality SS 304/316, it ensures durability, hygiene, and chemical resistance.",
      features: [
        "Made from corrosion-resistant stainless steel (SS 304/316)",
        "Seamless construction for easy cleaning and hygiene maintenance",
        "Available in various sizes to suit different applications",
        "Ergonomic handle for a comfortable grip",
        "Polished mirror or matte finish options",
        "Suitable for use in cleanroom environments"
      ],
      specifications: [
        { label: "Material", value: "SS 304/316" },
        { label: "Capacity", value: "250ml to 2L" },
        { label: "Finish", value: "Mirror or matte polish" },
        { label: "Handle", value: "Ergonomic stainless steel handle" },
        { label: "Applications", value: "Pharmaceutical, laboratory, industrial use" }
      ],
      image: "/furniture/mug.webp"
    },
    {
      id: "pallet",
      name: "Pallet",
      description:
        "Our Stainless Steel Pallets are designed for hygienic material handling in pharmaceutical, food, and cleanroom environments. They provide durability, corrosion resistance, and ease of cleaning, making them ideal for sterile applications.",
      features: [
        "Constructed from high-grade stainless steel (SS 304/316)",
        "Corrosion-resistant and easy to clean",
        "Designed for heavy-duty industrial and pharmaceutical applications",
        "Available in different sizes and load capacities",
        "Smooth surface for hygienic handling",
        "Stackable and compatible with forklifts and pallet jacks"
      ],
      specifications: [
        { label: "Material", value: "SS 304/316" },
        { label: "Load Capacity", value: "500kg to 2000kg" },
        { label: "Surface Finish", value: "Matte or mirror polish" },
        { label: "Dimensions", value: "Customized as per requirement" },
        { label: "Usage", value: "Pharmaceutical, cleanroom, food industry" }
      ],
      image: "/furniture/pallet.webp"
    },
    {
      id: "petristand",
      name: "Petri Stand",
      description:
        "Our Stainless Steel Petri Stand is designed for securely holding petri dishes in laboratories, ensuring proper organization and ease of access. It is widely used in microbiology and pharmaceutical environments.",
      features: [
        "Made from high-quality stainless steel (SS 304/316)",
        "Corrosion-resistant and easy to clean",
        "Compact and stackable design for efficient space utilization",
        "Multiple slots for holding petri dishes securely",
        "Smooth edges for safe handling",
        "Available in different capacities to accommodate various needs"
      ],
      specifications: [
        { label: "Material", value: "SS 304/316" },
        { label: "Capacity", value: "Holds 10 to 50 petri dishes" },
        { label: "Surface Finish", value: "Mirror or matte finish" },
        { label: "Dimensions", value: "Custom sizes available" },
        { label: "Usage", value: "Microbiology, pharmaceutical, laboratory applications" }
      ],
      image: "/furniture/petristand.webp"
    },
    {
      id: "platformtrolley",
      name: "Movable Step Ladder",
      description:
        "Our Movable Step Ladder is designed for safe and convenient access to elevated areas in pharmaceutical, industrial, and laboratory environments. Constructed from high-quality stainless steel, it ensures durability, stability, and ease of mobility.",

      features: [
        "High-grade stainless steel (SS 304/316) construction",

"Stable and slip-resistant steps for safety",

"Ergonomic handrails for secure grip",

"Smooth-rolling caster wheels with locking mechanism",

"Corrosion-resistant and easy to maintain",

"Available in various heights and step configurations",
      ],
      specifications: [
        { label: "Material", value: "SS 304/316" },
        { label: "Load Capacity", value: "100 kg to 500 kg" },
        { label: "Surface Finish", value: "Mirror or matte finish" },
        { label: "Wheel Type", value: "Swivel caster wheels with brakes" },
        { label: "Dimensions", value: "Custom sizes available" }
      ],
      image: "/furniture/platformtrolley.webp"
    },
    {
      id: "scoop",
      name: "Scoop",
      description:
        "Our Stainless Steel Scoop is ideal for handling powders, granules, and other materials in pharmaceutical, food, and chemical industries. Designed for hygiene and durability, it ensures contamination-free material transfer.",
      features: [
        "Made from high-grade SS 304/316",
        "Seamless design for easy cleaning",
        "Corrosion and rust-resistant",
        "Available in different sizes and capacities",
        "Ergonomic handle for comfortable grip",
        "GMP-compliant for pharmaceutical applications"
      ],
      specifications: [
        { label: "Material", value: "SS 304/316" },
        { label: "Capacity", value: "50 ml to 5 L" },
        { label: "Surface Finish", value: "Mirror or matte finish" },
        { label: "Handle Type", value: "Ergonomic, non-slip grip" },
        { label: "Applications", value: "Pharmaceutical, Food, Chemical industries" }
      ],
      image: "/furniture/scoop.jpg"
    },
    {
      id: "spatulla",
      name: "Stainless Steel Spatulla",
      description:
        "Our Stainless Steel Spatula is designed for precise handling of powders, granules, and semi-solid materials in pharmaceutical, laboratory, and food industries. Made from high-grade stainless steel, it ensures contamination-free material handling.",
      features: [
        "Constructed from high-quality SS 304/316",
        "Smooth, polished finish for easy cleaning",
        "Corrosion and rust-resistant",
        "Available in various sizes and shapes",
        "GMP and FDA-compliant",
        "Ideal for pharmaceutical, chemical, and food applications"
      ],
      specifications: [
        { label: "Material", value: "SS 304/316" },
        { label: "Length", value: "6 inches to 12 inches" },
        { label: "Surface Finish", value: "Mirror or matte finish" },
        { label: "Handle Type", value: "Flat or ergonomic grip" },
        { label: "Applications", value: "Pharmaceutical, Laboratory, Food industries" }
      ],
      image: "/furniture/spatula.jpg"
    },
    {
      id: "ss&mspallettruck",
      name: "SS & MS Pallet Truck",
      description:
        "Our Stainless Steel (SS) and Mild Steel (MS) Pallet Trucks are designed for efficient material handling in pharmaceutical, industrial, and warehouse environments. These trucks ensure smooth transportation of heavy loads with ease and precision.",
      features: [
        "Robust construction with SS 304 / MS frame options",
        "High load-bearing capacity",
        "Ergonomic handle for comfortable operation",
        "Smooth and efficient hydraulic lifting system",
        "Corrosion-resistant stainless steel variant for cleanroom applications",
        "Heavy-duty wheels for easy maneuverability"
      ],
      specifications: [
        { label: "Material", value: "SS 304 / MS" },
        { label: "Load Capacity", value: "1000 kg to 3000 kg" },
        { label: "Fork Length", value: "900mm to 1500mm" },
        { label: "Fork Width", value: "520mm to 685mm" },
        { label: "Wheel Type", value: "Nylon / Polyurethane / Rubber" },
        { label: "Lift Height", value: "85mm to 200mm" }
      ],
      image: "/furniture/ss&mspallettruck.webp"
    },
    
    {
      id: "sscontainer",
      name: "SS Container",
      description:
        "Our Stainless Steel Containers are designed for safe and hygienic storage of pharmaceutical, food, and industrial materials. Made from high-quality SS 304/316, these containers provide excellent corrosion resistance, durability, and easy maintenance.",
      features: [
        "High-grade SS 304/316 construction",
        "Seamless, hygienic design for contamination-free storage",
        "Leak-proof and airtight sealing options",
        "Polished mirror finish for easy cleaning",
        "Available in various sizes and capacities",
        "Stackable and space-efficient design"
      ],
      specifications: [
        { label: "Material", value: "SS 304 / SS 316" },
        { label: "Capacity", value: "5L to 200L" },
        { label: "Surface Finish", value: "Mirror polished or matte finish" },
        { label: "Lid Type", value: "Airtight / Clamp / Screw type" },
        { label: "Usage", value: "Pharmaceutical, Food, Industrial, Laboratory" }
      ],
      image: "/furniture/containers.webp"
    },
    {
      id: "stool",
      name: "Stool",
      description:
        "Our Stainless Steel Stools are designed for durability and hygiene, making them ideal for pharmaceutical, laboratory, and industrial environments. With a sturdy construction and ergonomic design, these stools provide comfort and stability for various applications.",
      features: [
        "Constructed from high-grade SS 304/316",
        "Corrosion-resistant and easy to clean",
        "Sturdy, stable, and durable design",
        "Available with or without backrest",
        "Non-slip rubber feet for enhanced safety",
        "Lightweight and easy to move"
      ],
      specifications: [
        { label: "Material", value: "SS 304 / SS 316" },
        { label: "Height", value: "18 to 30 inches (adjustable options available)" },
        { label: "Surface Finish", value: "Mirror / Matte finish" },
        { label: "Seat Type", value: "Round / Square / Perforated" },
        { label: "Leg Type", value: "Four-legged / Adjustable height / Fixed height" }
      ],
      image: "/furniture/stool.jpg"
    },
    {
      id: "table",
      name: "Table",
      description:
        "Our Stainless Steel Tables are designed for pharmaceutical, laboratory, and industrial use, offering a durable and hygienic workspace. These tables are made from high-quality stainless steel to ensure corrosion resistance and easy maintenance.",
      features: [
        "Constructed from high-grade SS 304/316",
        "Smooth, easy-to-clean surface",
        "Available with or without undershelves",
        "Customizable sizes and designs",
        "Corrosion-resistant and durable",
        "Sturdy legs with anti-slip feet"
      ],
      specifications: [
        { label: "Material", value: "SS 304 / SS 316" },
        { label: "Dimensions", value: "Customizable (Standard: 1200mm x 600mm x 850mm)" },
        { label: "Surface Finish", value: "Matte / Mirror finish" },
        { label: "Load Capacity", value: "Up to 200 kg" },
        { label: "Leg Type", value: "Fixed / Adjustable height" },
        { label: "Additional Features", value: "Optional drawers, wheels, or shelves" }
      ],
      image: "/furniture/table.jpeg"
    },
    {
      id: "toolbox",
      name: "Tool box",
      description:
        "Our Stainless Steel Toolbox provides secure storage for tools and equipment in pharmaceutical, laboratory, and industrial settings. Designed for durability and easy organization, it ensures safe handling and accessibility.",
      features: [
        "High-quality SS 304 / SS 316 construction",
        "Corrosion-resistant and durable design",
        "Multiple compartments for tool organization",
        "Secure locking mechanism",
        "Portable with ergonomic handle",
        "Customizable sizes and layouts"
      ],
      specifications: [
        { label: "Material", value: "SS 304 / SS 316" },
        { label: "Dimensions", value: "Customizable (Standard: 450mm x 250mm x 200mm)" },
        { label: "Finish", value: "Matte / Mirror finish" },
        { label: "Locking System", value: "Key or combination lock" },
        { label: "Handle Type", value: "Ergonomic stainless steel handle" },
        { label: "Additional Features", value: "Optional removable trays and dividers" }
      ],
      image: "/furniture/toolbox.jpeg"
    },
    {
      id: "transportationtrolley",
      name: "Transportation Trolley",
      description:
        "Our Stainless Steel Transportation Trolley is designed for efficient and safe material handling in pharmaceutical, healthcare, and industrial environments. With a robust structure and smooth mobility, it ensures easy transportation of goods and equipment.",
      features: [
        "Constructed from high-quality SS 304 / SS 316",
        "Heavy-duty and corrosion-resistant design",
        "Smooth-rolling swivel casters with brakes",
        "Ergonomic push handles for easy maneuvering",
        "Multiple shelf options for optimized storage",
        "Customizable sizes and configurations"
      ],
      specifications: [
        { label: "Material", value: "SS 304 / SS 316" },
        { label: "Load Capacity", value: "Up to 500 kg (customizable)" },
        { label: "Number of Shelves", value: "1 to 4 (as per requirement)" },
        { label: "Wheel Type", value: "PU / Rubber / Stainless Steel with brakes" },
        { label: "Dimensions", value: "Customizable (Standard: 900mm x 600mm x 900mm)" },
        { label: "Finish", value: "Matte / Mirror finish" }
      ],
      image: "/furniture/transportationtrolley.jpeg"
    },
    {
      id: "tray",
      name: "Tray",
      description:
        "Our Stainless Steel Trays are designed for safe and hygienic handling of pharmaceutical, laboratory, and industrial materials. Made from high-quality stainless steel, these trays offer durability, corrosion resistance, and easy cleaning.",
      features: [
        "Made from high-grade SS 304 / SS 316",
        "Corrosion-resistant and durable construction",
        "Smooth, polished surface for easy cleaning",
        "Available in various sizes and depths",
        "Stackable design for efficient storage",
        "Customizable with perforations or dividers"
      ],
      specifications: [
        { label: "Material", value: "SS 304 / SS 316" },
        { label: "Thickness", value: "0.8mm to 2mm (customizable)" },
        { label: "Size", value: "Standard and custom sizes available" },
        { label: "Surface Finish", value: "Matte / Mirror finish" },
        { label: "Perforation", value: "Available upon request" },
        { label: "Handles", value: "Optional side handles for easy grip" }
      ],
      image: "/furniture/tray.jpg"
    },
    {
      id: "ampoulestray",
      name: "Ampoules Tray",
      description:
        "Our Stainless Steel Ampoules Trays are designed for the secure handling, storage, and transportation of ampoules in pharmaceutical and laboratory settings. These trays ensure safety, organization, and easy accessibility.",
      features: [
        "Constructed from high-quality SS 304 / SS 316",
        "Precision-designed slots for ampoule stability",
        "Corrosion-resistant and easy to clean",
        "Customizable slot sizes and configurations",
        "Stackable design for efficient storage",
        "Available with or without perforations"
      ],
      specifications: [
        { label: "Material", value: "SS 304 / SS 316" },
        { label: "Thickness", value: "0.8mm to 2mm (customizable)" },
        { label: "Size", value: "Standard and custom sizes available" },
        { label: "Surface Finish", value: "Matte / Mirror finish" },
        { label: "Slot Configuration", value: "Customizable based on ampoule size" },
        { label: "Handles", value: "Optional side handles for easy handling" }
      ],
      image: "/furniture/ampoulestray.webp"
},
{
  id: "wallguard",
  name: "Wall Guard",
  description:
    "Our Wall Guards provide superior protection for walls in pharmaceutical, healthcare, and industrial environments. Designed to prevent damage from impact, these guards enhance safety and durability.",
  features: [
    "Made from high-quality stainless steel or PVC",
    "Impact-resistant and corrosion-proof design",
    "Easy to install and maintain",
    "Customizable lengths and finishes",
    "Smooth surface for hygienic applications",
    "Available in various profiles and thicknesses"
  ],
  specifications: [
    { label: "Material", value: "SS 304 / SS 316 / PVC" },
    { label: "Thickness", value: "1mm to 3mm (customizable)" },
    { label: "Length", value: "Standard and custom lengths available" },
    { label: "Finish", value: "Brushed / Mirror / Matte" },
    { label: "Mounting", value: "Adhesive or screw-mounted options" },
    { label: "Application", value: "Hospitals, laboratories, cleanrooms, and industries" }
  ],
  image: "/furniture/wallguard.jpeg"
},
{
  id: "stirir",
  name: "GMP Model Stirrer",
  description:
    "Our GMP Model Stirrer is designed for precise and efficient mixing in pharmaceutical, biotech, and food processing industries. Built to meet Good Manufacturing Practices (GMP) standards, it ensures contamination-free and uniform stirring.",
  features: [
    "GMP-compliant design for hygienic operations",
    "High-efficiency motor for consistent performance",
    "Variable speed control for precision mixing",
    "Corrosion-resistant stainless steel construction",
    "Easy-to-clean and maintain structure",
    "Available in multiple capacities and configurations"
  ],
  specifications: [
    { label: "Material", value: "SS 304 / SS 316" },
    { label: "Motor Power", value: "0.5 HP to 5 HP (customizable)" },
    { label: "Speed Range", value: "100 RPM to 1500 RPM" },
    { label: "Control System", value: "Digital / Analog speed controller" },
    { label: "Mounting Type", value: "Portable / Fixed / Wall-mounted" },
    { label: "Application", value: "Pharmaceutical, biotech, food, and chemical industries" }
  ],
  image: "/furniture/gmpmodelstirir.webp"
},
   
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === furnitureItems.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? furnitureItems.length - 1 : prevIndex - 1))
  }

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
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

  const handleQuoteRequest = (itemName: string) => {
    // In a real implementation, this would send an email or open a form
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
    <section className="py-16 md:py-24 bg-gray-50" id="furniture-items">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Furniture Items</h2>
          <p className="text-lg text-gray-700">
            We manufacture high-quality furniture and accessories specifically designed for clean room, laboratory, and
            pharmaceutical environments.
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
              {furnitureItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0" id={item.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden border">
                      <Image
                        src={item.image || "/placeholder.svg?height=400&width=600"}
                        alt={`${item.name} - RKS Fabricators high-quality furniture item`}
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
            {furnitureItems.map((_, index) => (
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

