"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"
import { useUser } from "@/hooks/use-user"

import { HeaderUserItems } from "./user-items"
import { HeaderGuestItems } from "./guest-items"
import { UserSidebar } from "./sheet"
import { AppLogo } from "../logo"
import { useTranslate } from "@/hooks/use-translate"
import { LanguageSwitcher } from "../language-switcher"

export const Header = () => {
  const translate = useTranslate()
  const user = useUser()
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <header className='bg-white shadow-sm border-b'>
      <div className='mx-auto px-10 py-6 flex items-center justify-between'>
        <AppLogo />

        <nav className='hidden md:flex space-x-6'>
          <ul className='flex space-x-10 text-gray-600'>
            <li>
              <Link
                href='/'
                className={`${isActive("/") ? "text-blue-500" : "hover:text-gray-400"} ml-10`}
              >
                {translate("home")}
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className={`${isActive("/about") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                {translate("aboutUs")}
              </Link>
            </li>
            <li>
              <Link
                href='/blogs'
                className={`${isActive("/blogs") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                {translate("blogs")}
              </Link>
            </li>
            <li>
              <Link
                href='/services'
                className={`${isActive("/services") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                {translate("services")}
              </Link>
            </li>
            <li>
              <Link
                href='/franchises'
                className={`${isActive("/franchises") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                {translate("franchises")}
              </Link>
            </li>
            <li>
              <Link
                href='/partners'
                className={`${isActive("/partners") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                {translate("partners")}
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className={`${isActive("/contact") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                {translate("contactUs")}
              </Link>
            </li>
          </ul>
        </nav>

        <div className='flex items-center gap-2'>
          <div className='hidden xl:block'>{user ? <HeaderUserItems /> : <HeaderGuestItems />}</div>
          <LanguageSwitcher />
          <UserSidebar />
        </div>
      </div>
    </header>
  )
}
