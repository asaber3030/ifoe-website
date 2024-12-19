import { getCountries } from "@/actions/countries"

import { AdminPageTitle } from "@/components/dashboard/title"
import { CountriesTable } from "@/components/dashboard/countries/table"
import { CreateCountryModal } from "@/components/dashboard/countries/create-modal"

export default async function AdminCountriesPage() {
  const countries = await getCountries()

  return (
    <div>
      <AdminPageTitle title="الدول">
        <CreateCountryModal />
      </AdminPageTitle>

      <CountriesTable countries={countries} />
    </div>
  )
}
