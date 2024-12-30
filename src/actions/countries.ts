"use server"

import { CountrySchema } from "@/lib/schema"
import { APIResponse, Country } from "@/types"

import { API_URL } from "@/lib/constants"

import { revalidatePath } from "next/cache"
import { adminRoutes } from "@/lib/routes"
import { z } from "zod"
import { actionResponse, defaultHeaders } from "@/lib/utils"
import { getAuthorizationToken } from "./app"

export async function getCountries(): Promise<Country[]> {
  try {
    const res = await fetch(`${API_URL}/countries`)
    const data: APIResponse<Country[]> = await res.json()
    return data.data
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

export async function createCountryAction(
  values: z.infer<typeof CountrySchema.Create>
): Promise<APIResponse<any>> {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/countries`, {
      method: "POST",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      }),
      body: JSON.stringify({
        name: values.name
      })
    })

    if (!res.ok) return actionResponse("حدث خطأ ما", res.status)

    revalidatePath(adminRoutes.countries.root)

    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateCountryAction(
  countryId: number,
  values: z.infer<typeof CountrySchema.Update>
): Promise<APIResponse<any>> {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/countries/${countryId}`, {
      method: "PATCH",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      }),
      body: JSON.stringify({
        name: values.name
      })
    })

    if (!res.ok) return actionResponse("حدث خطأ ما", res.status)

    revalidatePath(adminRoutes.countries.root)

    return actionResponse("تم تحديث البيانات بنجاح", res.status)
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteCountryAction(countryId: number) {
  try {
    const token = await getAuthorizationToken()

    const response = await fetch(`${API_URL}/countries/${countryId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
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
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}
