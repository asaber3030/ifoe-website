"use server"

import { API_URL } from "@/lib/constants"

import { FranchiesCharacteristicsSchema } from "@/lib/schema"
import { APIResponse, FranchiseCharacteristics } from "@/types"

import { actionResponse, defaultHeaders } from "@/lib/utils"
import { getAuthorizationToken } from "./app"
import { revalidatePath } from "next/cache"
import { adminRoutes } from "@/lib/routes"
import { z } from "zod"

export async function getFranchiseCharacteristics(): Promise<FranchiseCharacteristics[]> {
  try {
    const res = await fetch(`${API_URL}/franchise-characteristics`)
    const data: APIResponse<FranchiseCharacteristics[]> = await res.json()
    return data.data
  } catch (error) {
    return []
  }
}

export async function getFranchiseCharacteristic(franchiseCharacteristicsId: number) {
  const res = await fetch(`${API_URL}/franchise-characteristics/${franchiseCharacteristicsId}`)
  const data: APIResponse<FranchiseCharacteristics> = await res.json()
  return {
    franchiseCharacteristics: data.data,
    status: res.status
  }
}

export async function createFranchiesCharacteristicAction(
  values: z.infer<typeof FranchiesCharacteristicsSchema.Create>
) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchise-characteristics`, {
      method: "POST",
      body: JSON.stringify({
        franchise_fees: values.franchiseFees,
        royalty_fees: values.royaltyFees,
        marketing_fees: values.marketingFees,
        investments_cost: values.investmentsCost
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.franchiseCharacteristics.root)
    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateFranchiesCharacteristicAction(
  franchiseCharacteristicsId: number,
  values: z.infer<typeof FranchiesCharacteristicsSchema.Update>
) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchise-characteristics/${franchiseCharacteristicsId}`, {
      method: "PATCH",
      body: JSON.stringify({
        franchise_fees: values.franchiseFees,
        royalty_fees: values.royaltyFees,
        marketing_fees: values.marketingFees,
        investments_cost: values.investmentsCost
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })

    revalidatePath(adminRoutes.franchiseCharacteristics.root)
    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteFranchiesCharacteristicAction(franchiseCharacteristicsId: number) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchise-characteristics/${franchiseCharacteristicsId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.franchiseCharacteristics.root)
    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}
