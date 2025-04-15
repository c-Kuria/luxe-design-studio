import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FeaturedProjects } from "@/components/featured-projects"
import { Services } from "@/components/services"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { InstagramFeed } from "@/components/instagram-feed"
import { PartnershipShowcase } from "@/components/awards-showcase"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-luxury-interior.jpg"
            alt="Luxurious interior design"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 animate-fadeIn text-shadow">
            Transforming Spaces Into <span className="text-burgundy-300">Extraordinary</span> Experiences
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-slideUp font-light">
            An acclaimed interior design and construction studio specializing in luxury residential and commercial
            spaces.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slideUp">
            <Button asChild size="lg" className="burgundy-gradient text-white hover:opacity-90 transition-opacity">
              <Link href="/projects">View Our Projects</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/consultation">Book Quotation</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-8 h-14 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-float"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="dot-pattern absolute inset-0 opacity-50"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <div className="absolute -top-4 -left-4 w-full h-full border border-burgundy-500"></div>
              <Image
                src="/images/interior-design-process.jpg"
                alt="Interior design process"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-burgundy-500"></div>
            </div>
            <div className="animate-slideRight">
              <h2 className="text-3xl font-serif font-bold mb-6 decorative-line-left relative">
                Crafting Exceptional Spaces Since 2016
              </h2>
              <p className="text-navy-950 mb-6">
                At Fanisi Atelier, we believe that great design has the power to transform not just spaces, but lives.
                Our dedicated team of designers and craftsmen work collaboratively to create spaces that are both
                beautiful and functional.
              </p>
              <p className="text-navy-950 mb-8">
                With over 8 years of experience in the industry, we've developed a reputation for attention to detail,
                innovative design solutions, and exceptional client service.
              </p>
              <Button asChild className="burgundy-gradient text-white hover:opacity-90 transition-opacity">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Testimonials */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="diagonal-pattern absolute inset-0 opacity-30"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-serif font-bold text-center mb-4 decorative-line relative">
            What Our Clients Say
          </h2>
          <p className="text-center text-navy-950 mb-12 max-w-2xl mx-auto">
            Discover what our clients have to say about their experience working with our talented team of designers and
            craftsmen.
          </p>
          <TestimonialsCarousel />
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-burgundy-500 text-burgundy-500 hover:bg-burgundy-500/10"
            >
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-4 decorative-line relative">
            Follow Our Journey
          </h2>
          <p className="text-navy-950 text-center max-w-2xl mx-auto mb-12">
            Get inspired by our latest projects and behind-the-scenes moments on Instagram.
          </p>
          <InstagramFeed />
        </div>
      </section>

      {/* Awards Showcase */}
      <PartnershipShowcase />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/luxury-living-room.jpg" alt="Luxury living room" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-6 text-white text-shadow">Ready to Transform Your Space?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's collaborate to create a space that reflects your unique style and meets your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="burgundy-gradient text-white hover:opacity-90 transition-opacity">
              <Link href="/consultation">Book a Quotation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

