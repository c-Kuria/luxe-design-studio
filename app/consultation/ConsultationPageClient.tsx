"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function ConsultationPageClient() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consultation Booked!",
        description: "We'll confirm your appointment shortly.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        consultationType: "",
        projectType: "",
        message: "",
      })
      setDate(undefined)
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Book a Consultation</h1>
          <p className="text-muted-foreground text-lg">
            Schedule a virtual or in-person consultation with our design experts to discuss your project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Your Information</h2>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>

                <div>
                  <label htmlFor="consultationType" className="block text-sm font-medium mb-2">
                    Consultation Type
                  </label>
                  <Select
                    value={formData.consultationType}
                    onValueChange={(value) => handleSelectChange("consultationType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select consultation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="virtual">Virtual Consultation</SelectItem>
                      <SelectItem value="in-person">In-Person Consultation</SelectItem>
                      <SelectItem value="site-visit">Site Visit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => handleSelectChange("projectType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Design</SelectItem>
                      <SelectItem value="commercial">Commercial Design</SelectItem>
                      <SelectItem value="renovation">Renovation</SelectItem>
                      <SelectItem value="new-construction">New Construction</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project, goals, and any specific questions you have."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Calendar */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Select a Date</h2>
                <div className="bg-card border border-border rounded-lg p-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="mx-auto"
                    disabled={(date) => {
                      // Disable weekends and past dates
                      const day = date.getDay()
                      return date < new Date(new Date().setHours(0, 0, 0, 0)) || day === 0 || day === 6
                    }}
                  />
                  <div className="mt-4 text-center text-sm text-muted-foreground">
                    <p>Available: Monday-Friday</p>
                    <p>Hours: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                {date && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Available Time Slots</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"].map((time) => (
                        <Button key={time} variant="outline" className="justify-center" type="button">
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting || !date}>
                {isSubmitting ? "Booking..." : "Book Consultation"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

