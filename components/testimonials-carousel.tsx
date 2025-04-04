"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/images/testimonial-1.jpg",
    quote:
      "Working with Luxe Design Studio was an absolute pleasure. They transformed our outdated living space into a modern, functional home that perfectly reflects our style. Their attention to detail and commitment to quality exceeded our expectations.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Restaurant Owner",
    image: "/images/testimonial-2.jpg",
    quote:
      "The team at Luxe Design Studio understood our vision for our new restaurant and executed it flawlessly. The space is not only beautiful but also functional for our staff and comfortable for our guests. They were professional, responsive, and a joy to work with.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Office Manager",
    image: "/images/testimonial-3.jpg",
    quote:
      "Our office renovation project was handled with incredible professionalism and creativity. The Luxe Design team listened to our needs and created a workspace that has improved productivity and employee satisfaction. I highly recommend their services.",
  },
]

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="w-full flex-shrink-0 border-0 bg-transparent">
              <CardContent className="flex flex-col md:flex-row items-center gap-8 p-6 sm:p-10">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-burgundy-500/20 flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <Quote className="h-10 w-10 text-burgundy-500/20 mb-4 mx-auto md:mx-0" />
                  <p className="text-lg mb-6 italic text-navy-950">{testimonial.quote}</p>
                  <div>
                    <h4 className="font-bold text-burgundy-500">{testimonial.name}</h4>
                    <p className="text-navy-950">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setActiveIndex(index)
            }}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === activeIndex ? "bg-burgundy-500 w-6" : "bg-burgundy-500/30 hover:bg-burgundy-500/50",
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden md:flex bg-background/80 backdrop-blur-sm hover:bg-background text-navy-950"
        onClick={handlePrev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden md:flex bg-background/80 backdrop-blur-sm hover:bg-background text-navy-950"
        onClick={handleNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

