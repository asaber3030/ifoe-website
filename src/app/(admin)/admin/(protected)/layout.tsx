import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardNavbar } from "@/components/dashboard/navbar"

import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "صفحة التحكم",
  description: "صفحة التحكم"
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1 bg-gray-100 ">
        <DashboardNavbar />
        <div className="px-8 py-8">{children}</div>
      </main>
    </div>
  )
}
