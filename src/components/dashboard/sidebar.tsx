"use client"

import React from "react"

import { usePathname, useRouter } from "next/navigation"
import { DASHBOARD_NAVIGATION } from "@/lib/navigations"
import { AppLogo } from "../app/logo"

export function DashboardSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <aside className="w-64 bg-white p-4 hidden md:block">
      <AppLogo />
      <nav className="mt-4">
        <ul className="space-y-4">
          {DASHBOARD_NAVIGATION.map(({ href, icon: Icon, label }) => {
            return (
              <li
                key={href}
                className={`p-2 rounded-lg ${
                  isActive(href) ? "bg-[#e9e9e9] text-blue-700" : "text-gray-600"
                }`}
              >
                <a href={href} className="flex items-center gap-4">
                  <Icon
                    className={`size-5 ${isActive(href) ? "text-blue-700" : "text-gray-600"}`}
                  />
                  <span>{label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
