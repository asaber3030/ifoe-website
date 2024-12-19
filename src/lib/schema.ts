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
      .min(8, { message: "كلمة السر يجب ان تكون 8 احرف على الاقل" })
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
    countryName: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
  }),

  Update: z.object({
    countryName: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
      .optional()
  })
}

export const CategorySchema = {
  Create: z.object({
    categoryName: z
      .string({ message: "هذا المدخل يجب ان يكون حروف" })
      .nonempty({ message: "لا يمكن اهمال هذا المدخل" })
  }),

  Update: z.object({
    categoryName: z
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
