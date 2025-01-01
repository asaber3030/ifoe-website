import Image from "next/image"

import { type Metadata } from "next"

import { LinkBtn } from "@/components/ui/link-btn"
import { HomeBanner } from "@/components/app/home/banner"
import { ContactForm } from "@/components/app/contact/form"
import { HomeSocialDetails } from "@/components/app/home/social-details"
import { FranchiseLoadingCard } from "@/components/app/franchises/loading-card"
import { routes } from "@/lib/routes"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata: Metadata = {
  title: "الرئيسية",
  description: "الرئيسية"
}

export const dynamic = "force-dynamic"

export default function PartnersLoading() {
  return (
    <main>
      <section
        className='relative md:h-screen h-[600px] bg-cover bg-center'
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>

        <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight'>
            أهلاً بكم في معرض فرص الامتياز التجاري الدولي
          </h1>
          <p className='text-sm sm:text-lg lg:text-2xl mb-6 leading-relaxed max-w-2xl'>
            حلول مبتكرة تلبي احتياجات عملائنا
          </p>
          <a
            href='/contact'
            className='bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-sm sm:text-base lg:text-lg transition duration-300 ease-in-out'
          >
            تواصل معنا الآن
          </a>
        </div>
      </section>

      <div className='p-10 xl:px-24'>
        <h1 className='text-blue-600 my-4 mb-10'>شركاء النجاح</h1>
        <div className='grid xl:grid-cols-6 gap-8 grid-cols-2'>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={`loading-partner-${i}`} className='w-full h-40 rounded-md' />
          ))}
        </div>
      </div>
    </main>
  )
}
