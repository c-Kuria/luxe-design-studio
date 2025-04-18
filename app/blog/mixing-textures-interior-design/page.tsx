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
                src="/images/instagram-2.jpg"
                alt="The Art of Mixing Textures in Interior Design"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <span>May 12, 2024</span>
              <span className="mx-2">•</span>
              <span>Design Tips</span>
            </div>

            <h1 className="text-4xl font-serif font-bold mb-6">The Art of Mixing Textures in Interior Design</h1>

            <div className="prose dark:prose-invert max-w-none">
              <h2>Understanding Texture in Design</h2>
              <p>Texture is a fundamental element of interior design that adds depth, interest, and character to a space. It refers to the surface quality of materials and how they interact with light and touch.</p>

              <h2>Types of Textures</h2>
              <p>There are several types of textures to consider:
                <ul>
                  <li>Visual Texture: How a surface appears to the eye</li>
                  <li>Tactile Texture: How a surface feels to the touch</li>
                  <li>Natural Texture: Found in materials like wood, stone, and plants</li>
                  <li>Man-made Texture: Created through patterns, weaves, and finishes</li>
                </ul>
              </p>

              <h2>Principles of Texture Mixing</h2>
              <p>Successful texture mixing follows these principles:
                <ul>
                  <li>Balance: Combine rough and smooth textures</li>
                  <li>Contrast: Pair light and heavy textures</li>
                  <li>Scale: Mix large and small patterns</li>
                  <li>Repetition: Use similar textures in different areas</li>
                </ul>
              </p>

              <h2>Room-by-Room Texture Guide</h2>
              <p>Different rooms benefit from different texture combinations:
                <ul>
                  <li>Living Room: Soft fabrics, rough wood, smooth metals</li>
                  <li>Bedroom: Plush textiles, smooth surfaces, natural fibers</li>
                  <li>Kitchen: Hard surfaces, glossy finishes, natural stone</li>
                  <li>Bathroom: Smooth tiles, rough stone, soft towels</li>
                </ul>
              </p>

              <h2>Common Texture Combinations</h2>
              <p>Some classic texture pairings that work well:
                <ul>
                  <li>Leather and wool</li>
                  <li>Marble and wood</li>
                  <li>Metal and glass</li>
                  <li>Concrete and soft textiles</li>
                </ul>
              </p>

              <h2>Texture and Color</h2>
              <p>The relationship between texture and color:
                <ul>
                  <li>Rough textures absorb light, making colors appear darker</li>
                  <li>Smooth textures reflect light, making colors appear lighter</li>
                  <li>Patterned textures can create visual movement</li>
                  <li>Monochrome schemes benefit from varied textures</li>
                </ul>
              </p>

              <h2>Common Mistakes to Avoid</h2>
              <p>Some texture mixing pitfalls:
                <ul>
                  <li>Using too many competing textures</li>
                  <li>Ignoring the scale of patterns</li>
                  <li>Forgetting about maintenance requirements</li>
                  <li>Not considering the room's function</li>
                </ul>
              </p>

              <h2>Conclusion</h2>
              <p>Mastering the art of mixing textures is essential for creating rich, layered interiors. By understanding the different types of textures and how they interact, you can create spaces that are visually interesting, comfortable, and reflective of your personal style.</p>
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