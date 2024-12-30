import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { FranchiseCharacteristics } from "@/types"
import { UpdateFranchiseCharacteristicsModal } from "./update-modal"
import { DeleteModal } from "../delete-modal"

import { deleteFranchiesCharacteristicAction } from "@/actions/franchies-characteristics"

type Props = {
  franchiseCharacteristics: FranchiseCharacteristics[]
}

export function FranchiseCharacteristicsTable({ franchiseCharacteristics }: Props) {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>تكلفة الامتياز</TableHead>
            <TableHead>تكلفة حقوق الملكية</TableHead>
            <TableHead>تكلفة التسويق</TableHead>
            <TableHead>تكلفة الاستثمار</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {franchiseCharacteristics.map((ch) => (
            <TableRow key={`category-row-${ch.id}`}>
              <TableCell>{ch.id}</TableCell>
              <TableHead>{ch.franchise_fees}</TableHead>
              <TableHead>{ch.royalty_fees}</TableHead>
              <TableHead>{ch.marketing_fees}</TableHead>
              <TableHead>{ch.investments_cost}</TableHead>
              <TableCell className="flex gap-2">
                <UpdateFranchiseCharacteristicsModal franchiesCharacteristic={ch} />
                <DeleteModal forceAction={deleteFranchiesCharacteristicAction} deletedId={ch.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
