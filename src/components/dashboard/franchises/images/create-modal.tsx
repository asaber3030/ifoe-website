"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { showResponse, validateFile } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-toastify"
import { createPartnerAction } from "@/actions/partners"
import { z } from "zod"

import { LoadingButton } from "@/components/common/loading-button"
import { PartnerSchema } from "@/lib/schema"
import { InputField } from "@/components/common/input-field"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Plus } from "lucide-react"
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
import { createFranchiseImageAction } from "@/actions/franchises"

type TMutation = {
  file: File | null
}

export const CreateFranchiseImageModal = ({ franchiseId }: { franchiseId: number }) => {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const form = useForm()

  const createMutation = useMutation({
    mutationFn: ({ file }: TMutation) => createFranchiseImageAction(franchiseId, file),
    onSuccess: (data) =>
      showResponse(data, () => {
        setOpen(false)
        form.reset()
        setFile(null)
      })
  })

  const handleSubmit = () => {
    const validation = validateFile(file)
    if (validation.error) {
      toast.error(validation.message)
      return
    }
    createMutation.mutate({ file })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="blue">
          <Plus className="size-4" />
          انشاء صورة جديدة
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>انشاء صورة </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FileField label="الصورة" onChange={setFile} />

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
