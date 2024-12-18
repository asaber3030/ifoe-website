import { CreatePartnerForm } from "@/components/dashboard/partners/create-form"
import { AdminPageTitle } from "@/components/dashboard/title"

export default function CreatePartnerPage() {
  return (
    <div className="space-y-4">
      <AdminPageTitle title="انشاء شريك" />
      <div className="max-w-2xl">
        <CreatePartnerForm />
      </div>
    </div>
  )
}
