"use client"

import { Button } from "@/components/ui/button"
import { useTranslate } from "@/hooks/use-translate"
import { useRouter } from "next/navigation"

export const FranchisesStartJourneyBox = () => {
  const router = useRouter()
  const translate = useTranslate()

  return (
    <div className='m-10 xl:mx-24 bg-blue-600 rounded-[100px] grid xl:grid-cols-3 justify-between items-center xl:p-20 p-10 gap-20'>
      <div className='xl:col-span-2'>
        <h1 className='text-white my-4'>{translate("startJourneyTitle")}</h1>
      </div>
      <div className='xl:col-span-1 flex justify-end'>
        <Button
          onClick={() => router.push("/")}
          className='rounded-3xl text-white w-[250px] bg-transparent border-white hover:bg-transparent hover:text-white'
          variant='outline'
        >
          {translate("contactUs")}
        </Button>
      </div>
    </div>
  )
}
