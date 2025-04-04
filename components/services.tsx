import { Check } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Interior Design",
    description:
      "Comprehensive interior design services for residential and commercial spaces, focusing on creating beautiful, functional environments that reflect your unique style and needs.",
    features: [
      "Space planning and layout optimization",
      "Custom furniture and fixture selection",
      "Material and finish specifications",
      "Color scheme development",
      "Lighting design",
    ],
    image: "/images/interior-design-service.jpg",
  },
  {
    id: 2,
    title: "Construction",
    description:
      "Full-service construction capabilities to bring your design vision to life, from minor renovations to complete build-outs, ensuring quality craftsmanship and attention to detail.",
    features: [
      "Project management and coordination",
      "Custom millwork and cabinetry",
      "Structural modifications",
      "Electrical and plumbing updates",
      "Finish carpentry and installations",
    ],
    image: "https://diasporahousing.co.ke/images/TEAM8.webp",
  },
  {
    id: 3,
    title: "Consultation",
    description:
      "Expert guidance and advice to help you make informed decisions about your space, whether you're planning a renovation, building a new home, or simply refreshing your current environment.",
    features: [
      "Design concept development",
      "Budget planning and cost estimates",
      "Material and product recommendations",
      "Contractor and vendor referrals",
      "Virtual and in-person consultations",
    ],
    image: "/images/consultation-service.jpg",
  },
]

export function Services() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4 decorative-line relative">Our Services</h2>
          <p className="text-navy-950 max-w-2xl mx-auto">
            We offer a comprehensive range of design and construction services to transform your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-4">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-navy-950 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-burgundy-500 shrink-0 mr-2 mt-0.5" />
                      <span className="text-navy-950">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

