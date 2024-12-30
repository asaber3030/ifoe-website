"use server"

import { UnitSchema } from "@/lib/schema"
import { APIResponse, Unit } from "@/types"
import { API_URL } from "@/lib/constants"

import { actionResponse, defaultHeaders } from "@/lib/utils"
import { getAuthorizationToken } from "./app"
import { revalidatePath } from "next/cache"
import { adminRoutes } from "@/lib/routes"
import { z } from "zod"

export async function getUnits(): Promise<Unit[]> {
  try {
    const res = await fetch(`${API_URL}/units`)
    const data: APIResponse<Unit[]> = await res.json()
    return data.data
  } catch (error) {
    return []
  }
}

export async function getUnit(unitId: number) {
  const res = await fetch(`${API_URL}/units/${unitId}`)
  const data: Unit = await res.json()
  return {
    country: data,
    status: res.status
  }
}

export async function createUnitAction(
  values: z.infer<typeof UnitSchema.Create>
): Promise<APIResponse<any>> {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/units`, {
      method: "POST",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      }),
      body: JSON.stringify({
        name: values.name
      })
    })

    if (!res.ok) return actionResponse("حدث خطأ ما", res.status)

    revalidatePath(adminRoutes.units.root)

    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateUnitAction(
  unitId: number,
  values: z.infer<typeof UnitSchema.Update>
): Promise<APIResponse<any>> {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/units/${unitId}`, {
      method: "PATCH",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      }),
      body: JSON.stringify({
        name: values.name
      })
    })

    if (!res.ok) return actionResponse("حدث خطأ ما", res.status)

    revalidatePath(adminRoutes.units.root)

    return actionResponse("تم تحديث البيانات بنجاح", res.status)
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteUnitAction(unitId: number) {
  try {
    const token = await getAuthorizationToken()

    const response = await fetch(`${API_URL}/units/${unitId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.units.root)
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
