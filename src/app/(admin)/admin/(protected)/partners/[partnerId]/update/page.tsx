import { UpdatePartnerForm } from "@/components/dashboard/partners/update-form"
import { AdminPageTitle } from "@/components/dashboard/title"

export default function UpdatePartnerPage() {
  return (
    <div className="space-y-4">
      <AdminPageTitle title="تعديل بيانات الشريك" />
      <div className="max-w-2xl">
        <UpdatePartnerForm partner="" />
      </div>
    </div>
  )
}
