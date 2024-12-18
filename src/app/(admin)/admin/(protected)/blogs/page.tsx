import Link from "next/link"

import { AdminPageTitle } from "@/components/dashboard/title"
import { BlogsTable } from "@/components/dashboard/blogs/table"
import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

import { routes } from "@/lib/routes"

export default function AdminBlogsPage() {
  return (
    <div>
      <AdminPageTitle title="المقالات">
        <Link href={routes.blogs.create}>
          <Button variant="blue">
            <PlusIcon className="size-4" />
            اضافة مقالة
          </Button>
        </Link>
      </AdminPageTitle>

      <BlogsTable />
    </div>
  )
}
