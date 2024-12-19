// Types
export type APIResponse<T> = {
  status: number
  message: string
  data?: T
}

type ErrorResponse = {
  type: string
  title: string
  status: number
  traceId: string
}

// Schema

export type FranchiseImage = {
  franchise_images_id: number
  franchise_id: number
  image_url: number
}

export type SpaceRequired = {
  space_required_id: number
  value: number
  unit: any
}

export type ContractPeriod = {
  contract_period_id: number
  value: number
  unit: any
}

export type EquipmentCost = {
  equipment_cost_id: number
  value: number
  unit: any
}

export type FranchiseCharacteristics = {
  franchise_characteristics_id: number
  franchise_fees: string
  royalty_fees: string
  marketing_fees: string
  investments_cost: string
}

export type Category = {
  categoryId: number
  categoryName: string
}

export type Country = {
  countryId: number
  countryName: string
  franchises: Franchise[]
}

export type TrainingPeriod = {
  id: number
  value: number
  unit: any
}

export type Franchise = {
  franchise_id: number
  name: string
  description: string
  equipment_cost_id: number
  category_id: number
  country_id: number
  image_url: string
  number_of_branches: number
  space_required_id: number
  number_of_labors: number
  training_period_id: number
  establish_year: Date
  center_office: string
  franchise_characteristics_id: number
  contract_period_id: number
}

export type FranchiseRequest = {
  franchise_request_id: number
  franchise_id: number
  full_name: string
  phone: string
  country_id: number
  city: string
  company_name: string
  business_type: any
  have_experience: boolean
  franchise_type_id: number
}

export type FranchiseType = {
  franchise_type_id: number
  franchise_type: any
  city_of_opening: string
  confirmation: boolean
}

export type Blog = {
  blogId: number
  title: string
  shortText: string
  blogContent: string
  imageUrl: string
}

export type Partner = {
  id: number
  name: string
  imageUrl: string
}
