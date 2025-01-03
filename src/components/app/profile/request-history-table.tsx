"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { RequestHistory } from "@/types"

import moment from "moment"
import { EmptyState } from "../empty-state"
import { useTranslate } from "@/hooks/use-translate"

export function FranchiseRequestHistoryTableProfile({ history }: { history: RequestHistory[] }) {
  const translate = useTranslate()

  if (history.length === 0) return <EmptyState />

  return (
    <div className='mt-4'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{translate("id")}</TableHead>
            <TableHead>{translate("status")}</TableHead>
            <TableHead>{translate("changedAt")}</TableHead>
            <TableHead>{translate("notes")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((h) => (
            <TableRow key={h.id}>
              <TableCell>{h.id}</TableCell>
              <TableCell>{h.status}</TableCell>
              <TableCell>{moment(h.changed_at).fromNow()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
