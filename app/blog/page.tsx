import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Interior Design Trends to Watch in 2023",
    excerpt:
      "Discover the top interior design trends that are shaping homes and commercial spaces this year, from sustainable materials to bold color choices.",
    date: "June 15, 2023",
    author: "Alexandra Reynolds",
    category: "Design Trends",
    image: "/images/blog-featured.jpg",
    slug: "interior-design-trends-2023",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Color Palette for Your Home",
    excerpt:
      "Selecting the right colors for your home can be challenging. Learn our designer-approved approach to creating harmonious color schemes that reflect your personality.",
    date: "May 28, 2023",
    author: "Sophia Martinez",
    category: "Design Tips",
    image: "/images/instagram-1.jpg",
    slug: "choosing-perfect-color-palette",
  },
  {
    id: 3,
    title: "The Art of Mixing Textures in Interior Design",
    excerpt:
      "Texture adds depth, interest, and warmth to any space. Explore how to masterfully combine different textures for a rich, layered interior.",
    date: "May 12, 2023",
    author: "Michael Chen",
    category: "Design Tips",
    image: "/images/instagram-2.jpg",
    slug: "mixing-textures-interior-design",
  },
  {
    id: 4,
    title: "Sustainable Materials for Eco-Friendly Home Design",
    excerpt:
      "Discover environmentally conscious materials that don't compromise on style or quality for your next home renovation or design project.",
    date: "April 30, 2023",
    author: "James Wilson",
    category: "Sustainability",
    image: "/images/instagram-3.jpg",
    slug: "sustainable-materials-eco-friendly-design",
  },
  {
    id: 5,
    title: "Small Space Solutions: Maximizing Functionality in Compact Homes",
    excerpt:
      "Living in a small space doesn't mean sacrificing style or comfort. Learn clever design strategies to make the most of every square foot.",
    date: "April 15, 2023",
    author: "Sophia Martinez",
    category: "Design Tips",
    image: "/images/instagram-4.jpg",
    slug: "small-space-solutions",
  },
  {
    id: 6,
    title: "The Psychology of Interior Design: How Your Space Affects Your Mood",
    excerpt:
      "Explore the fascinating relationship between interior design elements and psychological well-being, and how to create spaces that positively impact your mood.",
    date: "March 28, 2023",
    author: "Alexandra Reynolds",
    category: "Design Theory",
    image: "/images/instagram-5.jpg",
    slug: "psychology-interior-design",
  },
]

export const metadata = {
  title: "Blog | Fanisi Atelier",
  description: "Explore our blog for the latest interior design trends, tips, and insights.",
}

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-serif font-bold mb-6 decorative-line relative">Our Blog</h1>
          <p className="text-muted-foreground text-lg">
            Insights, inspiration, and expert advice on interior design and construction.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group">
            <Card className="overflow-hidden border-0 bg-transparent fancy-border">
              <div className="image-container aspect-[16/9]">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white w-full">
                    <p className="font-medium text-lg">{blogPosts[0].category}</p>
                  </div>
                </div>
              </div>
              <CardContent className="px-0 pt-6">
                <div className="flex items-center text-sm text-primary mb-3">
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].category}</span>
                </div>
                <h2 className="text-3xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image src="/images/testimonial-3.jpg" alt={blogPosts[0].author} fill className="object-cover" />
                  </div>
                  <span className="font-medium">{blogPosts[0].author}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <Card className="overflow-hidden border-0 bg-transparent h-full flex flex-col fancy-border">
                <div className="image-container aspect-[4/3]">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">{post.category}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="px-0 pt-4 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-primary mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center mt-auto">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                      <Image src="/images/testimonial-1.jpg" alt={post.author} fill className="object-cover" />
                    </div>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}

