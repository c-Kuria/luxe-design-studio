"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    image: "/images/IMG_7024.webp",
    title: "Modern Living Room",
    categories: ["residential", "modern"],
  },
  {
    id: 2,
    image: "https://www.sahomeowner.co.za/wp-content/uploads/2019/12/4-Pixabay-1024x683.jpg",
    title: "Luxury Kitchen",
    categories: ["residential", "luxury"],
  },
  {
    id: 3,
    image: "/images/C5.webp",
    title: "Minimalist Bedroom",
    categories: ["residential", "minimalist"],
  },
  {
    id: 4,
    image: "https://officeinteriors.co.za/wp-content/uploads/2024/03/remgro161-1024x675.jpg",
    title: "Contemporary Office",
    categories: ["commercial", "contemporary"],
  },
  {
    id: 5,
    image: "https://images.squarespace-cdn.com/content/v1/5dd58fd69e259436c30d0b95/1664905269567-MEXXKL2GOY2BERD2KQFM/Interior-7-web.jpg",
    title: "Restaurant Interior",
    categories: ["commercial", "luxury"],
  },
  {
    id: 6,
    image: "https://evasonaike.com/cdn/shop/articles/Sanctuary_Baines_Camp_-_MiDesign_2_1024x683.jpg?v=1585820483",
    title: "Hotel Lobby",
    categories: ["commercial", "luxury"],
  },
  {
    id: 7,
    image: "/images/A9.webp",
    title: "Urban Apartment",
    categories: ["residential", "contemporary"],
  },
  {
    id: 8,
    image: "/images/IMG_20230517_143303_1.webp",
    title: "Retail Space",
    categories: ["commercial", "modern"],
  },
  {
    id: 9,
    image: "/images/pentBathroom.webp",
    title: "Bathroom Design",
    categories: ["residential", "minimalist"],
  },
  {
    id: 10,
    image: "https://www.lifeisagarden.co.za/wp-content/uploads/2016/04/CON1400.jpg",
    title: "Outdoor Living",
    categories: ["residential", "contemporary"],
  },
  {
    id: 11,
    image: "/images/IMG_5854.webp",
    title: "Dining Area",
    categories: ["residential", "minimalist"],
  },
  {
    id: 12,
    image: "/images/IMG-20241008-WA0019.webp",
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

