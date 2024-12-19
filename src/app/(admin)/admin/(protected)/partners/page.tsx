import { AdminPageTitle } from "@/components/dashboard/title"
import { PartnersTable } from "@/components/dashboard/partners/table"
import { CreatePartnerModal } from "@/components/dashboard/partners/create-modal"

import { getPartners } from "@/actions/partners"

export default async function AdminPartnersPage() {
  const partners = await getPartners()

  return (
    <div>
      <AdminPageTitle title="الشركاء">
        <CreatePartnerModal />
      </AdminPageTitle>

      <PartnersTable partners={partners} />
    </div>
  )
}
