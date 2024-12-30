"use server"

import { API_URL } from "@/lib/constants"
import { adminRoutes } from "@/lib/routes"
import { UnitCreateSchema } from "@/lib/schema"
import { APIResponse, EquipmentCost } from "@/types"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { getAuthorizationToken } from "./app"
import { actionResponse, defaultHeaders } from "@/lib/utils"

export async function getEquipmentCosts(): Promise<EquipmentCost[]> {
  try {
    const res = await fetch(`${API_URL}/equipments-cost`)
    const data: APIResponse<EquipmentCost[]> = await res.json()
    return data.data
  } catch (error) {
    return []
  }
}

export async function getEquipment(equipmentCostId: number) {
  const res = await fetch(`${API_URL}/equipments-cost/${equipmentCostId}`)
  const data: APIResponse<EquipmentCost> = await res.json()
  return {
    equipmentCost: data,
    status: res.status
  }
}

export async function createEquipmentAction(data: z.infer<typeof UnitCreateSchema.Create>) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/equipments-cost`, {
      method: "POST",
      body: JSON.stringify({
        value: data.value,
        unit_id: data.unit_id
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.equipmentCost.root)

    const response = await res.json()
    return response
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateEquipmentAction(
  equipmentCostId: number,
  data: z.infer<typeof UnitCreateSchema.Update>
) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/equipments-cost/${equipmentCostId}`, {
      method: "PATCH",
      body: JSON.stringify({
        value: data.value,
        unit_id: data.unit_id
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.equipmentCost.root)

    const response = await res.json()
    return response
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteEquipmentAction(equipmentCostId: number) {
  try {
    const token = await getAuthorizationToken()
    const response = await fetch(`${API_URL}/equipments-cost/${equipmentCostId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.equipmentCost.root)
    const data = await response.json()

    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}
