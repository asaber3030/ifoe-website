"use client"

import Image from "next/image"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { BlogSchema } from "@/lib/schema"
import { Form } from "@/components/ui/form"
import { InputField } from "@/components/common/input-field"
import { FileField } from "@/components/common/file-field"
import { LoadingButton } from "@/components/common/loading-button"
import { Editor } from "@tinymce/tinymce-react"

import { zodResolver } from "@hookform/resolvers/zod"
import { showResponse, validateFile } from "@/lib/utils"
import { z } from "zod"

import { createBlogAction } from "@/actions/blogs"
import { toast } from "react-toastify"
import { adminRoutes } from "@/lib/routes"
import { Textarea } from "@/components/ui/textarea"

type TMutation = {
  data: z.infer<typeof BlogSchema.Create>
  file: File | null
  blogContent: string
}

export const CreateBlogForm = () => {
  const [file, setFile] = useState<File | null>(null)
  const [blogContent, setBlogContent] = useState<string>("")
  const [filePreview, setFilePreview] = useState<string>("/bg.jpg")

  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(BlogSchema.Create),
    defaultValues: {
      title: "",
      shortText: ""
    }
  })

  const handleEditorChange = (value: any) => {
    setBlogContent(value)
  }

  const updateMutation = useMutation({
    mutationFn: ({ data, file, blogContent }: TMutation) =>
      createBlogAction(data, file, blogContent),
    onSuccess: (data) =>
      showResponse(data, () => {
        router.push(adminRoutes.blogs.root)
      }),
    onError: (error) => {
      console.log({ error })
    }
  })

  const handleSubmit = () => {
    const validation = validateFile(file)
    if (validation.error) {
      toast.error(validation.message)
      return
    }
    updateMutation.mutate({ data: form.getValues(), file, blogContent })
  }

  return (
    <div className="grid xl:grid-cols-5 gap-4">
      <div className="xl:col-span-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <InputField name="title" label="العنوان" control={form.control} />
            <InputField name="shortText" label="الوصف القصير" control={form.control} isTextarea />
            <Textarea
              placeholder="الوصف"
              onChange={(event) => setBlogContent(event.target.value)}
            />
            <FileField setPreviewUrl={setFilePreview} label="الصورة" onChange={setFile} />
            <LoadingButton loading={updateMutation.isPending}>انشاء</LoadingButton>
          </form>
        </Form>
      </div>

      <div className="xl:col-span-2">
        <h3 className="text-3xl font-bold mb-4 mt-4">صورة المقالة</h3>
        <Image
          className="w-full h-auto rounded-xl"
          src={filePreview}
          alt="Image"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}
