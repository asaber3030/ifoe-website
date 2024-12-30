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
import { getUnits } from "@/actions/units"

type Props = {
  params: Promise<{
    franchiesId: string
  }>
}

export default async function UpdateFranchisePage({ params }: Props) {
  const franchiseId = +(await params).franchiesId
  const franchise = await getFranchise(franchiseId)
  const categoriesPromise = getCategories()
  const countriesPromise = getCountries()
  const unitsPromise = getUnits()

  const [categories, countries, units] = await Promise.all([
    categoriesPromise,
    countriesPromise,
    unitsPromise
  ])
  if (!franchise.franchise) return notFound()

  return (
    <div className="space-y-4">
      <AdminPageTitle title="تعديل الخدمة" />
      <div className="max-w-2xl">
        <UpdateFranchiseForm
          franchise={franchise.franchise}
          units={units}
          categories={categories!}
          countries={countries!}
        />
      </div>
    </div>
  )
}
