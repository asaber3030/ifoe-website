"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { LoadingButton } from "@/components/common/loading-button"
import { FranchiesCharacteristicsSchema } from "@/lib/schema"
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
import { createFranchiesCharacteristicAction } from "@/actions/franchies-characteristics"

export const CreateFranchiesCharacteristicModal = () => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(FranchiesCharacteristicsSchema.Create),
    defaultValues: {
      franchiseFees: "",
      royaltyFees: "",
      marketingFees: "",
      investmentsCost: ""
    }
  })

  const createMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof FranchiesCharacteristicsSchema.Create> }) =>
      createFranchiesCharacteristicAction(data),
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
          انشاء خصائص الخدمة
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>انشاء خصائص الخدمة</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <InputField name="franchiseFees" label="تكلفة الامتياز" control={form.control} />
            <InputField name="royaltyFees" label="تكلفة الامتلاك" control={form.control} />
            <InputField name="marketingFees" label="تكلفة التسويق" control={form.control} />
            <InputField name="investmentsCost" label="تكلفة الاستثمار" control={form.control} />

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
