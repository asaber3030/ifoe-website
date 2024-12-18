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
  category_id: number
  category_name: string
}

export type Country = {
  country_id: number
  country_name: string
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
  blog_id: number
  title: string
  short_text: string
  blog_content: string
  image_url: string
}

export type Partner = {
  id: number
  name: string
  image_url: string
}
