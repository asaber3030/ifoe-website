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
import { Edit, Eye, ImageIcon, Trash } from "lucide-react"
import { Franchise } from "@/types"
import { LinkBtn } from "@/components/ui/link-btn"
import { adminRoutes } from "@/lib/routes"
import { DeleteModal } from "../delete-modal"
import { deleteFranchiseAction } from "@/actions/franchises"

export function FranchisesTable({ franchises }: { franchises: Franchise[] }) {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>الاسم</TableHead>
            <TableHead>الوصف</TableHead>
            <TableHead>الصورة</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {franchises.map((fr, index) => (
            <TableRow key={index}>
              <TableCell>{fr.id}</TableCell>
              <TableCell>{fr.name}</TableCell>
              <TableCell className="line-clamp-1">{fr.description}</TableCell>
              <TableCell>
                <img
                  src={fr.image_url}
                  alt="Franchise Image"
                  width={60}
                  height={60}
                  className="object-cover rounded-md"
                />
              </TableCell>
              <TableCell className="flex gap-2">
                <LinkBtn href={adminRoutes.franchises.images(fr.id)} variant="outline" size="icon">
                  <ImageIcon size={16} />
                </LinkBtn>
                <LinkBtn
                  href={adminRoutes.franchises.requests(fr.id)}
                  variant="outline"
                  size="icon"
                >
                  <Eye size={16} />
                </LinkBtn>
                <LinkBtn href={adminRoutes.franchises.update(fr.id)} variant="outline" size="icon">
                  <Edit size={16} />
                </LinkBtn>
                <DeleteModal deletedId={fr.id} forceAction={deleteFranchiseAction} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
