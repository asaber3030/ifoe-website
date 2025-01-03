"use client"

import { useTranslate } from "@/hooks/use-translate"

export const HomeBanner = () => {
  const translate = useTranslate()

  return (
    <section
      className='relative md:h-screen h-[600px] bg-cover bg-center'
      style={{
        backgroundImage: "url('/bg.jpg')"
      }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>

      <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight'>
          {translate("homeTitle")}
        </h1>
        <p className='text-sm sm:text-lg lg:text-2xl mb-6 leading-relaxed max-w-2xl'>
          {translate("homeDescription")}
        </p>
        <a
          href='/contact'
          className='bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-sm sm:text-base lg:text-lg transition duration-300 ease-in-out'
        >
          {translate("contactUs")}
        </a>
      </div>
    </section>
  )
}
