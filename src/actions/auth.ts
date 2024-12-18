"use server"

import { UserSchema } from "@/lib/schema"
import { z } from "zod"

export async function createUserAction(data: z.infer<typeof UserSchema.Create>) {
  return {
    message: "Hello",
    status: 200,
    data: {
      message: "User created successfully",
      data: data
    }
  }
}
