import { getFranchiseCharacteristics } from "@/actions/franchies-characteristics"

import { CreateFranchiesCharacteristicModal } from "@/components/dashboard/franchies-characteristics/create-modal"
import { FranchiseCharacteristicsTable } from "@/components/dashboard/franchies-characteristics/table"
import { AdminPageTitle } from "@/components/dashboard/title"
import { EmptyState } from "@/components/app/empty-state"

export default async function AdminSpaceRequiredPage() {
  const franchiseCharacteristics = await getFranchiseCharacteristics()

  return (
    <div>
      <AdminPageTitle title="خصائص الخدمات">
        <CreateFranchiesCharacteristicModal />
      </AdminPageTitle>
      {franchiseCharacteristics.length === 0 ? (
        <EmptyState />
      ) : (
        <FranchiseCharacteristicsTable franchiseCharacteristics={franchiseCharacteristics} />
      )}
    </div>
  )
}
