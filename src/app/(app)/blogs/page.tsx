import { BlogPost } from "@/components/app/blogs/single-blog"
import { type Metadata } from "next"

import { getBlogs } from "@/actions/blogs"

export const metadata: Metadata = {
  title: "المقالات",
  description: "المقالات"
}

export default async function BlogsPage() {
  const blogs = await getBlogs()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">المقالات الخاصة بنا</h1>

      <div>
        {blogs.map((post) => (
          <BlogPost key={`blog-${post.blogId}`} post={post} />
        ))}
      </div>
    </div>
  )
}
