import Image from "next/image"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectTestimonialProps {
  testimonial: {
    quote: string
    author: string
    image: string
  }
}

export function ProjectTestimonial({ testimonial }: ProjectTestimonialProps) {
  return (
    <Card className="bg-muted border-0 overflow-hidden">
      <CardContent className="flex flex-col md:flex-row items-center gap-8 p-8 sm:p-12">
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0">
          <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.author} fill className="object-cover" />
        </div>
        <div className="text-center md:text-left">
          <Quote className="h-10 w-10 text-primary/20 mb-4 mx-auto md:mx-0" />
          <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
          <div>
            <h4 className="font-bold text-primary">{testimonial.author}</h4>
            <p className="text-muted-foreground">Client</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

