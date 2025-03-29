import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, PenToolIcon as Tool, Truck, Users, Clock, Shield } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Settings className="h-10 w-10 text-blue-600" />,
      title: "Custom Fabrication",
      description: "Tailored fabrication solutions designed to meet your specific requirements and specifications.",
    },
    {
      icon: <Tool className="h-10 w-10 text-blue-600" />,
      title: "Installation Services",
      description: "Professional installation of all fabricated products by our experienced team.",
    },
    {
      icon: <Truck className="h-10 w-10 text-blue-600" />,
      title: "Delivery & Logistics",
      description: "Reliable delivery services ensuring your products reach you safely and on time.",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Consultation",
      description: "Expert consultation to help you choose the right materials and designs for your project.",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Maintenance",
      description: "Regular maintenance services to ensure the longevity of your fabricated products.",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes to guarantee the highest standards of workmanship.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white" id="services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-700">
            We provide comprehensive metal fabrication services from design to installation, ensuring quality and
            satisfaction at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

