import { TriangleAlert } from "lucide-react"
import Link from "next/link"

export const NotLoggedInAlert = () => {
  return (
    <div className='border flex gap-4 items-center p-2 rounded-md shadow-sm'>
      <TriangleAlert size={17} className='text-red-500' />
      يجب عليك تسجيل الدخول اولا حتى تكمل.{" "}
      <Link href='/login' className='text-blue-600'>
        تسجيل الدخول
      </Link>
    </div>
  )
}
