"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { LoadingButton } from "@/components/common/loading-button"
import { UnitSchema } from "@/lib/schema"
import { InputField } from "@/components/common/input-field"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Plus } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { createTrainingPeriodAction } from "@/actions/training-periods"

export const CreateTrainingPeriodModal = () => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(UnitSchema.Create),
    defaultValues: {
      unit: "",
      value: 0
    }
  })

  const createMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof UnitSchema.Create> }) =>
      createTrainingPeriodAction(data),
    onSuccess: (data) => {
      showResponse(data, () => {
        setOpen(false)
      })
    }
  })

  const handleSubmit = () => {
    createMutation.mutate({
      data: form.getValues()
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="blue">
          <Plus className="size-4" />
          انشاء فترة تدريب
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>انشاء فترة تدريب</DialogTitle>
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

              <LoadingButton loading={createMutation.isPending} variant="blue">
                انشاء
              </LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
