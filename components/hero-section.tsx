"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/equipment/biosafety.jpeg",
    "/equipment/air-shower.webp",
    "/equipment/passbox.jpeg",
    "/equipment/conveyor.jpeg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/pattern.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="container relative z-10 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              RKS Fabricators
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Excellence in Metal Fabrication
            </motion.h2>
            <motion.p
              className="text-lg text-white/90 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Designer, Manufacturer, and Exporter of Custom Metal Fabrication, Structural Steel Work, Industrial
              Equipment, and Precision Components for Construction, Manufacturing, and Engineering Industries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                Know More
              </Button>
            </motion.div>
          </motion.div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: currentImage === index ? 1 : 0,
                  scale: currentImage === index ? 1 : 0.9,
                  zIndex: currentImage === index ? 10 : 0,
                }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`RKS Fabricators Equipment ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-green-500"
        style={{
          clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)",
        }}
      ></div>
    </section>
  )
}

