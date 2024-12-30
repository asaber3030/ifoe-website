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

import { Suspense } from "react"
import HomeLoading from "./loading"

export const metadata: Metadata = {
  title: "الرئيسية",
  description: "الرئيسية"
}

export const dynamic = "force-dynamic"

export default async function Home() {
  const franchisesPromise = getFranchises()
  const partnersPromise = getPartners()

  const [franchises, partners] = await Promise.all([franchisesPromise, partnersPromise])

  return (
    <main>
      <HomeBanner />

      <div className="container mx-auto px-4 py-16 text-center lg:text-left flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="w-full lg:w-1/2">
          <Image
            src="/bg.jpg"
            alt="Hero Image"
            className="rounded-md ml-auto"
            width={500}
            height={500}
          />
        </div>

        <div className="max-w-lg md:text-right text-center">
          <h1 className="font-bold text-gray-800">
            <span className="text-blue-600">معرض </span>
            الامتياز التجاري الدولي
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Your ultimate destination for fixing things with ease. Discover our range of services
            tailored just for you.
          </p>
          <div className="mt-6 flex gap-2 md:justify-start justify-center space-x-4">
            <LinkBtn variant="outlineBlue" href="/about">
              تعرف علينا أكثر
            </LinkBtn>
            <LinkBtn variant="blue" href="/contact">
              تواصل معنا
            </LinkBtn>
          </div>
        </div>
      </div>

      <HomeFranchisesList franchises={franchises?.data!} />

      <HomePartnersList partners={partners} />

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <HomeSocialDetails />
        <ContactForm />
      </div>
    </main>
  )
}
