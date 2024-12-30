import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { SpaceRequired } from "@/types"
import { UpdateSpaceRequiredModal } from "./update-modal"
import { DeleteModal } from "../delete-modal"

import { deleteSpaceRequiredAction } from "@/actions/space-required"

type Props = {
  spaceRequireds: SpaceRequired[]
}

export function SpaceRequiredsTable({ spaceRequireds }: Props) {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>الوحدة</TableHead>
            <TableHead>القيمة</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {spaceRequireds.map((sp) => (
            <TableRow key={`category-row-${sp.id}`}>
              <TableCell>{sp.id}</TableCell>
              <TableCell>{sp.unit?.name}</TableCell>
              <TableCell>{sp.value}</TableCell>
              <TableCell className="flex gap-2">
                <UpdateSpaceRequiredModal spaceRequired={sp} />
                <DeleteModal forceAction={deleteSpaceRequiredAction} deletedId={sp.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
