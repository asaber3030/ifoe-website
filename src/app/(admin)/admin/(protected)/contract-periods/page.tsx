import { getContractPeriods } from "@/actions/contract-periods"

import { AdminPageTitle } from "@/components/dashboard/title"
import { EmptyState } from "@/components/app/empty-state"
import { CreateContractPeriodModal } from "@/components/dashboard/contract-period/create-modal"
import { ContractPeriodsTable } from "@/components/dashboard/contract-period/table"

export default async function AdminContractPeriodsPage() {
  const contractPeriods = await getContractPeriods()

  return (
    <div>
      <AdminPageTitle title="فترات العقود">
        <CreateContractPeriodModal />
      </AdminPageTitle>
      {contractPeriods.length === 0 ? (
        <EmptyState />
      ) : (
        <ContractPeriodsTable contractPeriods={contractPeriods} />
      )}
    </div>
  )
}
