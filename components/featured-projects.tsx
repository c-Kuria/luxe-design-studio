import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const featuredProjects = [
  {
    id: 1,
    title: "Modern Minimalist Penthouse",
    category: "Residential",
    location: "New York, NY",
    image: "/images/IMG-20241008-WA0019.webp",
    slug: "modern-minimalist-penthouse",
  },
  {
    id: 2,
    title: "Fanisi Tigoni View",
    category: "Residential",
    location: "Kiambu, Ruaka",
    image: "https://diasporahousing.co.ke/images/TigoniViewrender1.webp",
    slug: "Fanisi Tigoni View",
  },
  {
    id: 3,
    title: "Fanisi Heights",
    category: "Residential",
    location: "Kiambu, Kihara",
    image: "https://diasporahousing.co.ke/images/FHRENDER.webp",
    slug: "contemporary-beach-house",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4 decorative-line-left relative">Featured Projects</h2>
            <p className="text-navy-950 max-w-2xl">
              Explore our portfolio of award-winning designs and transformative spaces that showcase our expertise and
              creative vision.
            </p>
          </div>
          <Button asChild variant="ghost" className="mt-4 md:mt-0 group text-navy-950">
            <Link href="/projects" className="flex items-center">
              View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
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
                  <h3 className="text-xl font-bold group-hover:text-burgundy-500 transition-colors">{project.title}</h3>
                  <p className="text-navy-950">
                    {project.category} | {project.location}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

