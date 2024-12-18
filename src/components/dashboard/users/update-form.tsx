"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import { createUserAction } from "@/actions/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { showResponse } from "@/lib/utils"
import { z } from "zod"

import { UserSchema } from "@/lib/schema"
import { Form } from "@/components/ui/form"
import { InputField } from "@/components/common/input-field"
import { Button } from "@/components/ui/button"
import { SelectField } from "@/components/common/select-field"
import { SelectItem } from "@/components/ui/select"

export const UpdateUserForm = ({}: { user: any }) => {
  const form = useForm({
    resolver: zodResolver(UserSchema.Update),
    defaultValues: {
      name: "YYY",
      email: "YYY@YYY.COM",
      password: "YYYY"
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof UserSchema.Create> }) => createUserAction(data),
    onSuccess: (data) =>
      showResponse(data, () => {
        console.log("User update successfully")
      })
  })

  const handleSubmit = () => {
    updateMutation.mutate({
      data: form.getValues()
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <InputField name="name" label="الاسم" control={form.control} />
        <InputField name="email" label="البريد الالكتروني" control={form.control} />
        <InputField name="password" label="كلمة السر" type="password" control={form.control} />
        <SelectField name="role" control={form.control} label="نوع المستخدم">
          <SelectItem value="admin">مدير</SelectItem>
          <SelectItem value="user">مستخدم</SelectItem>
        </SelectField>
        <Button>انشاء</Button>
      </form>
    </Form>
  )
}
