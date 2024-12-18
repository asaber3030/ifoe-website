import Link from "next/link"

import { FrenchisesTable } from "@/components/dashboard/frenchises/table"
import { AdminPageTitle } from "@/components/dashboard/title"
import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

import { routes } from "@/lib/routes"
import { LinkBtn } from "@/components/ui/link-btn"

export default function AdminBlogsPage() {
  return (
    <div>
      <AdminPageTitle title="الخدمات">
        <LinkBtn href={routes.franchises.create} variant="blue">
          <PlusIcon className="size-4" />
          اضافة خدمة
        </LinkBtn>
      </AdminPageTitle>

      <FrenchisesTable />
    </div>
  )
}
