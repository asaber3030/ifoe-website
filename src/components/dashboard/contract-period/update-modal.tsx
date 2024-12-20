"use client"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useForm } from "react-hook-form"

import { updateSpaceRequiredAction } from "@/actions/space-required"
import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { ContractPeriod } from "@/types"
import { LoadingButton } from "@/components/common/loading-button"
import { InputField } from "@/components/common/input-field"
import { UnitSchema } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Edit } from "lucide-react"
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

export const UpdateContractPeriodModal = ({
  contractPeriod
}: {
  contractPeriod: ContractPeriod
}) => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(UnitSchema.Update),
    defaultValues: {
      unit: contractPeriod.unit,
      value: contractPeriod.value
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof UnitSchema.Update> }) =>
      updateSpaceRequiredAction(contractPeriod.contractPeriodId, data),
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
            تعديل فترة القعد - <b>#{contractPeriod.contractPeriodId}</b>
          </DialogTitle>
          <DialogDescription>تعديل فترة القعد بالتفاصيل</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <InputField name="unit" label="الوحدة" control={form.control} />

            <InputField
              type="number"
              name="value"
              label="القيمة"
              control={form.control}
              valuseAsNumber
            />

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
