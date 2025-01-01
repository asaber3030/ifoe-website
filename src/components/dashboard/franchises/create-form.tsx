"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { createFranchiseAction } from "@/actions/franchises"
import { showResponse, validateFile } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-toastify"
import { z } from "zod"

import { FranchiseSchema } from "@/lib/schema"
import { Category, Country, Unit } from "@/types"
import { Form } from "@/components/ui/form"
import { InputField } from "@/components/common/input-field"
import { SelectField } from "@/components/common/select-field"
import { SelectItem } from "@/components/ui/select"
import { FileField } from "@/components/common/file-field"
import { LoadingButton } from "@/components/common/loading-button"
import { Button } from "@/components/ui/button"

type Props = {
  categories: Category[]
  countries: Country[]
  units: Unit[]
}

type TMutation = {
  data: z.infer<typeof FranchiseSchema.Create>
  file: File | null
  video: File | null
}

export const CreateFranchiseForm = ({ categories, countries, units }: Props) => {
  const [file, setFile] = useState<File | null>(null)
  const [video, setVideo] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string>("/bg.jpg")

  const form = useForm({
    resolver: zodResolver(FranchiseSchema.Create)
  })

  const createMutation = useMutation({
    mutationFn: ({ data, file, video }: TMutation) => createFranchiseAction(data, file, video),
    onSuccess: (data) =>
      showResponse(data, () => {
        if (data.status === 201 || data.status === 200) {
          form.reset()
          setFile(null)
          setVideo(null)
        }
      })
  })

  const handleSubmit = () => {
    const validation = validateFile(file)
    if (validation.error) {
      toast.error(validation.message)
      return
    }
    createMutation.mutate({
      data: form.getValues() as z.infer<typeof FranchiseSchema.Create>,
      file,
      video
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4'>
        <InputField name='name' label='الاسم' control={form.control} />
        <InputField isTextarea name='description' label='الوصف' control={form.control} />
        <InputField
          name='number_of_branches'
          label='عدد الفروع'
          control={form.control}
          valuseAsNumber
          type='number'
        />
        <InputField
          valuseAsNumber
          name='number_of_labors'
          label='عدد الموظفين'
          control={form.control}
          type='number'
        />
        <InputField
          valuseAsNumber
          name='establish_year'
          label='تاريخ الانشاء'
          control={form.control}
          type='number'
        />

        <InputField name='center_office' label='مركز المكتب' control={form.control} />

        {/* Categories & Countries */}
        <div className='grid xl:grid-cols-2 grid-cols-1 gap-4'>
          <SelectField valueAsNumber name='category_id' control={form.control} label='القسم'>
            {categories.map((category) => (
              <SelectItem key={`category-${category.id}`} value={category.id.toString()}>
                {category.name}
              </SelectItem>
            ))}
          </SelectField>

          <SelectField valueAsNumber name='country_id' control={form.control} label='الدولة'>
            {countries.map((country) => (
              <SelectItem key={`country-${country.id}`} value={country.id.toString()}>
                {country.name}
              </SelectItem>
            ))}
          </SelectField>
        </div>

        <div className='grid grid-cols-1 gap-4'>
          {/* Space */}
          <div className='grid xl:grid-cols-5 grid-cols-1 gap-2'>
            <div className='col-span-1'>
              <SelectField
                valueAsNumber
                name='space_required.unit_id'
                control={form.control}
                label='الوحدة'
              >
                {units.map((unit) => (
                  <SelectItem key={`space-unit-${unit.id}`} value={unit.id.toString()}>
                    {unit.name}
                  </SelectItem>
                ))}
              </SelectField>
            </div>
            <div className='col-span-4'>
              <InputField
                name='space_required.value'
                label='قيمة وحدة المساحات'
                control={form.control}
                valuseAsNumber
                type='number'
              />
            </div>
          </div>

          {/* Equipment */}
          <div className='grid xl:grid-cols-5 grid-cols-1 gap-2'>
            <div className='col-span-1'>
              <SelectField
                valueAsNumber
                name='equipment_cost.unit_id'
                control={form.control}
                label='الوحدة'
              >
                {units.map((unit) => (
                  <SelectItem key={`equipment-unit-${unit.id}`} value={unit.id.toString()}>
                    {unit.name}
                  </SelectItem>
                ))}
              </SelectField>
            </div>
            <div className='col-span-4'>
              <InputField
                name='equipment_cost.value'
                label='تكلفة الادوات'
                control={form.control}
                valuseAsNumber
                type='number'
              />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4'>
          <div className='grid xl:grid-cols-5 grid-cols-1 gap-2'>
            <div className='col-span-1'>
              <SelectField
                valueAsNumber
                name='training_period.unit_id'
                control={form.control}
                label='الوحدة'
              >
                {units.map((unit) => (
                  <SelectItem key={`training_period-unit-${unit.id}`} value={unit.id.toString()}>
                    {unit.name}
                  </SelectItem>
                ))}
              </SelectField>
            </div>
            <div className='col-span-4'>
              <InputField
                name='training_period.value'
                label='تكلفة فترة التدريب'
                control={form.control}
                valuseAsNumber
                type='number'
              />
            </div>
          </div>

          <div className='grid xl:grid-cols-5 grid-cols-1 gap-2'>
            <div className='col-span-1'>
              <SelectField
                valueAsNumber
                name='contract_period.unit_id'
                control={form.control}
                label='الوحدة'
              >
                {units.map((unit) => (
                  <SelectItem key={`contract_period-unit-${unit.id}`} value={unit.id.toString()}>
                    {unit.name}
                  </SelectItem>
                ))}
              </SelectField>
            </div>
            <div className='col-span-4'>
              <InputField
                name='contract_period.value'
                label='تكلفة الادوات'
                control={form.control}
                valuseAsNumber
                type='number'
              />
            </div>
          </div>
        </div>

        <div className='border p-4 rounded-md bg-white shadow-md'>
          <h1 className='text-lg mb-4'>خصائص الخدمات</h1>

          <div className='grid xl:grid-cols-2 grid-cols-1 gap-4'>
            <InputField
              name='franchise_characteristics.franchise_fees'
              label='تكلفة الامتياز'
              control={form.control}
            />
            <InputField
              name='franchise_characteristics.royalty_fees'
              label='رسوم الامتياز'
              control={form.control}
            />
            <InputField
              name='franchise_characteristics.marketing_fees'
              label='تكلفة التسويق'
              control={form.control}
            />
            <InputField
              name='franchise_characteristics.investments_cost'
              label='تكلفة الاستثمار'
              control={form.control}
            />
          </div>
        </div>

        <FileField setPreviewUrl={setFilePreview} label='الصورة' onChange={setFile} />
        <FileField accept='video/mp4,video/x-m4v,video/*' label='الفيديو' onChange={setVideo} />

        <LoadingButton loading={createMutation.isPending}>انشاء</LoadingButton>
      </form>
    </Form>
  )
}
