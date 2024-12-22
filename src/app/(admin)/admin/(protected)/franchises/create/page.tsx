import { getCategories } from "@/actions/categories"
import { getContractPeriods } from "@/actions/contract-periods"
import { getCountries } from "@/actions/countries"
import { getEquipmentCosts } from "@/actions/equipment-cost"
import { getFranchiseCharacteristics } from "@/actions/franchies-characteristics"
import { getSpaceRequireds } from "@/actions/space-required"
import { getTrainingPeriods } from "@/actions/training-periods"
import { CreateFranchiseForm } from "@/components/dashboard/franchises/create-form"
import { AdminPageTitle } from "@/components/dashboard/title"

export default async function CreateFranchiesPage() {
  const equipmentsPromise = getEquipmentCosts()
  const categoriesPromise = getCategories()
  const countriesPromise = getCountries()
  const spacesPromise = getSpaceRequireds()
  const trainingsPromise = getTrainingPeriods()
  const characteristicsPromise = getFranchiseCharacteristics()
  const contractsPromise = getContractPeriods()

  const [equipments, categories, countries, spaces, trainings, characteristics, contracts] =
    await Promise.all([
      equipmentsPromise,
      categoriesPromise,
      countriesPromise,
      spacesPromise,
      trainingsPromise,
      characteristicsPromise,
      contractsPromise
    ])

  return (
    <div className="space-y-4">
      <AdminPageTitle title="انشاء خدمة" />
      <div className="max-w-2xl">
        <CreateFranchiseForm
          equipments={equipments!}
          categories={categories!}
          countries={countries!}
          spaces={spaces!}
          trainings={trainings!}
          characteristics={characteristics!}
          contracts={contracts!}
        />
      </div>
    </div>
  )
}
