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
                src="/images/instagram-1.jpg"
                alt="Choosing the Perfect Color Palette"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <span>May 28, 2024</span>
              <span className="mx-2">•</span>
              <span>Design Tips</span>
            </div>

            <h1 className="text-4xl font-serif font-bold mb-6">How to Choose the Perfect Color Palette for Your Home</h1>

            <div className="prose dark:prose-invert max-w-none">
              <h2>Understanding Color Psychology</h2>
              <p>Colors have a profound impact on our emotions and behavior. Before selecting your color palette, it's important to understand how different colors can influence the mood and atmosphere of a space.</p>

              <h2>Starting with the 60-30-10 Rule</h2>
              <p>A fundamental principle in interior design is the 60-30-10 rule:
                <ul>
                  <li>60% of the room should be your dominant color</li>
                  <li>30% should be your secondary color</li>
                  <li>10% should be your accent color</li>
                </ul>
              </p>

              <h2>Consider the Room's Purpose</h2>
              <p>Different rooms serve different purposes, and your color choices should reflect this:
                <ul>
                  <li>Bedrooms: Calming, restful colors like soft blues and greens</li>
                  <li>Living Rooms: Warm, inviting colors that encourage conversation</li>
                  <li>Kitchens: Clean, fresh colors that stimulate appetite</li>
                  <li>Home Offices: Focus-enhancing colors that promote productivity</li>
                </ul>
              </p>

              <h2>Natural Light and Room Size</h2>
              <p>The amount of natural light and the size of your room should influence your color choices:
                <ul>
                  <li>North-facing rooms: Warm colors to balance cool light</li>
                  <li>South-facing rooms: Cool colors to balance warm light</li>
                  <li>Small rooms: Light colors to create the illusion of space</li>
                  <li>Large rooms: Darker colors to create coziness</li>
                </ul>
              </p>

              <h2>Creating Color Harmony</h2>
              <p>There are several approaches to creating harmonious color schemes:
                <ul>
                  <li>Monochromatic: Different shades of the same color</li>
                  <li>Analogous: Colors that are next to each other on the color wheel</li>
                  <li>Complementary: Colors opposite each other on the color wheel</li>
                  <li>Triadic: Three colors evenly spaced on the color wheel</li>
                </ul>
              </p>

              <h2>Testing Your Colors</h2>
              <p>Before committing to a color scheme:
                <ul>
                  <li>Test paint samples on your walls</li>
                  <li>Observe colors at different times of day</li>
                  <li>Consider how colors interact with your furniture and decor</li>
                  <li>Take into account artificial lighting</li>
                </ul>
              </p>

              <h2>Common Color Palette Mistakes to Avoid</h2>
              <p>Some common pitfalls to watch out for:
                <ul>
                  <li>Using too many colors in one space</li>
                  <li>Ignoring the existing elements in the room</li>
                  <li>Not considering the flow between rooms</li>
                  <li>Choosing colors based solely on trends</li>
                </ul>
              </p>

              <h2>Conclusion</h2>
              <p>Choosing the perfect color palette for your home is both an art and a science. By considering the psychological impact of colors, the purpose of each room, and the principles of color harmony, you can create spaces that are not only beautiful but also support the activities and emotions you want to encourage in each area of your home.</p>
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