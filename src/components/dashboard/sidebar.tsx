"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"

import { DASHBOARD_URLS } from "@/lib/navigations"
import { AppLogo } from "../app/logo"

export function DashboardSidebar() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <aside className="w-64 bg-white p-4 hidden md:block">
      <AppLogo />
      <nav className="mt-4">
        <ul className="space-y-4">
          {DASHBOARD_URLS.map(({ href, icon: Icon, label }) => {
            return (
              <li
                key={href}
                className={`p-1.5 rounded-lg text-sm ${
                  isActive(href) ? "bg-[#e9e9e9] text-blue-700" : "text-gray-600"
                }`}
              >
                <Link href={href} className="flex items-center gap-4">
                  <Icon
                    className={`size-5 ${isActive(href) ? "text-blue-700" : "text-gray-600"}`}
                  />
                  <span>{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
