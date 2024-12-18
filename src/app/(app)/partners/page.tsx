import { PartnerCarousel } from "@/components/app/partners/carousel"

import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "الشركاء",
  description: "الشركاء"
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Partners</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          We're proud to work with some of the most innovative companies in the industry. Our
          partnerships enable us to deliver cutting-edge solutions to our clients.
        </p>
        <div className="flex justify-center mb-16">
          <PartnerCarousel />
        </div>
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Become a Partner</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Interested in partnering with us? We're always looking for new opportunities to
            collaborate and innovate. Get in touch to learn more about our partnership program.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Contact Us
          </button>
        </section>
      </main>
    </div>
  )
}
