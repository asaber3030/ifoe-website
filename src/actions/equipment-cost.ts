"use server"

import { API_URL } from "@/lib/constants"
import { adminRoutes } from "@/lib/routes"
import { UnitSchema } from "@/lib/schema"
import { EquipmentCost } from "@/types"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function getEquipmentCosts(): Promise<EquipmentCost[]> {
  try {
    const res = await fetch(`${API_URL}/EquipmentCosts`)
    const data = await res.json()
    return data
  } catch (error) {
    return []
  }
}

export async function getEquipment(equipmentCostId: number) {
  const res = await fetch(`${API_URL}/EquipmentCosts/${equipmentCostId}`)
  const data: EquipmentCost = await res.json()
  return {
    equipmentCost: data,
    status: res.status
  }
}

export async function createEquipmentAction(data: z.infer<typeof UnitSchema.Create>) {
  const res = await fetch(`${API_URL}/EquipmentCosts`, {
    method: "POST",

    body: JSON.stringify({
      EquipmentCostId: Math.floor(Math.random() * 10000000),
      Unit: data.unit,
      Value: data.value
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

  revalidatePath(adminRoutes.equipmentCost.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح",
    response: resData
  }
}

export async function updateEquipmentAction(
  equipmentCostId: number,
  data: z.infer<typeof UnitSchema.Update>
) {
  const res = await fetch(`${API_URL}/EquipmentCosts/${equipmentCostId}`, {
    method: "PUT",
    body: JSON.stringify({
      EquipmentCostId: equipmentCostId,
      Unit: data.unit,
      Value: data.value
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
  revalidatePath(adminRoutes.equipmentCost.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح"
  }
}

export async function deleteEquipmentAction(equipmentCostId: number) {
  const response = await fetch(`${API_URL}/EquipmentCosts/${equipmentCostId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Id: equipmentCostId
    })
  })
  revalidatePath(adminRoutes.equipmentCost.root)
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
