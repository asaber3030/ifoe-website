import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Eye, Trash } from "lucide-react"
import { Partner } from "@/types"
import Image from "next/image"
import { UpdatePartnerModal } from "./update-modal"
import { DeleteModal } from "../delete-modal"
import { deletePartnerAction } from "@/actions/partners"

type Props = {
  partners: Partner[]
}

export function PartnersTable({ partners }: Props) {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>الاسم</TableHead>
            <TableHead>الصورة</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {partners.map((partner, index) => (
            <TableRow key={`partner-row-${partner.id}`}>
              <TableCell>{partner.id}</TableCell>
              <TableCell>{partner.name}</TableCell>
              <TableCell>
                <img
                  src={partner.imageUrl}
                  alt="Partner Image"
                  width={60}
                  height={60}
                  className="object-cover rounded-md"
                />
              </TableCell>
              <TableCell className="flex gap-2">
                <UpdatePartnerModal partner={partner} />
                <DeleteModal deletedId={partner.id} forceAction={deletePartnerAction} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
