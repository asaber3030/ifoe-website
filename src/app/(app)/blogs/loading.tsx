import { BlogPost } from "@/components/app/blogs/single-blog"

import { Skeleton } from "@/components/ui/skeleton"

export default function BlogsLoadingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">المقالات الخاصة بنا</h1>
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div className="grid xl:grid-cols-4 grid-cols-1 gap-4" key={`blog-skeleton-${i}`}>
            <Skeleton className="h-32 w-full col-span-1" />
            <div className="col-span-3 space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-44" />
              <Skeleton className="h-10 w-20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
