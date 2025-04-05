import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Modern Minimalist Penthouse",
    category: "Residential",
    location: "Kiambu, Kihara",
    year: 2023,
    image: "/images/IMG-20241008-WA0019.webp",
    slug: "modern-minimalist-penthouse",
  },
  {
    id: 2,
    title: "Luxury Boutique Hotel",
    category: "Commercial",
    location: "Miami, FL",
    year: 2022,
    image: "/images/boutique-hotel.jpg",
    slug: "luxury-boutique-hotel",
  },
  {
    id: 3,
    title: "Contemporary Beach House",
    category: "Residential",
    location: "Malibu, CA",
    year: 2022,
    image: "/images/modern-penthouse.jpg",
    slug: "contemporary-beach-house",
  },
  {
    id: 4,
    title: "Urban Loft Renovation",
    category: "Residential",
    location: "Chicago, IL",
    year: 2021,
    image: "/images/instagram-1.jpg",
    slug: "urban-loft-renovation",
  },
  {
    id: 5,
    title: "Upscale Restaurant Design",
    category: "Commercial",
    location: "Los Angeles, CA",
    year: 2021,
    image: "/images/instagram-2.jpg",
    slug: "upscale-restaurant-design",
  },
  {
    id: 6,
    title: "Historic Brownstone Renovation",
    category: "Residential",
    location: "Boston, MA",
    year: 2020,
    image: "/images/instagram-3.jpg",
    slug: "historic-brownstone-renovation",
  },
  {
    id: 7,
    title: "Corporate Headquarters",
    category: "Commercial",
    location: "San Francisco, CA",
    year: 2020,
    image: "/images/instagram-4.jpg",
    slug: "corporate-headquarters",
  },
  {
    id: 8,
    title: "Mountain Retreat",
    category: "Residential",
    location: "Aspen, CO",
    year: 2019,
    image: "/images/instagram-5.jpg",
    slug: "mountain-retreat",
  },
  {
    id: 9,
    title: "Wellness Spa Center",
    category: "Commercial",
    location: "Scottsdale, AZ",
    year: 2019,
    image: "/images/instagram-6.jpg",
    slug: "wellness-spa-center",
  },
]

export const metadata = {
  title: "Projects | Fanisi Atelier",
  description: "Explore our portfolio of luxury interior design and construction projects.",
}

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-serif font-bold mb-6 decorative-line relative">Our Projects</h1>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of residential and commercial projects, showcasing our commitment to exceptional
            design and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className="group">
              <Card className="overflow-hidden border-0 bg-transparent fancy-border">
                <div className="image-container aspect-[4/3]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">{project.category}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="px-0 pt-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground">
                    {project.category} | {project.location} | {project.year}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

