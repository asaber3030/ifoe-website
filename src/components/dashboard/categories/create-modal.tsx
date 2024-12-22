"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { LoadingButton } from "@/components/common/loading-button"
import { CategorySchema } from "@/lib/schema"
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
import { createCategoryAction } from "@/actions/categories"

export const CreateCategoryModal = () => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(CategorySchema.Create),
    defaultValues: {
      name: ""
    }
  })

  const createMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof CategorySchema.Create> }) =>
      createCategoryAction(data),
    onSuccess: (data) => {
      showResponse(data, () => {
        setOpen(false)
      })
      console.log(data)
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
          انشاء القسم
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>انشاء القسم</DialogTitle>
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
