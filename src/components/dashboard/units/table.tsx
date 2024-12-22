import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

import { Country, Unit } from "@/types"
import { UpdateUnitModal } from "./update-modal"
import { DeleteModal } from "../delete-modal"
import { deleteUnitAction } from "@/actions/units"

type Props = {
  units: Unit[]
}

export function UnitsTable({ units }: Props) {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>الاسم</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {units.map((unit) => (
            <TableRow key={`unit-row-${unit.id}`}>
              <TableCell>{unit.id}</TableCell>
              <TableCell>{unit.name}</TableCell>
              <TableCell className="flex gap-2">
                <UpdateUnitModal unit={unit} />
                <DeleteModal forceAction={deleteUnitAction} deletedId={unit.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
