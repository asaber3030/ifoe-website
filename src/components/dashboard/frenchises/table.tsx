import Link from "next/link"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Pagination } from "@/components/app/pagination"
import { Button } from "@/components/ui/button"
import { Edit, Eye, Trash } from "lucide-react"

export function FrenchisesTable() {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell className="flex gap-2">
                <Button size="icon" variant="outline">
                  <Edit className="size-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Eye className="size-4" />
                </Button>
                <Button size="icon" variant="outlineDestructive">
                  <Trash className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination currentPage={0} totalPages={4} />
    </div>
  )
}
