"use server"

import { AUTH_COOKIE_NAME } from "@/lib/constants"
import { cookies } from "next/headers"

export const getAuthorizationToken = async () => {
  const cookiesStore = cookies()
  const token = (await cookiesStore).get(AUTH_COOKIE_NAME)?.value
  const authorization = token ? `Bearer ${token}` : ""

  return authorization
}
