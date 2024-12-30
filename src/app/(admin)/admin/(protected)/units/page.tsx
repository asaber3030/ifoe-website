import { getUnits } from "@/actions/units"

import { AdminPageTitle } from "@/components/dashboard/title"
import { EmptyState } from "@/components/app/empty-state"
import { CreateUnitModal } from "@/components/dashboard/units/create-modal"
import { UnitsTable } from "@/components/dashboard/units/table"

export default async function AdminUnitsPage() {
  const units = await getUnits()

  return (
    <div>
      <AdminPageTitle title="الوحدات">
        <CreateUnitModal />
      </AdminPageTitle>

      {!units ? <EmptyState /> : <UnitsTable units={units} />}
    </div>
  )
}
