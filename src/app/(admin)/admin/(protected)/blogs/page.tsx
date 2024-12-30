import { AdminPageTitle } from "@/components/dashboard/title"
import { BlogsTable } from "@/components/dashboard/blogs/table"
import { PlusIcon } from "lucide-react"
import { EmptyState } from "@/components/app/empty-state"
import { LinkBtn } from "@/components/ui/link-btn"
import { PaginateData } from "@/components/dashboard/pagination"

import { adminRoutes } from "@/lib/routes"
import { getBlogs } from "@/actions/blogs"

type Props = {
  searchParams: Promise<{
    page: string
  }>
}

export default async function AdminBlogsPage({ searchParams }: Props) {
  const blogs = await getBlogs(+(await searchParams).page)

  return (
    <div>
      <AdminPageTitle title="المقالات">
        <LinkBtn href={adminRoutes.blogs.create} variant="blue">
          <PlusIcon className="size-4" />
          اضافة مقالة
        </LinkBtn>
      </AdminPageTitle>

      {!blogs?.data || blogs?.data?.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          <BlogsTable blogs={blogs.data} />
          <PaginateData
            hasNextPage={!!blogs.next_page_url}
            hasPreviousPage={!!blogs.prev_page_url}
            links={blogs.links}
          />
        </div>
      )}
    </div>
  )
}
