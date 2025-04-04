import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Sample FAQ data
const faqs = [
  {
    question: "What services does Fanisi Atelier offer?",
    answer:
      "We offer a comprehensive range of interior design and construction services, including space planning, custom furniture design, material selection, lighting design, project management, and full construction services. Our team works collaboratively to provide end-to-end solutions for both residential and commercial projects.",
  },
  {
    question: "How much does it cost to hire an interior designer?",
    answer:
      "Our design fees vary based on the scope and complexity of your project. We offer several fee structures, including hourly rates, flat fees for specific services, and percentage-based fees for larger projects. During our initial consultation, we'll discuss your project needs and provide a detailed proposal outlining the estimated costs.",
  },
  {
    question: "How long does a typical interior design project take?",
    answer:
      "The timeline for a design project depends on its scope and complexity. A single room refresh might take 4-8 weeks, while a complete home renovation could take 6-12 months. Commercial projects typically range from 3-18 months. During our consultation, we'll provide a more specific timeline based on your project requirements.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes, we offer virtual design services for clients outside our local area. Through video consultations, digital mood boards, 3D renderings, and detailed specifications, we can guide your project remotely. We also offer hybrid approaches, combining remote design with occasional in-person visits for key project milestones.",
  },
  {
    question: "What is your design process?",
    answer:
      "Our design process typically includes: 1) Initial consultation to understand your needs and vision, 2) Concept development with mood boards and preliminary sketches, 3) Design development with detailed plans, elevations, and 3D renderings, 4) Material and furniture selection, 5) Implementation and installation, and 6) Final styling and accessories. We keep you involved throughout the process to ensure the final result aligns with your vision.",
  },
  {
    question: "Do you handle permits and building regulations?",
    answer:
      "Yes, for projects requiring permits, our team manages the entire permitting process. We have extensive experience navigating building codes and regulations, and we work with structural engineers and other specialists when necessary to ensure all aspects of your project are compliant with local requirements.",
  },
  {
    question: "Can you work with my existing furniture and decor?",
    answer:
      "We're happy to incorporate your existing pieces into the new design. During our initial assessment, we'll evaluate your current furniture and decor to determine what can be reused, repurposed, or reupholstered to align with the new design concept while honoring your attachment to meaningful pieces.",
  },
  {
    question: "Do you offer sustainable or eco-friendly design options?",
    answer:
      "Yes, sustainability is an important consideration in our design approach. We can recommend eco-friendly materials, energy-efficient appliances and lighting, low-VOC paints and finishes, and sustainably sourced furniture and decor. We'll work with you to incorporate as many sustainable elements as possible while meeting your aesthetic and functional requirements.",
  },
  {
    question: "What geographic areas do you serve?",
    answer:
      "We primarily serve the New York metropolitan area, including Manhattan, Brooklyn, Queens, and nearby areas in New Jersey and Connecticut. For larger projects, we're available to travel throughout the United States and internationally. We also offer virtual design services for clients outside our local service area.",
  },
  {
    question: "How do I get started with Fanisi Atelier?",
    answer:
      "The first step is to schedule an initial consultation. You can do this by contacting us through our website, by phone, or by email. During this consultation, we'll discuss your project goals, timeline, budget, and answer any questions you may have. This helps us understand your needs and determine how we can best serve you.",
  },
]

export const metadata = {
  title: "FAQs | Fanisi Atelier",
  description: "Find answers to commonly asked questions about our interior design and construction services.",
}

export default function FAQsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our services, process, and approach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Don't see your question here? Feel free to reach out to us directly.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

