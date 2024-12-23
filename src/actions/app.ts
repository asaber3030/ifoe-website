"use server"

import { API_URL, AUTH_COOKIE_NAME } from "@/lib/constants"
import { ContactSchema } from "@/lib/schema"
import { actionResponse, defaultHeaders } from "@/lib/utils"
import { APIResponse, Role } from "@/types"
import { cookies } from "next/headers"
import { z } from "zod"

export const getAuthorizationToken = async () => {
  const cookiesStore = cookies()
  const token = (await cookiesStore).get(AUTH_COOKIE_NAME)?.value
  const authorization = token ? token : ""

  return authorization
}

export async function sendContactMessageAction(values: z.infer<typeof ContactSchema>) {
  try {
    const response = await fetch(`${API_URL}/send-email`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: defaultHeaders()
    })
    const data: APIResponse<null> = await response.json()
    console.dir(data, { depth: null })
    return data
  } catch (error) {
    return actionResponse("Something went wrong, Try again later.", 500)
  }
}

export async function getCounts(): Promise<{
  blogs: number
  franchises: number
  users: number
  partners: number
}> {
  try {
    const response = await fetch(`${API_URL}/counts`, {
      method: "GET",
      headers: defaultHeaders()
    })
    const data = await response.json()

    return data
  } catch (error) {
    return {
      blogs: 0,
      franchises: 0,
      users: 0,
      partners: 0
    }
  }
}

export async function getRoles() {
  try {
    const response = await fetch(`${API_URL}/roles`, {
      method: "GET",
      headers: defaultHeaders()
    })
    const data: APIResponse<Role[]> = await response.json()
    return data.data
  } catch (error) {
    return []
  }
}
