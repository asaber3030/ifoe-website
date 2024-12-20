"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { updateEquipmentAction } from "@/actions/equipment-cost"
import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { UnitSchema } from "@/lib/schema"
import { Form } from "@/components/ui/form"
import { InputField } from "@/components/common/input-field"
import { Button } from "@/components/ui/button"
import { EquipmentCost } from "@/types"
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

export const UpdateEquipmentCostModal = ({ equipmentCost }: { equipmentCost: EquipmentCost }) => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(UnitSchema.Update),
    defaultValues: {
      unit: equipmentCost.unit,
      value: equipmentCost.value
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof UnitSchema.Update> }) =>
      updateEquipmentAction(equipmentCost.equipmentCostId, data),
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
            تعديل الاداءه - <b>#{equipmentCost.equipmentCostId}</b>
          </DialogTitle>
          <DialogDescription>تعديل الاداءه بالتفاصيل</DialogDescription>
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
