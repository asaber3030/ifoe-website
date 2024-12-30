import { getCategories } from "@/actions/categories"
import { getCountries } from "@/actions/countries"
import { getUnits } from "@/actions/units"
import { CreateFranchiseForm } from "@/components/dashboard/franchises/create-form"
import { AdminPageTitle } from "@/components/dashboard/title"
import LoadingCreate from "./loading"

export default async function CreateFranchiesPage() {
  const categoriesPromise = getCategories()
  const countriesPromise = getCountries()
  const unitsPromise = await getUnits()

  const [categories, countries, units] = await Promise.all([
    categoriesPromise,
    countriesPromise,
    unitsPromise
  ])

  return (
    <div className="space-y-4">
      <AdminPageTitle title="انشاء خدمة" />
      <div className="max-w-2xl">
        <CreateFranchiseForm categories={categories!} countries={countries!} units={units} />
      </div>
    </div>
  )
}
