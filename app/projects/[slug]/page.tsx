import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectGallery } from "@/components/project-gallery"
import { ProjectTestimonial } from "@/components/project-testimonial"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Modern Minimalist Penthouse",
    category: "Residential",
    location: "Kiambu",
    year: 2023,
    description:
      "A complete renovation of a 135 sq ft penthouse near Nairobi. The design focuses on clean lines, a neutral color palette, and luxurious materials to create a sophisticated urban retreat.",
    challenge:
      "The client wanted to transform a dated penthouse into a modern, minimalist space while maximizing the stunning city views and natural light.",
    solution:
      "We removed several non-structural walls to create an open floor plan, installed floor-to-ceiling windows, and used a carefully curated selection of high-end materials and furnishings to achieve a luxurious yet understated aesthetic.",
    services: ["Interior Design", "Space Planning", "Custom Furniture", "Lighting Design", "Art Curation"],
    images: [
      "/images/IMG-20241008-WA0019.webp",
      "/images/pentHouse1.webp",
      "/images/pentLiving1.webp",
      "/images/pentHouse2.webp",
      "/images/pentBedroom.webp",
      "/images/pentLiving2.webp",
      "/images/pentBathroom.webp",
    ],
    testimonial: {
      quote:
        "Luxe Design Studio transformed our penthouse into a sophisticated, modern home that exceeds our expectations. Their attention to detail and understanding of our vision was remarkable.",
      author: "Mattius",
      image: "https://images.dailykos.com/images/921524/story_image/Cruise.jpg?1614366865",
    },
    slug: "modern-minimalist-penthouse",
  },
  // More projects would be here
]

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found | Luxe Design Studio",
    }
  }

  return {
    title: `${project.title} | Luxe Design Studio`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return (
      <div className="pt-24 pb-20">
        <div className="container px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-6">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Button asChild className="gold-gradient text-white hover:opacity-90 transition-opacity">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-8 group">
          <Link href="/projects" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Projects
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slideRight">
            <h1 className="text-4xl font-serif font-bold mb-4 decorative-line-left relative">{project.title}</h1>
            <p className="text-primary font-medium mb-6">
              {project.category} | {project.location} | {project.year}
            </p>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">{project.description}</p>

              <h3 className="text-xl font-bold mt-8 mb-4">The Challenge</h3>
              <p>{project.challenge}</p>

              <h3 className="text-xl font-bold mt-8 mb-4">Our Solution</h3>
              <p>{project.solution}</p>

              <h3 className="text-xl font-bold mt-8 mb-4">Services Provided</h3>
              <ul className="list-disc pl-5 space-y-1">
                {project.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-square animate-slideLeft">
            <div className="absolute -top-4 -right-4 w-full h-full border border-primary"></div>
            <Image
              src={project.images[0] || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <ProjectGallery images={project.images.slice(1)} />

        {project.testimonial && (
          <div className="mt-20">
            <ProjectTestimonial testimonial={project.testimonial} />
          </div>
        )}
      </div>
    </div>
  )
}

