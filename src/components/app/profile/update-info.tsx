"use client"

import { useUser } from "@/hooks/use-user"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"

import { changePersonalInformationAction } from "@/actions/auth"
import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { UserSchema } from "@/lib/schema"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InputField } from "@/components/common/input-field"
import { LoadingButton } from "@/components/common/loading-button"
import { Form } from "@/components/ui/form"

export function PersonalInfoForm() {
  const user = useUser()

  const form = useForm({
    resolver: zodResolver(UserSchema.Update),
    defaultValues: {
      name: user?.name,
      email: user?.email
    }
  })

  const mutation = useMutation({
    mutationFn: (data: z.infer<typeof UserSchema.Update>) => changePersonalInformationAction(data),
    onSuccess: (data) => showResponse(data)
  })

  const handleSubmit = () => {
    mutation.mutate(form.getValues())
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>البيانات الشخصية</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent className="space-y-4">
            <InputField label="الاسم" name="name" type="text" control={form.control} />
            <InputField
              label="البريد الالكتروني"
              name="email"
              type="email"
              control={form.control}
            />
          </CardContent>
          <CardFooter>
            <LoadingButton loading={mutation.isPending} type="submit">
              تعديل البيانات الشخصيه
            </LoadingButton>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
