"use client"

import { Link, LucideIcon } from "lucide-react"

type Props = {
  icon: LucideIcon
  label: string
  isActive: boolean
  href: string
}

export const AdminSidebarLink = ({ icon: Icon, label, isActive, href }: Props) => {
  return (
    <li
      key={href}
      className={`p-2 rounded-lg ${isActive ? "bg-[#e9e9e9] text-blue-700" : "text-gray-600"}`}
    >
      <Link href={href} className="flex items-center gap-4">
        <Icon className={`size-5 ${isActive ? "text-blue-700" : "text-gray-600"}`} />
        <span>{"sdasd"}</span>
      </Link>
    </li>
  )
}
