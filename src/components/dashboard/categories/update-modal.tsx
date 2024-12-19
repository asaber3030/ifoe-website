"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { showResponse } from "@/lib/utils"
import { z } from "zod"

import { CategorySchema } from "@/lib/schema"
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
import { Category } from "@/types"
import { Edit } from "lucide-react"
import { LoadingButton } from "@/components/common/loading-button"
import { useState } from "react"
import { updateCategoryAction } from "@/actions/categories"

export const UpdateCategoryModal = ({ category }: { category: Category }) => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(CategorySchema.Update),
    defaultValues: {
      categoryName: category.categoryName
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof CategorySchema.Update> }) =>
      updateCategoryAction(category.categoryId, data),
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
            تعديل القسم - <b>{category.categoryName}</b>
          </DialogTitle>
          <DialogDescription>تعديل القسم بالاسم والتفاصيل</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <InputField name="categoryName" label="الاسم" control={form.control} />

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
