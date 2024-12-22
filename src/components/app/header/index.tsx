"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"
import { useUser } from "@/hooks/use-user"

import { HeaderUserItems } from "./user-items"
import { HeaderGuestItems } from "./guest-items"
import { UserSidebar } from "./sheet"
import { AppLogo } from "../logo"

export const Header = () => {
  const user = useUser()
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <AppLogo />

        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-10 text-gray-600">
            <li>
              <Link
                href="/"
                className={`${isActive("/") ? "text-blue-500" : "hover:text-gray-400"} ml-10`}
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={`${isActive("/blogs") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                المقالات
              </Link>
            </li>
            <li>
              <Link
                href="/franchises"
                className={`${isActive("/franchises") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                الامتيازات
              </Link>
            </li>
            <li>
              <Link
                href="/partners"
                className={`${isActive("/partners") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                شركائنا
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${isActive("/contact") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {user ? <HeaderUserItems /> : <HeaderGuestItems />}
          <UserSidebar />
        </div>
      </div>
    </header>
  )
}
