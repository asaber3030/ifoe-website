import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { toast } from "react-toastify"
import { APIResponse } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function showResponse<T>(data: APIResponse<T>, execute?: () => void) {
  if (data?.status === 200 || data?.status === 201) {
    toast.success(data?.message)
    if (execute) execute()
    return
  }
  toast.error(data?.message)
  if (execute) execute()
  return
}
