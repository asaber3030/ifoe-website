"use client"

import Link from "next/link"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

import { showResponse } from "@/lib/utils"
import { loginAction } from "@/actions/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { LoadingButton } from "@/components/common/loading-button"
import { CheckboxField } from "@/components/common/checkbox-field"
import { UserSchema } from "@/lib/schema"
import { InputField } from "@/components/common/input-field"
import { Form } from "@/components/ui/form"

export const LoginForm = () => {
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(UserSchema.Login),
    defaultValues: {
      email: "",
      password: "",
      remember: false
    }
  })

  const loginMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof UserSchema.Login> }) => loginAction(data),
    onSuccess: (data) => {
      showResponse(data, () => {
        if (data.status === 200) {
          router.push("/")
        }
      })
    }
  })

  const handleSubmit = () => {
    loginMutation.mutate({
      data: form.getValues()
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
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
        <LoadingButton className="w-full" variant="blue" loading={loginMutation.isPending}>
          تسجيل الدخول
        </LoadingButton>
        <Link
          href={"/login"}
          className="text-gray-500 text-center mb-4 block font-light text-sm hover:text-black"
        >
          ليس لديك حساب؟ سجل الان
        </Link>
      </form>
    </Form>
  )
}
