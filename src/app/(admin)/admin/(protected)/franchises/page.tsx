import { FranchisesTable } from "@/components/dashboard/franchises/table"
import { AdminPageTitle } from "@/components/dashboard/title"
import { PlusIcon } from "lucide-react"
import { LinkBtn } from "@/components/ui/link-btn"
import { PaginateData } from "@/components/dashboard/pagination"

import { adminRoutes } from "@/lib/routes"
import { getFranchises } from "@/actions/franchises"

export default async function AdminFranchisesPage() {
  const franchises = await getFranchises()
  return (
    <div>
      <AdminPageTitle title="الخدمات">
        <LinkBtn href={adminRoutes.franchises.create} variant="blue">
          <PlusIcon className="size-4" />
          اضافة خدمة
        </LinkBtn>
      </AdminPageTitle>

      <div className="space-y-4">
        <FranchisesTable franchises={franchises?.data!} />
        <PaginateData
          hasNextPage={!!franchises?.next_page_url}
          hasPreviousPage={!!franchises?.prev_page_url}
          links={franchises?.links!}
        />
      </div>
    </div>
  )
}
