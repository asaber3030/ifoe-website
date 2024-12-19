"use client"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { showResponse } from "@/lib/utils"

import { LoadingButton } from "@/components/common/loading-button"
import { APIResponse } from "@/types"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
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

interface Props {
  deletedId: number
  dialogTitle?: string
  dialogDescription?: string
  children?: React.ReactNode
  asChild?: boolean
  forceAction: (id: number) => Promise<APIResponse<any>>
}

export const DeleteModal = ({
  dialogTitle = "حذف العنصر",
  dialogDescription = "هل أنت متأكد من حذف هذا العنصر؟",
  deletedId,
  children,
  asChild = true,
  forceAction
}: Props) => {
  const [open, setOpen] = useState(false)

  const forceDeleteMutation = useMutation({
    mutationFn: () => forceAction(deletedId),
    onSuccess: (data) =>
      showResponse(data, () => {
        setOpen(false)
      })
  })

  const handleDelete = () => {
    forceDeleteMutation.mutate()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild={asChild}>
        {children ? (
          children
        ) : (
          <Button variant="outlineDestructive" size="icon">
            <Trash className="size-4" />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">اغلاق</Button>
          </DialogClose>
          <LoadingButton
            loading={forceDeleteMutation.isPending}
            variant="outlineDestructive"
            onClick={handleDelete}
          >
            حذف
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
