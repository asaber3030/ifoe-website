import { getTrainingPeriods } from "@/actions/training-periods"

import { AdminPageTitle } from "@/components/dashboard/title"
import { EmptyState } from "@/components/app/empty-state"
import { CreateTrainingPeriodModal } from "@/components/dashboard/training-period/create-modal"
import { TrainingPeriodsTable } from "@/components/dashboard/training-period/table"

export default async function AdminSpaceRequiredPage() {
  const trainingPeriods = await getTrainingPeriods()

  return (
    <div>
      <AdminPageTitle title="فترات التدريب">
        <CreateTrainingPeriodModal />
      </AdminPageTitle>
      {trainingPeriods.length === 0 ? (
        <EmptyState />
      ) : (
        <TrainingPeriodsTable trainingPeriods={trainingPeriods} />
      )}
    </div>
  )
}
