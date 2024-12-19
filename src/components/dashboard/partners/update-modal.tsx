"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { showResponse, validateFile } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-toastify"
import { updatePartnerAction } from "@/actions/partners"
import { z } from "zod"

import { LoadingButton } from "@/components/common/loading-button"
import { PartnerSchema } from "@/lib/schema"
import { InputField } from "@/components/common/input-field"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Edit } from "lucide-react"
import { FileField } from "@/components/common/file-field"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Partner } from "@/types"

type TMutation = {
  file: File | null
  data: z.infer<typeof PartnerSchema.Update>
}

export const UpdatePartnerModal = ({ partner }: { partner: Partner }) => {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const form = useForm({
    resolver: zodResolver(PartnerSchema.Update),
    defaultValues: {
      name: partner.name
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data, file }: TMutation) =>
      updatePartnerAction(partner.id, partner.imageUrl, data, file),

    onSuccess: (data) =>
      showResponse(data, () => {
        setOpen(false)
        setFile(null)
      })
  })

  const handleSubmit = () => {
    if (file) {
      const validation = validateFile(file)
      if (validation.error) {
        toast.error(validation.message)
        return
      }
    }
    updateMutation.mutate({ data: form.getValues(), file })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Edit className="size-4" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>تعديل شريك</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FileField label="الصورة" onChange={setFile} />
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
