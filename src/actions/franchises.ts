"use server"

import { API_URL } from "@/lib/constants"

import { FranchiseSchema } from "@/lib/schema"
import { APIResponse, Franchise, PaginatedData } from "@/types"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 as uuid } from "uuid"
import { storage } from "@/services/firebase"
import { actionResponse, defaultHeaders } from "@/lib/utils"
import { getAuthorizationToken } from "./app"
import { revalidatePath } from "next/cache"
import { adminRoutes } from "@/lib/routes"
import { z } from "zod"
import { getUser } from "./auth"
import { build } from "search-params"

export async function filterFranchises(
  page?: string,
  category?: string,
  country?: string
): Promise<PaginatedData<Franchise[]> | undefined> {
  try {
    const params = build({
      page,
      category,
      country
    })
    console.log({ params })
    const res = await fetch(`${API_URL}/franchises-filter?${params}`)
    const data: APIResponse<PaginatedData<Franchise[]>> = await res.json()
    return data.data
  } catch (error) {
    return undefined
  }
}

export async function getFranchises(): Promise<PaginatedData<Franchise[]> | undefined> {
  try {
    const res = await fetch(`${API_URL}/franchises`)
    const data: APIResponse<PaginatedData<Franchise[]>> = await res.json()
    return data.data
  } catch (error) {
    return undefined
  }
}

export async function getFranchise(franchiseId: number) {
  const res = await fetch(`${API_URL}/franchises/${franchiseId}`)
  const data: APIResponse<Franchise> = await res.json()
  return {
    franchise: data.data,
    status: res.status
  }
}

export async function createFranchiseAction(
  values: z.infer<typeof FranchiseSchema.Create>,
  file: File | null
) {
  try {
    const storageRef = ref(storage, `blogs/${uuid()}`)
    const uploaded = await uploadBytes(storageRef, file as any)
    const imageUrl = await getDownloadURL(storageRef)

    const user = await getUser()
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchises`, {
      method: "POST",
      body: JSON.stringify({
        ...values,
        added_by: user?.id,
        image_url: imageUrl
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

export async function updateFranchiseAction(
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
    const res = await fetch(`${API_URL}/franchises/${franchiseId}`, {
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
