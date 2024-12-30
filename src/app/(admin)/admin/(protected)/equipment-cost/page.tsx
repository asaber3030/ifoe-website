import { getEquipmentCosts } from "@/actions/equipment-cost"

import { AdminPageTitle } from "@/components/dashboard/title"
import { EquipmentCostsTable } from "@/components/dashboard/equipment-cost/table"
import { CreateEquipmentCostModal } from "@/components/dashboard/equipment-cost/create-modal"
import { EmptyState } from "@/components/app/empty-state"

export default async function AdminEquipmentCostsPage() {
  const equipmentCosts = await getEquipmentCosts()

  return (
    <div>
      <AdminPageTitle title="العملات">
        <CreateEquipmentCostModal />
      </AdminPageTitle>
      {equipmentCosts.length === 0 ? (
        <EmptyState />
      ) : (
        <EquipmentCostsTable equipmentCosts={equipmentCosts} />
      )}
    </div>
  )
}
