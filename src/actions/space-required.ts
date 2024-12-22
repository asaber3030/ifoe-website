"use server"

import { UnitCreateSchema } from "@/lib/schema"
import { APIResponse, SpaceRequired } from "@/types"

import { API_URL } from "@/lib/constants"
import { adminRoutes } from "@/lib/routes"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { getAuthorizationToken } from "./app"
import { actionResponse, defaultHeaders } from "@/lib/utils"

export async function getSpaceRequireds(): Promise<SpaceRequired[]> {
  try {
    const res = await fetch(`${API_URL}/spaces-required`)
    const data: APIResponse<SpaceRequired[]> = await res.json()
    return data.data
  } catch (error) {
    return []
  }
}

export async function getSpaceRequired(spaceRequiredId: number) {
  const res = await fetch(`${API_URL}/spaces-required/${spaceRequiredId}`)
  const data: APIResponse<SpaceRequired> = await res.json()
  return {
    spaceRequired: data,
    status: res.status
  }
}

export async function createSpaceRequiredAction(data: z.infer<typeof UnitCreateSchema.Create>) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/spaces-required`, {
      method: "POST",
      body: JSON.stringify({
        value: data.value,
        unit_id: data.unit_id
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.spaceRequired.root)

    const response = await res.json()
    return response
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateSpaceRequiredAction(
  spaceRequiredId: number,
  data: z.infer<typeof UnitCreateSchema.Update>
) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/spaces-required/${spaceRequiredId}`, {
      method: "PATCH",
      body: JSON.stringify({
        value: data.value,
        unit_id: data.unit_id
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.spaceRequired.root)

    const response = await res.json()
    return response
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteSpaceRequiredAction(spaceRequiredId: number) {
  try {
    const token = await getAuthorizationToken()
    const response = await fetch(`${API_URL}/spaces-required/${spaceRequiredId}`, {
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
