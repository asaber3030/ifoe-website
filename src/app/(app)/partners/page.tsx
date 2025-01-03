import { type Metadata } from "next"
import { EmptyState } from "@/components/app/empty-state"

import { getPartners } from "@/actions/partners"
import { getLanguage } from "@/actions/app"
import { HomeBanner } from "@/components/app/home/banner"
import translate from "@/lib/translate"

export const metadata: Metadata = {
  title: "الشركاء",
  description: "الشركاء"
}

export const dynamic = "force-dynamic"

export default async function PartnersPage() {
  const partners = await getPartners()
  const language = await getLanguage()

  return (
    <div className='min-h-screen mx-auto bg-background text-foreground'>
      <HomeBanner />

      <div className='p-10 xl:px-24'>
        <div className='p-10 xl:px-24'>
          <h1 className='text-blue-600 my-4 mb-10'>{translate("partners", language)}</h1>
          {partners?.length === 0 ? (
            <EmptyState />
          ) : (
            <div className='grid xl:grid-cols-6 gap-8 grid-cols-2'>
              {partners?.map((partner) => (
                <img
                  key={partner.id}
                  src={partner.image_url}
                  width={200}
                  height={200}
                  alt={"IMAGE"}
                  className='rounded-md object-contain max-w-full'
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
