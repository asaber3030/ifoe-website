"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { LoadingButton } from "@/components/common/loading-button"
import { UnitCreateSchema, UnitSchema } from "@/lib/schema"
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
import { createSpaceRequiredAction } from "@/actions/space-required"
import { useUnits } from "@/hooks/use-units"
import { SelectItem } from "@/components/ui/select"
import { SelectField } from "@/components/common/select-field"
import { Loader } from "lucide-react"

export const CreateSpaceRequiredModal = () => {
  const [open, setOpen] = useState(false)
  const { units, isLoading } = useUnits()

  const form = useForm({
    resolver: zodResolver(UnitCreateSchema.Create),
    defaultValues: {
      unit_id: 0,
      value: 0
    }
  })

  const createMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof UnitCreateSchema.Create> }) =>
      createSpaceRequiredAction(data),
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
          انشاء المساحة المطلوبة
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>انشاء المساحة المطلوبة</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <SelectField valueAsNumber control={form.control} name="unit_id" label="الوحدة">
              {isLoading && <Loader className="animate-spin" />}
              {units?.map((unit) => (
                <SelectItem key={unit.id} value={unit.id.toString()}>
                  {unit.name}
                </SelectItem>
              ))}
            </SelectField>

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
