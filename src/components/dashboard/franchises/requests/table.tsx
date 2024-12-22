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
import { adminRoutes } from "@/lib/routes"
import { FranchiseRequest } from "@/types"
import { Eye } from "lucide-react"
import { useParams } from "next/navigation"

export function FranchiseRequestsTable({
  franchiseId,
  requests
}: {
  franchiseId: number
  requests: FranchiseRequest[]
}) {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>البريد الالكتروني</TableHead>
            <TableHead>الاسم</TableHead>
            <TableHead>لديه خبرة؟</TableHead>
            <TableHead>رقم الهاتف</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.id}</TableCell>
              <TableCell>{request.user?.email}</TableCell>
              <TableCell>{request.full_name}</TableCell>
              <TableCell>{request.have_experience ? "Yes" : "No"}</TableCell>
              <TableCell>{request.phone}</TableCell>
              <TableCell>
                <LinkBtn
                  href={adminRoutes.franchises.viewRequest(franchiseId, request.id)}
                  size="icon"
                  variant="outline"
                >
                  <Eye className="size-4" />
                </LinkBtn>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
