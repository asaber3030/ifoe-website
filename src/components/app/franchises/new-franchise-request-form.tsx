"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { updateRequestHistoryAction } from "@/actions/franchise-request-history"
import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { FranchiseRequestSchema } from "@/lib/schema"
import { Form } from "@/components/ui/form"
import { InputField } from "@/components/common/input-field"
import { Button } from "@/components/ui/button"
import { RequestHistory, Status } from "@/types"
import { Edit } from "lucide-react"
import { LoadingButton } from "@/components/common/loading-button"
import { SelectField } from "@/components/common/select-field"
import { SelectItem } from "@/components/ui/select"
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
import { Country, FranchiseType } from "@/types"
import {
  createFranchiseRequestAction,
  updateFranchiseRequestAction
} from "@/actions/franchise-requests"
import { CheckboxField } from "@/components/common/checkbox-field"

type Props = {
  countries: Country[]
  types: FranchiseType[]
  franchiseId: number
}

export const NewFranchiseRequestForm = ({ countries, types, franchiseId }: Props) => {
  const form = useForm({
    resolver: zodResolver(FranchiseRequestSchema.Create),
    defaultValues: {
      full_name: "",
      phone: "",
      country_id: 0,
      city: "",
      company_name: "",
      business_type: "",
      have_experience: false,
      franchise_type_id: 0
    }
  })

  const createMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof FranchiseRequestSchema.Create> }) =>
      createFranchiseRequestAction(data, franchiseId),
    onSuccess: (data) =>
      showResponse(data, () => {
        form.reset()
      })
  })

  const handleSubmit = () => {
    createMutation.mutate({
      data: form.getValues()
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <InputField name="full_name" label="الاسم" control={form.control} />
        <InputField name="phone" label="رقم الهاتف" control={form.control} />
        <InputField name="city" label="المدينة" control={form.control} />
        <InputField name="company_name" label="اسم الشركه" control={form.control} />
        <InputField name="business_type" label="نوع العمل" control={form.control} />
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
          <SelectField valueAsNumber name="country_id" control={form.control} label="الدولة">
            {countries.map((country) => (
              <SelectItem key={`country-${country.id}`} value={country.id.toString()}>
                {country.name}
              </SelectItem>
            ))}
          </SelectField>

          <SelectField valueAsNumber name="franchise_type_id" control={form.control} label="الدولة">
            {types.map((type) => (
              <SelectItem key={`type-${type.id}`} value={type.id.toString()}>
                {type.franchise_type}
              </SelectItem>
            ))}
          </SelectField>
        </div>

        <CheckboxField name="have_experience" control={form.control} label="هل لديك خبرة؟" />

        <LoadingButton loading={createMutation.isPending} variant="blue">
          ارسال الطلب
        </LoadingButton>
      </form>
    </Form>
  )
}
