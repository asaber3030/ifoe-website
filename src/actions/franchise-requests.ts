"use server"

import { API_URL } from "@/lib/constants"

import { FranchiseRequestSchema, FranchiseSchema } from "@/lib/schema"
import { APIResponse, Franchise, FranchiseRequest, RequestHistory } from "@/types"

import { actionResponse, defaultHeaders } from "@/lib/utils"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 as uuid } from "uuid"
import { storage } from "@/services/firebase"
import { getAuthorizationToken } from "./app"
import { revalidatePath } from "next/cache"
import { adminRoutes } from "@/lib/routes"
import { getUser } from "./auth"
import { z } from "zod"

export async function getFranchiseRequestsOfFranchise(
  franchiseId: number
): Promise<FranchiseRequest[]> {
  try {
    const res = await fetch(`${API_URL}/franchises/${franchiseId}/requests`)
    const data: APIResponse<FranchiseRequest[]> = await res.json()
    return data.data
  } catch (error) {
    return []
  }
}

export async function getRequestHistory(
  franchiseId: number,
  requestId: number
): Promise<RequestHistory[]> {
  try {
    const res = await fetch(`${API_URL}/franchises/${franchiseId}/requests/${requestId}`)
    const data: APIResponse<RequestHistory[]> = await res.json()
    return data.data
  } catch (error) {
    return []
  }
}

export async function getFranchiseRequest(requestId: number) {
  const res = await fetch(`${API_URL}/franchise-requests/${requestId}`)
  const data: APIResponse<FranchiseRequest> = await res.json()
  return {
    request: data.data,
    status: res.status
  }
}
export async function getFranchiseRequestHistory(requestId: number) {
  const res = await fetch(`${API_URL}/franchise-requests/${requestId}/history`)
  const data: APIResponse<RequestHistory[]> = await res.json()
  return data.data
}

export async function getCurrentUserFranchiseRequest() {
  const user = await getUser()
  const res = await fetch(`${API_URL}/users/${user?.id}/requests`)
  const data: APIResponse<FranchiseRequest[]> = await res.json()
  return data.data
}

export async function createFranchiseRequestAction(
  values: z.infer<typeof FranchiseRequestSchema.Create>,
  franchiseId: number
) {
  try {
    const user = await getUser()
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchise-requests`, {
      method: "POST",
      body: JSON.stringify({
        ...values,
        user_id: user?.id,
        franchise_id: franchiseId,
        status: "Pending"
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.franchises.root)
    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateFranchiseRequestAction(
  franchiseId: number,
  values: z.infer<typeof FranchiseSchema.Update>,
  defaultImageUrl: string,
  file: File | null
) {
  try {
    let imageUrl = defaultImageUrl

    if (file) {
      const storageRef = ref(storage, `blogs/${uuid()}`)
      const uploaded = await uploadBytes(storageRef, file as any)
      imageUrl = await getDownloadURL(storageRef)
    }

    const user = await getUser()

    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchise-requests/${franchiseId}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...values,
        image_url: imageUrl,
        added_by: user?.id
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })

    revalidatePath(adminRoutes.franchises.root)
    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteFranchiseAction(franchiseId: number) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchises/${franchiseId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.franchises.root)
    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}
