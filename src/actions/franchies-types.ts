"use server"

import { API_URL } from "@/lib/constants"

import { FranchiesTypeSchema } from "@/lib/schema"
import { APIResponse, FranchiseType } from "@/types"

import { actionResponse, defaultHeaders } from "@/lib/utils"
import { getAuthorizationToken } from "./app"
import { revalidatePath } from "next/cache"
import { adminRoutes } from "@/lib/routes"
import { z } from "zod"

export async function getFranchiseTypes(): Promise<FranchiseType[]> {
  try {
    const res = await fetch(`${API_URL}/franchise-types`)
    const data: APIResponse<FranchiseType[]> = await res.json()
    return data.data
  } catch (error) {
    return []
  }
}

export async function getFranchiseType(franchiseTypeId: number) {
  const res = await fetch(`${API_URL}/franchise-types/${franchiseTypeId}`)
  const data: APIResponse<FranchiseType> = await res.json()
  return {
    franchiseCharacteristics: data.data,
    status: res.status
  }
}

export async function createFranchiesTypeAction(
  values: z.infer<typeof FranchiesTypeSchema.Create>
) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchise-types`, {
      method: "POST",
      body: JSON.stringify({
        city_of_opening: values.cityOfOpening,
        franchise_type: values.franchiseType,
        confirmation: values.confirmation
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.franchiseTypes.root)
    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateFranchiesTypeAction(
  franchiseTypeId: number,
  values: z.infer<typeof FranchiesTypeSchema.Update>
) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchise-types/${franchiseTypeId}`, {
      method: "PATCH",
      body: JSON.stringify({
        city_of_opening: values.cityOfOpening,
        franchise_type: values.franchiseType,
        confirmation: values.confirmation
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })

    revalidatePath(adminRoutes.franchiseTypes.root)
    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteFranchiesTypeAction(franchiseTypeId: number) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchise-types/${franchiseTypeId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.franchiseTypes.root)
    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}
