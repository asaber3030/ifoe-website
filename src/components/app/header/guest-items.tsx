import Link from "next/link"

import { LogIn, UserPlus } from "lucide-react"

export const HeaderGuestItems = () => {
  return (
    <div className='flex gap-2'>
      <Link
        href='/register'
        className='text-gray-600 flex items-center text-sm gap-2 border rounded-md hover:bg-gray-100 p-2'
      >
        <UserPlus size={17} />
        انضم الآن
      </Link>

      <Link
        href='/login'
        className='text-gray-600 flex items-center text-sm gap-2 border rounded-md hover:bg-gray-100 p-2'
      >
        <LogIn size={17} />
        تسجيل الدخول
      </Link>
    </div>
  )
}
