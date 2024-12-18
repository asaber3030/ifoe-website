import { HomeIcon, User } from "lucide-react"
import Link from "next/link"

export const DashboardNavbar = () => {
  return (
    <div className="w-full bg-white flex justify-between items-center p-2 px-8">
      <h1>TITLE</h1>
      <div className="flex gap-4">
        <Link href="/dashboard">
          <HomeIcon size={24} />
        </Link>

        <Link href="/dashboard">
          <User size={24} />
        </Link>
      </div>
    </div>
  )
}
