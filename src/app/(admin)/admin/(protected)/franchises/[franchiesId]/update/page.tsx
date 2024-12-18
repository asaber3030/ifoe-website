import { UpdateFranchiseForm } from "@/components/dashboard/franchises/update-form"
import { AdminPageTitle } from "@/components/dashboard/title"

export default function UpdateFranchisePage() {
  return (
    <div className="space-y-4">
      <AdminPageTitle title="تعديل الخدمة" />
      <div className="max-w-2xl">
        <UpdateFranchiseForm franchise="" />
      </div>
    </div>
  )
}
