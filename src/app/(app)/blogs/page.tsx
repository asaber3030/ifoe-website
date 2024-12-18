"use client"

import { BlogPost } from "@/components/app/blogs/single-blog"
import { blogPosts } from "@/components/app/blogs/blog-data"
import { Pagination } from "@/components/app/blogs/pagination"
import React, { useState } from "react"

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(blogPosts.length / 10)

  const startIndex = (currentPage - 1) * 10
  const endIndex = startIndex + 10
  const currentPosts = blogPosts.slice(startIndex, endIndex)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Blog</h1>
      <div>
        {currentPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}
