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
import { Plus } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { createUserAction } from "@/actions/users"
import { Role } from "@/types"
import { SelectField } from "@/components/common/select-field"
import { SelectItem } from "@/components/ui/select"

export const CreateUserModal = ({ roles }: { roles: Role[] }) => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(UserSchema.CreateAdmin),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role_id: 0
    }
  })

  const createMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof UserSchema.CreateAdmin> }) =>
      createUserAction(data),
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
    createMutation.mutate({
      data: form.getValues()
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="blue">
          <Plus className="size-4" />
          انشاء مستخدم
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>انشاء مستخدم</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <SelectField valueAsNumber name="role_id" label="الدور" control={form.control}>
              {roles?.map((role) => (
                <SelectItem key={`role-${role.id}`} value={role.id.toString()}>
                  {role.name}
                </SelectItem>
              ))}
            </SelectField>

            <InputField name="name" label="الاسم" control={form.control} />
            <InputField name="email" label="البريد الالكتروني" control={form.control} />
            <InputField
              name="password"
              label="كلمة المرور"
              type="password"
              control={form.control}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  اغلاق
                </Button>
              </DialogClose>

              <LoadingButton loading={createMutation.isPending} variant="blue">
                انشاء
              </LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
