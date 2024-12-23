import { getCountries } from "@/actions/countries"
import { getFranchiseTypes } from "@/actions/franchies-types"
import { getFranchise } from "@/actions/franchises"
import { FrenchiseCard } from "@/components/app/franchises/card"
import { NewFranchiseRequestForm } from "@/components/app/franchises/new-franchise-request-form"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ franchiseId: string }>
}

export default async function NewFranchiseRequest({ params }: Props) {
  const franchiseId = +(await params).franchiseId
  const data = await getFranchise(franchiseId)
  const franchise = data.franchise
  const countriesPromise = await getCountries()
  const typesPromise = await getFranchiseTypes()

  const [countries, types] = await Promise.all([countriesPromise, typesPromise])

  if (isNaN(franchiseId) || !franchise) notFound()

  return (
    <div className="grid xl:grid-cols-7 grid-cols-1 gap-4 mx-auto container mt-10 pb-10">
      <div className="col-span-5">
        <h1 className="text-2xl font-bold mb-4">ارسال طلب امتياز جديد - {franchise.name}</h1>
        <NewFranchiseRequestForm franchiseId={franchiseId} countries={countries} types={types} />
      </div>
      <div className="col-span-2 pt-8">
        <FrenchiseCard franchise={franchise} />
      </div>
    </div>
  )
}
