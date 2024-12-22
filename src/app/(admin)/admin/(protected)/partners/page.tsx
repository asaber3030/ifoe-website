import { AdminPageTitle } from "@/components/dashboard/title"
import { PartnersTable } from "@/components/dashboard/partners/table"
import { CreatePartnerModal } from "@/components/dashboard/partners/create-modal"
import { EmptyState } from "@/components/app/empty-state"

import { getPartners } from "@/actions/partners"

export default async function AdminPartnersPage() {
  const partners = await getPartners()

  return (
    <div>
      <AdminPageTitle title="الشركاء">
        <CreatePartnerModal />
      </AdminPageTitle>

      {!partners ? <EmptyState /> : <PartnersTable partners={partners} />}
    </div>
  )
}
