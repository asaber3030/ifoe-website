import Link from "next/link"

import { AdminPageTitle } from "@/components/dashboard/title"
import { PartnersTable } from "@/components/dashboard/partners/table"
import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

import { routes } from "@/lib/routes"

export default function AdminBlogsPage() {
  return (
    <div>
      <AdminPageTitle title="الشركاء">
        <Link href={routes.partners.create}>
          <Button variant="blue">
            <PlusIcon className="size-4" />
            اضافة شريك
          </Button>
        </Link>
      </AdminPageTitle>

      <PartnersTable />
    </div>
  )
}
