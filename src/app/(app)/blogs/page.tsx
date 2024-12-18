import { BlogPost } from "@/components/app/blogs/single-blog"
import { blogPosts } from "@/components/app/blogs/blog-data"
import { Pagination } from "@/components/app/blogs/pagination"

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">المقالات الخاصة بنا</h1>
      <div>
        {blogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
      <Pagination currentPage={0} totalPages={10} />
    </div>
  )
}
