import { UpdateFranchiseForm } from "@/components/dashboard/franchises/update-form"
import { AdminPageTitle } from "@/components/dashboard/title"

import { notFound } from "next/navigation"

import { getFranchise } from "@/actions/franchises"
import { getCategories } from "@/actions/categories"
import { getContractPeriods } from "@/actions/contract-periods"
import { getCountries } from "@/actions/countries"
import { getEquipmentCosts } from "@/actions/equipment-cost"
import { getFranchiseCharacteristics } from "@/actions/franchies-characteristics"
import { getSpaceRequireds } from "@/actions/space-required"
import { getTrainingPeriods } from "@/actions/training-periods"

type Props = {
  params: Promise<{
    franchiesId: string
  }>
}

export default async function UpdateFranchisePage({ params }: Props) {
  const franchiseId = +(await params).franchiesId
  const franchise = await getFranchise(franchiseId)
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
  if (!franchise.franchise) return notFound()

  return (
    <div className="space-y-4">
      <AdminPageTitle title="تعديل الخدمة" />
      <div className="max-w-2xl">
        <UpdateFranchiseForm
          franchise={franchise.franchise}
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
