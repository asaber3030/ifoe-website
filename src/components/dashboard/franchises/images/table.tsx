import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { FranchiseImage } from "@/types"
import { DeleteModal } from "../../delete-modal"
import { deleteFranchiseImageAction } from "@/actions/franchises"

export function FranchiseImagesTable({ images }: { images: FranchiseImage[] }) {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>الصوره</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {images.map((image) => (
            <TableRow key={image.id}>
              <TableCell>{image.id}</TableCell>
              <TableCell>
                <img
                  src={image.image_url ?? ""}
                  alt="Franchise Image"
                  width={60}
                  height={60}
                  className="object-cover rounded-md"
                />
              </TableCell>
              <TableCell className="flex gap-2">
                <DeleteModal deletedId={image.id} forceAction={deleteFranchiseImageAction} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
