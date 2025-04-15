"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();
  const isMobile = useMobile();
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only show original logo when at the very top of the page
      setAtTop(currentScrollY === 0);

      // Set scrolled state for background change
      setScrolled(currentScrollY > 20);
    };

    // Set initial values
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isMobile]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md dark:bg-navy-900/95"
          : "bg-transparent md:bg-transparent bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="relative">
              <div className="relative">
                <div
                  className={cn(
                    "h-12 w-auto relative transition-all duration-500 transform",
                    atTop
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 -translate-y-4 scale-90 pointer-events-none"
                  )}
                >
                  <Image
                    src="/images/fanisi-atelier-logo.png"
                    alt="Fanisi Atelier"
                    width={180}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div
                  className={cn(
                    "h-10 w-auto relative transition-all duration-500 transform -mt-12",
                    atTop
                      ? "opacity-0 translate-y-4 scale-90 pointer-events-none"
                      : "opacity-100 translate-y-0 scale-100 -mt-24"
                  )}
                >
                  <Image
                    src={
                      isDarkTheme
                        ? "/images/DarkScrollImage.jpg"
                        : "/images/fanisi-atelier-scroll-logo.png"
                    }
                    alt="Fanisi Atelier"
                    width={120}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-burgundy-500 relative group",
                  pathname === item.href
                    ? "text-burgundy-500"
                    : "text-navy-950 dark:text-white"
                )}
              >
                <span>{item.name}</span>
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-burgundy-500 transition-all duration-300 group-hover:w-full",
                    pathname === item.href ? "w-full" : "w-0"
                  )}
                ></span>
              </Link>
            ))}
            <ThemeToggle />
            <Button
              asChild
              className="burgundy-gradient text-white hover:opacity-90 transition-opacity"
            >
              <Link href="/consultation">Book Quotation</Link>
            </Button>
          </nav>

          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-950 dark:text-white bg-white/90 dark:bg-navy-800 p-2 rounded-md hover:bg-white dark:hover:bg-navy-700 transition-colors shadow-sm"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-20 bg-white dark:bg-navy-900 z-40 md:hidden">
          <nav className="flex flex-col p-6 space-y-4 bg-white/90 dark:bg-navy-900/95">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors p-3 rounded-md",
                  pathname === item.href
                    ? "text-burgundy-500 bg-burgundy-50 dark:bg-burgundy-950/40 dark:text-burgundy-300"
                    : "text-navy-950 dark:text-white hover:bg-gray-100 dark:hover:bg-navy-800"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-navy-700">
              <Button
                asChild
                className="w-full burgundy-gradient text-white hover:opacity-90 transition-opacity py-6 text-lg"
              >
                <Link href="/consultation" onClick={() => setIsOpen(false)}>
                  Book Quotation
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
