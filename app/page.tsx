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
import { Download } from "lucide-react"
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
        <title>RKS Fabricators | Premium Lab Furniture & Pharma Equipment</title>
        <meta
          name="description"
          content="RKS Fabricators is a trusted manufacturer of lab furniture, pharma and chemical equipment, based in Baddi. Explore our products and request a quote today."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://www.rksfabricators.com/" />
      </Head>
    <div className="flex min-h-screen flex-col">
      <div className="bg-blue-950 text-white py-2">
        <div className="container flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-2 sm:mb-0">
            <span>GST No: 02AZFPS6624Q1ZU</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="/RKS CATALOGUE.pdf" download className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Download className="h-4 w-4" />
              <span>Company Catalog</span>
            </a>
            <a href="mailto:rajnikantsharma@rksfabricators.com" className="hover:text-blue-200 transition-colors">
              rajnikantsharma@rksfabricators.com
            </a>
            <a href="mailto:rksfabricators@gmail.com" className="hover:text-blue-200 transition-colors">
              rksfabricators@gmail.com
            </a>
            <a href="tel:+919816273955" className="hover:text-blue-200 transition-colors">
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
    </>
  )
}

