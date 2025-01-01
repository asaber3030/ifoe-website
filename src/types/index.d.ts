// Types
export type APIResponse<T> = {
  status: number
  message: string
  data: T
}

export type Status = "Pending" | "Approved" | "Rejected"

type ErrorResponse = {
  type: string
  title: string
  status: number
  traceId: string
}

type PagniationLink = {
  url: string | null
  label: string
  active: boolean
}

type PaginatedData<T> = {
  current_page: number
  data: T
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: PagniationLink[]
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

// Schema

export type User = {
  id: number
  name: string
  email: string
  role_id: number
  role?: Role
}

export type Role = {
  id: number
  name: string
}

export type FranchiseImage = {
  id: number
  franchise_id: number
  image_url: string
}

export type SpaceRequired = {
  id: number
  value: number
  unit_id: number
  unit: Unit
}

export type ContractPeriod = {
  id: number
  value: number
  unit_id: number
  unit: Unit
}

export type EquipmentCost = {
  id: number
  value: number
  unit_id: number
  unit: Unit
}

export type FranchiseCharacteristics = {
  id: number
  franchise_fees: string
  royalty_fees: string
  marketing_fees: string
  investments_cost: string
}

export type Category = {
  id: number
  name: string
}

export type Unit = {
  id: number
  name: string
}

export type Country = {
  id: number
  name: string
  franchises: Franchise[]
}

export type TrainingPeriod = {
  id: number
  value: number
  unit_id: number
  unit: Unit
}

export type Franchise = {
  id: number
  name: string
  description: string
  equipment_cost_id: number
  category_id: number
  country_id: number
  image_url: string
  video_url: string
  number_of_branches: number
  space_required_id: number
  number_of_labors: number
  training_period_id: number
  establish_year: number
  center_office: string
  franchise_characteristics_id: number
  contract_period_id: number

  category: Category
  country: Country
  space_required: SpaceRequired
  training_period: TrainingPeriod
  franchise_characteristic: FranchiseCharacteristics
  contract_period: ContractPeriod
  added_by: User
  equipment_cost: EquipmentCost
}

export type FranchiseType = {
  id: number
  franchise_type: string
  city_of_opening: string
  confirmation: boolean
  deleted_at: Date | null
}

export type Blog = {
  id: number
  title: string
  short_text: string
  blog_content: string
  keywords: string
  image_url: string
  created_at: Date
  updated_at: Date
  deleted_at: Date | null
}

export type Partner = {
  id: number
  name: string
  image_url: string
}

type FranchiseRequest = {
  id: number
  user_id: number
  franchise_id: number
  user?: User
  full_name: string
  phone: string
  country_id: number
  city: string
  company_name: string
  business_type: string
  have_experience: boolean
  franchise_type_id: number
  status: "Active" | "Inactive" | "Pending"

  franchise: Franchise
  franchise_type: FranchiseType
  country: Country
}

type RequestHistory = {
  id: number
  franchise_request_id: number
  status: string
  changed_at: string
  changed_by: number
  remarks: string
}
