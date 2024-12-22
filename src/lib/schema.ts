import z from "zod"

export const UserSchema = {
  Create: z.object({
    name: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" }),
    email: z
      .string()
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .email({ message: "البريد الالكتروني غير صحيح" }),
    password: z
      .string()
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .min(8, { message: "كلمة السر يجب ان تكون 8 احرف على الاقل" }),
    remember: z.boolean().optional()
  }),
  Login: z.object({
    email: z
      .string()
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .email({ message: "البريد الالكتروني غير صحيح" }),
    password: z
      .string()
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .min(8, { message: "كلمة السر يجب ان تكون 8 احرف على الاقل" }),
    remember: z.boolean().optional()
  }),
  Update: z.object({
    name: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .optional(),
    email: z
      .string()
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .email({ message: "البريد الالكتروني غير صحيح" })
      .optional(),
    password: z
      .string()
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .min(8, { message: "كلمة السر يجب ان تكون 8 احرف على الاقل" })
      .optional()
  })
}

export const BlogSchema = {
  Create: z.object({
    title: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" }),
    shortText: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" })
  }),
  Update: z.object({
    title: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .optional(),
    shortText: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }).optional()
  })
}

export const CountrySchema = {
  Create: z.object({
    name: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
  }),

  Update: z.object({
    name: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .optional()
  })
}

export const CategorySchema = {
  Create: z.object({
    name: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
  }),

  Update: z.object({
    name: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .optional()
  })
}

export const PartnerSchema = {
  Create: z.object({
    name: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
  }),
  Update: z.object({
    name: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .optional()
  })
}

export const UnitSchema = {
  Create: z.object({
    name: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
  }),
  Update: z.object({
    name: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .optional()
  })
}

export const UnitCreateSchema = {
  Create: z.object({
    value: z.number({ message: "يجب ان يكون رقم" }).min(0, { message: "لا يمكن ان يكون 0" }),
    unit_id: z
      .number({ message: "هذا المدخل يجب ان يكون ارقام" })
      .min(0, { message: "لا يمكن اهمال هذا المدخل" })
  }),
  Update: z.object({
    value: z
      .number({ message: "يجب ان يكون رقم" })
      .min(0, { message: "لا يمكن ان يكون 0" })
      .optional(),
    unit_id: z
      .number({ message: "هذا المدخل يجب ان يكون ارقام" })
      .min(0, { message: "لا يمكن اهمال هذا المدخل" })
      .optional()
  })
}

export const FranchiesCharacteristicsSchema = {
  Create: z.object({
    franchiseFees: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }),
    royaltyFees: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }),
    marketingFees: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }),
    investmentsCost: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" })
  }),
  Update: z.object({
    franchiseFees: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }).optional(),
    royaltyFees: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }).optional(),
    marketingFees: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }).optional(),
    investmentsCost: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }).optional()
  })
}

export const FranchiesTypeSchema = {
  Create: z.object({
    franchiseType: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }),
    cityOfOpening: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }),
    confirmation: z.boolean().optional()
  }),
  Update: z.object({
    franchiseType: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }).optional(),
    cityOfOpening: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }).optional(),
    confirmation: z.boolean().optional()
  })
}

export const FranchiseSchema = {
  Create: z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string(),
    equipment_cost_id: z.number(),
    category_id: z.number(),
    country_id: z.number(),
    number_of_branches: z.number().int("Must be an integer"),
    space_required_id: z.number(),
    number_of_labors: z.number().int("Must be an integer"),
    training_period_id: z.number(),
    establish_year: z
      .number()
      .int("Must be an integer")
      .min(1900, "Year must be after 1900")
      .max(new Date().getFullYear(), "Year cannot be in the future"),
    center_office: z.string(),
    franchise_characteristics_id: z.number(),
    contract_period_id: z.number()
  }),

  Update: z.object({
    name: z.string().min(1, "Name is required").optional(),
    description: z.string().optional(),
    equipment_cost_id: z.number().optional(),
    category_id: z.number().optional(),
    country_id: z.number().optional(),
    number_of_branches: z.number().int("Must be an integer").optional(),
    space_required_id: z.number().optional(),
    number_of_labors: z.number().int("Must be an integer").optional(),
    training_period_id: z.number().optional(),
    establish_year: z
      .number()
      .int("Must be an integer")
      .min(1900, "Year must be after 1900")
      .max(new Date().getFullYear(), "Year cannot be in the future")
      .optional(),
    center_office: z.string().optional(),
    franchise_characteristics_id: z.number().optional(),
    contract_period_id: z.number().optional()
  })
}

export const FranchiseRequestSchema = {
  Create: z.object({
    full_name: z.string().min(1, "Full name is required"),
    phone: z.string(),
    country_id: z.number().min(1, "Country ID is required"),
    city: z.string().min(1, "City is required"),
    company_name: z.string(),
    business_type: z.string(),
    have_experience: z.boolean(),
    franchise_type_id: z.number().min(1, "Franchise type ID is required")
  }),

  Update: z.object({
    user_id: z.number().min(1, "User ID is required").optional(),
    franchise_id: z.number().min(1, "Franchise ID is required").optional(),
    full_name: z.string().min(1, "Full name is required").optional(),
    phone: z.string().optional(),
    country_id: z.number().min(1, "Country ID is required").optional(),
    city: z.string().min(1, "City is required").optional(),
    company_name: z.string().optional(),
    business_type: z.string().optional(),
    have_experience: z.boolean().optional(),
    franchise_type_id: z.number().min(1, "Franchise type ID is required").optional()
  })
}

export const RequestHistorySchema = {
  Create: z.object({
    status: z.enum(["Pending", "Approved", "Rejected"]).default("Pending"),
    remarks: z.string().min(1, "Notes are required")
  }),

  Update: z.object({
    status: z.enum(["Pending", "Approved", "Rejected"]).default("Pending").optional(),
    remarks: z.string().min(1, "Notes are required").optional()
  })
}
