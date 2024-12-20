import { EmptyState } from "@/components/app/empty-state"
import { type Metadata } from "next"

import { getPartners } from "@/actions/partners"

export const metadata: Metadata = {
  title: "الشركاء",
  description: "الشركاء"
}

export default async function PartnersPage() {
  const partners = await getPartners()

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">شركائنا</h1>
        <p className="mb-12 max-w-2xl">
          نحن نعمل مع شركاء مبدعين لتقديم أفضل الحلول لعملائنا. تعرف على شركائنا وكيف يمكنك الانضمام
          إليهم.
        </p>
        {partners?.length === 0 && <EmptyState />}
        <div className="flex flex-wrap gap-10 mb-16">
          {partners?.map((partner) => (
            <img
              key={partner.id}
              src={partner.imageUrl}
              alt={partner.name}
              className="size-20 object-cover rounded-md"
            />
          ))}
        </div>
      </main>
    </div>
  )
}
