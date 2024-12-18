import { StatsItem } from "@/components/dashboard/home/stats-item"
import { DashboardTable } from "@/components/dashboard/home/table"
import { AdminPageTitle } from "@/components/dashboard/title"
import { Button } from "@/components/ui/button"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

import React from "react"

export default function DashboardPage() {
  return (
    <div>
      <AdminPageTitle title="الصفحة الرئيسية" className="my-4" />

      <div className="grid xl:grid-cols-3 grid-cols-1 gap-4">
        <StatsItem
          label="المستخدمين"
          description="عدد المستخدمين"
          size={70}
          value={100}
          progress={50}
        />
        <StatsItem
          label="الخدمات"
          description="عدد المستخدمين"
          size={70}
          value={60}
          progress={60}
        />
        <StatsItem
          label="الشركاء"
          description="عدد المستخدمين"
          size={70}
          value={70}
          progress={10}
        />
      </div>

      <DashboardTable />
    </div>
  )
}
