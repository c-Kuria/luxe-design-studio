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
                src="/images/instagram-4.jpg"
                alt="Small Space Solutions: Maximizing Functionality in Compact Homes"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <span>April 15, 2024</span>
              <span className="mx-2">•</span>
              <span>Space Planning</span>
            </div>

            <h1 className="text-4xl font-serif font-bold mb-6">Small Space Solutions: Maximizing Functionality in Compact Homes</h1>

            <div className="prose dark:prose-invert max-w-none">
              <h2>Understanding Small Space Design</h2>
              <p>Designing for small spaces requires a different approach than traditional interior design. It's about maximizing every square inch while maintaining comfort and style.</p>

              <h2>Space-Saving Furniture Solutions</h2>
              <p>Innovative furniture for small spaces:
                <ul>
                  <li>Murphy beds and wall beds</li>
                  <li>Convertible tables and desks</li>
                  <li>Nesting furniture sets</li>
                  <li>Storage-integrated seating</li>
                  <li>Foldable and stackable pieces</li>
                </ul>
              </p>

              <h2>Smart Storage Solutions</h2>
              <p>Creative storage ideas:
                <ul>
                  <li>Vertical storage systems</li>
                  <li>Under-bed storage</li>
                  <li>Multi-functional furniture with storage</li>
                  <li>Wall-mounted organizers</li>
                  <li>Hidden storage compartments</li>
                </ul>
              </p>

              <h2>Visual Space Enhancement</h2>
              <p>Techniques to make spaces feel larger:
                <ul>
                  <li>Strategic use of mirrors</li>
                  <li>Light color palettes</li>
                  <li>Vertical lines and patterns</li>
                  <li>Minimalist design approach</li>
                  <li>Strategic lighting placement</li>
                </ul>
              </p>

              <h2>Room-by-Room Strategies</h2>
              <p>Specific solutions for different areas:
                <ul>
                  <li>Kitchen: Compact appliances, pull-out storage</li>
                  <li>Bathroom: Space-saving fixtures, wall-mounted storage</li>
                  <li>Living Room: Modular furniture, hidden storage</li>
                  <li>Bedroom: Loft beds, under-bed storage</li>
                </ul>
              </p>

              <h2>Multi-Functional Spaces</h2>
              <p>Creating flexible areas:
                <ul>
                  <li>Home office/guest room combinations</li>
                  <li>Living room/dining room hybrids</li>
                  <li>Kitchen/dining space integration</li>
                  <li>Bedroom/workspace solutions</li>
                </ul>
              </p>

              <h2>Light and Color Strategies</h2>
              <p>Using design elements to enhance space:
                <ul>
                  <li>Natural light maximization</li>
                  <li>Strategic color placement</li>
                  <li>Light-reflecting surfaces</li>
                  <li>Layered lighting solutions</li>
                </ul>
              </p>

              <h2>Common Small Space Mistakes</h2>
              <p>Pitfalls to avoid:
                <ul>
                  <li>Overcrowding with furniture</li>
                  <li>Poor storage organization</li>
                  <li>Ignoring vertical space</li>
                  <li>Using dark colors in small spaces</li>
                </ul>
              </p>

              <h2>Conclusion</h2>
              <p>Small spaces offer unique design challenges but also opportunities for creativity and innovation. By implementing smart storage solutions, multi-functional furniture, and strategic design choices, you can create a comfortable, stylish, and highly functional home regardless of its size.</p>
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