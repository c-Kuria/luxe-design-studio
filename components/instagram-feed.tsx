import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

const instagramPosts = [
  {
    id: 1,
    image: "/images/instagram-1.jpg",
    link: "https://instagram.com",
    likes: 245,
    comments: 18,
  },
  {
    id: 2,
    image: "/images/instagram-2.jpg",
    link: "https://instagram.com",
    likes: 189,
    comments: 24,
  },
  {
    id: 3,
    image: "/images/instagram-3.jpg",
    link: "https://instagram.com",
    likes: 321,
    comments: 32,
  },
  {
    id: 4,
    image: "/images/instagram-4.jpg",
    link: "https://instagram.com",
    likes: 178,
    comments: 14,
  },
  {
    id: 5,
    image: "/images/instagram-5.jpg",
    link: "https://instagram.com",
    likes: 267,
    comments: 29,
  },
  {
    id: 6,
    image: "/images/instagram-6.jpg",
    link: "https://instagram.com",
    likes: 203,
    comments: 21,
  },
]

export function InstagramFeed() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {instagramPosts.map((post) => (
          <Link
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-md"
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt="Instagram post"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center px-2">
                <Instagram className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm">
                  {post.likes} likes · {post.comments} comments
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-burgundy-500 hover:underline group"
        >
          <Instagram className="h-4 w-4 mr-2" />
          Follow us on Instagram
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-burgundy-500 mt-0.5"></span>
        </Link>
      </div>
    </div>
  )
}

