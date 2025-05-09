"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xyzevlkv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-serif font-bold mb-6 decorative-line relative">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            We'd love to hear from you. Get in touch with our team to discuss your project or schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slideRight">
            <h2 className="text-2xl font-serif font-bold mb-6 decorative-line-left relative">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">
                    Off USIU Road,
                    <br />
                    Safari Park Close
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">(011) 377-5896</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">info@fanisiatelier.co.ke</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4 group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 h-[300px] rounded-lg overflow-hidden fancy-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.926347122296!2d36.74464877552199!3d-1.2115603987768764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f23e201e9164d%3A0xeb5aee215a2d18ec!2sFANISI%20HEIGHTS%20KARURA!5e0!3m2!1sen!2ske!4v1728895433026!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fanisi Atelier Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slideLeft">
            <h2 className="text-2xl font-serif font-bold mb-6 decorative-line-left relative">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-navy-700 bg-white text-navy-900 focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-navy-700 bg-white text-navy-900 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-navy-700 bg-white text-navy-900 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-navy-700 bg-white text-navy-900 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-navy-700 bg-white text-navy-900 focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full burgundy-gradient text-white hover:bg-navy-800 transition-colors border-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

