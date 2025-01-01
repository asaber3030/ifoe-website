"use server"

import { API_URL } from "@/lib/constants"

import { FranchiseSchema } from "@/lib/schema"
import { APIResponse, Franchise, FranchiseImage, PaginatedData } from "@/types"
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

export async function test() {}

export async function filterFranchises(
  page?: string,
  category?: string,
  country?: string
): Promise<PaginatedData<Franchise[]>> {
  const params = build({
    page,
    category,
    country
  })
  const res = await fetch(`${API_URL}/franchises-filter?${params}`)
  const data: APIResponse<PaginatedData<Franchise[]>> = await res.json()
  return data.data
}

export async function getFranchises(): Promise<PaginatedData<Franchise[]>> {
  const res = await fetch(`${API_URL}/franchises`)
  const data: APIResponse<PaginatedData<Franchise[]>> = await res.json()
  return data.data
}

export async function getFranchise(franchiseId: number) {
  try {
    const res = await fetch(`${API_URL}/franchises/${franchiseId}`)
    const data: APIResponse<Franchise> = await res.json()
    return {
      franchise: data.data,
      status: res.status
    }
  } catch (error) {
    return {
      franchise: null,
      status: 500
    }
  }
}

export async function createFranchiseAction(
  values: z.infer<typeof FranchiseSchema.Create>,
  file: File | null,
  video: File | null
) {
  try {
    const storageRef = ref(storage, `blogs/${uuid()}`)
    const uploaded = await uploadBytes(storageRef, file as any)
    const imageUrl = await getDownloadURL(storageRef)

    const storageVideosRef = ref(storage, `franchises/videos/${uuid()}`)
    const uploadedVideo = await uploadBytes(storageVideosRef, video as any)
    const videoUrl = await getDownloadURL(storageVideosRef)

    const user = await getUser()
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchises`, {
      method: "POST",
      body: JSON.stringify({
        ...values,
        added_by: user?.id,
        image_url: imageUrl,
        video_url: videoUrl
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
  defaultVideoUrl: string,
  file: File | null,
  video: File | null
) {
  try {
    let imageUrl = defaultImageUrl
    let videoUrl = defaultVideoUrl

    if (file) {
      const storageRef = ref(storage, `franchises/videos/${uuid()}`)
      const uploaded = await uploadBytes(storageRef, file as any)
      imageUrl = await getDownloadURL(storageRef)
    }

    if (video) {
      const storageVideoRef = ref(storage, `franchises/videos/${uuid()}`)
      const uploaded = await uploadBytes(storageVideoRef, video as any)
      videoUrl = await getDownloadURL(storageVideoRef)
    }

    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchises/${franchiseId}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...values,
        image_url: imageUrl,
        video_url: videoUrl
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

export async function getFranchiseImages(franchiseId: number): Promise<FranchiseImage[]> {
  try {
    const res = await fetch(`${API_URL}/franchises/${franchiseId}/images`)
    const data: APIResponse<FranchiseImage[]> = await res.json()
    return data.data
  } catch (error) {
    return []
  }
}

export async function createFranchiseImageAction(franchiseId: number, file: File | null) {
  try {
    const storageRef = ref(storage, `franchises/${uuid()}`)
    const uploaded = await uploadBytes(storageRef, file as any)
    const imageUrl = await getDownloadURL(storageRef)

    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchise-images`, {
      method: "POST",
      body: JSON.stringify({
        image_url: imageUrl,
        franchise_id: franchiseId
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.franchises.images(franchiseId))
    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateFranchiseImageAction(
  franchiseId: number,
  imageId: number,
  file: File | null
) {
  try {
    const storageRef = ref(storage, `franchises/${uuid()}`)
    const uploaded = await uploadBytes(storageRef, file as any)
    const imageUrl = await getDownloadURL(storageRef)

    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchises/${franchiseId}/images/${imageId}`, {
      method: "PATCH",
      body: JSON.stringify({
        image_url: imageUrl
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.franchises.images(franchiseId))
    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteFranchiseImageAction(imageId: number) {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/franchise-images/${imageId}`, {
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
