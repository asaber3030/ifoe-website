"use client"

import { Button } from "@/components/ui/button"
import { LinkBtn } from "@/components/ui/link-btn"
import { routes } from "@/lib/routes"
import { Franchise } from "@/types"

import Image from "next/image"

type Props = {
  franchise: Franchise
}

export const FrenchiseCard = ({ franchise }: Props) => {
  return (
    <div className="bg-white rounded-md py-8 pb-0 shadow-md border overflow-hidden h-fit">
      <div className="border p-4 py-8 rounded-md w-fit mx-4 mb-8">
        <Image
          src={franchise.image_url}
          width={100}
          height={100}
          alt={"IMAGE"}
          className="rounded-md object-cover"
        />
      </div>
      <ul className="grid grid-cols-2 justify-between gap-8 px-8">
        <li>
          <p className="text-sm text-gray-500">مدة عقد الامتياز</p>
          <p className="text-sm">
            {franchise.contract_period?.value} {franchise.contract_period?.unit?.name}
          </p>
        </li>

        <li>
          <p className="text-sm text-gray-500">القطاع</p>
          <p className="text-sm">{franchise.country?.name}</p>
        </li>

        <li>
          <p className="text-sm text-gray-500">تكاليف الوحدة الواحده</p>
          <p className="text-sm">
            {franchise.equipment_cost?.value} {franchise.equipment_cost?.unit?.name}
          </p>
        </li>

        <li>
          <p className="text-sm text-gray-500">تكاليف المساحة الواحده</p>
          <p className="text-sm">
            {franchise.space_required?.value} {franchise.space_required?.unit?.name}
          </p>
        </li>

        <li>
          <p className="text-sm text-gray-500">تكاليف التدريب</p>
          <p className="text-sm">
            {franchise.training_period?.value} {franchise.training_period?.unit?.name}
          </p>
        </li>

        <li>
          <p className="text-sm text-gray-500">بلد العلامة التجارية</p>
          <p className="text-sm">{franchise.country?.name}</p>
        </li>
      </ul>

      <div className="bg-gray-100 flex justify-between p-8 mt-14">
        <LinkBtn href={routes.franchises.view(franchise.id)} className="rounded-3xl" variant="blue">
          طلب فرصة
        </LinkBtn>
        <LinkBtn
          href={routes.franchises.view(franchise.id)}
          className="rounded-3xl"
          variant="outlineBlue"
        >
          تفاصيل الامتياز
        </LinkBtn>
      </div>
    </div>
  )
}
