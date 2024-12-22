import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { UpdateContractPeriodModal } from "./update-modal"
import { ContractPeriod } from "@/types"
import { DeleteModal } from "../delete-modal"

import { deleteContractPeriodAction } from "@/actions/contract-periods"

type Props = {
  contractPeriods: ContractPeriod[]
}

export function ContractPeriodsTable({ contractPeriods }: Props) {
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
          {contractPeriods.map((contract) => (
            <TableRow key={`category-row-${contract.id}`}>
              <TableCell>{contract.id}</TableCell>
              <TableCell>{contract.unit?.name}</TableCell>
              <TableCell>{contract.value}</TableCell>
              <TableCell className="flex gap-2">
                <UpdateContractPeriodModal contractPeriod={contract} />
                <DeleteModal forceAction={deleteContractPeriodAction} deletedId={contract.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
