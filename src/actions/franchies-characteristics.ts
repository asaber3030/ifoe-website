"use server"

import { FranchiesCharacteristicsSchema } from "@/lib/schema"
import { FranchiseCharacteristics } from "@/types"

import { API_URL } from "@/lib/constants"
import { adminRoutes } from "@/lib/routes"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function getFranchiseCharacteristics(): Promise<FranchiseCharacteristics[]> {
  try {
    const res = await fetch(`${API_URL}/FranchiseCharacteristics`)
    const data = await res.json()
    return data
  } catch (error) {
    return []
  }
}

export async function getFranchiseCharacteristic(franchiseCharacteristicsId: number) {
  const res = await fetch(`${API_URL}/FranchiseCharacteristics/${franchiseCharacteristicsId}`)
  const data: FranchiseCharacteristics = await res.json()
  return {
    franchiseCharacteristics: data,
    status: res.status
  }
}

export async function createFranchiesCharacteristicAction(
  data: z.infer<typeof FranchiesCharacteristicsSchema.Create>
) {
  const res = await fetch(`${API_URL}/FranchiseCharacteristics`, {
    method: "POST",
    body: JSON.stringify({
      FranchiseCharacteristicsId: Math.floor(Math.random() * 10000000),
      FranchiseFees: data.franchiseFees,
      RoyaltyFees: data.royaltyFees,
      MarketingFees: data.marketingFees,
      InvestmentsCost: data.investmentsCost
    }),
    headers: {
      "Content-Type": "application/json"
    }
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

  revalidatePath(adminRoutes.franchiseCharacteristics.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح",
    response: resData
  }
}

export async function updateFranchiesCharacteristicAction(
  franchiseCharacteristicsId: number,
  data: z.infer<typeof FranchiesCharacteristicsSchema.Update>
) {
  const res = await fetch(`${API_URL}/FranchiseCharacteristics/${franchiseCharacteristicsId}`, {
    method: "PUT",
    body: JSON.stringify({
      FranchiseCharacteristicsId: franchiseCharacteristicsId,
      FranchiseFees: data.franchiseFees,
      RoyaltyFees: data.royaltyFees,
      MarketingFees: data.marketingFees,
      InvestmentsCost: data.investmentsCost
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (!res.ok) {
    return {
      status: res.status,
      message: "حدث خطأ ما"
    }
  }
  revalidatePath(adminRoutes.franchiseCharacteristics.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح"
  }
}

export async function deleteFranchiesCharacteristicAction(franchiseCharacteristicsId: number) {
  const response = await fetch(
    `${API_URL}/FranchiseCharacteristics/${franchiseCharacteristicsId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Id: franchiseCharacteristicsId
      })
    }
  )
  revalidatePath(adminRoutes.franchiseCharacteristics.root)
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
