"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

import { Role, User } from "@/types"
import { UpdateUserModal } from "./update-modal"
import { DeleteModal } from "../delete-modal"
import { deleteUserAction } from "@/actions/users"
import { useUser } from "@/hooks/use-user"

export function UsersTable({ roles, users }: { users: User[]; roles: Role[] }) {
  const current = useUser()

  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>الاسم</TableHead>
            <TableHead>الايميل</TableHead>
            <TableHead>الدور</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role?.name}</TableCell>
              <TableCell className="flex gap-2">
                {current?.id !== user.id && (
                  <>
                    <UpdateUserModal roles={roles} user={user} />
                    <DeleteModal deletedId={user.id} forceAction={deleteUserAction} />
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
