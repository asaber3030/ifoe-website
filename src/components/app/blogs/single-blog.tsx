"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface BlogPostProps {
  id: number
  title: string
  description: string
  imageUrl: string
}

export function BlogPost({ post }: { post: BlogPostProps }) {
  return (
    <div className="flex gap-8 py-8 border-b border-gray-200 last:border-b-0">
      <div>
        <Image
          src={"/bg.jpg"}
          alt={post.title}
          width={150}
          height={150}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p className="text-sm text-muted-foreground line-clamp-1">{post.description}</p>
        <Button className="self-start rounded-3xl" variant="outlineBlue">
          Read More
        </Button>
      </div>
    </div>
  )
}
