import { getCounts } from "@/actions/app"
import { getFranchises } from "@/actions/franchises"
import { FranchisesTable } from "@/components/dashboard/franchises/table"
import { StatsItem } from "@/components/dashboard/home/stats-item"
import { AdminPageTitle } from "@/components/dashboard/title"
import { LinkBtn } from "@/components/ui/link-btn"
import { adminRoutes } from "@/lib/routes"
import Link from "next/link"

export default async function DashboardPage() {
  const counts = await getCounts()
  const franchises = await getFranchises()

  return (
    <div>
      <AdminPageTitle title="الصفحة الرئيسية" className="my-4" />

      <div className="grid xl:grid-cols-4 grid-cols-2 gap-4">
        <StatsItem label="المستخدمين" num={counts.users} color="#6c5ce7" />
        <StatsItem label="المقالات" num={counts.blogs} color="#fdcb6e" />
        <StatsItem label="الخدمات" num={counts.franchises} color="#2d3436" />
        <StatsItem label="الشركاء" num={counts.partners} color="#00b894" />
      </div>
      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2>الخدمات</h2>
          <LinkBtn href={adminRoutes.franchises.root}>عرض الكل</LinkBtn>
        </div>
        <FranchisesTable franchises={franchises.data} />
      </div>
    </div>
  )
}
