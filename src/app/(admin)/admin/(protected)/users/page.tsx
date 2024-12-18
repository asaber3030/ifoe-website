import Link from "next/link"

import { AdminPageTitle } from "@/components/dashboard/title"
import { UsersTable } from "@/components/dashboard/users/table"
import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

import { routes } from "@/lib/routes"

export default function AdminBlogsPage() {
  return (
    <div>
      <AdminPageTitle title="المستخدمين">
        <Link href={routes.users.create}>
          <Button variant="blue">
            <PlusIcon className="size-4" />
            اضافة مستخدم
          </Button>
        </Link>
      </AdminPageTitle>

      <UsersTable />
    </div>
  )
}
