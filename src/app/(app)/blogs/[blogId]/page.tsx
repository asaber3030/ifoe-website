import { getBlog } from "@/actions/blogs"
import { notFound } from "next/navigation"

import moment from "moment"

type Props = {
  params: Promise<{
    blogId: string
  }>
}

export const dynamic = "force-dynamic"

export default async function BlogIdPage({ params }: Props) {
  const blogId = +(await params).blogId
  const blog = await getBlog(blogId)

  if (!blog.blog) return notFound()

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{blog.blog.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">{blog.blog.short_text}</p>
          <div className="flex items-center justify-between text-muted-foreground">
            <p>
              <bdi>{moment(blog.blog.created_at).fromNow()}</bdi>
            </p>
          </div>
        </header>

        <img
          src={blog.blog.image_url}
          alt={blog.blog.title}
          width={800}
          height={400}
          className="h-auto rounded-lg mb-8"
        />

        <div
          className="space-y-4 prose"
          dangerouslySetInnerHTML={{ __html: blog.blog.blog_content }}
        />
      </article>
    </div>
  )
}
