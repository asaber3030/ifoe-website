import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { toast } from "react-toastify"
import { APIResponse } from "@/types"
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "./constants"
import { deleteObject, ref } from "firebase/storage"
import { storage } from "@/services/firebase"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function showResponse<T>(data: APIResponse<T>, execute?: () => void) {
  if (data?.status >= 200 && data?.status <= 299) {
    toast.success(data?.message)
    if (execute) execute()
    return
  }
  toast.error(data?.message)
  if (execute) execute()
  return
}

export function validateFile(file: File | null) {
  if (!file) {
    return {
      error: true,
      message: "من فضلك اختار صورة"
    }
  }

  if (file?.size && file?.size >= MAX_FILE_SIZE) {
    return {
      error: true,
      message: "الحجم الأقصى للملف هو 5 ميجا بايت"
    }
  }

  if (!ACCEPTED_IMAGE_TYPES.includes(file?.type)) {
    return {
      error: true,
      message: "نوع الملف غير مدعوم"
    }
  }

  return {
    error: false,
    message: ""
  }
}

export async function deleteFile(filePath: string | null) {
  const storageRef = ref(storage, filePath!)

  try {
    await deleteObject(storageRef)
  } catch (error) {
    console.error(error)
  }
}

export function extractFilePath(url: string): string | null {
  const regex = /https:\/\/firebasestorage\.googleapis\.com\/v0\/b\/[^/]+\/o\/([^?]+)/
  const match = url.match(regex)

  if (match && match[1]) {
    return decodeURIComponent(match[1])
  }

  return null
}

export function defaultHeaders(more: Record<string, string> = {}) {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...more
  }
}

export function actionResponse<T>(message: string, status: number, data?: T): APIResponse<T> {
  return {
    status,
    message: message || "حدث خطأ ما",
    data
  }
}
