"use client"

import Image from "next/image"
import Link from "next/link"

import { Blog } from "@/types"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { routes } from "@/lib/routes"
import moment from "moment"

export function BlogPost({ post }: { post: Blog }) {
  return (
    <Card>
      <CardHeader className="p-2 mb-4 space-y-4">
        <Link href={routes.blogs.view(post.id)} className="hover:opacity-80">
          <img
            className="w-full object-cover rounded-xl"
            src={post.image_url}
            alt={post.title}
            width={400}
            height={200}
          />
        </Link>
        <div>
          <CardTitle className="text-xl">{post.title}</CardTitle>
          <CardDescription className="mb-4">{post.short_text}</CardDescription>
          <bdi className="text-gray-500 text-sm">{moment(post.created_at).fromNow()}</bdi>
        </div>
      </CardHeader>
      <CardFooter className="p-2">
        <Link href={routes.blogs.view(post.id)} className="w-full block">
          <Button className="w-full" variant="blue">
            اقرأ المزيد
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
