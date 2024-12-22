import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Category } from "@/types"
import { UpdateCategoryModal } from "./update-modal"

import { DeleteModal } from "../delete-modal"
import { deleteCategoryAction } from "@/actions/categories"

type Props = {
  categories: Category[]
}

export function CategoriesTable({ categories }: Props) {
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
          {categories.map((category) => (
            <TableRow key={`category-row-${category.id}`}>
              <TableCell>{category.id}</TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell className="flex gap-2">
                <UpdateCategoryModal category={category} />
                <DeleteModal forceAction={deleteCategoryAction} deletedId={category.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
