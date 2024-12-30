"use client"

import { LinkBtn } from "@/components/ui/link-btn"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { FranchiseRequest } from "@/types"
import { Eye } from "lucide-react"
import { EmptyState } from "../empty-state"

export function FranchiseRequestsTableProfile({ requests }: { requests: FranchiseRequest[] }) {
  if (requests.length === 0) return <EmptyState />

  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>الاسم</TableHead>
            <TableHead>لديه خبرة؟</TableHead>
            <TableHead>الحالة</TableHead>
            <TableHead>نوع العمل</TableHead>
            <TableHead>رقم الهاتف</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.id}</TableCell>
              <TableCell>{request.full_name}</TableCell>
              <TableCell>{request.have_experience ? "Yes" : "No"}</TableCell>
              <TableCell>{request.status}</TableCell>
              <TableCell>{request.business_type}</TableCell>
              <TableCell>{request.phone}</TableCell>
              <TableCell>
                <LinkBtn href={`/profile/franchises/${request.id}`} variant="outline">
                  السجل
                </LinkBtn>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
