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
import { Menu } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { AppLogo } from "../logo"

export const UserSidebar = () => {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="blue">
          <Menu size={17} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mt-4">
          <SheetTitle>
            <AppLogo />
          </SheetTitle>
        </SheetHeader>

        <div className="p-6">
          <nav className="mt-6 space-y-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className={`block ${isActive("/") ? "text-blue-500" : "hover:text-gray-400"}`}
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className={`block ${
                    isActive("/blogs") ? "text-blue-500" : "hover:text-gray-400"
                  }`}
                >
                  المقالات
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block ${
                    isActive("/about") ? "text-blue-500" : "hover:text-gray-400"
                  }`}
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/franchises"
                  className={`block ${
                    isActive("/franchises") ? "text-blue-500" : "hover:text-gray-400"
                  }`}
                >
                  الامتيازات
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className={`block ${
                    isActive("/partners") ? "text-blue-500" : "hover:text-gray-400"
                  }`}
                >
                  شركائنا
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block ${
                    isActive("/contact") ? "text-blue-500" : "hover:text-gray-400"
                  }`}
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4 text-blue-700 mt-6">
            {/* Social Icons */}
            <a href="#" className="text-xl hover:text-gray-300 ml-4">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <FaYoutube />
            </a>
          </div>

          <div className="mt-8 flex gap-5">
            <p className="text-sm text-gray-600">info@example.com</p>
            <p className="text-sm text-gray-600">+123456789</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
