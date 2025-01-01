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

export default function HomeLoading() {
  return (
    <main>
      <HomeBanner />

      <div className='container mx-auto px-4 py-16 text-center lg:text-left flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10'>
        <div className='w-full lg:w-1/2'>
          <Image
            src='/bg.jpg'
            alt='Hero Image'
            className='rounded-md ml-auto'
            width={500}
            height={500}
            loading='lazy'
          />
        </div>

        <div className='max-w-lg md:text-right text-center'>
          <h1 className='font-bold text-gray-800'>الامتياز التجاري الدولي</h1>
          <p className='mt-4 text-gray-600 text-lg'>
            Your ultimate destination for fixing things with ease. Discover our range of services
            tailored just for you.
          </p>
          <div className='mt-6 flex gap-2 md:justify-start justify-center space-x-4'>
            <LinkBtn variant='outlineBlue' href='/about'>
              تعرف علينا أكثر
            </LinkBtn>
            <LinkBtn variant='blue' href='/contact'>
              تواصل معنا
            </LinkBtn>
          </div>
        </div>
      </div>

      <div className='p-10 xl:px-24'>
        <div className='flex justify-between'>
          <h1 className='text-blue-600 my-4 mb-10'>الامتيازات</h1>
          <LinkBtn href={routes.franchises.root} className='rounded-3xl' variant='blue'>
            عرض الكل
          </LinkBtn>
        </div>
        <div className='grid xl:grid-cols-4 grid-cols-1 gap-4'>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`loading-card-fr-${i}`}>
              <FranchiseLoadingCard />
            </div>
          ))}
        </div>
      </div>

      <div className='p-10 xl:px-24'>
        <h1 className='text-blue-600 my-4 mb-10'>شركاء النجاح</h1>
        <div className='grid xl:grid-cols-6 gap-8 grid-cols-2'>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={`loading-partner-${i}`} className='w-full h-40 rounded-md' />
          ))}
        </div>
      </div>

      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 my-10'>
        <HomeSocialDetails />
        <ContactForm />
      </div>
    </main>
  )
}
