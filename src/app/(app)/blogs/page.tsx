import { getBlogs } from "@/actions/blogs"

import { type Metadata } from "next"

import { PaginateData } from "@/components/dashboard/pagination"
import { BlogPost } from "@/components/app/blogs/single-blog"
import { EmptyState } from "@/components/app/empty-state"

export const dynamic = "force-dynamic"

type Props = {
  searchParams: Promise<{ page: string }>
}

export const metadata: Metadata = {
  title: "المقالات",
  description: "المقالات"
}

export default async function BlogsPage({ searchParams }: Props) {
  const page = +(await searchParams).page
  const blogs = await getBlogs(page)

  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold mb-12'>المقالات الخاصة بنا</h1>

      {blogs?.data?.length === 0 ? (
        <EmptyState />
      ) : (
        <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
          {blogs?.data?.map((post) => (
            <BlogPost key={`blog-${post.id}`} post={post} />
          ))}
        </div>
      )}

      <div className='mt-4'>
        <PaginateData
          links={blogs?.links!}
          hasNextPage={!!blogs?.next_page_url}
          hasPreviousPage={!!blogs?.prev_page_url}
        />
      </div>
    </div>
  )
}
