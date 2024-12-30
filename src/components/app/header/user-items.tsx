"use client"

import { useRouter } from "next/navigation"
import { useUser } from "@/hooks/use-user"
import { useMutation } from "@tanstack/react-query"

import { logoutAction } from "@/actions/auth"
import { toast } from "react-toastify"

import { CheckCheck, LockIcon, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { routes } from "@/lib/routes"

export const HeaderUserItems = () => {
  const user = useUser()
  const router = useRouter()

  if (!user) return null

  const logoutMutation = useMutation({
    mutationFn: () => logoutAction(),
    onSuccess: (data) => {
      router.push("/")
      toast.success(data.message)
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{user.name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[250px]">
        <DropdownMenuLabel className="justify-end text-right">حسابي الشخصي</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push(routes.profile.root)}>
          الصفحة الشخصية
          <User className="size-4" />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push(routes.profile.changePassword)}>
          تغيير كلمة المرور
          <LockIcon className="size-4" />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push(routes.profile.franchises)}>
          طلبات الامتيازات
          <CheckCheck className="size-4" />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout} className="text-red-500 hover:text-red-600">
          تسجيل الخروج
          <LogOut className="size-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
