import { AdminPageTitle } from "@/components/dashboard/title"
import { UpdateUserForm } from "@/components/dashboard/users/update-form"

export default function UpdateUserPage() {
  return (
    <div className="space-y-4">
      <AdminPageTitle title="تعديل المستخدم" />
      <div className="max-w-2xl">
        <UpdateUserForm user="" />
      </div>
    </div>
  )
}
