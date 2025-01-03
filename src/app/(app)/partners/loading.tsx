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
          <Skeleton className='w-44 h-6 mb-5' />
          <Skeleton className='w-40 h-6 mb-5' />
          <Skeleton className='w-20 h-6 mb-5' />
        </div>
      </section>

      <div className='p-10 xl:px-24'>
        <Skeleton className='w-44 h-6 mb-12' />
        <div className='grid xl:grid-cols-6 gap-8 grid-cols-2'>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={`loading-partner-${i}`} className='w-full h-40 rounded-md' />
          ))}
        </div>
      </div>
    </main>
  )
}
