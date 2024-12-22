"use server"

import { API_URL, AUTH_COOKIE_NAME } from "@/lib/constants"
import { UserSchema } from "@/lib/schema"
import { APIResponse, User } from "@/types"

import { defaultHeaders } from "@/lib/utils"
import { cookies } from "next/headers"
import { z } from "zod"

type TRegisterResponse = {
  user?: User
  token?: string
}
type TRegisterReturn = Promise<APIResponse<TRegisterResponse>>
type TLoginResponse = {
  user?: User
  token?: string
}
type TLoginReturn = Promise<APIResponse<TLoginResponse>>

export async function getUser(): Promise<User | null> {
  const cookiesStore = cookies()
  const token = (await cookiesStore).get(AUTH_COOKIE_NAME)?.value

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

    if (!response.ok) {
      return {
        status: data.status,
        message: data?.message || "Failed to register user"
      }
    }

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
    return {
      status: 500,
      message: "Failed to register user"
    }
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

    if (!response.ok) {
      return {
        status: data.status,
        message: data?.message || "Failed to login"
      }
    }

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
    return {
      status: 500,
      message: "Failed to login-"
    }
  }
}
