import Image from "next/image"
import { Trophy } from "lucide-react"

const awards = [
  {
    id: 1,
    title: "Best Luxury Residential Design",
    organization: "Interior Design Excellence Awards",
    year: 2023,
    image: "/images/award-1.png",
  },
  {
    id: 2,
    title: "Innovation in Sustainable Design",
    organization: "Green Building Council",
    year: 2022,
    image: "/images/award-2.png",
  },
  {
    id: 3,
    title: "Commercial Project of the Year",
    organization: "Architectural Digest",
    year: 2021,
    image: "/images/award-3.png",
  },
  {
    id: 4,
    title: "Designer of the Year",
    organization: "National Design Association",
    year: 2020,
    image: "/images/award-4.png",
  },
]

export function AwardsShowcase() {
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      <div className="dot-pattern absolute inset-0 opacity-50"></div>
      <div className="container px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <Trophy className="h-10 w-10 text-burgundy-500 mx-auto mb-4" />
          <h2 className="text-3xl font-serif font-bold mb-4 decorative-line relative">Awards & Recognition</h2>
          <p className="text-navy-950 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by leading industry organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-card rounded-lg p-6 text-center border border-border hover:shadow-md transition-shadow group"
            >
              <div className="relative h-20 w-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image src={award.image || "/placeholder.svg"} alt={award.title} fill className="object-contain" />
              </div>
              <h3 className="font-bold mb-2 group-hover:text-burgundy-500 transition-colors">{award.title}</h3>
              <p className="text-navy-950 text-sm mb-1">{award.organization}</p>
              <p className="text-burgundy-500 font-medium">{award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

