import { AdminPageTitle } from "@/components/dashboard/title"
import { EmptyState } from "@/components/app/empty-state"
import { CreateFranchiseTypeModal } from "@/components/dashboard/franchies-types/create-modal"
import { FranchiseTypesTable } from "@/components/dashboard/franchies-types/table"

import { getFranchiseTypes } from "@/actions/franchies-types"

export default async function AdminSpaceRequiredPage() {
  const franchiseTypes = await getFranchiseTypes()

  return (
    <div>
      <AdminPageTitle title="خصائص الخدمات">
        <CreateFranchiseTypeModal />
      </AdminPageTitle>
      {!franchiseTypes ? <EmptyState /> : <FranchiseTypesTable franchiseTypes={franchiseTypes} />}
    </div>
  )
}
