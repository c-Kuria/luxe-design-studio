"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ProjectGalleryProps {
  images: string[]
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <h2 className="text-2xl font-serif font-bold mb-6 decorative-line-left relative">Project Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-container aspect-square cursor-pointer fancy-border"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Project image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white text-2xl">+</span>
              </div>
            </div>
          </div>
        ))}
      </div>

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
              alt="Project image fullscreen"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}

