import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { EquipmentCost } from "@/types"
import { UpdateEquipmentCostModal } from "./update-modal"
import { DeleteModal } from "../delete-modal"

import { deleteEquipmentAction } from "@/actions/equipment-cost"

type Props = {
  equipmentCosts: EquipmentCost[]
}

export function EquipmentCostsTable({ equipmentCosts }: Props) {
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
          {equipmentCosts.map((eq) => (
            <TableRow key={`category-row-${eq.id}`}>
              <TableCell>{eq.id}</TableCell>
              <TableCell>{eq.unit?.name}</TableCell>
              <TableCell>{eq.value}</TableCell>
              <TableCell className="flex gap-2">
                <UpdateEquipmentCostModal equipmentCost={eq} />
                <DeleteModal forceAction={deleteEquipmentAction} deletedId={eq.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
