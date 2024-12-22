"use client"

import Link from "next/link"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

import { registerAction } from "@/actions/auth"
import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { CheckboxField } from "@/components/common/checkbox-field"
import { LoadingButton } from "@/components/common/loading-button"
import { UserSchema } from "@/lib/schema"
import { InputField } from "@/components/common/input-field"
import { Form } from "@/components/ui/form"

export const RegisterForm = () => {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(UserSchema.Create),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      remember: false
    }
  })

  const registerMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof UserSchema.Create> }) => registerAction(data),
    onSuccess: (data) => {
      showResponse(data, () => {
        if (data.status === 201) {
          router.push("/login")
        }
      })
    }
  })

  const handleSubmit = () => {
    registerMutation.mutate({
      data: form.getValues()
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <InputField name="name" placeholder="Username" label="الاسم" control={form.control} />
        <InputField
          name="email"
          placeholder="example@domain.com"
          label="البريد الالكتروني"
          control={form.control}
        />
        <InputField
          name="password"
          placeholder="Strong Password"
          label="كلمة السر"
          control={form.control}
          type="password"
        />

        <CheckboxField name="remember" label="تذكرني" control={form.control} />

        <LoadingButton className="w-full" variant="blue" loading={registerMutation.isPending}>
          تسجيل حساب جديد
        </LoadingButton>

        <Link
          href={"/login"}
          className="text-gray-500 text-center mb-4 block font-light text-sm hover:text-black"
        >
          لديك حساب بالفعل؟
        </Link>
      </form>
    </Form>
  )
}
