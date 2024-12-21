"use client"

import Image from "next/image"
import Link from "next/link"

import { LinkBtn } from "@/components/ui/link-btn"
import { Blog } from "@/types"
import { routes } from "@/lib/routes"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function BlogPost({ post }: { post: Blog }) {
  return (
    <Card>
      <CardHeader className="p-2 mb-4 space-y-4">
        <Image
          className="w-full object-cover rounded-xl"
          src={"/bg.jpg"}
          alt={post.title}
          width={400}
          height={200}
        />
        <div>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.shortText}</CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="p-2">
        <Button variant="blue" className="w-full">
          قراءة المزيد
        </Button>
      </CardFooter>
    </Card>
  )
}
