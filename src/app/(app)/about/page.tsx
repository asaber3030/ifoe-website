import { Metadata } from "next"
import { getPartners } from "@/actions/partners"
import {
  AboutCallToAction,
  AboutHeroSection,
  AboutOurFranchises,
  AboutOurStory,
  AboutWhyChooseUs
} from "@/components/app/about/sections"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "عن IFOE",
  description: "معلومات عن شركتنا وتاريخها والخدمات التي نقدمها.",
  keywords: [
    "امتياز، فرنشايز، ريادة الأعمال",
    "franchise, franchising, entrepreneurship",
    "شركة، استشارات، استثمار",
    "company, consulting, investment"
  ]
}

export default async function AboutPage() {
  const partners = await getPartners()

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <AboutHeroSection />
      <AboutOurStory />
      <AboutWhyChooseUs />
      <AboutOurFranchises partners={partners} />
      <AboutCallToAction />
    </div>
  )
}
