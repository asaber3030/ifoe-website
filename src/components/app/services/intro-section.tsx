"use client"

import Link from "next/link"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { useLanguage, useTranslate } from "@/hooks/use-translate"
import { arServices, enServices } from "@/lib/lists"

export const ServicesList = () => {
  const translate = useTranslate()
  const language = useLanguage()
  const services = language === "ar" ? arServices : enServices

  return (
    <section className='py-8 bg-gray-50 rounded-md shadow-md border'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8'>{translate("ourServices")}</h2>
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
                <Link href={"#"} passHref className='w-full'>
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
