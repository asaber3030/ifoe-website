"use client"

import { useMutation } from "@tanstack/react-query"
import { useUser } from "@/hooks/use-user"
import { useForm } from "react-hook-form"

import { changePasswordAction } from "@/actions/auth"
import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LoadingButton } from "@/components/common/loading-button"
import { UserSchema } from "@/lib/schema"
import { InputField } from "@/components/common/input-field"
import { Form } from "@/components/ui/form"

export function PasswordUpdateForm() {
  const form = useForm({
    resolver: zodResolver(UserSchema.Password),
    defaultValues: {
      current_password: "",
      new_password: "",
      new_password_confirmation: ""
    }
  })

  const mutation = useMutation({
    mutationFn: (data: z.infer<typeof UserSchema.Password>) => changePasswordAction(data),
    onSuccess: (data) => showResponse(data)
  })

  const handleSubmit = () => {
    mutation.mutate(form.getValues())
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>تغيير كلمة المرور</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent className="space-y-4">
            <InputField
              label="كلمة المرور الحالية"
              name="current_password"
              type="password"
              control={form.control}
            />
            <InputField
              label="كلمة المرور الجديدة"
              name="new_password"
              type="password"
              control={form.control}
            />
            <InputField
              label="تأكيد كلمة المرور"
              name="new_password_confirmation"
              type="password"
              control={form.control}
            />
          </CardContent>
          <CardFooter>
            <LoadingButton loading={mutation.isPending} type="submit">
              حفظ كلمة المرور
            </LoadingButton>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
