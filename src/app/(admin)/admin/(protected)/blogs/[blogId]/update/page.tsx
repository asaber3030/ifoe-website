import { notFound } from "next/navigation"
import { getBlog } from "@/actions/blogs"

import { UpdateBlogForm } from "@/components/dashboard/blogs/update-form"
import { AdminPageTitle } from "@/components/dashboard/title"

type Props = {
  params: Promise<{
    blogId: string
  }>
}

export default async function UpdateBlogPage({ params }: Props) {
  const blogId = +(await params).blogId
  const blog = await getBlog(blogId)

  if (!blog.blog) return notFound()

  return (
    <div className="space-y-4">
      <AdminPageTitle title="تعديل مقالة" />
      <UpdateBlogForm blog={blog.blog} />
    </div>
  )
}
