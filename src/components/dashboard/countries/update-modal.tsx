"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import { updateCountryAction } from "@/actions/countries"
import { zodResolver } from "@hookform/resolvers/zod"
import { showResponse } from "@/lib/utils"
import { toast } from "react-toastify"
import { z } from "zod"

import { CountrySchema } from "@/lib/schema"
import { Form } from "@/components/ui/form"
import { InputField } from "@/components/common/input-field"
import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Country } from "@/types"
import { Edit } from "lucide-react"
import { LoadingButton } from "@/components/common/loading-button"
import { useState } from "react"

export const UpdateCountryModal = ({ country }: { country: Country }) => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(CountrySchema.Update),
    defaultValues: {
      countryName: country.countryName
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof CountrySchema.Update> }) =>
      updateCountryAction(country.countryId, data),
    onSuccess: (data) =>
      showResponse(data, () => {
        setOpen(false)
      })
  })

  const handleSubmit = () => {
    updateMutation.mutate({
      data: form.getValues()
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="blue" size="icon">
          <Edit className="size-4" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            تعديل الدولة - <b>{country.countryName}</b>
          </DialogTitle>
          <DialogDescription>تعديل الدولة بالاسم والتفاصيل</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <InputField name="countryName" label="الاسم" control={form.control} />

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
