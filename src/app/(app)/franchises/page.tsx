import React from "react"

import { type Metadata } from "next"

import { FrenchiseCard } from "@/components/app/franchises/card"
import { Button } from "@/components/ui/button"
import { FranchiseFilters } from "@/components/app/franchises/filters"
import { EmptyState } from "@/components/app/empty-state"
import { PaginateData } from "@/components/dashboard/pagination"
import { LastAddedBlog } from "@/components/app/blogs/last-added"

import { filterFranchises } from "@/actions/franchises"
import { getCategories } from "@/actions/categories"
import { getCountries } from "@/actions/countries"
import { getLastAddedBlog } from "@/actions/blogs"

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
  const lastAddedBlogPromise = getLastAddedBlog()

  const [franchises, countries, categories, lastAddedBlog] = await Promise.all([
    franchisesPromise,
    countriesPromise,
    categoriesPromise,
    lastAddedBlogPromise
  ])

  return (
    <main>
      <section
        className="relative md:h-screen h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full px-14 text-white pt-[150px]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            أهلاً بكم في معرض فرص الامتياز التجاري الدولي
          </h1>
          <p className="text-sm sm:text-lg lg:text-2xl mb-6 leading-relaxed max-w-2xl">
            حلول مبتكرة تلبي احتياجات عملائنا
          </p>
          <Button variant="outline" className="bg-transparent rounded-3xl">
            تواصل معنا
          </Button>
        </div>
      </section>

      <LastAddedBlog blog={lastAddedBlog} />

      <div className="p-10 xl:px-24" id="franchises-id">
        <div>
          <div className="flex justify-between flex-wrap">
            <h1 className="text-blue-600 my-4 mb-10">الامتيازات</h1>
            {categories && countries && (
              <FranchiseFilters categories={categories} countries={countries} />
            )}
          </div>
          {franchises?.data.length === 0 ? (
            <EmptyState />
          ) : (
            <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {franchises?.data.map((franchise, i) => (
                <FrenchiseCard key={i} franchise={franchise} />
              ))}
            </section>
          )}
        </div>

        <div className="mt-4">
          <PaginateData
            links={franchises?.links!}
            hasNextPage={!!franchises?.next_page_url}
            hasPreviousPage={!!franchises?.prev_page_url}
          />
        </div>
      </div>

      <div className="m-10 xl:mx-24 bg-blue-600 rounded-[100px] grid xl:grid-cols-3 justify-between items-center xl:p-20 p-10 gap-20">
        <div className="xl:col-span-2">
          <h1 className="text-white my-4">ابدا رحلتك نحو النجاح الان!</h1>
          <p className="mt-8 font-normal text-gray-200">
            انا كنت طالبة اوردر من نون يوم ١١ نوفمبر ومدفوع كامل والمفروض كان يوصل في خلال يومين
            استلمت منتج واحد فقط والباقي كان مع مندوب تاني المندوب فعلا كلمني بس الساعة ١٢.٣٠ بليل
            وفضل يبعت على الواتساب انا مردتش مخدتش بالي ومتوقعتش طبعا اني ممكن استلم بعد الساعة ١٠
          </p>
        </div>
        <div className="xl:col-span-1 flex justify-end">
          <Button
            className="rounded-3xl text-white w-[250px] bg-transparent border-white hover:bg-transparent hover:text-white"
            variant="outline"
          >
            ابدأ الان
          </Button>
        </div>
      </div>
    </main>
  )
}
