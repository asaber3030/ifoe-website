"use client"

import { useSearchParams } from "next/navigation"

import { Pagination, PaginationContent } from "@/components/ui/pagination"
import { PagniationLink } from "@/types"
import { LinkBtn } from "../ui/link-btn"
import { ArrowLeft, ArrowRight } from "lucide-react"

type Props = {
  links: PagniationLink[]
  hasNextPage?: boolean
  hasPreviousPage?: boolean
}

export const PaginateData = ({ links, hasNextPage, hasPreviousPage }: Props) => {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get("page")) || 1
  const realLinks = links.slice(1, links.length - 1)

  if (realLinks.length === 1) return null

  return (
    <Pagination>
      <PaginationContent className="flex gap-2">
        {hasPreviousPage && (
          <LinkBtn variant="outline" href={`?page=${page - 1 == 0 ? 1 : page - 1}`}>
            <ArrowRight className="size-4" />
          </LinkBtn>
        )}
        {realLinks.map((link, i) => (
          <LinkBtn
            key={i}
            href={`?page=${i + 1}`}
            variant={searchParams.get("page") === String(i + 1) ? "blue" : "outline"}
          >
            {link.label}
          </LinkBtn>
        ))}
        {hasNextPage && (
          <LinkBtn variant="outline" href={`?page=${page + 1}`}>
            <ArrowLeft className="size-4" />
          </LinkBtn>
        )}
      </PaginationContent>
    </Pagination>
  )
}
