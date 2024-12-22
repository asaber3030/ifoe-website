import Link from "next/link"

import { LogIn, UserPlus } from "lucide-react"

export const HeaderGuestItems = () => {
  return (
    <div className="flex">
      <Link
        href="/register"
        className="text-gray-600 ml-5 flex items-center text-sm gap-2 border rounded-xl p-2"
      >
        <UserPlus size={17} />
        انضم الآن
      </Link>

      <Link
        href="/login"
        className="text-gray-600 ml-5 flex items-center text-sm gap-2 border rounded-xl p-2"
      >
        <LogIn size={17} />
        تسجيل الدخول
      </Link>
    </div>
  )
}
