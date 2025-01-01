"use client"

import { HomeIcon, MenuIcon, User } from "lucide-react"
import Link from "next/link"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { AppLogo } from "../app/logo"
import { DASHBOARD_URLS } from "@/lib/navigations"

export const DashboardNavbar = () => {
  return (
    <div className='w-full bg-white flex justify-between items-center p-2 px-8'>
      <AppLogo width={40} height={40} />
      <div className='flex items-center gap-4'>
        <Link href='/'>
          <HomeIcon size={24} />
        </Link>

        <Link href='/profile'>
          <User size={24} />
        </Link>

        <Sheet>
          <SheetTrigger asChild className='xl:hidden'>
            <Button variant='outline' size='icon'>
              <MenuIcon className='size-4' />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <AppLogo />
              </SheetTitle>
            </SheetHeader>

            <ul className='space-y-4 mt-10 overflow-y-auto'>
              {DASHBOARD_URLS.map(({ href, icon: Icon, label }) => {
                return (
                  <li key={href} className={`p-2 rounded-lg text-sm text-gray-600 `}>
                    <Link href={href} className='flex items-center gap-4'>
                      <Icon className={"text-gray-600 size-4"} />
                      <span>{label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
