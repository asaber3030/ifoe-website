import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardNavbar } from "@/components/dashboard/navbar"

import { type Metadata } from "next"
import { getUser } from "@/actions/auth"
import { redirect } from "next/navigation"
import { routes } from "@/lib/routes"

export const metadata: Metadata = {
  title: "صفحة التحكم",
  description: "صفحة التحكم"
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser()
  if (!user || !user?.role || user?.role?.name !== "Admin") return redirect("/login")

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
