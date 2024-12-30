import { type Metadata } from "next"
import { EmptyState } from "@/components/app/empty-state"

import { getPartners } from "@/actions/partners"

export const metadata: Metadata = {
  title: "الشركاء",
  description: "الشركاء"
}
export const dynamic = "force-dynamic"

export default async function PartnersPage() {
  const partners = await getPartners()

  return (
    <div className="min-h-screen mx-auto bg-background text-foreground">
      <section
        className="relative md:h-screen h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            أهلاً بكم في معرض فرص الامتياز التجاري الدولي
          </h1>
          <p className="text-sm sm:text-lg lg:text-2xl mb-6 leading-relaxed max-w-2xl">
            حلول مبتكرة تلبي احتياجات عملائنا
          </p>
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-sm sm:text-base lg:text-lg transition duration-300 ease-in-out"
          >
            تواصل معنا الآن
          </a>
        </div>
      </section>

      <div className="p-10 xl:px-24">
        <div className="p-10 xl:px-24">
          <h1 className="text-blue-600 my-4 mb-10">شركاء النجاح</h1>
          {partners.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid xl:grid-cols-6 gap-8 grid-cols-2">
              {partners.map((partner) => (
                <img
                  key={partner.id}
                  src={partner.image_url}
                  width={200}
                  height={200}
                  alt={"IMAGE"}
                  className="rounded-md object-cover"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
