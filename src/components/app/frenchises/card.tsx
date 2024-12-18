"use client"

import { Button } from "@/components/ui/button"
import { Frenchise } from "@/types"

import Image from "next/image"

type Props = {
  frenchise: Frenchise
}

export const FrenchiseCard = ({ frenchise }: Props) => {
  return (
    <div className="bg-white rounded-md py-8 pb-0 shadow-md border overflow-hidden">
      <div className="border p-4 py-8 rounded-md w-fit mx-4 mb-8">
        <Image
          src={"/ifoe-logo.png"}
          width={100}
          height={100}
          alt={"IMAGE"}
          className="rounded-md object-cover"
        />
      </div>
      <ul className="grid grid-cols-2 justify-between gap-8 px-8">
        <li>
          <p className="text-sm text-gray-500">مدة عقد الامتياز</p>
          <p className="text-sm">عنوان 2</p>
        </li>
        <li>
          <p className="text-sm text-gray-500">القطاع</p>
          <p className="text-sm">عنوان 2</p>
        </li>
        <li>
          <p className="text-sm text-gray-500">تكاليف الوحدة الواحده</p>
          <p className="text-sm">عنوان 2</p>
        </li>
        <li>
          <p className="text-sm text-gray-500">بلد العلامة التجارية</p>
          <p className="text-sm">عنوان 2</p>
        </li>
      </ul>

      <div className="bg-gray-100 flex justify-between p-8 mt-14">
        <Button className="rounded-3xl" variant="blue">
          طلب فرصة
        </Button>
        <Button className="rounded-3xl" variant="outlineBlue">
          تفاصيل الامتياز
        </Button>
      </div>
    </div>
  )
}
