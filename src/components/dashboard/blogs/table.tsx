import moment from "moment"

import { deleteBlogAction } from "@/actions/blogs"
import { adminRoutes } from "@/lib/routes"

import { Edit } from "lucide-react"
import { Blog } from "@/types"
import { LinkBtn } from "@/components/ui/link-btn"
import { DeleteModal } from "../delete-modal"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

type Props = {
  blogs: Blog[]
}

export function BlogsTable({ blogs }: Props) {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم المقالة</TableHead>
            <TableHead>العنوان</TableHead>
            <TableHead>اخر تعديل في</TableHead>
            <TableHead>تم الانشاء في</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell>{blog.id}</TableCell>
              <TableCell>{blog.title}</TableCell>
              <TableCell>{moment(new Date(blog.created_at)).fromNow()}</TableCell>
              <TableCell>
                {blog.updated_at ? moment(new Date(blog.updated_at)).fromNow() : "N/A"}
              </TableCell>
              <TableCell className="flex gap-2">
                <LinkBtn href={adminRoutes.blogs.update(blog.id)} size="icon" variant="outline">
                  <Edit className="size-4" />
                </LinkBtn>
                <DeleteModal deletedId={blog.id} forceAction={deleteBlogAction} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
