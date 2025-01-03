"use client"

import { useRouter } from "next/navigation"
import { useUser } from "@/hooks/use-user"
import { useMutation } from "@tanstack/react-query"

import { logoutAction } from "@/actions/auth"
import { toast } from "react-toastify"
import { routes } from "@/lib/routes"

import { ClassValue } from "clsx"
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
import { cn } from "@/lib/utils"
import { useTranslate } from "@/hooks/use-translate"

export const HeaderUserItems = ({ className }: { className?: ClassValue }) => {
  const user = useUser()
  const router = useRouter()
  const translate = useTranslate()

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
        <Button variant='outline'>{user.name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn("min-w-[250px]", className)}>
        <DropdownMenuLabel className='justify-end text-right'>
          {translate("myAccount")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push(routes.profile.root)}>
          {translate("personalInfo")}
          <User className='size-4' />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push(routes.profile.changePassword)}>
          {translate("changePassword")}
          <LockIcon className='size-4' />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push(routes.profile.franchises)}>
          {translate("franchiseRequests")}
          <CheckCheck className='size-4' />
        </DropdownMenuItem>

        {user?.role && user?.role?.name === "Admin" && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-blue-500' onClick={() => router.push("/admin")}>
              {translate("dashboard")}
              <LockIcon className='size-4' />
            </DropdownMenuItem>
          </>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className='text-red-500 hover:text-red-600'>
          {translate("logout")}
          <LogOut className='size-4' />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
