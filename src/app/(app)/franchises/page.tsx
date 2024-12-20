import { type Metadata } from "next"

import { FrenchiseCard } from "@/components/app/franchises/card"
import { Button } from "@/components/ui/button"
import { HomeIcon } from "lucide-react"

import Image from "next/image"
import React from "react"

export const metadata: Metadata = {
  title: "الخدمات",
  description: "الخدمات"
}

export default function Frenchises() {
  return (
    <main>
      <section
        className="relative md:h-screen h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full px-14 text-white pt-[150px]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            أهلاً بكم في معرض فرص الامتياز التجاري الدولي
          </h1>
          <p className="text-sm sm:text-lg lg:text-2xl mb-6 leading-relaxed max-w-2xl">
            حلول مبتكرة تلبي احتياجات عملائنا
          </p>
          <Button variant="outline" className="bg-transparent rounded-3xl">
            تواصل معنا
          </Button>
        </div>
      </section>

      <div className="grid xl:grid-cols-3 grid-cols-1 gap-10 p-10 xl:px-24">
        <div className="relative xl:cols-span-1">
          <Image
            src={"/bg.jpg"}
            width={500}
            height={500}
            alt={"IMAGE"}
            className="rounded-md object-cover w-full"
          />
        </div>
        <div className="space-y-6 xl:col-span-2">
          <h1 className="mb-4">عنوان 1</h1>
          <p>
            In this example, btn may be a pre-defined class name in React components while
            bg-red-500 is a class name defined in Tailwind CSS. The cn function combines these two
            class names to create the result of btn bg-red-500 class name. In conclusion, you can
            easily combine React and Tailwind class names using the cn utility function. This method
            helps to prevent collisions between class names and create more readable and manageable
            code.
          </p>

          <div className="flex justify-end">
            <Button className="rounded-3xl border-black" variant="outline">
              عرض التفاصيل
            </Button>
          </div>
        </div>
      </div>

      <div className="p-10 xl:px-24">
        <div>
          <h1 className="text-blue-600 my-4 mb-10">الامتيازات</h1>
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <FrenchiseCard key={i} franchise={""} />
            ))}
          </section>
        </div>
      </div>

      {/* <div className="p-10 xl:px-24">
        <h1 className="text-blue-600 my-4 mb-10">الامتيازات</h1>

        <div className="grid xl:grid-cols-3 gap-8 grid-cols-1">
          <div className="flex items-center p-4 gap-4 border shadow-sm bg-white rounded-md">
            <div className="size-12 rounded-full bg-blue-200 flex justify-center items-center">
              <HomeIcon className="size-6 text-blue-600" />
            </div>
            <div>
              <p className="text-blue-600">عنوان 1</p>
              <p className="text-gray-500">عنوان 1</p>
            </div>
          </div>

          <div className="flex items-center p-4 gap-4 border shadow-sm bg-white rounded-md">
            <div className="size-12 rounded-full bg-blue-200 flex justify-center items-center">
              <HomeIcon className="size-6 text-blue-600" />
            </div>
            <div>
              <p className="text-blue-600">عنوان 1</p>
              <p className="text-gray-500">عنوان 1</p>
            </div>
          </div>

          <div className="flex items-center p-4 gap-4 border shadow-sm bg-white rounded-md">
            <div className="size-12 rounded-full bg-blue-200 flex justify-center items-center">
              <HomeIcon className="size-6 text-blue-600" />
            </div>
            <div>
              <p className="text-blue-600">عنوان 1</p>
              <p className="text-gray-500">عنوان 1</p>
            </div>
          </div>

          <div className="flex items-center p-4 gap-4 border shadow-sm bg-white rounded-md">
            <div className="size-12 rounded-full bg-blue-200 flex justify-center items-center">
              <HomeIcon className="size-6 text-blue-600" />
            </div>
            <div>
              <p className="text-blue-600">عنوان 1</p>
              <p className="text-gray-500">عنوان 1</p>
            </div>
          </div>

          <div className="flex items-center p-4 gap-4 border shadow-sm bg-white rounded-md">
            <div className="size-12 rounded-full bg-blue-200 flex justify-center items-center">
              <HomeIcon className="size-6 text-blue-600" />
            </div>
            <div>
              <p className="text-blue-600">عنوان 1</p>
              <p className="text-gray-500">عنوان 1</p>
            </div>
          </div>

          <div className="flex items-center p-4 gap-4 border shadow-sm bg-white rounded-md">
            <div className="size-12 rounded-full bg-blue-200 flex justify-center items-center">
              <HomeIcon className="size-6 text-blue-600" />
            </div>
            <div>
              <p className="text-blue-600">عنوان 1</p>
              <p className="text-gray-500">عنوان 1</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="p-10 xl:px-24">
        <h1 className="text-blue-600 my-4 mb-10">شركاء النجاح</h1>
        <div className="grid xl:grid-cols-6 gap-8 grid-cols-2">
          <Image src={"/ifoe-logo.png"} width={200} height={200} alt={"IMAGE"} />
          <Image src={"/ifoe-logo.png"} width={200} height={200} alt={"IMAGE"} />
          <Image src={"/ifoe-logo.png"} width={200} height={200} alt={"IMAGE"} />
          <Image src={"/ifoe-logo.png"} width={200} height={200} alt={"IMAGE"} />
          <Image src={"/ifoe-logo.png"} width={200} height={200} alt={"IMAGE"} />
          <Image src={"/ifoe-logo.png"} width={200} height={200} alt={"IMAGE"} />
          <Image src={"/ifoe-logo.png"} width={200} height={200} alt={"IMAGE"} />
          <Image src={"/ifoe-logo.png"} width={200} height={200} alt={"IMAGE"} />
          <Image src={"/ifoe-logo.png"} width={200} height={200} alt={"IMAGE"} />
          <Image src={"/ifoe-logo.png"} width={200} height={200} alt={"IMAGE"} />
          <Image src={"/ifoe-logo.png"} width={200} height={200} alt={"IMAGE"} />
          <Image src={"/ifoe-logo.png"} width={200} height={200} alt={"IMAGE"} />
        </div>
      </div> */}

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
            className="rounded-3xl text-white w-[250px] bg-transparent border-white hover:bg-transparent hover:text-white"
            variant="outline"
          >
            ابدأ الان
          </Button>
        </div>
      </div>
    </main>
  )
}
