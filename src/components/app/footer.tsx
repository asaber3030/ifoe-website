"use client"

import Link from "next/link"

import { useTranslate } from "@/hooks/use-translate"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export const Footer = () => {
  const translate = useTranslate()

  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>{translate("aboutCompany")}</h3>
            <p className='text-sm text-gray-400'>{translate("aboutCompanyDescription")} </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>{translate("quickLinks")}</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/' className='hover:text-gray-300'>
                  {translate("home")}
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:text-gray-300'>
                  {translate("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href='/services' className='hover:text-gray-300'>
                  {translate("services")}
                </Link>
              </li>
              <li>
                <Link href='/partners' className='hover:text-gray-300'>
                  {translate("partners")}
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-gray-300'>
                  {translate("contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>{translate("contactUs")}</h3>
            <ul className='space-y-2 text-sm'>
              <li>Email: info@example.com</li>
              <li>Phone: +123456789</li>
              <li>Address: 123 شارع الابتكار، المدينة</li>
            </ul>
            <div className='flex gap-4 mt-4 text-gray-400'>
              <a href='#' className='hover:text-white' aria-label='Facebook'>
                <FaFacebookF />
              </a>
              <a href='#' className='hover:text-white' aria-label='Twitter'>
                <FaTwitter />
              </a>
              <a href='#' className='hover:text-white' aria-label='Instagram'>
                <FaInstagram />
              </a>
              <a href='#' className='hover:text-white' aria-label='LinkedIn'>
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
