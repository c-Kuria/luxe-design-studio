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
        "Fanisi Atelier Studio transformed our penthouse into a sophisticated, modern home that exceeds our expectations. Their attention to detail and understanding of our vision was remarkable.",
      author: "Mattius",
      image: "https://images.dailykos.com/images/921524/story_image/Cruise.jpg?1614366865",
    },
    slug: "modern-minimalist-penthouse",
  },
  // More projects would be here
  // {
  //   id: 2,
  //   title: "Luxury Boutique Hotel",
  //   category: "",
  //   location: "",
  //   year: 2023,
  //   description:
  //     "A complete renovation of a 135 sq ft penthouse near Nairobi. The design focuses on clean lines, a neutral color palette, and luxurious materials to create a sophisticated urban retreat.",
  //   services: ["Interior Design", "Space Planning", "Custom Furniture", "Lighting Design", "Art Curation"],
  //   images: [
  //     "/images/IMG-20241008-WA0019.webp",
  //     "/images/pentHouse1.webp",
  //     "/images/pentLiving1.webp",
  //     "/images/pentHouse2.webp",
  //     "/images/pentBedroom.webp",
  //     "/images/pentLiving2.webp",
  //     "/images/pentBathroom.webp",
  //   ],
  //   testimonial: {
  //     quote:
  //       " transformed our penthouse into a sophisticated, modern home that exceeds our expectations. Their attention to detail and understanding of our vision was remarkable.",
  //     author: "Mattius",
  //     image: "https://images.dailykos.com/images/921524/story_image/Cruise.jpg?1614366865",
  //   },
  //   slug: "luxury-boutique-hotel",
  //},
  {
    id: 3,
    title: "Fanisi Tigoni View",
    category: "Residential",
    location: "Ruaka",
    year: 2022,
    description:
      "An exquisite residential project situated on prime land in Ruaka Municipality.",
    services: ["Smart Interior Design", "Family-Friendly Space Planning", "Energy-Efficient Lighting Design", "Custom Smart Furniture Solutions", "Lifestyle Art & Decor Curation"],
    images: [
      "https://diasporahousing.co.ke/images/TigoniViewrender1.webp",
      "https://diasporahousing.co.ke/images/FTV1.webp",
      "https://diasporahousing.co.ke/images/FTV2.webp",
      "https://diasporahousing.co.ke/images/FTV4.webp",
      "https://diasporahousing.co.ke/images/FTV6.webp",
      "/images/IMG_7075.webp",
      "/images/IMG-20240210-WA0026.webp",
    ],
    // testimonial: {
    //   quote:
    //     " transformed our penthouse into a sophisticated, modern home that exceeds our expectations. Their attention to detail and understanding of our vision was remarkable.",
    //   author: "Mattius",
    //   image: "https://images.dailykos.com/images/921524/story_image/Cruise.jpg?1614366865",
    //},
    slug: "fanisi-tigoni-view",
  },
  // {
  //   id: 4,
  //   title: "Luxury Boutique Hotel",
  //   category: "",
  //   location: "",
  //   year: 2023,
  //   description:
  //     "A complete renovation of a 135 sq ft penthouse near Nairobi. The design focuses on clean lines, a neutral color palette, and luxurious materials to create a sophisticated urban retreat.",
  //   services: ["Interior Design", "Space Planning", "Custom Furniture", "Lighting Design", "Art Curation"],
  //   images: [
  //     "/images/IMG-20241008-WA0019.webp",
  //     "/images/pentHouse1.webp",
  //     "/images/pentLiving1.webp",
  //     "/images/pentHouse2.webp",
  //     "/images/pentBedroom.webp",
  //     "/images/pentLiving2.webp",
  //     "/images/pentBathroom.webp",
  //   ],
  //   testimonial: {
  //     quote:
  //       " transformed our penthouse into a sophisticated, modern home that exceeds our expectations. Their attention to detail and understanding of our vision was remarkable.",
  //     author: "Mattius",
  //     image: "https://images.dailykos.com/images/921524/story_image/Cruise.jpg?1614366865",
  //   },
  //   slug: "modern-minimalist-penthouse",
  // },
  {
    id: 5,
    title: "Stand-Alone Design",
    category: "",
    location: "Kiambu",
    year: 2021,
    description:
      "A modern stand-alone house offering privacy, space, and comfort in a thoughtfully designed layout. Featuring open-plan living areas, en-suite bedrooms, a fully fitted kitchen, and seamless indoor-outdoor flow to private gardens or patios. Designed with both aesthetics and functionality in mind, it’s ideal for families or individuals seeking an independent, serene living experience.",
    services: ["Architectural & Structural Design", "Space Planning", "Custom Furniture & Finish Selections", "Lighting Design", "Bespoke Interior Design", "Integrated Space & Landscape Planning"],
    images: [
      "/images/standAlone2.webp",
      "/images/standAlone.webp",
      "/images/stanAlone4.webp",
      "/images/standAlone6.webp",
      "/images/standAlone7.webp",
      "/images/standAlone8.webp",
      "/images/standAlone5.webp",
      "/images/standAlone3.webp",
      "/images/satndAlone9.webp",
      "/images/IMG-20221027-WA0094.webp",
    ],
    // testimonial: {
    //   quote:
    //     " transformed our penthouse into a sophisticated, modern home that exceeds our expectations. Their attention to detail and understanding of our vision was remarkable.",
    //   author: "Mattius",
    //   image: "https://images.dailykos.com/images/921524/story_image/Cruise.jpg?1614366865",
    // },
    slug: "stand-alone-design",
  },
  // {
  //   id: 6,
  //   title: "Luxury Boutique Hotel",
  //   category: "",
  //   location: "",
  //   year: 2023,
  //   description:
  //     "A complete renovation of a 135 sq ft penthouse near Nairobi. The design focuses on clean lines, a neutral color palette, and luxurious materials to create a sophisticated urban retreat.",
  //   services: ["Interior Design", "Space Planning", "Custom Furniture", "Lighting Design", "Art Curation"],
  //   images: [
  //     "/images/IMG-20241008-WA0019.webp",
  //     "/images/pentHouse1.webp",
  //     "/images/pentLiving1.webp",
  //     "/images/pentHouse2.webp",
  //     "/images/pentBedroom.webp",
  //     "/images/pentLiving2.webp",
  //     "/images/pentBathroom.webp",
  //   ],
  //   testimonial: {
  //     quote:
  //       " transformed our penthouse into a sophisticated, modern home that exceeds our expectations. Their attention to detail and understanding of our vision was remarkable.",
  //     author: "Mattius",
  //     image: "https://images.dailykos.com/images/921524/story_image/Cruise.jpg?1614366865",
  //   },
  //   slug: "modern-minimalist-penthouse",
  // },
  {
    id: 7,
    title: "Fanisi Heights",
    category: "Residential",
    location: "Kihara",
    year: 2020,
    description:
      "A contemporary apartment block featuring well-designed 84-square-metre units, each offering a perfect blend of functionality and comfort. Each unit includes spacious en-suite bedrooms, an open-plan lounge and kitchen area, and modern finishes throughout. Ideal for urban living, the layout maximizes space while maintaining a stylish and airy feel.",
    services: ["Interior Design for Multi-Unit Living", "Efficient Space Planning", "Custom Compact Furniture Solutions", "Lighting Design", "Art Curation", "Unit Renovation & Finishing Works"],
    images: [
      "https://diasporahousing.co.ke/images/FHRENDER.webp",
      "/images/A9.webp",
      "https://sprinterinvestments.co.ke/Fanisi%20Heights%20Show%20House%20Photos/_MG_8774.jpg",
      "/images/C3.webp",
      "https://sprinterinvestments.co.ke/Fanisi%20Heights%20Show%20House%20Photos/_MG_8775.jpg",
      "/images/C5.webp",
      "/images/B1.webp",
      "/images/A3.webp",
      "/images/E1.webp",
      "https://sprinterinvestments.co.ke/Fanisi%20Heights%20Show%20House%20Photos/_MG_8895.jpg",
      "https://sprinterinvestments.co.ke/Fanisi%20Heights%20Show%20House%20Photos/_MG_8816.jpg",
      "https://sprinterinvestments.co.ke/Fanisi%20Heights%20Show%20House%20Photos/_MG_8736.jpg",
      "https://sprinterinvestments.co.ke/Fanisi%20Heights%20Show%20House%20Photos/_MG_8764.jpg",
    ],
    // testimonial: {
    //   quote:
    //     " transformed our penthouse into a sophisticated, modern home that exceeds our expectations. Their attention to detail and understanding of our vision was remarkable.",
    //   author: "Mattius",
    //   image: "https://images.dailykos.com/images/921524/story_image/Cruise.jpg?1614366865",
    // },
    slug: "fanisi-heights",
  },
  // {
  //   id: 2,
  //   title: "Luxury Boutique Hotel",
  //   category: "",
  //   location: "",
  //   year: 2023,
  //   description:
  //     "A complete renovation of a 135 sq ft penthouse near Nairobi. The design focuses on clean lines, a neutral color palette, and luxurious materials to create a sophisticated urban retreat.",
  //   services: ["Interior Design", "Space Planning", "Custom Furniture", "Lighting Design", "Art Curation"],
  //   images: [
  //     "/images/IMG-20241008-WA0019.webp",
  //     "/images/pentHouse1.webp",
  //     "/images/pentLiving1.webp",
  //     "/images/pentHouse2.webp",
  //     "/images/pentBedroom.webp",
  //     "/images/pentLiving2.webp",
  //     "/images/pentBathroom.webp",
  //   ],
  //   testimonial: {
  //     quote:
  //       " transformed our penthouse into a sophisticated, modern home that exceeds our expectations. Their attention to detail and understanding of our vision was remarkable.",
  //     author: "Mattius",
  //     image: "https://images.dailykos.com/images/921524/story_image/Cruise.jpg?1614366865",
  //   },
  //   slug: "modern-minimalist-penthouse",
  // },
  // {
  //   id: 2,
  //   title: "Luxury Boutique Hotel",
  //   category: "",
  //   location: "",
  //   year: 2023,
  //   description:
  //     "A complete renovation of a 135 sq ft penthouse near Nairobi. The design focuses on clean lines, a neutral color palette, and luxurious materials to create a sophisticated urban retreat.",
  //   services: ["Interior Design", "Space Planning", "Custom Furniture", "Lighting Design", "Art Curation"],
  //   images: [
  //     "/images/IMG-20241008-WA0019.webp",
  //     "/images/pentHouse1.webp",
  //     "/images/pentLiving1.webp",
  //     "/images/pentHouse2.webp",
  //     "/images/pentBedroom.webp",
  //     "/images/pentLiving2.webp",
  //     "/images/pentBathroom.webp",
  //   ],
  //   testimonial: {
  //     quote:
  //       " transformed our penthouse into a sophisticated, modern home that exceeds our expectations. Their attention to detail and understanding of our vision was remarkable.",
  //     author: "Mattius",
  //     image: "https://images.dailykos.com/images/921524/story_image/Cruise.jpg?1614366865",
  //   },
  //   slug: "modern-minimalist-penthouse",
  // },
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

              {/* <h3 className="text-xl font-bold mt-8 mb-4">The Challenge</h3>
              <p>{project.challenge}</p>

              <h3 className="text-xl font-bold mt-8 mb-4">Our Solution</h3>
              <p>{project.solution}</p> */}

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

