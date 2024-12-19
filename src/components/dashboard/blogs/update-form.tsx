"use client"

import Image from "next/image"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { LoadingButton } from "@/components/common/loading-button"
import { InputField } from "@/components/common/input-field"
import { BlogSchema } from "@/lib/schema"
import { Form } from "@/components/ui/form"
import { FileField } from "@/components/common/file-field"
import { Editor } from "@tinymce/tinymce-react"
import { Blog } from "@/types"

import { showResponse, validateFile } from "@/lib/utils"
import { updateBlogAction } from "@/actions/blogs"
import { zodResolver } from "@hookform/resolvers/zod"
import { adminRoutes } from "@/lib/routes"
import { toast } from "react-toastify"
import { z } from "zod"

type TMutation = {
  data: z.infer<typeof BlogSchema.Create>
  file: File | null
  blogContent: string
  defaultImageUrl: string
}

export const UpdateBlogForm = ({ blog }: { blog: Blog }) => {
  const [file, setFile] = useState<File | null>(null)
  const [blogContent, setBlogContent] = useState<string>(blog.blogContent)
  const [filePreview, setFilePreview] = useState<string>("/bg.jpg")

  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(BlogSchema.Create),
    defaultValues: {
      title: blog.shortText,
      shortText: blog.shortText
    }
  })

  const handleEditorChange = (value: any) => {
    setBlogContent(value)
  }

  const updateMutation = useMutation({
    mutationFn: ({ data, file, blogContent, defaultImageUrl }: TMutation) =>
      updateBlogAction(blog.blogId, data, defaultImageUrl, file, blogContent),
    onSuccess: (data) =>
      showResponse(data, () => {
        router.push(adminRoutes.blogs.root)
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
    updateMutation.mutate({
      data: form.getValues(),
      file,
      defaultImageUrl: blog.imageUrl,
      blogContent
    })
  }

  return (
    <div className="grid xl:grid-cols-5 gap-4">
      <div className="xl:col-span-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <InputField name="title" label="العنوان" control={form.control} />
            <InputField name="shortText" label="الوصف القصير" control={form.control} isTextarea />
            <Editor
              apiKey="ak97gh8mq9na3matau07b11mq6p4i8th8srwii58ouzmc1yc"
              onEditorChange={handleEditorChange}
              initialValue={blogContent}
              init={{
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat"
              }}
            />
            <FileField setPreviewUrl={setFilePreview} label="الصورة" onChange={setFile} />
            <LoadingButton loading={updateMutation.isPending}>تعديل</LoadingButton>
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
