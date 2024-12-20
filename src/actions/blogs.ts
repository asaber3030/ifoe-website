"use server"

import { Blog } from "@/types"
import { BlogSchema } from "@/lib/schema"

import { API_URL } from "@/lib/constants"

import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { revalidatePath } from "next/cache"
import { adminRoutes } from "@/lib/routes"
import { v4 as uuid } from "uuid"
import { storage } from "@/services/firebase"
import { z } from "zod"

export async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${API_URL}/blogs`)
    const data = await res.json()
    return data
  } catch (error) {
    return []
  }
}

export async function getBlog(blogId: number) {
  const res = await fetch(`${API_URL}/blogs/${blogId}`)
  const data: Blog = await res.json()
  return {
    blog: data,
    status: res.status
  }
}

export async function createBlogAction(
  data: z.infer<typeof BlogSchema.Create>,
  file: File | null,
  blogContent: string
) {
  const storageRef = ref(storage, `blogs/${uuid()}`)
  const uploaded = await uploadBytes(storageRef, file as any)
  const imageUrl = await getDownloadURL(storageRef)

  const response = await fetch(`${API_URL}/Blogs`, {
    method: "POST",
    body: JSON.stringify({
      BlogId: Math.floor(Math.random() * 1000000),
      Title: data.title,
      ShortText: data.shortText,
      ImageUrl: imageUrl,
      BlogContent: blogContent
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })

  const res = await response.json()

  if (!response.ok) {
    return {
      status: response.status,
      message: res?.title || "حدث خطأ ما"
    }
  }

  return {
    status: response.status,
    message: "تم انشاء المدونة بنجاح"
  }
}

export async function updateBlogAction(
  blogId: number,
  data: z.infer<typeof BlogSchema.Create>,
  defaultImageUrl: string,
  file: File | null,
  blogContent: string
) {
  let imageUrl = defaultImageUrl

  if (file) {
    const storageRef = ref(storage, `blogs/${uuid()}`)
    const uploaded = await uploadBytes(storageRef, file as any)
    imageUrl = await getDownloadURL(storageRef)
  }

  const response = await fetch(`${API_URL}/Blogs/${blogId}`, {
    method: "PUT",
    body: JSON.stringify({
      BlogId: blogId,
      Title: data.title,
      ShortText: data.shortText,
      ImageUrl: imageUrl,
      BlogContent: blogContent
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const res = await response.json()

  if (!response.ok) {
    return {
      status: response.status,
      message: res?.title || "حدث خطأ ما"
    }
  }

  return {
    status: response.status,
    message: "تم انشاء المدونة بنجاح"
  }
}

export async function deleteBlogAction(blogId: number) {
  const response = await fetch(`${API_URL}/Blogs/${blogId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Id: blogId
    })
  })
  revalidatePath(adminRoutes.blogs.root)
  const data = await response.json()

  if (!response.ok) {
    return {
      status: response.status,
      message: data?.title || "حدث خطأ ما"
    }
  }

  return {
    status: response.status,
    message: "تم حذف الشريك بنجاح"
  }
}
