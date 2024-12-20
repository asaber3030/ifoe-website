"use server"

import { UnitSchema } from "@/lib/schema"
import { ContractPeriod } from "@/types"

import { API_URL } from "@/lib/constants"
import { adminRoutes } from "@/lib/routes"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function getContractPeriods(): Promise<ContractPeriod[]> {
  try {
    const res = await fetch(`${API_URL}/ContractPeriods`)
    const data = await res.json()
    return data
  } catch (error) {
    return []
  }
}

export async function getContractPeriod(contractPeriodId: number) {
  const res = await fetch(`${API_URL}/ContractPeriods/${contractPeriodId}`)
  const data: ContractPeriod = await res.json()
  return {
    contractPeriod: data,
    status: res.status
  }
}

export async function createContractPeriodAction(data: z.infer<typeof UnitSchema.Create>) {
  const res = await fetch(`${API_URL}/ContractPeriods`, {
    method: "POST",
    body: JSON.stringify({
      ContractPeriodId: Math.floor(Math.random() * 10000000),
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

  revalidatePath(adminRoutes.contractPeriod.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح",
    response: resData
  }
}

export async function updateContractPeriodAction(
  contractPeriodId: number,
  data: z.infer<typeof UnitSchema.Update>
) {
  const res = await fetch(`${API_URL}/ContractPeriods/${contractPeriodId}`, {
    method: "PUT",
    body: JSON.stringify({
      ContractPeriodId: contractPeriodId,
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
  revalidatePath(adminRoutes.contractPeriod.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح"
  }
}

export async function deleteContractPeriodAction(contractPeriodId: number) {
  const response = await fetch(`${API_URL}/ContractPeriods/${contractPeriodId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Id: contractPeriodId
    })
  })
  revalidatePath(adminRoutes.contractPeriod.root)
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
