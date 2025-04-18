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
                src="/images/instagram-5.jpg"
                alt="The Psychology of Interior Design: How Your Space Affects Your Mood"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <span>April 20, 2024</span>
              <span className="mx-2">•</span>
              <span>Design Psychology</span>
            </div>

            <h1 className="text-4xl font-serif font-bold mb-6">The Psychology of Interior Design: How Your Space Affects Your Mood</h1>

            <div className="prose dark:prose-invert max-w-none">
              <h2>The Science of Space and Emotion</h2>
              <p>Our surroundings have a profound impact on our psychological well-being. Understanding the psychology behind interior design can help create spaces that promote positive emotions and mental health.</p>

              <h2>Color Psychology in Design</h2>
              <p>How colors affect mood:
                <ul>
                  <li>Blue: Calming, promotes focus and productivity</li>
                  <li>Green: Refreshing, associated with nature and growth</li>
                  <li>Yellow: Energizing, stimulates creativity</li>
                  <li>Red: Stimulating, increases energy and passion</li>
                  <li>Neutral tones: Grounding, creates balance</li>
                </ul>
              </p>

              <h2>Light and Well-being</h2>
              <p>The impact of lighting:
                <ul>
                  <li>Natural light: Boosts mood and circadian rhythm</li>
                  <li>Warm lighting: Creates comfort and relaxation</li>
                  <li>Task lighting: Enhances focus and productivity</li>
                  <li>Ambient lighting: Sets overall mood and atmosphere</li>
                </ul>
              </p>

              <h2>Space and Perception</h2>
              <p>How space affects our psychology:
                <ul>
                  <li>Open spaces: Promote freedom and creativity</li>
                  <li>Cozy spaces: Provide security and comfort</li>
                  <li>Cluttered spaces: Can increase stress and anxiety</li>
                  <li>Organized spaces: Promote clarity and focus</li>
                </ul>
              </p>

              <h2>Texture and Sensory Experience</h2>
              <p>The role of texture in emotional response:
                <ul>
                  <li>Soft textures: Comfort and warmth</li>
                  <li>Rough textures: Grounding and stability</li>
                  <li>Smooth surfaces: Cleanliness and order</li>
                  <li>Natural materials: Connection to nature</li>
                </ul>
              </p>

              <h2>Room-Specific Psychology</h2>
              <p>Psychological considerations for different spaces:
                <ul>
                  <li>Bedroom: Rest and relaxation</li>
                  <li>Kitchen: Nourishment and gathering</li>
                  <li>Living Room: Social interaction and comfort</li>
                  <li>Home Office: Focus and productivity</li>
                </ul>
              </p>

              <h2>Biophilic Design</h2>
              <p>Connecting with nature indoors:
                <ul>
                  <li>Natural materials and patterns</li>
                  <li>Indoor plants and greenery</li>
                  <li>Natural light and views</li>
                  <li>Water features and natural sounds</li>
                </ul>
              </p>

              <h2>Personalization and Identity</h2>
              <p>The importance of personal space:
                <ul>
                  <li>Personal artifacts and memories</li>
                  <li>Cultural influences</li>
                  <li>Individual style expression</li>
                  <li>Creating meaningful spaces</li>
                </ul>
              </p>

              <h2>Conclusion</h2>
              <p>Understanding the psychological impact of interior design allows us to create spaces that not only look beautiful but also support our mental and emotional well-being. By considering color, light, space, texture, and personal elements, we can design environments that enhance our quality of life and promote positive psychological states.</p>
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