"use client"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, FileText, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "البحث عن الامتياز",
    description: "ابحث عن فرصة الامتياز المثالية التي تتناسب مع اهتماماتك وميزانيتك.",
    icon: Search,
    action: "ابدأ البحث",
    link: "/search"
  },
  {
    title: "مساعدة في الوثائق",
    description: "احصل على مساعدة خبراء في جميع المستندات القانونية والأوراق المطلوبة.",
    icon: FileText,
    action: "احصل على المساعدة",
    link: "/documentation"
  },
  {
    title: "شبكة أصحاب الامتياز",
    description: "تواصل مع أصحاب الامتياز الآخرين لتبادل الخبرات وأفضل الممارسات.",
    icon: Users,
    action: "انضم إلى الشبكة",
    link: "/network"
  },
  {
    title: "استراتيجيات النمو",
    description: "اطلع على استراتيجيات مصممة خصيصًا لنمو وتوسيع أعمال الامتياز الخاصة بك.",
    icon: TrendingUp,
    action: "استكشف الاستراتيجيات",
    link: "/growth"
  }
]

export const ServicesList = () => {
  return (
    <section className='py-8 bg-gray-50 rounded-md shadow-md border'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8'>الخدمات الخاصة بنا</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service, index) => (
            <Card
              key={index}
              className='flex flex-col h-full transition-all duration-300 hover:shadow-lg'
            >
              <CardHeader>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                  <service.icon className='w-6 h-6 text-blue-600' />
                </div>
                <CardTitle className='text-xl mb-2'>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter className='mt-auto'>
                <Link href={service.link} passHref className='w-full'>
                  <Button className='w-full'>{service.action}</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
