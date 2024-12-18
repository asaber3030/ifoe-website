"use client"

import Link from "next/link"
import Image from "next/image"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { FaRegUserCircle } from "react-icons/fa"
import { CgMenuGridO } from "react-icons/cg"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-gray-400 text-[28px]">
            <Image src="/ifoe-logo.png" width={100} height={50} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-10 text-gray-600">
            <li>
              <Link
                href="/"
                className={`${isActive("/") ? "text-blue-500" : "hover:text-gray-400"} ml-10`}
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={`${isActive("/blogs") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                المقالات
              </Link>
            </li>
            <li>
              <Link
                href="/frenchises"
                className={`${isActive("/frenchises") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                خدماتنا
              </Link>
            </li>
            <li>
              <Link
                href="/partners"
                className={`${isActive("/partners") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                شركائنا
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${isActive("/contact") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </nav>

        {/* Join Now Button */}
        <div className="flex items-center">
          <Link href="/register" className="text-gray-600 ml-5">
            <FaRegUserCircle size={20} />
          </Link>
          <button onClick={toggleMenu} className="text-blue-500 focus:outline-none">
            <CgMenuGridO size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 w-3/4 max-w-sm bg-white h-full shadow-lg p-6">
            <button onClick={toggleMenu} className="text-gray-600 text-[40px] focus:outline-none">
              &times;
            </button>
            <nav className="mt-6 space-y-4">
              <ul className="space-y-4">
                <li>
                  <Link
                    onClick={toggleMenu}
                    href="/"
                    className={`block ${isActive("/") ? "text-blue-500" : "hover:text-gray-400"}`}
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleMenu}
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
                    onClick={toggleMenu}
                    href="/services"
                    className={`block ${
                      isActive("/services") ? "text-blue-500" : "hover:text-gray-400"
                    }`}
                  >
                    خدماتنا
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleMenu}
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
                    onClick={toggleMenu}
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

            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold mb-2">تواصل معنا</h3>
              <p className="text-sm text-gray-600">info@example.com</p>
              <p className="text-sm text-gray-600">info@example.com</p>
              <p className="text-sm text-gray-600">+123456789</p>
            </div>

            <div className="flex space-x-4 text-blue-700 mt-6">
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
          </div>
        </div>
      )}
    </header>
  )
}
