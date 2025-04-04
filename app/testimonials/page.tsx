import Image from "next/image"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "New York, NY",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with Fanisi Atelier was an absolute pleasure. They transformed our outdated living space into a modern, functional home that perfectly reflects our style. Their attention to detail and commitment to quality exceeded our expectations.",
    project: "Complete Home Renovation",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Restaurant Owner",
    location: "Miami, FL",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The team at Fanisi Atelier understood our vision for our new restaurant and executed it flawlessly. The space is not only beautiful but also functional for our staff and comfortable for our guests. They were professional, responsive, and a joy to work with.",
    project: "Restaurant Design & Build-Out",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Office Manager",
    location: "Chicago, IL",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Our office renovation project was handled with incredible professionalism and creativity. The Fanisi Atelier team listened to our needs and created a workspace that has improved productivity and employee satisfaction. I highly recommend their services.",
    project: "Corporate Office Redesign",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Homeowner",
    location: "Los Angeles, CA",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "From the initial consultation to the final reveal, Fanisi Atelier made the process enjoyable and stress-free. They transformed our kitchen and living area into a stunning, open-concept space that's perfect for entertaining. Their team was communicative, respectful, and delivered on time and within budget.",
    project: "Kitchen & Living Room Renovation",
  },
  {
    id: 5,
    name: "Jennifer Williams",
    role: "Boutique Hotel Owner",
    location: "Boston, MA",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Fanisi Atelier brought our boutique hotel vision to life with their exceptional design skills. They created a unique, memorable atmosphere that our guests consistently rave about. Their ability to balance aesthetics with functionality has been crucial to our success.",
    project: "Boutique Hotel Design",
  },
  {
    id: 6,
    name: "Robert Garcia",
    role: "Real Estate Developer",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "We've partnered with Fanisi Atelier on multiple luxury condominium projects, and they consistently deliver outstanding results. Their designs stand out in a competitive market, helping our properties sell faster and at premium prices. They're true professionals who understand both design and business.",
    project: "Luxury Condominium Development",
  },
  {
    id: 7,
    name: "Amanda Lee",
    role: "Homeowner",
    location: "Seattle, WA",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Fanisi Atelier transformed our outdated bathroom into a spa-like retreat. They maximized the small space with clever storage solutions and luxurious finishes. Their attention to detail and quality craftsmanship is evident in every aspect of the design.",
    project: "Master Bathroom Renovation",
  },
  {
    id: 8,
    name: "Thomas Wilson",
    role: "Art Gallery Owner",
    location: "New York, NY",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The team at Fanisi Atelier created a sophisticated gallery space that perfectly showcases our art collection while providing a comfortable environment for visitors. Their understanding of lighting, flow, and spatial dynamics has significantly enhanced the viewing experience.",
    project: "Art Gallery Design",
  },
]

export const metadata = {
  title: "Testimonials | Fanisi Atelier",
  description: "Read what our clients have to say about their experience working with Fanisi Atelier.",
}

export default function TestimonialsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-muted-foreground text-lg">
            Discover what our clients have to say about their experience working with Fanisi Atelier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-lg mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}, {testimonial.location}
                    </p>
                    <p className="text-primary text-sm mt-1">{testimonial.project}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

