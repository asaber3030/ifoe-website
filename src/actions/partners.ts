"use server"

import { API_URL } from "@/lib/constants"
import { adminRoutes } from "@/lib/routes"
import { PartnerSchema } from "@/lib/schema"
import { Partner } from "@/types"
import { revalidatePath } from "next/cache"
import { z } from "zod"

import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "@/services/firebase"

export async function getPartners(): Promise<Partner[]> {
  try {
    const res = await fetch(`${API_URL}/Partners`)
    const data = await res.json()
    return data
  } catch (error) {
    return []
  }
}

export async function getPartner(partnerId: number) {
  const res = await fetch(`${API_URL}/Partners/${partnerId}`)
  const data: Partner = await res.json()
  return {
    partner: data,
    status: res.status
  }
}

export async function createPartnerAction(
  data: z.infer<typeof PartnerSchema.Create>,
  file: File | null
) {
  const storageRef = ref(storage, `partners/${uuid()}`)
  const uploaded = await uploadBytes(storageRef, file as any)
  const imageUrl = await getDownloadURL(storageRef)

  const response = await fetch(`${API_URL}/Partners`, {
    method: "POST",
    body: JSON.stringify({
      id: Math.floor(Math.random() * 1000000),
      Name: data.name,
      ImageUrl: imageUrl
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  const responseData = await response.json()

  if (!response.ok) {
    return {
      status: response.status,
      message: responseData?.title || "حدث خطأ ما",
      response: responseData
    }
  }
  revalidatePath(adminRoutes.partners.root)
  return {
    status: response.status,
    message: "تم تحديث البيانات بنجاح",
    response: responseData
  }
}

export async function updatePartnerAction(
  partnerId: number,
  defaultImageUrl: string,
  data: z.infer<typeof PartnerSchema.Update>,
  file: File | null
) {
  let imageUrl = defaultImageUrl
  if (file) {
    const storageRef = ref(storage, `partners/${uuid()}`)
    const uploaded = await uploadBytes(storageRef, file as any)
    imageUrl = await getDownloadURL(storageRef)
  }

  const response = await fetch(`${API_URL}/Partners/${partnerId}`, {
    method: "PUT",
    body: JSON.stringify({
      Id: partnerId,
      Name: data.name,
      ImageUrl: imageUrl
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  revalidatePath(adminRoutes.partners.root)
  const responseData = await response.json()

  if (!response.ok) {
    return {
      status: response.status,
      message: responseData?.title || "حدث خطأ ما",
      response: responseData
    }
  }
  return {
    status: response.status,
    message: "تم تحديث البيانات بنجاح",
    response: responseData
  }
}

export async function deletePartnerAction(partnerId: number) {
  const response = await fetch(`${API_URL}/Partners/${partnerId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Id: partnerId
    })
  })
  revalidatePath(adminRoutes.partners.root)
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
