import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProductsSection() {
  const products = [
    {
      id: "products-steel-structures",
      title: "Steel Structures",
      description: "Custom steel structures for industrial and commercial applications",
      image: "/products/steelstructures.webp",
    },
    {
      id: "products-lab-furnitures",
      title: "Lab Furnitures",
      description: "Durable and ergonomic solutions for laboratory environments",
      image: "/products/lab-furniture.webp",
    },
    {
      id: "products-orbital-welding",
      title: "Orbital Welding Pipeline",
      description: "Precision welding for high-purity piping systems",
      image: "/products/orbitalwelding.jpg",
    },
    {
      id: "products-ms-racking",
      title: "MS Racking System Warehouse",
      description: "High-quality stainless steel fabrication for specialized needs",
      image: "/products/msrack.jpeg",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="products">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p className="text-lg text-gray-700">
            We offer a wide range of metal fabrication products and solutions tailored to meet the specific needs of our
            clients across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              id={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                
              </div>
            </div>
          ))}
        </div>

        {/* Removed "View All Products" button as requested */}
      </div>
    </section>
  )
}

