"use server"

import { API_URL } from "@/lib/constants"
import { adminRoutes } from "@/lib/routes"
import { CategorySchema } from "@/lib/schema"
import { Category } from "@/types"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${API_URL}/Categories`)
    const data = await res.json()
    return data
  } catch (error) {
    return []
  }
}

export async function getCategory(CategoryId: number) {
  const res = await fetch(`${API_URL}/Categories/${CategoryId}`)
  const data: Category = await res.json()
  return {
    Category: data,
    status: res.status
  }
}

export async function createCategoryAction(data: z.infer<typeof CategorySchema.Create>) {
  const res = await fetch(`${API_URL}/Categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      CategoryId: Math.floor(Math.random() * 10000000),
      CategoryName: data.categoryName
    })
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

  revalidatePath(adminRoutes.categories.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح",
    response: resData
  }
}

export async function updateCategoryAction(
  CategoryId: number,
  data: z.infer<typeof CategorySchema.Update>
) {
  const res = await fetch(`${API_URL}/Categories/${CategoryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      CategoryId: CategoryId,
      CategoryName: data.categoryName
    })
  })

  if (!res.ok) {
    return {
      status: res.status,
      message: "حدث خطأ ما"
    }
  }
  revalidatePath(adminRoutes.categories.root)
  return {
    status: res.status,
    message: "تم تحديث البيانات بنجاح"
  }
}

export async function deleteCategoryAction(categoryId: number) {
  const response = await fetch(`${API_URL}/Categories/${categoryId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Id: categoryId
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
    message: "تم حذف الشريك بنجاح"
  }
}
