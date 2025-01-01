"use client"

import { Category, Country } from "@/types"

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectLabel,
  SelectGroup
} from "@/components/ui/select"
import { useRouter, useSearchParams } from "next/navigation"

import { build } from "search-params"

type Props = {
  categories: Category[]
  countries: Country[]
}

export const FranchiseFilters = ({ categories, countries }: Props) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const categoryId = searchParams.get("category")
  const countryId = searchParams.get("country")

  const handleCategoryChange = (value: string) => {
    const url = build({
      category: value,
      country: countryId
    })
    router.push(`?${url}#franchises-id`)
  }
  const handleCountryChange = (value: string) => {
    const url = build({
      category: categoryId,
      country: value
    })
    router.push(`?${url}#franchises-id`)
  }

  return (
    <div className='grid xl:grid-cols-2 grid-cols-1 gap-2'>
      <Select defaultValue={categoryId ?? ""} onValueChange={handleCategoryChange}>
        <SelectTrigger className='xl:min-w-[250px] w-full'>
          <SelectValue placeholder='اختار القسم' defaultValue={categoryId || ""} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>اختار القسم</SelectLabel>
            {categories.map((category) => (
              <SelectItem key={`select-category-${category.id}`} value={category.id.toString()}>
                {category.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select defaultValue={countryId ?? ""} onValueChange={handleCountryChange}>
        <SelectTrigger className='min-w-[250px]'>
          <SelectValue placeholder='اختار الدولة' defaultValue={countryId || ""} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>اختار الدولة</SelectLabel>
            {countries.map((country) => (
              <SelectItem key={`select-country-${country.id}`} value={country.id.toString()}>
                {country.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
