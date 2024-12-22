"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { showResponse, validateFile } from "@/lib/utils"
import { z } from "zod"

import { FranchiseSchema } from "@/lib/schema"
import { Form } from "@/components/ui/form"
import { InputField } from "@/components/common/input-field"
import { Button } from "@/components/ui/button"
import { SelectField } from "@/components/common/select-field"
import { SelectItem } from "@/components/ui/select"
import {
  Category,
  ContractPeriod,
  Country,
  EquipmentCost,
  FranchiseCharacteristics,
  SpaceRequired,
  TrainingPeriod
} from "@/types"
import { createFranchiseAction } from "@/actions/franchises"
import { useState } from "react"
import { FileField } from "@/components/common/file-field"
import { toast } from "react-toastify"
import { LoadingButton } from "@/components/common/loading-button"

type Props = {
  equipments: EquipmentCost[]
  categories: Category[]
  countries: Country[]
  spaces: SpaceRequired[]
  trainings: TrainingPeriod[]
  characteristics: FranchiseCharacteristics[]
  contracts: ContractPeriod[]
}

type TMutation = {
  data: z.infer<typeof FranchiseSchema.Create>
  file: File | null
}

export const CreateFranchiseForm = ({
  equipments,
  categories,
  characteristics,
  countries,
  spaces,
  trainings,
  contracts
}: Props) => {
  const [file, setFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string>("/bg.jpg")

  const form = useForm({
    resolver: zodResolver(FranchiseSchema.Create),
    defaultValues: {
      name: "",
      description: "",
      equipment_cost_id: 0,
      category_id: 0,
      country_id: 0,
      number_of_branches: 0,
      space_required_id: 0,
      number_of_labors: 0,
      training_period_id: 0,
      establish_year: 0,
      center_office: "",
      franchise_characteristics_id: 0,
      contract_period_id: 0
    }
  })

  const createMutation = useMutation({
    mutationFn: ({ data, file }: TMutation) => createFranchiseAction(data, file),
    onSuccess: (data) => showResponse(data)
  })

  const handleSubmit = () => {
    const validation = validateFile(file)
    if (validation.error) {
      toast.error(validation.message)
      return
    }
    createMutation.mutate({
      data: form.getValues(),
      file
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <InputField name="name" label="الاسم" control={form.control} />
        <InputField name="description" label="الوصف" control={form.control} />
        <InputField
          name="number_of_branches"
          label="number_of_branches"
          control={form.control}
          valuseAsNumber
        />
        <InputField
          valuseAsNumber
          name="number_of_labors"
          label="number_of_labors"
          control={form.control}
        />
        <InputField
          valuseAsNumber
          name="establish_year"
          label="establish_year"
          control={form.control}
        />
        <InputField name="center_office" label="center_office" control={form.control} />

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
          <SelectField valueAsNumber name="category_id" control={form.control} label="القسم">
            {categories.map((category) => (
              <SelectItem key={`category-${category.id}`} value={category.id.toString()}>
                {category.name}
              </SelectItem>
            ))}
          </SelectField>

          <SelectField valueAsNumber name="country_id" control={form.control} label="الدولة">
            {countries.map((country) => (
              <SelectItem key={`country-${country.id}`} value={country.id.toString()}>
                {country.name}
              </SelectItem>
            ))}
          </SelectField>
        </div>

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
          <SelectField
            valueAsNumber
            name="equipment_cost_id"
            control={form.control}
            label="تكلفة الادوات"
          >
            {equipments.map((equipment) => (
              <SelectItem key={`equipment-${equipment.id}`} value={equipment.id.toString()}>
                {equipment.unit.name} / {equipment.value}
              </SelectItem>
            ))}
          </SelectField>

          <SelectField
            valueAsNumber
            name="space_required_id"
            control={form.control}
            label="المساحة المطلوبة"
          >
            {spaces.map((space) => (
              <SelectItem key={`space-${space.id}`} value={space.id.toString()}>
                {space.unit.name} / {space.value}
              </SelectItem>
            ))}
          </SelectField>
        </div>

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
          <SelectField
            valueAsNumber
            name="training_period_id"
            control={form.control}
            label="فترة التدريب"
          >
            {trainings.map((training) => (
              <SelectItem key={`training-${training.id}`} value={training.id.toString()}>
                {training.unit.name} / {training.value}
              </SelectItem>
            ))}
          </SelectField>

          <SelectField
            valueAsNumber
            name="contract_period_id"
            control={form.control}
            label="فترة العقد"
          >
            {contracts.map((contract) => (
              <SelectItem key={`contract-${contract.id}`} value={contract.id.toString()}>
                {contract.unit.name} / {contract.value}
              </SelectItem>
            ))}
          </SelectField>
        </div>

        <SelectField
          valueAsNumber
          name="franchise_characteristics_id"
          control={form.control}
          label="خصائص الخدمة"
        >
          {characteristics.map((ch) => (
            <SelectItem key={`ch-${ch.id}`} value={ch.id.toString()}>
              #{ch.id}
            </SelectItem>
          ))}
        </SelectField>

        <FileField setPreviewUrl={setFilePreview} label="الصورة" onChange={setFile} />

        <LoadingButton loading={createMutation.isPending}>انشاء</LoadingButton>
      </form>
    </Form>
  )
}
