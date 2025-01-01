"use client"

import Image from "next/image"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

import { LoadingButton } from "@/components/common/loading-button"
import { InputField } from "@/components/common/input-field"
import { BlogSchema } from "@/lib/schema"
import { FileField } from "@/components/common/file-field"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Form } from "@/components/ui/form"
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
  keywords: string
}

export const UpdateBlogForm = ({ blog }: { blog: Blog }) => {
  const [file, setFile] = useState<File | null>(null)
  const [blogContent, setBlogContent] = useState<string>(blog.blog_content)
  const [filePreview, setFilePreview] = useState<string>(blog.image_url || "/bg.jpg")
  const [keywords, setKeywords] = useState<string>(blog.keywords)

  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(BlogSchema.Create),
    defaultValues: {
      title: blog.title,
      shortText: blog.short_text
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data, file, blogContent, defaultImageUrl, keywords }: TMutation) =>
      updateBlogAction(blog.id, data, defaultImageUrl, file, blogContent, keywords),
    onSuccess: (data) =>
      showResponse(data, () => {
        if (data.status === 200) {
          router.push(adminRoutes.blogs.root)
        }
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
      defaultImageUrl: blog.image_url,
      blogContent,
      keywords
    })
  }

  return (
    <div className='grid xl:grid-cols-5 gap-4'>
      <div className='xl:col-span-3'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4'>
            <InputField name='title' label='العنوان' control={form.control} />
            <InputField name='shortText' label='الوصف القصير' control={form.control} isTextarea />
            <div>
              <Label className='mb-1'>الوصف العام للمقالة</Label>
              <Textarea
                className='h-44'
                onChange={(event) => setBlogContent(event.target.value)}
                defaultValue={blog.blog_content}
              />
            </div>
            <div>
              <Label className='mb-1'>الكلمات الدلالية</Label>
              <Input value={keywords} onChange={(e) => setKeywords(e.target.value)} />
              <p className='text-xs text-gray-500 mt-1'>اكتب الكلمات الدلالية بينها فاصلة.</p>
            </div>
            <FileField setPreviewUrl={setFilePreview} label='الصورة' onChange={setFile} />
            <LoadingButton loading={updateMutation.isPending}>تعديل</LoadingButton>
          </form>
        </Form>
      </div>

      <div className='xl:col-span-2'>
        <h3 className='text-3xl font-bold mb-4 mt-4'>صورة المقالة</h3>
        <Image
          className='w-full h-auto rounded-xl'
          src={filePreview}
          alt='Image'
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}
