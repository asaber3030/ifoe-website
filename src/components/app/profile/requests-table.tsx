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
import { EmptyState } from "../empty-state"
import { useTranslate } from "@/hooks/use-translate"

export function FranchiseRequestsTableProfile({ requests }: { requests: FranchiseRequest[] }) {
  const translate = useTranslate()

  if (requests.length === 0) return <EmptyState />

  return (
    <div className='mt-4'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{translate("id")}</TableHead>
            <TableHead>{translate("name")}</TableHead>
            <TableHead>{translate("haveExperience")}</TableHead>
            <TableHead>{translate("status")}</TableHead>
            <TableHead>{translate("businessType")}</TableHead>
            <TableHead>{translate("phoneNumber")}</TableHead>
            <TableHead>{translate("do")}</TableHead>
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
                <LinkBtn href={`/profile/franchises/${request.id}`} variant='outline'>
                  {translate("requests")}
                </LinkBtn>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
