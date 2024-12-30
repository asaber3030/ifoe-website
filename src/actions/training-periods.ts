"use server"

import { UnitCreateSchema } from "@/lib/schema"
import { APIResponse, TrainingPeriod } from "@/types"

import { API_URL } from "@/lib/constants"
import { adminRoutes } from "@/lib/routes"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { defaultHead } from "next/head"
import { actionResponse, defaultHeaders } from "@/lib/utils"
import { getAuthorizationToken } from "./app"

export async function getTrainingPeriods(): Promise<TrainingPeriod[]> {
  try {
    const res = await fetch(`${API_URL}/training-periods`)
    const data: APIResponse<TrainingPeriod[]> = await res.json()
    return data.data
  } catch (error) {
    return []
  }
}

export async function getTrainingPeriod(trainingPeriodId: number) {
  const res = await fetch(`${API_URL}/training-periods/${trainingPeriodId}`)
  const data: APIResponse<TrainingPeriod> = await res.json()
  return {
    trainingPeriod: data.data,
    status: res.status
  }
}

export async function createTrainingPeriodAction(data: z.infer<typeof UnitCreateSchema.Create>) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/training-periods`, {
      method: "POST",
      body: JSON.stringify({
        value: data.value,
        unit_id: data.unit_id
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.trainingPeriod.root)

    const response = await res.json()
    return response
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateTrainingPeriodAction(
  trainingPeriodId: number,
  data: z.infer<typeof UnitCreateSchema.Update>
) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/training-periods/${trainingPeriodId}`, {
      method: "PATCH",
      body: JSON.stringify({
        value: data.value,
        unit_id: data.unit_id
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.trainingPeriod.root)

    const response = await res.json()
    return response
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteTrainingPeriodAction(trainingPeriodId: number) {
  try {
    const token = await getAuthorizationToken()
    const response = await fetch(`${API_URL}/training-periods/${trainingPeriodId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.trainingPeriod.root)
    const data = await response.json()

    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}
