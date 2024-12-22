"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { showResponse } from "@/lib/utils"
import { z } from "zod"

import { UnitSchema } from "@/lib/schema"
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
import { Unit } from "@/types"
import { Edit } from "lucide-react"
import { LoadingButton } from "@/components/common/loading-button"
import { useState } from "react"
import { updateUnitAction } from "@/actions/units"

export const UpdateUnitModal = ({ unit }: { unit: Unit }) => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(UnitSchema.Update),
    defaultValues: {
      name: unit.name
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof UnitSchema.Update> }) =>
      updateUnitAction(unit.id, data),
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
            تعديل الوحدة - <b>{unit.name}</b>
          </DialogTitle>
          <DialogDescription>تعديل الوحدة بالاسم والتفاصيل</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <InputField name="name" label="الاسم" control={form.control} />

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
