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
  CreateAdmin: z.object({
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
    role_id: z
      .number({ message: "هذا المدخل يجب ان يكون ارقام" })
      .min(0, { message: "لا يمكن اهمال هذا المدخل" })
  }),
  UpdateAdmin: z.object({
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
      .optional(),
    role_id: z
      .number({ message: "هذا المدخل يجب ان يكون ارقام" })
      .min(0, { message: "لا يمكن اهمال هذا المدخل" })
      .optional()
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
      .optional()
  }),
  Password: z.object({
    current_password: z
      .string({ message: "هذا المدخل يجب ان يكون حروف وارقام" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" }),
    new_password: z
      .string()
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .min(8, { message: "كلمة السر يجب ان تكون 8 احرف على الاقل" }),
    new_password_confirmation: z
      .string()
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .min(8, { message: "كلمة السر يجب ان تكون 8 احرف على الاقل" })
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
    description: z.string().min(100, "Description must be at least 100 characters long"),
    category_id: z.number({ required_error: "Required" }).gt(0, "Category is required"),
    country_id: z.number({ required_error: "Required" }).gt(0, "Country is required"),
    number_of_branches: z
      .number({ required_error: "Required" })
      .int("Must be an integer")
      .gt(0, "Required"),
    number_of_labors: z
      .number({ required_error: "Required" })
      .int("Must be an integer")
      .gt(0, "Required"),
    establish_year: z
      .number({ required_error: "Required" })
      .int("Must be an integer")
      .min(1900, "Year must be after 1900")
      .max(new Date().getFullYear(), "Year cannot be in the future"),
    center_office: z.string().nonempty("Center office is required"),
    space_required: z.object({
      unit_id: z.number({ required_error: "Required" }).gt(0),
      value: z.number({ required_error: "Required" }).gt(0)
    }),
    equipment_cost: z.object({
      unit_id: z.number({ required_error: "Required" }).gt(0),
      value: z.number({ required_error: "Required" }).gt(0)
    }),
    training_period: z.object({
      unit_id: z.number({ required_error: "Required" }).gt(0),
      value: z.number({ required_error: "Required" }).gt(0)
    }),
    contract_period: z.object({
      unit_id: z.number({ required_error: "Required" }).gt(0),
      value: z.number({ required_error: "Required" }).gt(0)
    }),
    franchise_characteristics: z.object({
      franchise_fees: z
        .union([z.string(), z.number()])
        .transform((value) => {
          return typeof value === "string" ? parseFloat(value) : value
        })
        .refine((value) => !isNaN(value), {
          message: "The value must be a valid number"
        }),
      royalty_fees: z
        .union([z.string(), z.number()])
        .transform((value) => {
          return typeof value === "string" ? parseFloat(value) : value
        })
        .refine((value) => !isNaN(value), {
          message: "The value must be a valid number"
        }),
      marketing_fees: z
        .union([z.string(), z.number()])
        .transform((value) => {
          return typeof value === "string" ? parseFloat(value) : value
        })
        .refine((value) => !isNaN(value), {
          message: "The value must be a valid number"
        }),
      investments_cost: z
        .union([z.string(), z.number()])
        .transform((value) => {
          return typeof value === "string" ? parseFloat(value) : value
        })
        .refine((value) => !isNaN(value), {
          message: "The value must be a valid number"
        })
    })
  }),

  Update: z.object({
    name: z.string().min(1, "Name is required").optional(),
    description: z.string().optional(),
    category_id: z.number().optional(),
    country_id: z.number().optional(),
    image_url: z.string().url("Invalid URL format").optional(),
    number_of_branches: z.number().int("Must be an integer").optional(),
    number_of_labors: z.number().int("Must be an integer").optional(),
    establish_year: z
      .number()
      .int("Must be an integer")
      .min(1900, "Year must be after 1900")
      .max(new Date().getFullYear(), "Year cannot be in the future")
      .optional(),
    center_office: z.string().optional(),
    added_by: z.number().optional(),
    space_required: z
      .object({
        unit_id: z.number().optional(),
        value: z.number().optional()
      })
      .optional(),
    equipment_cost: z
      .object({
        unit_id: z.number().optional(),
        value: z.number().optional()
      })
      .optional(),
    training_period: z
      .object({
        unit_id: z.number().optional(),
        value: z.number().optional()
      })
      .optional(),
    contract_period: z
      .object({
        unit_id: z.number().optional(),
        value: z.number().optional()
      })
      .optional(),
    franchise_characteristics: z
      .object({
        franchise_fees: z.string().transform((v) => Number(v)),
        royalty_fees: z.string().transform((v) => Number(v)),
        marketing_fees: z.string().transform((v) => Number(v)),
        investments_cost: z.string().transform((v) => Number(v))
      })
      .optional()
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

export const ContactSchema = z.object({
  firstName: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }),
  lastName: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }),
  email: z
    .string()
    .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
    .email({ message: "البريد الالكتروني غير صحيح" }),
  message: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" }),
  subject: z.string().nonempty({ message: "لا يمكن اهمال هذا المدخل" })
})
