"use server"

import { APIResponse, PaginatedData, User } from "@/types"
import { UserSchema } from "@/lib/schema"
import { API_URL } from "@/lib/constants"

import { actionResponse, defaultHeaders } from "@/lib/utils"
import { getAuthorizationToken } from "./app"
import { revalidatePath } from "next/cache"
import { adminRoutes } from "@/lib/routes"
import { z } from "zod"

export async function getUsers(page?: number): Promise<PaginatedData<User[]>> {
  const url = `${API_URL}/users` + (page && page > 0 ? `?page=${page}` : "")
  const res = await fetch(url)
  const data: APIResponse<PaginatedData<User[]>> = await res.json()
  return data?.data
}

export async function getUser(userId: number) {
  const res = await fetch(`${API_URL}/users/${userId}`)
  const data: APIResponse<User> = await res.json()
  return {
    user: data?.data
  }
}

export async function createUserAction(
  data: z.infer<typeof UserSchema.CreateAdmin>
): Promise<APIResponse<any>> {
  try {
    const token = await getAuthorizationToken()

    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })

    revalidatePath(adminRoutes.users.root)
    const res: APIResponse<any> = await response.json()
    return res
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateUserAction(
  userId: number,
  data: z.infer<typeof UserSchema.UpdateAdmin>
): Promise<APIResponse<any>> {
  try {
    const token = await getAuthorizationToken()
    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.users.root)
    const res: APIResponse<any> = await response.json()
    return res
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteUserAction(userId: number): Promise<APIResponse<any>> {
  try {
    const token = await getAuthorizationToken()
    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.users.root)
    const data: APIResponse<any> = await response.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}
