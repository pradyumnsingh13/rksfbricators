import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.jpg" alt="RKS Fabricators Logo" width={50} height={50} className="h-10 w-auto" />
              <span className="text-xl font-bold">RKS Fabricators</span>
            </Link>
            <p className="text-blue-200">
              Excellence in metal fabrication and structural steel solutions for over 15 years.
            </p>
            <p className="text-blue-200">GST No: 02AZFPS6624Q1ZU</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#equipment" className="text-blue-200 hover:text-white transition-colors">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-blue-200 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Equipment</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#equipment" className="text-blue-200 hover:text-white transition-colors">
                  Air Shower
                </Link>
              </li>
              <li>
                <Link href="#equipment" className="text-blue-200 hover:text-white transition-colors">
                  Laminar Air Flow
                </Link>
              </li>
              <li>
                <Link href="#equipment" className="text-blue-200 hover:text-white transition-colors">
                  Biosafety Tank
                </Link>
              </li>
              <li>
                <Link href="#equipment" className="text-blue-200 hover:text-white transition-colors">
                  Pressure Vessel
                </Link>
              </li>
              <li>
                <Link href="#equipment" className="text-blue-200 hover:text-white transition-colors">
                  Autoclave
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-200">Plot No.136-B,EPIP,Phase-1,Jharmajri,Baddi,H.P.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-blue-200 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a
                  href="mailto:rajnikantsharma@rksfabricatorsco.in"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  rajnikantsharma@rksfabricatorsco.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-900">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} RKS Fabricators. All rights reserved. GST No: 02AZFPS6624Q1ZU
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-blue-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-blue-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

