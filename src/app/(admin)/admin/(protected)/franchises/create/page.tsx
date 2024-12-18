import { CreateFranchiseForm } from "@/components/dashboard/franchises/create-form"
import { AdminPageTitle } from "@/components/dashboard/title"

export default function CreateFranchiesPage() {
  return (
    <div className="space-y-4">
      <AdminPageTitle title="انشاء خدمة" />
      <div className="max-w-2xl">
        <CreateFranchiseForm />
      </div>
    </div>
  )
}
