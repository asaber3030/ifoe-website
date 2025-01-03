"use server"

import { API_URL, AUTH_COOKIE_NAME } from "@/lib/constants"
import { UserSchema } from "@/lib/schema"
import { APIResponse, User } from "@/types"

import { actionResponse, defaultHeaders } from "@/lib/utils"
import { cookies } from "next/headers"
import { z } from "zod"
import { getAuthorizationToken } from "./app"

type TRegisterResponse = {
  user?: User
  token?: string
}
type TRegisterReturn = Promise<APIResponse<TRegisterResponse | undefined>>

type TLoginResponse = {
  user?: User
  token?: string
}

type TLoginReturn = Promise<APIResponse<TLoginResponse>>

export async function getUser(): Promise<User | null> {
  const token = await getAuthorizationToken()

  try {
    const response = await fetch(`${API_URL}/me`, {
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    const data: APIResponse<User> = await response.json()

    if (!data?.data?.id) return null

    return data.data
  } catch (error) {
    return null
  }
}

export async function registerAction(values: z.infer<typeof UserSchema.Create>): TRegisterReturn {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
        password_confirmation: values.password,
        role_id: 1
      }),
      headers: defaultHeaders()
    })

    const data: APIResponse<TRegisterResponse> = await response.json()

    if (!response.ok) return actionResponse("Failed to register user", data.status)

    if (data?.data?.token) {
      const cookiesStore = cookies()
      const cookie = (await cookiesStore).set(AUTH_COOKIE_NAME, data?.data?.token, {
        expires: values?.remember
          ? new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
          : new Date(Date.now() + 1000 * 60 * 60 * 24)
      })
    }

    return data
  } catch (error) {
    return actionResponse("Failed to register user", 500)
  }
}

export async function loginAction(values: z.infer<typeof UserSchema.Login>): TLoginReturn {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password
      }),
      headers: defaultHeaders()
    })

    const data: APIResponse<TLoginResponse> = await response.json()

    if (!response.ok) actionResponse("Failed to login", data.status)

    if (data?.data?.token) {
      const cookiesStore = cookies()
      const cookie = (await cookiesStore).set(AUTH_COOKIE_NAME, data?.data?.token, {
        expires: values?.remember
          ? new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
          : new Date(Date.now() + 1000 * 60 * 60 * 24)
      })
    }

    return data
  } catch (error) {
    return actionResponse("Failed to login", 500)
  }
}

export async function logoutAction() {
  const cookiesStore = cookies()
  const cookie = (await cookiesStore).delete(AUTH_COOKIE_NAME)
  return {
    status: 200,
    message: "تم تسجيل الخروج بنجاح"
  }
}

export async function changePersonalInformationAction(values: z.infer<typeof UserSchema.Update>) {
  const token = await getAuthorizationToken()

  try {
    const response = await fetch(`${API_URL}/update/profile`, {
      method: "PATCH",
      body: JSON.stringify({
        name: values.name,
        email: values.email
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })

    const data: APIResponse<User> = await response.json()

    console.dir(data, { depth: null })

    if (!response.ok) return actionResponse("Failed to update user", data.status)

    return data
  } catch (error) {
    return actionResponse("Failed to update user", 500)
  }
}

export async function changePasswordAction(values: z.infer<typeof UserSchema.Password>) {
  const token = await getAuthorizationToken()
  try {
    const response = await fetch(`${API_URL}/update/password`, {
      method: "PATCH",
      body: JSON.stringify({
        current_password: values.current_password,
        new_password: values.new_password,
        new_password_confirmation: values.new_password_confirmation
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    const data: APIResponse<User> = await response.json()
    if (!response.ok) return actionResponse("Failed to update password", data.status)
    return data
  } catch (error) {
    return actionResponse("Failed to update password", 500)
  }
}
