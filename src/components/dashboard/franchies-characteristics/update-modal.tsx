"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { updateFranchiesCharacteristicAction } from "@/actions/franchies-characteristics"
import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { FranchiesCharacteristicsSchema } from "@/lib/schema"
import { Form } from "@/components/ui/form"
import { InputField } from "@/components/common/input-field"
import { Button } from "@/components/ui/button"
import { FranchiseCharacteristics } from "@/types"
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

export const UpdateFranchiseCharacteristicsModal = ({
  franchiesCharacteristic
}: {
  franchiesCharacteristic: FranchiseCharacteristics
}) => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(FranchiesCharacteristicsSchema.Update),
    defaultValues: {
      franchiseFees: franchiesCharacteristic.franchise_fees,
      royaltyFees: franchiesCharacteristic.royalty_fees,
      marketingFees: franchiesCharacteristic.marketing_fees,
      investmentsCost: franchiesCharacteristic.investments_cost
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof FranchiesCharacteristicsSchema.Update> }) =>
      updateFranchiesCharacteristicAction(franchiesCharacteristic.id, data),
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
            تعديل الخصائص - <b>#{franchiesCharacteristic.id}</b>
          </DialogTitle>
          <DialogDescription>تعديل الخصائص بالتفاصيل</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <InputField name="franchiseFees" label="_franchiesFees" control={form.control} />
            <InputField name="royaltyFees" label="_royaltyFees" control={form.control} />
            <InputField name="marketingFees" label="_marketingFees" control={form.control} />
            <InputField name="investmentsCost" label="_investmentsCost" control={form.control} />

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
