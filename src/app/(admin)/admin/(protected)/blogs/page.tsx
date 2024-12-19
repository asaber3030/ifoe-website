import Link from "next/link"

import { AdminPageTitle } from "@/components/dashboard/title"
import { BlogsTable } from "@/components/dashboard/blogs/table"
import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

import { adminRoutes } from "@/lib/routes"
import { getBlogs } from "@/actions/blogs"

export default async function AdminBlogsPage() {
  const blogs = await getBlogs()

  return (
    <div>
      <AdminPageTitle title="المقالات">
        <Link href={adminRoutes.blogs.create}>
          <Button variant="blue">
            <PlusIcon className="size-4" />
            اضافة مقالة
          </Button>
        </Link>
      </AdminPageTitle>

      <BlogsTable blogs={blogs} />
    </div>
  )
}
