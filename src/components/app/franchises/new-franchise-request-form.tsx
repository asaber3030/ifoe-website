"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { createFranchiseRequestAction } from "@/actions/franchise-requests"

import { FranchiseRequestSchema } from "@/lib/schema"
import { Form } from "@/components/ui/form"
import { InputField } from "@/components/common/input-field"
import { LoadingButton } from "@/components/common/loading-button"
import { SelectField } from "@/components/common/select-field"
import { SelectItem } from "@/components/ui/select"
import { Country, FranchiseType } from "@/types"
import { CheckboxField } from "@/components/common/checkbox-field"
import { useUser } from "@/hooks/use-user"
import { NotLoggedInAlert } from "../not-loggedin-alert"
import { useTranslate } from "@/hooks/use-translate"

type Props = {
  countries: Country[]
  types: FranchiseType[]
  franchiseId: number
}

export const NewFranchiseRequestForm = ({ countries, types, franchiseId }: Props) => {
  const translate = useTranslate()
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
  const user = useUser()

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
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4'>
        <InputField name='full_name' label={translate("name")} control={form.control} />
        <InputField name='phone' label={translate("phone")} control={form.control} />
        <InputField name='city' label={translate("city")} control={form.control} />
        <InputField name='company_name' label={translate("companyName")} control={form.control} />
        <InputField name='business_type' label={translate("businessType")} control={form.control} />
        <div className='grid xl:grid-cols-2 grid-cols-1 gap-4'>
          <SelectField
            valueAsNumber
            name='country_id'
            control={form.control}
            label={translate("country")}
          >
            {countries.map((country) => (
              <SelectItem key={`country-${country.id}`} value={country.id.toString()}>
                {country.name}
              </SelectItem>
            ))}
          </SelectField>

          <SelectField
            valueAsNumber
            name='franchise_type_id'
            control={form.control}
            label={translate("franchiseType")}
          >
            {types.map((type) => (
              <SelectItem key={`type-${type.id}`} value={type.id.toString()}>
                {type.franchise_type}
              </SelectItem>
            ))}
          </SelectField>
        </div>

        <CheckboxField
          name='have_experience'
          control={form.control}
          label={translate("haveExperience")}
        />

        {user ? (
          <LoadingButton loading={createMutation.isPending} variant='blue' className='w-full'>
            {translate("send")}
          </LoadingButton>
        ) : (
          <NotLoggedInAlert />
        )}
      </form>
    </Form>
  )
}
