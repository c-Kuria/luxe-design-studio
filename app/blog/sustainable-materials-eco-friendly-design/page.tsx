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
                src="/images/instagram-3.jpg"
                alt="Sustainable Materials for Eco-Friendly Home Design"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <span>April 30, 2024</span>
              <span className="mx-2">•</span>
              <span>Sustainability</span>
            </div>

            <h1 className="text-4xl font-serif font-bold mb-6">Sustainable Materials for Eco-Friendly Home Design</h1>

            <div className="prose dark:prose-invert max-w-none">
              <h2>Understanding Sustainable Materials</h2>
              <p>Sustainable materials are those that have minimal environmental impact throughout their lifecycle, from production to disposal. They are typically renewable, recyclable, and have low embodied energy.</p>

              <h2>Natural and Renewable Materials</h2>
              <p>Key sustainable materials to consider:
                <ul>
                  <li>Bamboo: Fast-growing and versatile</li>
                  <li>Cork: Renewable and insulating</li>
                  <li>Reclaimed Wood: Reduces deforestation</li>
                  <li>Natural Stone: Durable and long-lasting</li>
                  <li>Wool and Organic Cotton: Biodegradable textiles</li>
                </ul>
              </p>

              <h2>Recycled and Upcycled Materials</h2>
              <p>Innovative ways to use recycled materials:
                <ul>
                  <li>Recycled Glass: Countertops and tiles</li>
                  <li>Recycled Metal: Fixtures and structural elements</li>
                  <li>Recycled Plastic: Furniture and decorative items</li>
                  <li>Upcycled Materials: Creative reuse of existing items</li>
                </ul>
              </p>

              <h2>Low-Impact Manufacturing</h2>
              <p>Considerations for sustainable production:
                <ul>
                  <li>Local sourcing to reduce transportation</li>
                  <li>Low-VOC finishes and adhesives</li>
                  <li>Energy-efficient manufacturing processes</li>
                  <li>Water conservation in production</li>
                </ul>
              </p>

              <h2>Room-by-Room Sustainable Solutions</h2>
              <p>Application in different spaces:
                <ul>
                  <li>Kitchen: Recycled glass countertops, bamboo cabinetry</li>
                  <li>Bathroom: Recycled tile, water-saving fixtures</li>
                  <li>Living Room: Reclaimed wood flooring, natural fiber rugs</li>
                  <li>Bedroom: Organic bedding, sustainable furniture</li>
                </ul>
              </p>

              <h2>Energy Efficiency and Sustainability</h2>
              <p>Materials that contribute to energy efficiency:
                <ul>
                  <li>Insulating materials for better thermal performance</li>
                  <li>Natural light optimization</li>
                  <li>Smart home integration</li>
                  <li>Energy-efficient appliances</li>
                </ul>
              </p>

              <h2>Maintenance and Longevity</h2>
              <p>Ensuring sustainable materials last:
                <ul>
                  <li>Proper care and maintenance</li>
                  <li>Choosing durable materials</li>
                  <li>Regular inspections and repairs</li>
                  <li>Planning for future adaptability</li>
                </ul>
              </p>

              <h2>Cost Considerations</h2>
              <p>Understanding the investment:
                <ul>
                  <li>Initial costs vs. long-term savings</li>
                  <li>Return on investment through energy savings</li>
                  <li>Available incentives and rebates</li>
                  <li>Budget-friendly sustainable options</li>
                </ul>
              </p>

              <h2>Conclusion</h2>
              <p>Sustainable materials are not just an environmental choice but a smart design decision. They offer durability, beauty, and long-term cost savings while reducing environmental impact. By carefully selecting and implementing sustainable materials, you can create a home that's both eco-friendly and aesthetically pleasing.</p>
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