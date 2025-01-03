import { getCountries } from "@/actions/countries"
import { getFranchiseTypes } from "@/actions/franchies-types"
import { getFranchise } from "@/actions/franchises"
import { FrenchiseCard } from "@/components/app/franchises/card"
import { NewFranchiseRequestForm } from "@/components/app/franchises/new-franchise-request-form"
import { notFound } from "next/navigation"
import FranchiseRequestLoading from "./loading"
import translate from "@/lib/translate"
import { getLanguage } from "@/actions/app"

type Props = {
  params: Promise<{ franchiseId: string }>
}

export default async function NewFranchiseRequest({ params }: Props) {
  const franchiseId = +(await params).franchiseId
  const data = getFranchise(franchiseId)
  const countriesPromise = getCountries()
  const typesPromise = getFranchiseTypes()
  const languagePromise = getLanguage()

  const [countries, types, franchiseData, language] = await Promise.all([
    countriesPromise,
    typesPromise,
    data,
    languagePromise
  ])

  const franchise = franchiseData.franchise

  if (isNaN(franchiseId) || !franchise) notFound()

  return (
    <div className='grid xl:grid-cols-7 grid-cols-1 gap-4 mx-auto container mt-10 pb-10 px-4'>
      <div className='xl:col-span-5 col-span-7'>
        <h1 className='text-2xl font-bold mb-4'>
          {translate("requestNewFranchise", language)} - {franchise.name}
        </h1>
        <NewFranchiseRequestForm franchiseId={franchiseId} countries={countries} types={types} />
      </div>
      <div className='xl:col-span-2 col-span-7 pt-8'>
        <FrenchiseCard franchise={franchise} />
      </div>
    </div>
  )
}
