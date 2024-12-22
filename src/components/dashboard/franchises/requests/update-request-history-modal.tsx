"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { updateRequestHistoryAction } from "@/actions/franchise-request-history"
import { showResponse } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { RequestHistorySchema } from "@/lib/schema"
import { Form } from "@/components/ui/form"
import { InputField } from "@/components/common/input-field"
import { Button } from "@/components/ui/button"
import { RequestHistory } from "@/types"
import { Edit } from "lucide-react"
import { LoadingButton } from "@/components/common/loading-button"
import { SelectField } from "@/components/common/select-field"
import { SelectItem } from "@/components/ui/select"
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

export const UpdateRequestHistoryModal = ({ history }: { history: RequestHistory }) => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(RequestHistorySchema.Update),
    defaultValues: {
      status: history.status as any,
      remarks: history.remarks
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data }: { data: z.infer<typeof RequestHistorySchema.Update> }) =>
      updateRequestHistoryAction(history.id, data),
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
            تعديل تاريخ الطلب - <b>{history.id}</b>
          </DialogTitle>
          <DialogDescription>تعديل تاريخ الطلب بالاسم والتفاصيل</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <SelectField
              defaultValue={history.status}
              name="status"
              label="الحالة"
              control={form.control}
            >
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Approved">Approved</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectField>

            <InputField name="remarks" label="ملاحظات" control={form.control} />

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
