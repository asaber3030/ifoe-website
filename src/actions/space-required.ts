"use server"

import { UnitSchema } from "@/lib/schema"
import { SpaceRequired } from "@/types"

import { API_URL } from "@/lib/constants"
import { adminRoutes } from "@/lib/routes"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function getSpaceRequireds(): Promise<SpaceRequired[]> {
  try {
    const res = await fetch(`${API_URL}/SpaceRequireds`)
    const data = await res.json()
    return data
  } catch (error) {
    return []
  }
}

export async function getSpaceRequired(spaceRequiredId: number) {
  const res = await fetch(`${API_URL}/SpaceRequireds/${spaceRequiredId}`)
  const data: SpaceRequired = await res.json()
  return {
    spaceRequired: data,
    status: res.status
  }
}

export async function createSpaceRequiredAction(data: z.infer<typeof UnitSchema.Create>) {
  const res = await fetch(`${API_URL}/SpaceRequireds`, {
    method: "POST",
    body: JSON.stringify({
      SpaceRequiredId: Math.floor(Math.random() * 10000000),
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

  revalidatePath(adminRoutes.spaceRequired.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح",
    response: resData
  }
}

export async function updateSpaceRequiredAction(
  spaceRequiredId: number,
  data: z.infer<typeof UnitSchema.Update>
) {
  const res = await fetch(`${API_URL}/SpaceRequireds/${spaceRequiredId}`, {
    method: "PUT",
    body: JSON.stringify({
      spaceRequiredId: spaceRequiredId,
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
  revalidatePath(adminRoutes.spaceRequired.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح"
  }
}

export async function deleteSpaceRequiredAction(spaceRequiredId: number) {
  const response = await fetch(`${API_URL}/SpaceRequireds/${spaceRequiredId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Id: spaceRequiredId
    })
  })
  revalidatePath(adminRoutes.spaceRequired.root)
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
