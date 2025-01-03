"use client"

import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"

import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { sendContactMessageAction } from "@/actions/app"
import { z } from "zod"

import { ContactSchema } from "@/lib/schema"
import { InputField } from "@/components/common/input-field"
import { LoadingButton } from "@/components/common/loading-button"
import { Form } from "@/components/ui/form"
import { useTranslate } from "@/hooks/use-translate"

export const ContactForm = () => {
  const translate = useTranslate()
  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      subject: ""
    }
  })

  const mutation = useMutation({
    mutationFn: (data: z.infer<typeof ContactSchema>) => sendContactMessageAction(data),
    onSuccess: (data) => {
      showResponse(data, () => {
        form.reset()
      })
    }
  })

  const handleSubmit = () => {
    mutation.mutate(form.getValues())
  }

  return (
    <div className='bg-gray-100 p-6 rounded-lg shadow-lg h-fit'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4'>
          <div className='grid xl:grid-cols-2 grid-cols-1 gap-4'>
            <InputField
              label={translate("firstName")}
              name='firstName'
              type='text'
              control={form.control}
            />
            <InputField
              label={translate("lastName")}
              name='lastName'
              type='text'
              control={form.control}
            />
          </div>
          <InputField label={translate("email")} name='email' type='email' control={form.control} />
          <InputField
            label={translate("subject")}
            name='subject'
            type='text'
            control={form.control}
          />
          <InputField
            isTextarea
            label={translate("message")}
            name='message'
            type='text'
            control={form.control}
          />
          <LoadingButton
            className='w-full'
            loading={mutation.isPending}
            type='submit'
            variant='blue'
          >
            {translate("sendMessage")}
          </LoadingButton>
        </form>
      </Form>
    </div>
  )
}
