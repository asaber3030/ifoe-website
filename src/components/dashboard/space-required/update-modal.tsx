"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { updateSpaceRequiredAction } from "@/actions/space-required"
import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { UnitCreateSchema, UnitSchema } from "@/lib/schema"
import { Form } from "@/components/ui/form"
import { InputField } from "@/components/common/input-field"
import { Button } from "@/components/ui/button"
import { SpaceRequired } from "@/types"
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
import { Loader } from "lucide-react"
import { SelectItem } from "@/components/ui/select"
import { SelectField } from "@/components/common/select-field"
import { useUnits } from "@/hooks/use-units"

export const UpdateSpaceRequiredModal = ({ spaceRequired }: { spaceRequired: SpaceRequired }) => {
  const [open, setOpen] = useState(false)
  const { units, isLoading } = useUnits()

  const form = useForm({
    resolver: zodResolver(UnitCreateSchema.Update),
    defaultValues: {
      unit_id: spaceRequired.unit_id,
      value: spaceRequired.value
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof UnitCreateSchema.Update> }) =>
      updateSpaceRequiredAction(spaceRequired.id, data),
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
            تعديل المساحة - <b>#{spaceRequired.id}</b>
          </DialogTitle>
          <DialogDescription>تعديل المساحة بالتفاصيل</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <SelectField
              defaultValue={spaceRequired.unit_id.toString()}
              valueAsNumber
              control={form.control}
              name="unit_id"
              label="الوحدة"
            >
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
