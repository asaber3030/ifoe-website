import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkBtn } from "@/components/ui/link-btn"
import { Separator } from "@/components/ui/separator"
import { routes } from "@/lib/routes"
import { Franchise } from "@/types"
import { CalendarIcon, DollarSignIcon, MapPinIcon, UsersIcon } from "lucide-react"

import Image from "next/image"

export default function FranchiseView({ data }: { data: Franchise }) {
  if (!data) null

  return (
    <div className='container mx-auto py-10 px-4'>
      <Image
        src='/bg.jpg'
        className='max-w-full h-[300px] object-cover rounded-md mb-4'
        width={1000}
        height={1000}
        alt='Franchise Image'
      />

      <Card className='w-full'>
        <CardHeader>
          <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
              <Avatar className='h-20 w-20'>
                <AvatarImage src={data?.image_url} alt={data?.name} />
                <AvatarFallback>{data?.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className='text-3xl'>{data?.name}</CardTitle>
                <CardDescription className='mt-2'>{data?.description}</CardDescription>
                <div className='mt-2 flex space-x-2'>
                  <Badge variant='secondary'>{data?.category?.name}</Badge>
                  <Badge variant='outline'>{data?.country?.name}</Badge>
                </div>
              </div>
            </div>

            <LinkBtn href={routes.franchises.newRequest(data.id)} variant='blue'>
              طلب الامتياز
            </LinkBtn>
          </div>
        </CardHeader>
        <CardContent>
          <div className='grid gap-6 md:grid-cols-2'>
            <Card>
              <CardHeader>
                <CardTitle>التفاصيل العامة</CardTitle>
              </CardHeader>
              <CardContent className='grid gap-2'>
                <div className='flex items-center gap-2 justify-between'>
                  <span className='flex gap-2 items-center'>
                    <MapPinIcon className='mr-2 h-4 w-4' />
                    مركز المكتب:
                  </span>
                  <span>{data?.center_office}</span>
                </div>
                <div className='flex items-center gap-2 justify-between'>
                  <span className='flex gap-2 items-center'>
                    <UsersIcon className='mr-2 h-4 w-4' />
                    عدد الفروع:
                  </span>
                  <span>{data?.number_of_branches}</span>
                </div>
                <div className='flex items-center gap-2 justify-between'>
                  <span className='flex gap-2 items-center'>
                    <UsersIcon className='mr-2 h-4 w-4' />
                    عدد الموظفيين:
                  </span>
                  <span>{data?.number_of_labors}</span>
                </div>
                <div className='flex items-center gap-2 justify-between'>
                  <span className='flex gap-2 items-center'>
                    <CalendarIcon className='mr-2 h-4 w-4' />
                    تم الانشاء في سنة:
                  </span>
                  <span>{data?.establish_year}</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>تفاصيل الامتياز</CardTitle>
              </CardHeader>
              <CardContent className='grid gap-2'>
                <div className='flex items-center gap-2 justify-between'>
                  <span className='flex gap-2 items-center'>
                    <DollarSignIcon className='mr-2 h-4 w-4' />
                    تكلفة الامتياز:
                  </span>
                  <span>{data?.franchise_characteristic?.franchise_fees}</span>
                </div>
                <div className='flex items-center gap-2 justify-between'>
                  <span className='flex gap-2 items-center'>
                    <DollarSignIcon className='mr-2 h-4 w-4' />
                    رسوم الملكية:
                  </span>
                  <span>{data?.franchise_characteristic?.royalty_fees}</span>
                </div>
                <div className='flex items-center gap-2 justify-between'>
                  <span className='flex gap-2 items-center'>
                    <DollarSignIcon className='mr-2 h-4 w-4' />
                    تكلفة التسويق:
                  </span>
                  <span>{data?.franchise_characteristic?.marketing_fees}</span>
                </div>
                <div className='flex items-center gap-2 justify-between'>
                  <span className='flex gap-2 items-center'>
                    <DollarSignIcon className='mr-2 h-4 w-4' />
                    تكلفة الاستثمار:
                  </span>
                  <span>{data?.franchise_characteristic?.investments_cost}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <Separator className='my-6' />
          <div className='grid gap-6 md:grid-cols-4'>
            <Card>
              <CardHeader>
                <CardTitle>المساحات المطلوب</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-2xl font-bold'>
                  {data?.space_required?.value} {data?.space_required?.unit?.name}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>تكلفة الادوات</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-2xl font-bold'>
                  {data?.space_required?.value} {data?.space_required?.unit?.name}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>فترات التدريب</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-2xl font-bold'>
                  {data?.training_period?.value} {data?.training_period?.unit?.name}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>فترة العقود</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-2xl font-bold'>
                  {data?.contract_period?.value} {data?.contract_period?.unit?.name}
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
