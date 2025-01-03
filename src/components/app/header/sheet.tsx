"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetHeader,
  SheetDescription,
  SheetTitle,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import { LogIn, Menu, UserPlus } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { AppLogo } from "../logo"
import { useUser } from "@/hooks/use-user"
import { HeaderUserItems } from "./user-items"
import { useState } from "react"
import { useTranslate } from "@/hooks/use-translate"
import { LanguageSwitcher } from "../language-switcher"

export const UserSidebar = () => {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path
  const user = useUser()
  const translate = useTranslate()

  const [open, setOpen] = useState(false)

  const hideSheet = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size='icon' variant='blue'>
          <Menu size={17} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className='mt-4'>
          <SheetTitle>
            <AppLogo />
          </SheetTitle>
        </SheetHeader>

        <div className='p-6'>
          <nav className='mt-6 space-y-4'>
            <ul className='space-y-4'>
              <li onClick={hideSheet}>
                <Link
                  href='/'
                  className={`block ${isActive("/") ? "text-blue-500" : "hover:text-gray-400"}`}
                >
                  {translate("home")}
                </Link>
              </li>
              <li onClick={hideSheet}>
                <Link
                  href='/blogs'
                  className={`block ${
                    isActive("/blogs") ? "text-blue-500" : "hover:text-gray-400"
                  }`}
                >
                  {translate("blogs")}
                </Link>
              </li>
              <li onClick={hideSheet}>
                <Link
                  href='/about'
                  className={`block ${
                    isActive("/about") ? "text-blue-500" : "hover:text-gray-400"
                  }`}
                >
                  {translate("aboutUs")}
                </Link>
              </li>
              <li onClick={hideSheet}>
                <Link
                  href='/franchises'
                  className={`block ${
                    isActive("/franchises") ? "text-blue-500" : "hover:text-gray-400"
                  }`}
                >
                  {translate("franchises")}
                </Link>
              </li>
              <li onClick={hideSheet}>
                <Link
                  href='/partners'
                  className={`block ${
                    isActive("/partners") ? "text-blue-500" : "hover:text-gray-400"
                  }`}
                >
                  {translate("partners")}
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className={`block ${
                    isActive("/contact") ? "text-blue-500" : "hover:text-gray-400"
                  }`}
                >
                  {translate("contactUs")}
                </Link>
              </li>

              {!user ? (
                <>
                  <li onClick={hideSheet}>
                    <Link
                      href='/register'
                      className={`flex gap-2 items-center ${
                        isActive("/register") ? "text-blue-500" : "hover:text-gray-400"
                      }`}
                    >
                      <UserPlus size={16} />
                      {translate("createNewAccount")}
                    </Link>
                  </li>
                  <li onClick={hideSheet}>
                    <Link
                      href='/login'
                      className={`flex gap-2 items-center ${
                        isActive("/login") ? "text-blue-500" : "hover:text-gray-400"
                      }`}
                    >
                      <LogIn size={16} />
                      {translate("login")}
                    </Link>
                  </li>
                </>
              ) : (
                <HeaderUserItems />
              )}

              <LanguageSwitcher />
            </ul>
          </nav>

          <div className='flex gap-4 text-blue-700 mt-6'>
            {/* Social Icons */}
            <a href='#' className='text-xl hover:text-gray-300 ml-4'>
              <FaFacebook />
            </a>
            <a href='#' className='text-xl hover:text-gray-300'>
              <FaTwitter />
            </a>
            <a href='#' className='text-xl hover:text-gray-300'>
              <FaInstagram />
            </a>
            <a href='#' className='text-xl hover:text-gray-300'>
              <FaLinkedin />
            </a>
            <a href='#' className='text-xl hover:text-gray-300'>
              <FaYoutube />
            </a>
          </div>

          <div className='mt-8 flex gap-5'>
            <p className='text-sm text-gray-600'>info@example.com</p>
            <p className='text-sm text-gray-600'>+123456789</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
