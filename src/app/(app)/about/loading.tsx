import { Skeleton } from "@/components/ui/skeleton"
import { CallToAction, HeroSection, OurFranchises, OurStory, WhyChooseUs } from "./page"

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <OurStory />
      <WhyChooseUs />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">شركاء النجاح</h2>
          <div className="grid xl:grid-cols-6 grid-cols-2 gap-2 items-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="w-full h-40" />
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </div>
  )
}
