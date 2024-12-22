"use server"

import { CategorySchema } from "@/lib/schema"
import { APIResponse, Category } from "@/types"
import { API_URL } from "@/lib/constants"

import { actionResponse, defaultHeaders } from "@/lib/utils"
import { getAuthorizationToken } from "./app"
import { revalidatePath } from "next/cache"
import { adminRoutes } from "@/lib/routes"
import { z } from "zod"

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${API_URL}/categories`)
    const data: APIResponse<Category[]> = await res.json()
    return data.data
  } catch (error) {
    return []
  }
}

export async function getCategory(categoryId: number) {
  const res = await fetch(`${API_URL}/categories/${categoryId}`)
  const data: Category = await res.json()
  return {
    category: data,
    status: res.status
  }
}

export async function createCategoryAction(
  values: z.infer<typeof CategorySchema.Create>
): Promise<APIResponse<any>> {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/categories`, {
      method: "POST",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      }),
      body: JSON.stringify({
        name: values.name
      })
    })

    if (!res.ok) return actionResponse("حدث خطأ ما", res.status)

    revalidatePath(adminRoutes.categories.root)

    const data = await res.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateCategoryAction(
  categoryId: number,
  values: z.infer<typeof CategorySchema.Update>
): Promise<APIResponse<any>> {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/categories/${categoryId}`, {
      method: "PATCH",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      }),
      body: JSON.stringify({
        name: values.name
      })
    })

    if (!res.ok) return actionResponse("حدث خطأ ما", res.status)

    revalidatePath(adminRoutes.categories.root)

    return actionResponse("تم تحديث البيانات بنجاح", res.status)
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteCategoryAction(categoryId: number) {
  try {
    const token = await getAuthorizationToken()

    const response = await fetch(`${API_URL}/categories/${categoryId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.categories.root)
    const data = await response.json()

    if (!response.ok) {
      return {
        status: response.status,
        message: data?.title || "حدث خطأ ما"
      }
    }

    return {
      status: response.status,
      message: "تم حذف القسم بنجاح"
    }
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}
