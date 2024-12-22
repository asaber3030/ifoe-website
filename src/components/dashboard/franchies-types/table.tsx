import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { FranchiseCharacteristics, FranchiseType } from "@/types"
import { DeleteModal } from "../delete-modal"

import { deleteFranchiesCharacteristicAction } from "@/actions/franchies-characteristics"
import { UpdateFranchiseTypeModal } from "./update-modal"
import { deleteFranchiesTypeAction } from "@/actions/franchies-types"

type Props = {
  franchiseTypes: FranchiseType[]
}

export function FranchiseTypesTable({ franchiseTypes }: Props) {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>نوع الخدمة</TableHead>
            <TableHead>مدينة الافتتاح</TableHead>
            <TableHead>التأكيد</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {franchiseTypes.map((ch) => (
            <TableRow key={`category-row-${ch.id}`}>
              <TableCell>{ch.id}</TableCell>
              <TableHead>{ch.franchise_type}</TableHead>
              <TableHead>{ch.city_of_opening}</TableHead>
              <TableHead>{ch.confirmation ? "نعم" : "لا"}</TableHead>
              <TableCell className="flex gap-2">
                <UpdateFranchiseTypeModal franchiseType={ch} />
                <DeleteModal forceAction={deleteFranchiesTypeAction} deletedId={ch.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
