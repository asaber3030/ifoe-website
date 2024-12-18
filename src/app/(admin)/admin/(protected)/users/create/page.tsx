import { AdminPageTitle } from "@/components/dashboard/title"
import { CreateUserForm } from "@/components/dashboard/users/create-form"

export default function CreateUserPage() {
  return (
    <div className="space-y-4">
      <AdminPageTitle title="انشاء مستخدم جديد" />
      <div className="max-w-2xl">
        <CreateUserForm />
      </div>
    </div>
  )
}
