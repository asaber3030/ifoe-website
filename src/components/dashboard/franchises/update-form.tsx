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
  Franchise,
  FranchiseCharacteristics,
  SpaceRequired,
  TrainingPeriod
} from "@/types"
import { updateFranchiseAction } from "@/actions/franchises"
import { useState } from "react"
import { FileField } from "@/components/common/file-field"
import { toast } from "react-toastify"
import { LoadingButton } from "@/components/common/loading-button"

type Props = {
  franchise: Franchise
  equipments: EquipmentCost[]
  categories: Category[]
  countries: Country[]
  spaces: SpaceRequired[]
  trainings: TrainingPeriod[]
  characteristics: FranchiseCharacteristics[]
  contracts: ContractPeriod[]
}

type TMutation = {
  data: z.infer<typeof FranchiseSchema.Update>
  file: File | null
}

export const UpdateFranchiseForm = ({
  franchise,
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
    resolver: zodResolver(FranchiseSchema.Update),
    defaultValues: {
      name: franchise.name,
      description: franchise.description,
      equipment_cost_id: franchise.equipment_cost_id,
      category_id: franchise.category_id,
      country_id: franchise.country_id,
      number_of_branches: franchise.number_of_branches,
      space_required_id: franchise.space_required_id,
      number_of_labors: franchise.number_of_branches,
      training_period_id: franchise.training_period_id,
      establish_year: franchise.establish_year,
      center_office: franchise.center_office,
      franchise_characteristics_id: franchise.franchise_characteristics_id,
      contract_period_id: franchise.contract_period_id
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ data, file }: TMutation) =>
      updateFranchiseAction(franchise.id, data, franchise.image_url, file),
    onSuccess: (data) => showResponse(data)
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
          <SelectField
            defaultValue={franchise.category_id.toString()}
            valueAsNumber
            name="category_id"
            control={form.control}
            label="القسم"
          >
            {categories.map((category) => (
              <SelectItem key={`category-${category.id}`} value={category.id.toString()}>
                {category.name}
              </SelectItem>
            ))}
          </SelectField>

          <SelectField
            defaultValue={franchise.country_id.toString()}
            valueAsNumber
            name="country_id"
            control={form.control}
            label="الدولة"
          >
            {countries.map((country) => (
              <SelectItem key={`country-${country.id}`} value={country.id.toString()}>
                {country.name}
              </SelectItem>
            ))}
          </SelectField>
        </div>

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
          <SelectField
            defaultValue={franchise.equipment_cost_id.toString()}
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
            defaultValue={franchise.space_required_id.toString()}
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
            defaultValue={franchise.training_period_id.toString()}
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
            defaultValue={franchise.contract_period_id.toString()}
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
          defaultValue={franchise.franchise_characteristics_id.toString()}
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

        <LoadingButton loading={updateMutation.isPending}>انشاء</LoadingButton>
      </form>
    </Form>
  )
}
