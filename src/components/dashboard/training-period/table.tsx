import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { TrainingPeriod } from "@/types"
import { UpdateTrainingPeriodModal } from "./update-modal"
import { DeleteModal } from "../delete-modal"

import { deleteTrainingPeriodAction } from "@/actions/training-periods"

type Props = {
  trainingPeriods: TrainingPeriod[]
}

export function TrainingPeriodsTable({ trainingPeriods }: Props) {
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
          {trainingPeriods.map((tr, i) => (
            <TableRow key={`category-row-${tr.trainingPeriodId ?? i}`}>
              <TableCell>{tr.trainingPeriodId ?? i}</TableCell>
              <TableCell>{tr.unit}</TableCell>
              <TableCell>{tr.value}</TableCell>
              <TableCell className="flex gap-2">
                <UpdateTrainingPeriodModal trainingPeriod={tr} />
                <DeleteModal
                  forceAction={deleteTrainingPeriodAction}
                  deletedId={tr.trainingPeriodId}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
