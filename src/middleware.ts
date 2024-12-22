import { NextRequest, NextResponse } from "next/server"
import { AUTH_COOKIE_NAME } from "./lib/constants"
import { getUser } from "./actions/auth"

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value
  const url = request.nextUrl.pathname

  if (url.includes("admin") || url.includes("profile")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    const admin = await getUser()
    if (!admin || !admin?.role || admin.role.name !== "Admin") {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"]
}
