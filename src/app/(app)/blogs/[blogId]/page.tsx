import Image from "next/image"

import { getBlog } from "@/actions/blogs"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{
    blogId: string
  }>
}

export default async function BlogIdPage({ params }: Props) {
  const blogId = +(await params).blogId
  const blog = await getBlog(blogId)

  if (!blog.blog || blog?.status != 200) return notFound()

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{blog.blog.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">{blog.blog.shortText}</p>
          <div className="flex items-center justify-between text-muted-foreground">
            <time dateTime="2023-05-15">May 15, 2023</time>
          </div>
        </header>

        <Image
          src={"/bg.jpg"}
          alt={blog.blog.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-lg mb-8"
        />

        <div
          className="space-y-4 prose"
          dangerouslySetInnerHTML={{ __html: blog.blog.blogContent }}
        />
      </article>
    </div>
  )
}
