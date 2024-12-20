"use server"

import { UnitSchema } from "@/lib/schema"
import { TrainingPeriod } from "@/types"

import { API_URL } from "@/lib/constants"
import { adminRoutes } from "@/lib/routes"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function getTrainingPeriods(): Promise<TrainingPeriod[]> {
  try {
    const res = await fetch(`${API_URL}/TrainingPeriods`)
    const data = await res.json()
    return data
  } catch (error) {
    return []
  }
}

export async function getTrainingPeriod(TrainingPeriodId: number) {
  const res = await fetch(`${API_URL}/TrainingPeriods/${TrainingPeriodId}`)
  const data: TrainingPeriod = await res.json()
  return {
    trainingPeriod: data,
    status: res.status
  }
}

export async function createTrainingPeriodAction(data: z.infer<typeof UnitSchema.Create>) {
  const res = await fetch(`${API_URL}/TrainingPeriods`, {
    method: "POST",
    body: JSON.stringify({
      TrainingPeriodId: Math.floor(Math.random() * 10000000),
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

  revalidatePath(adminRoutes.trainingPeriod.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح",
    response: resData
  }
}

export async function updateTrainingPeriodAction(
  trainingPeriodId: number,
  data: z.infer<typeof UnitSchema.Update>
) {
  const res = await fetch(`${API_URL}/TrainingPeriods/${trainingPeriodId}`, {
    method: "PUT",
    body: JSON.stringify({
      TrainingPeriodId: trainingPeriodId,
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
  revalidatePath(adminRoutes.trainingPeriod.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح"
  }
}

export async function deleteTrainingPeriodAction(trainingPeriodId: number) {
  const response = await fetch(`${API_URL}/TrainingPeriods/${trainingPeriodId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Id: trainingPeriodId
    })
  })
  revalidatePath(adminRoutes.trainingPeriod.root)
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
