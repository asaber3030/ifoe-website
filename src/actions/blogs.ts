"use server"

import { APIResponse, Blog, PaginatedData } from "@/types"
import { BlogSchema } from "@/lib/schema"

import { API_URL } from "@/lib/constants"

import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { revalidatePath } from "next/cache"
import { adminRoutes } from "@/lib/routes"
import { v4 as uuid } from "uuid"
import { storage } from "@/services/firebase"
import { z } from "zod"
import { getAuthorizationToken } from "./app"
import { actionResponse, defaultHeaders } from "@/lib/utils"

export async function getBlogs(page?: number): Promise<PaginatedData<Blog[]> | undefined> {
  try {
    const res = await fetch(`${API_URL}/blogs` + (page && page > 0 ? `?page=${page}` : ""))
    const data: APIResponse<PaginatedData<Blog[]>> = await res.json()
    return data.data
  } catch (error) {
    return undefined
  }
}

export async function getBlog(blogId: number) {
  const res = await fetch(`${API_URL}/blogs/${blogId}`)
  const data: APIResponse<Blog> = await res.json()
  return {
    blog: data.data
  }
}

export async function createBlogAction(
  data: z.infer<typeof BlogSchema.Create>,
  file: File | null,
  blogContent: string
): Promise<APIResponse<any>> {
  try {
    const storageRef = ref(storage, `blogs/${uuid()}`)
    const uploaded = await uploadBytes(storageRef, file as any)
    const imageUrl = await getDownloadURL(storageRef)

    const token = await getAuthorizationToken()

    const response = await fetch(`${API_URL}/blogs`, {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        short_text: data.shortText,
        image_url: imageUrl,
        blog_content: blogContent
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })

    const res: APIResponse<any> = await response.json()
    return res
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function updateBlogAction(
  blogId: number,
  data: z.infer<typeof BlogSchema.Create>,
  defaultImageUrl: string,
  file: File | null,
  blogContent: string
): Promise<APIResponse<any>> {
  let imageUrl = defaultImageUrl

  if (file) {
    const storageRef = ref(storage, `blogs/${uuid()}`)
    const uploaded = await uploadBytes(storageRef, file as any)
    imageUrl = await getDownloadURL(storageRef)
  }

  try {
    const token = await getAuthorizationToken()
    const response = await fetch(`${API_URL}/blogs/${blogId}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: data.title,
        short_text: data.shortText,
        image_url: imageUrl,
        blog_content: blogContent
      }),
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })

    const res: APIResponse<any> = await response.json()
    return res
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}

export async function deleteBlogAction(blogId: number): Promise<APIResponse<any>> {
  try {
    const token = await getAuthorizationToken()
    const response = await fetch(`${API_URL}/blogs/${blogId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.blogs.root)
    const data: APIResponse<any> = await response.json()
    return data
  } catch (error) {
    return actionResponse("حدث خطأ ما", 500)
  }
}
