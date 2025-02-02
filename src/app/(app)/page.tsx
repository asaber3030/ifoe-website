import Image from "next/image"

import { type Metadata } from "next"

import { getFranchises } from "@/actions/franchises"
import { getPartners } from "@/actions/partners"

import { LinkBtn } from "@/components/ui/link-btn"
import { HomeBanner } from "@/components/app/home/banner"
import { ContactForm } from "@/components/app/contact/form"
import { HomeSocialDetails } from "@/components/app/home/social-details"
import { HomeFranchisesList } from "@/components/app/home/franchises"
import { HomePartnersList } from "@/components/app/home/partners"
import { getLanguage } from "@/actions/app"
import translate from "@/lib/translate"
import { cn } from "@/lib/utils"
import { ServicesList } from "@/components/app/services/intro-section"
import PricingSection from "@/components/app/home/first-section"

export const metadata: Metadata = {
  title: "الرئيسية",
  description: "الرئيسية"
}

export const dynamic = "force-dynamic"

export default async function Home() {
  const franchisesPromise = getFranchises()
  const partnersPromise = getPartners()
  const language = await getLanguage()

  const [franchises, partners] = await Promise.all([franchisesPromise, partnersPromise])

  return (
    <main>
      <HomeBanner />

      <PricingSection />

      {/* <div className='container mx-auto px-4 py-16 text-center lg:text-left flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10'>
        <div className='w-full lg:w-1/2'>
          <Image
            src='/bg.jpg'
            alt='Hero Image'
            className='rounded-md ml-auto'
            width={500}
            height={500}
          />
        </div>

        <div className={cn("max-w-lg", language === "ar" ? "text-right" : "text-left")}>
          <h1 className='font-bold text-gray-800'>
            {translate("secondSectionhomePageTitle", language)}
          </h1>
          <p className='mt-4 text-gray-600 text-lg'>
            {translate("secondSectionhomePageDescription", language)}
          </p>
          <div className='mt-6 flex gap-2 md:justify-start justify-center space-x-4'>
            <LinkBtn variant='outlineBlue' href='/about'>
              {translate("knowAboutUs", language)}
            </LinkBtn>

            <LinkBtn variant='blue' href='/contact'>
              {translate("contactUs", language)}
            </LinkBtn>

          </div>
        </div>
      </div> */}

      <div className="container mx-auto mb-10">
        <ServicesList />
      </div>

      <HomeFranchisesList franchises={franchises?.data} />

      <HomePartnersList partners={partners} />

      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 my-10'>
        <HomeSocialDetails />
        <ContactForm />
      </div>
    </main>
  )
}
