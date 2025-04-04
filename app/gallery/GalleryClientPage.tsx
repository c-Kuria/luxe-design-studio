"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    image: "/images/modern-penthouse.jpg",
    title: "Modern Living Room",
    categories: ["residential", "modern"],
  },
  {
    id: 2,
    image: "/images/instagram-1.jpg",
    title: "Luxury Kitchen",
    categories: ["residential", "luxury"],
  },
  {
    id: 3,
    image: "/images/instagram-2.jpg",
    title: "Minimalist Bedroom",
    categories: ["residential", "minimalist"],
  },
  {
    id: 4,
    image: "/images/instagram-3.jpg",
    title: "Contemporary Office",
    categories: ["commercial", "contemporary"],
  },
  {
    id: 5,
    image: "/images/instagram-4.jpg",
    title: "Restaurant Interior",
    categories: ["commercial", "luxury"],
  },
  {
    id: 6,
    image: "/images/instagram-5.jpg",
    title: "Hotel Lobby",
    categories: ["commercial", "luxury"],
  },
  {
    id: 7,
    image: "/images/instagram-6.jpg",
    title: "Urban Apartment",
    categories: ["residential", "contemporary"],
  },
  {
    id: 8,
    image: "/images/boutique-hotel.jpg",
    title: "Retail Space",
    categories: ["commercial", "modern"],
  },
  {
    id: 9,
    image: "/images/beach-house.jpg",
    title: "Bathroom Design",
    categories: ["residential", "minimalist"],
  },
  {
    id: 10,
    image: "/images/project-detail-1.jpg",
    title: "Outdoor Living",
    categories: ["residential", "contemporary"],
  },
  {
    id: 11,
    image: "/images/project-detail-2.jpg",
    title: "Corporate Office",
    categories: ["commercial", "minimalist"],
  },
  {
    id: 12,
    image: "/images/project-detail-3.jpg",
    title: "Penthouse Suite",
    categories: ["residential", "luxury"],
  },
]

// Filter categories
const projectTypes = ["all", "residential", "commercial"]
const designStyles = ["all", "modern", "minimalist", "contemporary", "luxury"]

export default function GalleryClientPage() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedStyle, setSelectedStyle] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredItems = galleryItems.filter((item) => {
    const matchesType = selectedType === "all" || item.categories.includes(selectedType)
    const matchesStyle = selectedStyle === "all" || item.categories.includes(selectedStyle)
    return matchesType && matchesStyle
  })

  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-6 decorative-line relative">Our Gallery</h1>
          <p className="text-muted-foreground text-lg">
            Explore our collection of stunning interior designs and construction projects.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
            <div>
              <h3 className="text-sm font-medium mb-2 text-center sm:text-left">Project Type</h3>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {projectTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className={selectedType === type ? "gold-gradient text-white" : "capitalize"}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-center sm:text-left">Design Style</h3>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {designStyles.map((style) => (
                  <Button
                    key={style}
                    variant={selectedStyle === style ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedStyle(style)}
                    className={selectedStyle === style ? "gold-gradient text-white" : "capitalize"}
                  >
                    {style}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="image-container aspect-[4/3] cursor-pointer fancy-border"
                onClick={() => setSelectedImage(item.image)}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm capitalize">{item.categories.join(" • ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No gallery items match your selected filters.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedType("all")
                setSelectedStyle("all")
              }}
              className="mt-4 border-primary text-primary hover:bg-primary/10"
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full max-w-4xl max-h-[80vh] aspect-auto animate-zoomIn">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image fullscreen"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

