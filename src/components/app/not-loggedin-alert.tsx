"use client"

import { useTranslate } from "@/hooks/use-translate"
import { TriangleAlert } from "lucide-react"
import Link from "next/link"

export const NotLoggedInAlert = () => {
  const translate = useTranslate()

  return (
    <div className='border flex gap-4 items-center p-2 rounded-md shadow-sm'>
      <TriangleAlert size={17} className='text-red-500' />
      {translate("youHaveToLogin")}
      <Link href='/login' className='text-blue-600'>
        {translate("login")}
      </Link>
    </div>
  )
}
