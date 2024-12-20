"use server"

import { CountrySchema } from "@/lib/schema"
import { Country } from "@/types"

import { API_URL } from "@/lib/constants"

import { revalidatePath } from "next/cache"
import { adminRoutes } from "@/lib/routes"
import { z } from "zod"

export async function getCountries(): Promise<Country[]> {
  try {
    const res = await fetch(`${API_URL}/Countries`)
    const data = await res.json()
    return data
  } catch (error) {
    return []
  }
}

export async function getCountry(countryId: number) {
  const res = await fetch(`${API_URL}/Countries/${countryId}`)
  const data: Country = await res.json()
  return {
    country: data,
    status: res.status
  }
}

export async function createCountryAction(data: z.infer<typeof CountrySchema.Create>) {
  const res = await fetch(`${API_URL}/Countries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      CountryId: Math.floor(Math.random() * 10000000),
      CountryName: data.countryName
    })
  })

  const resData = await res.json()
  console.log(resData)

  if (!res.ok) {
    return {
      status: res.status,
      message: "حدث خطأ ما",
      response: resData
    }
  }

  revalidatePath(adminRoutes.countries.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح",
    response: resData
  }
}

export async function updateCountryAction(
  countryId: number,
  data: z.infer<typeof CountrySchema.Update>
) {
  const res = await fetch(`${API_URL}/Countries/${countryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      CountryId: countryId,
      CountryName: data.countryName
    })
  })

  if (!res.ok) {
    return {
      status: res.status,
      message: "حدث خطأ ما"
    }
  }
  revalidatePath(adminRoutes.countries.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح"
  }
}

export async function deleteCountryAction(countryId: number) {
  const response = await fetch(`${API_URL}/Countries/${countryId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Id: countryId
    })
  })
  revalidatePath(adminRoutes.countries.root)
  const data = await response.json()

  if (!response.ok) {
    return {
      status: response.status,
      message: data?.title || "حدث خطأ ما"
    }
  }

  return {
    status: response.status,
    message: "تم حذف الشريك بنجاح"
  }
}
