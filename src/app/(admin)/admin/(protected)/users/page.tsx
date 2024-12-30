import { AdminPageTitle } from "@/components/dashboard/title"
import { PaginateData } from "@/components/dashboard/pagination"
import { EmptyState } from "@/components/app/empty-state"
import { UsersTable } from "@/components/dashboard/users/table"

import { getUsers } from "@/actions/users"
import { getRoles } from "@/actions/app"
import { CreateUserModal } from "@/components/dashboard/users/create-modal"

export default async function AdminBlogsPage() {
  const users = await getUsers()
  const roles = await getRoles()

  return (
    <div>
      <AdminPageTitle title="المستخدمين">
        <CreateUserModal roles={roles} />
      </AdminPageTitle>

      {!users?.data || users?.data?.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          <UsersTable roles={roles} users={users.data} />
          <PaginateData
            hasNextPage={!!users.next_page_url}
            hasPreviousPage={!!users.prev_page_url}
            links={users.links}
          />
        </div>
      )}
    </div>
  )
}
