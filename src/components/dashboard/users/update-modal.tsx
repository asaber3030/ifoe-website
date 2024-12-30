"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { LoadingButton } from "@/components/common/loading-button"
import { UserSchema } from "@/lib/schema"
import { InputField } from "@/components/common/input-field"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Edit, Plus } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { updateUserAction } from "@/actions/users"
import { Role, User } from "@/types"
import { SelectField } from "@/components/common/select-field"
import { SelectItem } from "@/components/ui/select"

export const UpdateUserModal = ({ roles, user }: { roles: Role[]; user: User }) => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(UserSchema.UpdateAdmin),
    defaultValues: {
      name: user.name,
      email: user.email,
      role_id: user.role_id
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof UserSchema.UpdateAdmin> }) =>
      updateUserAction(user.id, data),
    onSuccess: (data) => {
      showResponse(data, () => {
        if (data.status == 201 || data.status == 200) {
          setOpen(false)
          form.reset()
        }
      })
      console.log(data)
    }
  })

  const handleSubmit = () => {
    updateMutation.mutate({
      data: form.getValues()
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Edit className="size-4" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>تعديل مستخدم</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <SelectField
              defaultValue={user.role_id.toString()}
              valueAsNumber
              name="role_id"
              label="الدور"
              control={form.control}
            >
              {roles?.map((role) => (
                <SelectItem key={`role-${role.id}`} value={role.id.toString()}>
                  {role.name}
                </SelectItem>
              ))}
            </SelectField>

            <InputField name="name" label="الاسم" control={form.control} />
            <InputField name="email" label="البريد الالكتروني" control={form.control} />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  اغلاق
                </Button>
              </DialogClose>

              <LoadingButton loading={updateMutation.isPending} variant="blue">
                تعديل
              </LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
