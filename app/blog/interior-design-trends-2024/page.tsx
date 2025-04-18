import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPostPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-burgundy-500 hover:text-burgundy-600 transition-colors inline-flex items-center"
            >
              ← Back to Blog
            </Link>
          </div>

          <article className="prose dark:prose-invert max-w-none">
            <div className="relative w-full h-[80vh] mb-12 rounded-lg overflow-hidden fancy-border">
              <Image
                src="/images/blog-featured.jpg"
                alt="Interior Design Trends 2024"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <span>June 15, 2024</span>
              <span className="mx-2">•</span>
              <span>Design Trends</span>
            </div>

            <h1 className="text-4xl font-serif font-bold mb-6">10 Interior Design Trends to Watch in 2024</h1>

            <div className="prose dark:prose-invert max-w-none">
              <h2>1. Sustainable and Eco-Friendly Materials</h2>
              <p>In 2024, sustainability continues to dominate interior design trends. Homeowners and designers are increasingly opting for eco-friendly materials such as reclaimed wood, recycled glass, and natural fibers. These materials not only reduce environmental impact but also add unique character and warmth to spaces.</p>

              <h2>2. Biophilic Design</h2>
              <p>The connection between nature and interior spaces grows stronger in 2024. Biophilic design incorporates natural elements like indoor plants, natural light, and organic materials to create spaces that promote well-being and reduce stress.</p>

              <h2>3. Bold Color Choices</h2>
              <p>Move over, neutrals! 2024 sees a resurgence of bold, vibrant colors. Deep blues, rich burgundies, and earthy greens are making their way into modern interiors, creating spaces that are both dramatic and sophisticated.</p>

              <h2>4. Multifunctional Spaces</h2>
              <p>As remote work continues to be prevalent, homes are being designed to serve multiple purposes. Flexible furniture, convertible spaces, and smart storage solutions are key trends for creating efficient, adaptable living environments.</p>

              <h2>5. Curved and Organic Shapes</h2>
              <p>Soft, rounded forms are replacing sharp angles in furniture and architectural elements. This trend brings a sense of comfort and fluidity to spaces, creating more inviting and harmonious environments.</p>

              <h2>6. Textured Surfaces</h2>
              <p>Texture is playing a more prominent role in 2024's design landscape. From rough-hewn wood to smooth marble and everything in between, layered textures add depth and interest to spaces.</p>

              <h2>7. Smart Home Integration</h2>
              <p>Technology continues to shape how we live in our spaces. Smart home features are being seamlessly integrated into design, from hidden charging stations to voice-controlled lighting and climate systems.</p>

              <h2>8. Vintage and Antique Elements</h2>
              <p>There's a growing appreciation for vintage and antique pieces that tell a story. Mixing old and new creates spaces with character and depth, while also promoting sustainable design practices.</p>

              <h2>9. Maximalist Expression</h2>
              <p>In contrast to the minimalist trend, maximalism is making a comeback. Bold patterns, rich colors, and eclectic collections are being used to create spaces that reflect personal style and creativity.</p>

              <h2>10. Wellness-Focused Design</h2>
              <p>Spaces are being designed with mental and physical well-being in mind. This includes everything from meditation corners to ergonomic furniture and spaces that promote relaxation and mindfulness.</p>

              <h2>Conclusion</h2>
              <p>2024's interior design trends reflect a growing awareness of sustainability, well-being, and personal expression. Whether you're planning a complete renovation or just looking to refresh your space, these trends offer plenty of inspiration for creating a home that's both beautiful and functional.</p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-serif font-bold mb-4">Share this article</h2>
              <div className="flex gap-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Share on Twitter
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Share on Facebook
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Share on LinkedIn
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
} 