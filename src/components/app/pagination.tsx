"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      <Button variant="blue" size="icon" disabled={currentPage === 1}>
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button key={page} variant={currentPage === page ? "blue" : "outline"}>
          {page}
        </Button>
      ))}
      <Button variant="blue" size="icon" disabled={currentPage === totalPages}>
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  )
}
