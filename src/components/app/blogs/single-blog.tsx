"use client"

import Image from "next/image"
import Link from "next/link"

import { LinkBtn } from "@/components/ui/link-btn"
import { Blog } from "@/types"
import { routes } from "@/lib/routes"

export function BlogPost({ post }: { post: Blog }) {
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
        <Link
          href={routes.blogs.view(post.blogId)}
          className="text-xl font-bold hover:text-blue-500 hover:underline"
        >
          {post.title}
        </Link>

        <p className="text-sm text-muted-foreground line-clamp-1">{post.shortText}</p>

        <LinkBtn
          href={routes.blogs.view(post.blogId)}
          className="self-start rounded-3xl"
          variant="outlineBlue"
        >
          اقرا المزيد
        </LinkBtn>
      </div>
    </div>
  )
}
