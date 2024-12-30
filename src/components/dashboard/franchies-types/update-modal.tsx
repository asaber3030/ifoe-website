"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { updateFranchiesCharacteristicAction } from "@/actions/franchies-characteristics"
import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { FranchiesTypeSchema } from "@/lib/schema"
import { Form } from "@/components/ui/form"
import { InputField } from "@/components/common/input-field"
import { Button } from "@/components/ui/button"
import { FranchiseCharacteristics, FranchiseType } from "@/types"
import { Edit } from "lucide-react"
import { LoadingButton } from "@/components/common/loading-button"
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
import { updateFranchiesTypeAction } from "@/actions/franchies-types"
import { CheckboxField } from "@/components/common/checkbox-field"

export const UpdateFranchiseTypeModal = ({ franchiseType }: { franchiseType: FranchiseType }) => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(FranchiesTypeSchema.Update),
    defaultValues: {
      franchiseType: franchiseType.franchise_type,
      cityOfOpening: franchiseType.city_of_opening,
      confirmation: franchiseType.confirmation
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof FranchiesTypeSchema.Update> }) =>
      updateFranchiesTypeAction(franchiseType.id, data),
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
            تعديل الخصائص - <b>#{franchiseType.id}</b>
          </DialogTitle>
          <DialogDescription>تعديل الخصائص بالتفاصيل</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <InputField name="franchiseType" label="نوع الخدمة" control={form.control} />
            <InputField name="cityOfOpening" label="مدينة الافتتاح" control={form.control} />
            <CheckboxField name="confirmation" label="التأكيد" control={form.control} />

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
