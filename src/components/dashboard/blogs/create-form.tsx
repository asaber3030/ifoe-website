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
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import { showResponse, validateFile } from "@/lib/utils"
import { createBlogAction } from "@/actions/blogs"
import { zodResolver } from "@hookform/resolvers/zod"
import { adminRoutes } from "@/lib/routes"
import { toast } from "react-toastify"
import { z } from "zod"

type TMutation = {
  data: z.infer<typeof BlogSchema.Create>
  file: File | null
  blogContent: string
  keywords: string
}

export const CreateBlogForm = () => {
  const [file, setFile] = useState<File | null>(null)
  const [blogContent, setBlogContent] = useState<string>("")
  const [filePreview, setFilePreview] = useState<string>("/bg.jpg")
  const [keywords, setKeywords] = useState<string>("")

  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(BlogSchema.Create),
    defaultValues: {
      title: "",
      shortText: ""
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data, file, blogContent, keywords }: TMutation) =>
      createBlogAction(data, file, blogContent, keywords),
    onSuccess: (data) =>
      showResponse(data, () => {
        router.push(adminRoutes.blogs.root)
      }),
    onError: (error) => {
      console.error({ error })
    }
  })

  const handleSubmit = () => {
    const validation = validateFile(file)
    if (validation.error) {
      toast.error(validation.message)
      return
    }
    updateMutation.mutate({ data: form.getValues(), file, blogContent, keywords })
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
              <Textarea className='h-44' onChange={(event) => setBlogContent(event.target.value)} />
            </div>

            <div>
              <Label className='mb-1'>الكلمات الدلالية</Label>
              <Input value={keywords} onChange={(e) => setKeywords(e.target.value)} />
              <p className='text-xs text-gray-500 mt-1'>اكتب الكلمات الدلالية بينها فاصلة.</p>
            </div>

            <div className='flex flex-wrap gap-1 items-center'>
              {[...new Set(keywords.split(","))].map((keyword, index) => (
                <>
                  {keyword && (
                    <div key={index} className='bg-white rounded-md p-1 text-xs px-2 border'>
                      {keyword}
                    </div>
                  )}
                </>
              ))}
            </div>

            <FileField setPreviewUrl={setFilePreview} label='الصورة' onChange={setFile} />
            <LoadingButton loading={updateMutation.isPending}>انشاء</LoadingButton>
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
