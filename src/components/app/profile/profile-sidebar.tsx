"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"

import { User, Key, Building } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useUser } from "@/hooks/use-user"

const menuItems = [
  { icon: User, label: "المعلومات الشخصية", href: "/profile" },
  { icon: Key, label: "تغيير كلمة المرور", href: "/profile/password" },
  { icon: Building, label: "طلبات الامتيازات", href: "/profile/franchises" }
]

export const ProfileSidebar = () => {
  const pathname = usePathname()
  const user = useUser()

  return (
    <aside>
      <div className="flex flex-col h-full bg-gray-100 rounded-md shadow-md">
        <div className="border-b border-border px-4 py-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-blue-600 text-white">{user?.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-lg font-semibold">{user?.name}</h2>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                      flex hover:bg-gray-300 items-center gap-3 px-3 py-2 rounded-md text-sm
                      ${
                        pathname === item.href
                          ? "bg-gray-300 text-accent-foreground"
                          : "hover:bg-gray-300 hover:text-accent-foreground"
                      }
                    `}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-border p-4">
          <Button variant="outlineDestructive" className="w-full">
            تسجيل الخروج
          </Button>
        </div>
      </div>
    </aside>
  )
}
