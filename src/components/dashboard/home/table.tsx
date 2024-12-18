import { StatsItem } from "@/components/dashboard/home/stats-item"
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

export function DashboardTable() {
  return (
    <div className="mt-4">
      <div className="flex gap-2 items-center justify-between mb-4">
        <h2 className="text-xl font-bold mt-8">الخدمات</h2>
        <Button variant="blue">عرض الكل</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
