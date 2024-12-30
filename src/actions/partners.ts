"use server"

import { PartnerSchema } from "@/lib/schema"
import { APIResponse, Partner } from "@/types"

import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { revalidatePath } from "next/cache"
import { adminRoutes } from "@/lib/routes"
import { storage } from "@/services/firebase"
import { v4 as uuid } from "uuid"
import { z } from "zod"

import { API_URL } from "@/lib/constants"
import { actionResponse, defaultHeaders } from "@/lib/utils"
import { getAuthorizationToken } from "./app"

export async function getPartners(): Promise<Partner[]> {
  try {
    const res = await fetch(`${API_URL}/partners`)
    const data: APIResponse<Partner[]> = await res.json()
    return data.data
  } catch (error) {
    return []
  }
}

export async function getPartner(partnerId: number) {
  const res = await fetch(`${API_URL}/partners/${partnerId}`)
  const data: APIResponse<Partner> = await res.json()
  return {
    partner: data.data,
    status: res.status
  }
}

export async function createPartnerAction(
  data: z.infer<typeof PartnerSchema.Create>,
  file: File | null
) {
  try {
    const storageRef = ref(storage, `partners/${uuid()}`)
    const uploaded = await uploadBytes(storageRef, file as any)
    const imageUrl = await getDownloadURL(storageRef)
    const token = await getAuthorizationToken()

    const response = await fetch(`${API_URL}/partners`, {
      method: "POST",
      body: JSON.stringify({
        image_url: imageUrl
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.partners.root)
    const responseData: APIResponse<any> = await response.json()
    return responseData
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updatePartnerAction(
  partnerId: number,
  defaultImageUrl: string,
  data: z.infer<typeof PartnerSchema.Update>,
  file: File | null
) {
  try {
    let imageUrl = defaultImageUrl
    if (file) {
      const storageRef = ref(storage, `partners/${uuid()}`)
      const uploaded = await uploadBytes(storageRef, file as any)
      imageUrl = await getDownloadURL(storageRef)
    }

    const token = await getAuthorizationToken()

    const response = await fetch(`${API_URL}/partners/${partnerId}`, {
      method: "PATCH",
      body: JSON.stringify({
        image_url: imageUrl
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.partners.root)
    const responseData: APIResponse<any> = await response.json()
    return responseData
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deletePartnerAction(partnerId: number) {
  try {
    const response = await fetch(`${API_URL}/partners/${partnerId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${await getAuthorizationToken()}`
      })
    })
    revalidatePath(adminRoutes.partners.root)
    const data: APIResponse<any> = await response.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}
