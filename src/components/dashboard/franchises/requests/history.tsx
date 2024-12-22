import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { RequestHistory } from "@/types"
import { UpdateRequestHistoryModal } from "./update-request-history-modal"
import { DeleteModal } from "../../delete-modal"
import { deleteRequestHistoryAction } from "@/actions/franchise-request-history"
import moment from "moment"

export function FranchiseRequestHistoryTable({ history }: { history: RequestHistory[] }) {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>الحالة</TableHead>
            <TableHead>تم التغيير في</TableHead>
            <TableHead>ملاحظات</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((h) => (
            <TableRow key={h.id}>
              <TableCell>{h.id}</TableCell>
              <TableCell>{h.status}</TableCell>
              <TableCell>{moment(h.changed_at).fromNow()}</TableCell>
              <TableCell className="line-clamp-1">{h.remarks}</TableCell>
              <TableCell className="flex gap-2">
                <UpdateRequestHistoryModal history={h} />
                <DeleteModal deletedId={h.id} forceAction={deleteRequestHistoryAction} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
