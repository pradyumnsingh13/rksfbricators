import Image from "next/image"
import Link from "next/link"
import MainNav from "@/components/main-nav"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import EquipmentSection from "@/components/equipment-section"
import ProductsSection from "@/components/products-section"
import ClientsSection from "@/components/clients-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FurnitureItemsSection from "@/components/furniture-items-section"
import TanksSection from "@/components/tanks-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-blue-950 text-white py-2">
        <div className="container flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <span>GST No: 02AZFPS6624Q1ZU</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:rajnikantsharma@rksfabricatorsco.in" className="hover:text-blue-200 transition-colors">
              rajnikantsharma@rksfabricatorsco.in
            </a>
            <a href="tel:+919876543210" className="hover:text-blue-200 transition-colors">
              +91 98162 73955
            </a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">RKS Fabricators</span>
          </Link>
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <EquipmentSection />
        <FurnitureItemsSection />
        <TanksSection />
        <div id="products">
          <ProductsSection />
        </div>
        <ClientsSection />
        <div id="services">
          <ServicesSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

