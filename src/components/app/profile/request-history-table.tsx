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

export function FranchiseRequestHistoryTableProfile({ history }: { history: RequestHistory[] }) {
  if (history.length === 0) return <EmptyState />

  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>الحالة</TableHead>
            <TableHead>تم التغيير في</TableHead>
            <TableHead>ملاحظات</TableHead>
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
