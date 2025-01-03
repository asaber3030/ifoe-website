import {
  AboutHeroSection,
  AboutOurStory,
  AboutWhyChooseUs,
  AboutCallToAction
} from "@/components/app/about/sections"
import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <AboutHeroSection />
      <AboutOurStory />
      <AboutWhyChooseUs />
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <Skeleton className='w-44 h-6' />
          <Skeleton className='w-44 h-6 mb-12' />
          <div className='grid xl:grid-cols-6 grid-cols-2 gap-2 items-center'>
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className='w-full h-40' />
            ))}
          </div>
        </div>
      </section>
      <AboutCallToAction />
    </div>
  )
}
