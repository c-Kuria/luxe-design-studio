import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Sample team data
const team = [
  {
    id: 1,
    name: "Richard Mbugua",
    role: "Founder & Principal Designer",
    image: "",
    // bio: "With over 15 years of experience in interior design and architecture, Richard founded Fanisi Atelier with a vision to create spaces that are both beautiful and functional.",
  },
  {
    id: 2,
    name: "Bernard Kainamia",
    role: "Project Manager",
    image: "",
    // bio: "Bernard ensures seamless execution from concept to completion. With a strong foundation in construction management and client relations, he bridges the gap between creativity and delivery — always on time, always within scope",
  },
  {
    id: 3,
    name: "Miriam Mwangi",
    role: "Creative Director",
    image: "",
    // bio: "Miriam leads the creative vision of the studio, ensuring every project aligns with the brand’s identity and aesthetic values. With a background in fine arts and environmental design, she brings conceptual clarity and storytelling to every space.",
  },
  {
    id: 4,
    name: "Zara Wanjiku",
    role: "Senior Interior Designer",
    image: "",
    // bio: "Zara's keen eye for color and texture has helped shape the studio's distinctive aesthetic, blending contemporary elements with timeless design principles.",
  },
  {
    id: 5,
    name: "Joe Muhanda",
    role: "Client Relations Manager",
    image: "",
    // bio: "Joe oversees all client engagement with a focus on professionalism, clarity, and trust. He serves as the primary point of contact, ensuring expectations are met and relationships are managed with care throughout every phase of the project.",
  },
  {
    id: 6,
    name: "Brian Kuria",
    role: "Design Technologist",
    image: "",
    // bio: "Brian bridges the gap between design and technology, integrating digital solutions into spatial experiences. He also oversees the studio’s digital workflows and design software infrastructure.",
  },
  {
    id: 7,
    name: "James Wilson",
    role: "Construction Manager",
    image: "",
    // bio: "With a background in construction and project management, James ensures that every design is executed with precision and attention to detail.",
  },
  {
    id: 8,
    name: "Hudson Sitati",
    role: "Cost Analyst",
    image: "",
    // bio: "With a background in construction and project management, James ensures that every design is executed with precision and attention to detail.",
  },
]

// Sample values
const values = [
  {
    title: "Excellence",
    description:
      "We are committed to delivering exceptional quality in every aspect of our work, from design concepts to final execution.",
  },
  {
    title: "Innovation",
    description:
      "We continuously explore new ideas, materials, and techniques to create unique and forward-thinking designs.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and partnership, working closely with clients and craftsmen to achieve the best results.",
  },
  {
    title: "Integrity",
    description:
      "We maintain the highest standards of honesty, transparency, and ethical practice in all our business relationships.",
  },
]

export const metadata = {
  title: "About Us | Fanisi Atelier",
  description: "Learn about our team, values, and approach to interior design and construction.",
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-serif font-bold mb-6 decorative-line relative">About Fanisi Atelier</h1>
          <p className="text-muted-foreground text-lg">
            We are a team of passionate designers and craftsmen dedicated to creating exceptional spaces that inspire
            and delight.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative aspect-square animate-slideRight">
            <div className="absolute -top-4 -left-4 w-full h-full border border-burgundy-500"></div>
            <Image src="/images/about-team.jpg" alt="Fanisi Atelier team" fill className="object-cover" />
          </div>
          <div className="animate-slideLeft">
            <h2 className="text-3xl font-serif font-bold mb-6 decorative-line-left relative">Our Story</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Founded in 2016 by Richard Mbugua, Fanisi Atelier began as a small interior design practice with a
                vision to transform spaces into extraordinary experiences. Over the years, we've grown into a
                full-service design and construction studio, known for our distinctive aesthetic and meticulous
                attention to detail.
              </p>
              <p>
                Our journey has been defined by a relentless pursuit of excellence and a deep commitment to
                understanding and exceeding our clients' expectations. From residential renovations to commercial
                projects, we approach each space with fresh eyes and creative solutions.
              </p>
              <p>
                Today, our award-winning team combines expertise in interior design, architecture, and construction to
                deliver cohesive, thoughtfully crafted spaces that reflect our clients' unique personalities and needs.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild className="burgundy-gradient text-white hover:opacity-90 transition-opacity">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20 relative overflow-hidden">
          <div className="dot-pattern absolute inset-0 opacity-30"></div>
          <div className="relative">
            <h2 className="text-3xl font-serif font-bold text-center mb-4 decorative-line relative">Our Values</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              These core principles guide our approach to every project and client relationship.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow group"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center group-hover:text-burgundy-500 transition-colors">
                    <Check className="h-5 w-5 text-burgundy-500 mr-2" />
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-center mb-4 decorative-line relative">Meet Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our talented professionals bring diverse expertise and a shared passion for exceptional design.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg fancy-border">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <p className="font-medium">{member.role}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-burgundy-500 transition-colors">{member.name}</h3>
                <p className="text-burgundy-500 mb-2">{member.role}</p>
                {/* <p className="text-muted-foreground">{member.bio}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

