"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const FranchisesStartJourneyBox = () => {
  const router = useRouter()

  return (
    <div className="m-10 xl:mx-24 bg-blue-600 rounded-[100px] grid xl:grid-cols-3 justify-between items-center xl:p-20 p-10 gap-20">
      <div className="xl:col-span-2">
        <h1 className="text-white my-4">ابدا رحلتك نحو النجاح الان!</h1>
        <p className="mt-8 font-normal text-gray-200">
          انا كنت طالبة اوردر من نون يوم ١١ نوفمبر ومدفوع كامل والمفروض كان يوصل في خلال يومين
          استلمت منتج واحد فقط والباقي كان مع مندوب تاني المندوب فعلا كلمني بس الساعة ١٢.٣٠ بليل
          وفضل يبعت على الواتساب انا مردتش مخدتش بالي ومتوقعتش طبعا اني ممكن استلم بعد الساعة ١٠
        </p>
      </div>
      <div className="xl:col-span-1 flex justify-end">
        <Button
          onClick={() => router.push("/")}
          className="rounded-3xl text-white w-[250px] bg-transparent border-white hover:bg-transparent hover:text-white"
          variant="outline"
        >
          ابدأ الان
        </Button>
      </div>
    </div>
  )
}
