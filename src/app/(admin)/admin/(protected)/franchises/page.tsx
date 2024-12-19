import { FranchisesTable } from "@/components/dashboard/franchises/table"
import { AdminPageTitle } from "@/components/dashboard/title"
import { PlusIcon } from "lucide-react"
import { LinkBtn } from "@/components/ui/link-btn"

import { adminRoutes } from "@/lib/routes"

export default function AdminBlogsPage() {
  return (
    <div>
      <AdminPageTitle title="الخدمات">
        <LinkBtn href={adminRoutes.franchises.create} variant="blue">
          <PlusIcon className="size-4" />
          اضافة خدمة
        </LinkBtn>
      </AdminPageTitle>

      <FranchisesTable />
    </div>
  )
}
