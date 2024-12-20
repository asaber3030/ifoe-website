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
            <TableHead>franchiseFees</TableHead>
            <TableHead>royaltyFees</TableHead>
            <TableHead>marketingFees</TableHead>
            <TableHead>investmentsCost</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {franchiseCharacteristics.map((ch) => (
            <TableRow key={`category-row-${ch.franchiseCharacteristicsId}`}>
              <TableCell>{ch.franchiseCharacteristicsId}</TableCell>
              <TableHead>{ch.franchiseFees}</TableHead>
              <TableHead>{ch.royaltyFees}</TableHead>
              <TableHead>{ch.marketingFees}</TableHead>
              <TableHead>{ch.investmentsCost}</TableHead>
              <TableCell className="flex gap-2">
                <UpdateFranchiseCharacteristicsModal franchiesCharacteristic={ch} />
                <DeleteModal
                  forceAction={deleteFranchiesCharacteristicAction}
                  deletedId={ch.franchiseCharacteristicsId}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
