import LoadingFrancises from "./loading"
import React from "react"

import { type Metadata } from "next"

import { FrenchiseCard } from "@/components/app/franchises/card"
import { Button } from "@/components/ui/button"
import { FranchiseFilters } from "@/components/app/franchises/filters"
import { EmptyState } from "@/components/app/empty-state"
import { PaginateData } from "@/components/dashboard/pagination"

import { filterFranchises } from "@/actions/franchises"
import { getCategories } from "@/actions/categories"
import { getCountries } from "@/actions/countries"
import { FranchisesStartJourneyBox } from "@/components/app/franchises/start-journey-box"
import { FranchisesIntro } from "@/components/app/franchises/intro-section"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "الخدمات",
  description: "الخدمات"
}

type Props = {
  searchParams: Promise<{
    page: string
    category: string
    country: string
  }>
}

export default async function Franchises({ searchParams }: Props) {
  const page = (await searchParams).page
  const category = (await searchParams).category
  const country = (await searchParams).country

  const franchisesPromise = filterFranchises(page, category, country)
  const countriesPromise = getCountries()
  const categoriesPromise = getCategories()

  const [franchises, countries, categories] = await Promise.all([
    franchisesPromise,
    countriesPromise,
    categoriesPromise
  ])

  return (
    <main>
      <div className='p-10 xl:px-24' id='franchises-id'>
        <div className='mt-10'>
          <div className='flex justify-between flex-wrap mb-2'>
            <h1 className='text-blue-600 my-4'>الامتيازات</h1>
            {categories && countries && (
              <FranchiseFilters categories={categories} countries={countries} />
            )}
          </div>
          {franchises?.data.length === 0 ? (
            <EmptyState />
          ) : (
            <section className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
              {franchises?.data.map((franchise, i) => (
                <FrenchiseCard key={i} franchise={franchise} />
              ))}
            </section>
          )}
        </div>

        <div className='mt-4'>
          <PaginateData
            links={franchises?.links!}
            hasNextPage={!!franchises?.next_page_url}
            hasPreviousPage={!!franchises?.prev_page_url}
          />
        </div>
      </div>

      <FranchisesStartJourneyBox />
    </main>
  )
}
