"use server"

import { API_URL } from "@/lib/constants"

import { RequestHistorySchema } from "@/lib/schema"
import { APIResponse, RequestHistory } from "@/types"

import { actionResponse, defaultHeaders } from "@/lib/utils"
import { getAuthorizationToken } from "./app"
import { z } from "zod"
import { getUser } from "./auth"
import moment from "moment"

export async function createRequestHistoryAction(
  values: z.infer<typeof RequestHistorySchema.Create>
) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchise-requests-history`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateRequestHistoryAction(
  historyId: number,
  values: z.infer<typeof RequestHistorySchema.Update>
) {
  try {
    const token = await getAuthorizationToken()
    const user = await getUser()
    const res = await fetch(`${API_URL}/franchise-requests-history/${historyId}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...values,
        changed_by: user?.id,
        changed_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })

    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteRequestHistoryAction(historyId: number) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchise-requests-history/${historyId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}
