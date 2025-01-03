import { getLanguage } from "@/actions/app"
import { ServicesList } from "@/components/app/services/intro-section"
import { LinkBtn } from "@/components/ui/link-btn"
import {
  ourProcessArServices,
  ourProcessEnServices,
  whyChooseUsArServices,
  whyChooseUsEnServices
} from "@/lib/lists"
import translate from "@/lib/translate"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "الخدمات",
  description: "الخدمات"
}

export default async function ServicesPage() {
  const language = await getLanguage()
  const whyChooseUs = language === "ar" ? whyChooseUsArServices : whyChooseUsEnServices
  const ourProcess = language === "ar" ? ourProcessArServices : ourProcessEnServices

  return (
    <div className='container mx-auto p-4'>
      <ServicesList />

      <section className='mt-16 bg-white rounded-lg shadow-md p-8 border'>
        <h2 className='text-3xl font-bold mb-6'>{translate("whyChooseOurServices", language)}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {whyChooseUs.map((feature, index) => (
            <div key={index} className='flex items-center gap-4'>
              <CheckCircle className='w-6 h-6 text-green-500' />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className='py-16 container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          {translate("ourProcess", language)}
        </h2>
        <div className='grid md:grid-cols-4 gap-8'>
          {ourProcess.map((step, index) => (
            <div key={index} className='text-center'>
              <div className='w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                {index + 1}
              </div>
              <h3 className='font-semibold'>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-blue-50 py-16 rounded-md shadow-md'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            {translate("ourCustomers", language)}
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                quote:
                  "العمل مع هذا الفريق غيّر أعمالنا. كان خبراؤهم في تطوير الامتياز لا يقدرون بثمن.",
                author: "جون سميث",
                role: "الرئيس التنفيذي، FoodChain Inc."
              },
              {
                quote:
                  "الدعم والتوجيه الذي تلقيناه ساعدنا على التوسع على مستوى البلاد في غضون 18 شهرًا فقط.",
                author: "سارة جونسون",
                role: "المؤسسة، ServicePro"
              }
            ].map((testimonial, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow'>
                <p className='text-gray-600 mb-4'>"{testimonial.quote}"</p>
                <p className='font-semibold'>{testimonial.author}</p>
                <p className='text-sm text-gray-500'>{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='mt-16 bg-blue-600 text-white rounded-lg shadow-md p-8 text-center'>
        <h2 className='text-3xl font-bold mb-4'>{translate("servicesFooterTitle", language)}</h2>
        <p className='text-xl mb-6'>{translate("servicesFooterDescription", language)}</p>
        <LinkBtn
          href='/contact'
          variant='secondary'
          size='lg'
          className='text-blue-600 flex gap-3 justify-center mx-auto'
        >
          {translate("contactUs", language)}
          <ArrowLeft className='h-5 w-5' />
        </LinkBtn>
      </section>
    </div>
  )
}
