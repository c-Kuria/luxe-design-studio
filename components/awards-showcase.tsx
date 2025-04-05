import Image from "next/image"
import { Handshake } from "lucide-react"

const partners = [
  {
    id: 1,
    name: "Sprinter Real Estate",
    description: "Collaborating on high-end residential spaces with global impact.",
    image: "https://sprinterinvestments.co.ke/assets/images/header-logo-default.png",
    url: "https://sprinterinvestments.co.ke/index.php",
  },
  {
    id: 2,
    name: "Diaspora Housing Management Ltd",
    description: "Driving sustainable design innovations in residential architecture.",
    image: "https://diasporahousing.co.ke/images/DHMLLOGO.png",
    url: "https://diasporahousing.co.ke/",
  },
  {
    id: 3,
    name: "Fanisi Heights",
    description: "Elevating modern interiors through thoughtful collaboration.",
    image: "https://diasporahousing.co.ke/images/LOGOFHLOGO.webp",
    url: "#",
  },
  // {
  //   id: 4,
  //   name: "Visionary Spaces",
  //   description: "Transforming workspaces with cutting-edge design strategies.",
  //   image: "/images/partner-4.png",
  //   url: "https://visionaryspaces.com",
  // },
]

export function PartnershipShowcase() {
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      <div className="dot-pattern absolute inset-0 opacity-50"></div>
      <div className="container px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <Handshake className="h-10 w-10 text-burgundy-500 mx-auto mb-4" />
          <h2 className="text-3xl font-serif font-bold mb-4 decorative-line relative">Key Partnerships</h2>
          <p className="text-navy-950 max-w-2xl mx-auto">
            Collaborating with forward-thinking organizations to shape the future of design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-lg p-6 text-center border border-border hover:shadow-md transition-shadow group block"
            >
              <div className="relative h-20 w-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={partner.image || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold mb-2 group-hover:text-burgundy-500 transition-colors">{partner.name}</h3>
              {partner.description && (
                <p className="text-navy-950 text-sm">{partner.description}</p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
