import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"
import { getPartners } from "@/actions/partners"
import { Partner } from "@/types"
import { Suspense } from "react"
import AboutLoading from "./loading"

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

  return <AboutLoading />

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <OurStory />
      <WhyChooseUs />
      <Suspense fallback="Loading...">
        <OurFranchises partners={partners} />
      </Suspense>
      <CallToAction />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/bg.jpg"
        alt="Franchise Success"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
          Empowering Entrepreneurs
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
          Your Success is Our Business
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 animate-fade-in-up animation-delay-400">
          Explore Franchises
        </button>
      </div>
    </section>
  )
}

export function OurStory() {
  const milestones = [
    { year: 2005, title: "Founded", description: "Started with a vision to empower entrepreneurs" },
    {
      year: 2010,
      title: "Expansion",
      description: "Reached 100 franchise partners across the country"
    },
    {
      year: 2015,
      title: "Innovation",
      description: "Launched proprietary franchise management software"
    },
    {
      year: 2020,
      title: "Global Reach",
      description: "Expanded operations to 10 countries worldwide"
    },
    {
      year: 2023,
      title: "Industry Leader",
      description: "Recognized as the #1 franchise consulting firm"
    }
  ]

  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="w-1/2"></div>
              <div className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 rounded-full border-4 border-blue-500 bg-white"></div>
              <div className="w-1/2 p-4 rounded-lg shadow-lg bg-white">
                <h3 className="text-xl font-bold text-blue-600">{milestone.year}</h3>
                <h4 className="text-lg font-semibold">{milestone.title}</h4>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      title: "نجاح مثبت",
      description: "تتميز امتيازاتنا بسجل حافل بالربحية والنمو."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "دعم خبراء",
      description: "فريق مخصص لإرشادك في كل خطوة من رحلتك."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-500" />,
      title: "ضمان الجودة",
      description: "عملية فحص دقيقة لجميع فرص الامتياز."
    }
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">لماذا تختارنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function OurFranchises({ partners }: { partners: Partner[] }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">شركاء النجاح</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <Image
              key={`partner-${index}`}
              src={partner.image_url}
              alt={partner.name || "Partner Image"}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">مستعد لتبدا رحلتك معنا؟</h2>
        <p className="text-xl mb-8">لنحوّل أحلامك الريادية إلى واقع.</p>
        <Link
          href={"/"}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 inline-flex gap-4 items-center"
        >
          ابدأ الآن
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
