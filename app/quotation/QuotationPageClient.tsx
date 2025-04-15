"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function QuotationPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    location: "",
    areaSize: "",
    projectCategory: "",
    serviceType: "",
    serviceDetails: "",
    designStyle: "",
    hasDrawings: "",
    startDate: "",
    budget: "",
    file: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   const { file, ...dataToSend } = formData;

  //   try {
  //     const response = await fetch("/api/submit-quote", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(dataToSend),
  //     });

  //     const result = await response.json();

  //     toast({
  //       title: result.success ? "Quotation Sent!" : "Error",
  //       description: result.message,
  //     });

  //     if (result.success) {
  //       // Reset form
  //       setFormData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         propertyType: "",
  //         location: "",
  //         areaSize: "",
  //         projectCategory: "",
  //         serviceType: "",
  //         serviceDetails: "", // or serviceDetails if renamed
  //         designStyle: "",
  //         hasDrawings: "",
  //         startDate: "",
  //         budget: "",
  //         file: null,
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast({
  //       title: "Error",
  //       description: "Something went wrong. Please try again.",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
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
          propertyType: formData.propertyType,
          location: formData.location,
          areaSize: formData.areaSize,
          projectCategory: formData.projectCategory,
          serviceType: formData.serviceType,
          serviceDetails: formData.serviceDetails, // or renamed if you changed the field name
          designStyle: formData.designStyle,
          hasDrawings: formData.hasDrawings,
          startDate: formData.startDate,
          budget: formData.budget,
        }),
      });
  
      if (response.ok) {
        toast({
          title: "Quotation Sent!",
          description: "We'll review your request and respond shortly.",
        });
  
        setFormData({
          name: "",
          email: "",
          phone: "",
          propertyType: "",
          location: "",
          areaSize: "",
          projectCategory: "",
          serviceType: "",
          serviceDetails: "", // or serviceDetails
          designStyle: "",
          hasDrawings: "",
          startDate: "",
          budget: "",
          file: null,
        });
  
      } else {
        toast({
          title: "Error",
          description: "There was a problem submitting the form.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Could not submit your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Request a Quotation</h1>
          <p className="text-muted-foreground text-lg">
            Provide details about your project to receive a tailored quotation
            from our team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Your Information</h2>

              <Input
                id="name"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Project Details</h2>

              <Select
                value={formData.propertyType}
                onValueChange={(value) =>
                  handleSelectChange("propertyType", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="office">Office</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                </SelectContent>
              </Select>

              <Input
                id="location"
                name="location"
                placeholder="Project Location"
                value={formData.location}
                onChange={handleChange}
                required
              />

              <Input
                id="areaSize"
                name="areaSize"
                placeholder="Size (sqm/sqft)"
                value={formData.areaSize}
                onChange={handleChange}
                required
              />

              <Select
                value={formData.projectCategory}
                onValueChange={(value) =>
                  handleSelectChange("projectCategory", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select project category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="renovation">Renovation</SelectItem>
                  <SelectItem value="fit-out">Fit-out</SelectItem>
                  <SelectItem value="new-construction">
                    New Construction
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={formData.serviceType}
                onValueChange={(value) =>
                  handleSelectChange("serviceType", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select services required" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interior-design">
                    Interior Design Only
                  </SelectItem>
                  <SelectItem value="construction">
                    Construction Only
                  </SelectItem>
                  <SelectItem value="design-build">
                    Both Design & Build
                  </SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                id="serviceDetails"
                name="serviceDetails"
                rows={3}
                placeholder="Detailed description of services required"
                value={formData.serviceDetails}
                onChange={handleChange}
              />

              <Input
                id="designStyle"
                name="designStyle"
                placeholder="Preferred design style (e.g., modern, industrial)"
                value={formData.designStyle}
                onChange={handleChange}
              />

              {/* <Select
                value={formData.hasDrawings}
                onValueChange={(value) =>
                  handleSelectChange("hasDrawings", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Do you have architectural drawings or floor plans?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select> */}
              <div>
                <label
                  htmlFor="fileUpload"
                  className="block text-sm font-medium mb-2"
                >
                  Upload drawings or an image of the space (optional)
                </label>
                <Input
                  id="fileUpload"
                  name="fileUpload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setFormData((prev) => ({ ...prev, file }));
                    }
                  }}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Accepted formats: PDF, JPG, PNG
                </p>
              </div>

              {/* <Input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
              /> */}

              <Input
                id="budget"
                name="budget"
                placeholder="Target budget or price range"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>

            <div className="text-center pt-6 border-t border-border">
              <Button
                type="submit"
                size="lg"
                className="burgundy-gradient text-white hover:opacity-90 transition-opacity w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Quotation"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
