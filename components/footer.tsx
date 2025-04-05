import Link from "next/link"
import Image from "next/image"
import { Instagram, PinIcon as Pinterest, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"

export function Footer() {
  return (
    <footer className="bg-navy-950 py-12 mt-16 relative overflow-hidden text-white">
      <div className="diagonal-pattern absolute inset-0 opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/fanisi-atelier-logo.png"
                alt="Fanisi Atelier"
                width={180}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-white/80 mb-6">
              Transforming spaces into extraordinary experiences through thoughtful design and expert craftsmanship.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/fanisiatelier/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-burgundy-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="h-10 w-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-burgundy-500 transition-colors"
              >
                <Pinterest className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-burgundy-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="h-10 w-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-burgundy-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="text-white/80 hover:text-burgundy-300 transition-colors inline-flex items-center group"
                >
                  <span className="block w-0 group-hover:w-2 transition-all duration-300 h-px bg-burgundy-300 mr-0 group-hover:mr-2"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-burgundy-300 transition-colors inline-flex items-center group"
                >
                  <span className="block w-0 group-hover:w-2 transition-all duration-300 h-px bg-burgundy-300 mr-0 group-hover:mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-burgundy-300 transition-colors inline-flex items-center group"
                >
                  <span className="block w-0 group-hover:w-2 transition-all duration-300 h-px bg-burgundy-300 mr-0 group-hover:mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/80 hover:text-burgundy-300 transition-colors inline-flex items-center group"
                >
                  <span className="block w-0 group-hover:w-2 transition-all duration-300 h-px bg-burgundy-300 mr-0 group-hover:mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-burgundy-300 transition-colors inline-flex items-center group"
                >
                  <span className="block w-0 group-hover:w-2 transition-all duration-300 h-px bg-burgundy-300 mr-0 group-hover:mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-burgundy-300 shrink-0 mt-0.5" />
                <span className="text-white/80">Kiambu, Kihara, 102</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-burgundy-300" />
                <Link href="tel:+254113775896" className="text-white/80 hover:text-burgundy-300 transition-colors">
                  011-377-5896
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-burgundy-300" />
                <Link
                  href="mailto:info@fanisiatelier.co.ke"
                  className="text-white/80 hover:text-burgundy-300 transition-colors"
                >
                  info@fanisiatelier.co.ke
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for the latest design trends and studio updates.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-6 text-center text-white/60">
          <p>© {new Date().getFullYear()} Fanisi Atelier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

