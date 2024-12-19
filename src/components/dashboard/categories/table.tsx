import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Eye, Trash } from "lucide-react"
import { Category } from "@/types"
import { LinkBtn } from "@/components/ui/link-btn"
import { UpdateCategoryModal } from "./update-modal"

import { adminRoutes } from "@/lib/routes"
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
            <TableRow key={`category-row-${category.categoryId}`}>
              <TableCell>{category.categoryId}</TableCell>
              <TableCell>{category.categoryName}</TableCell>
              <TableCell className="flex gap-2">
                <UpdateCategoryModal category={category} />
                <DeleteModal forceAction={deleteCategoryAction} deletedId={category.categoryId} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
