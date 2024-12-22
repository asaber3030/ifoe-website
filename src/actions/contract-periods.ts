"use server"

import { UnitCreateSchema, UnitSchema } from "@/lib/schema"
import { APIResponse, ContractPeriod } from "@/types"

import { API_URL } from "@/lib/constants"
import { adminRoutes } from "@/lib/routes"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { getAuthorizationToken } from "./app"
import { actionResponse, defaultHeaders } from "@/lib/utils"

export async function getContractPeriods(): Promise<ContractPeriod[]> {
  try {
    const res = await fetch(`${API_URL}/contract-periods`)
    const data: APIResponse<ContractPeriod[]> = await res.json()
    return data.data
  } catch (error) {
    return []
  }
}

export async function getContractPeriod(contractPeriodId: number) {
  const res = await fetch(`${API_URL}/contract-periods/${contractPeriodId}`)
  const data: APIResponse<ContractPeriod> = await res.json()
  return {
    contractPeriod: data,
    status: res.status
  }
}

export async function createContractPeriodAction(data: z.infer<typeof UnitCreateSchema.Create>) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/contract-periods`, {
      method: "POST",
      body: JSON.stringify({
        value: data.value,
        unit_id: data.unit_id
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.contractPeriod.root)

    const response = await res.json()
    return response
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateContractPeriodAction(
  contractPeriodId: number,
  data: z.infer<typeof UnitCreateSchema.Update>
) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/contract-periods/${contractPeriodId}`, {
      method: "PATCH",
      body: JSON.stringify({
        value: data.value,
        unit_id: data.unit_id
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.contractPeriod.root)

    const response = await res.json()
    return response
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteContractPeriodAction(contractPeriodId: number) {
  try {
    const token = await getAuthorizationToken()
    const response = await fetch(`${API_URL}/contract-periods/${contractPeriodId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.spaceRequired.root)
    const data = await response.json()

    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}
