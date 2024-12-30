import { NextRequest, NextResponse } from "next/server"
import { AUTH_COOKIE_NAME } from "./lib/constants"
import { getUser } from "./actions/auth"
import { cookies } from "next/headers"

export async function middleware(request: NextRequest) {
  const cookiesStore = cookies()
  const token = (await cookiesStore).get(AUTH_COOKIE_NAME)?.value
  const url = request.nextUrl.pathname

  if (url.includes("profile")) {
    const user = await getUser()
    if (!token || !user) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"]
}
