"use client"

import { useTranslate } from "@/hooks/use-translate"


export default function PricingSection() {

  const translate = useTranslate()

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Mission Section */}
      <div className="text-center mb-16 space-y-4">
        <div className="text-blue-500 font-medium text-sm tracking-wide">OUR MISSION</div>
        <h1 className="text-4xl md:text-5xl font-medium leading-tight">
          {translate("weHaveHelped")}
          <br />
          {translate("innovativeCompanies")}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {translate("hundredsOfAllSizes")}
          <br />
          {translate("haveMadeBigImprovements")}
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
        <div className="space-y-2">
          <div className="text-5xl font-medium">24%</div>
          <div className="text-gray-600">{translate("revenueBusiness")}</div>
        </div>
        <div className="space-y-2">
          <div className="text-5xl font-medium">180K</div>
          <div className="text-gray-600">{translate("inAnnualRevenue")}</div>
        </div>
        <div className="space-y-2">
          <div className="text-5xl font-medium">10+</div>
          <div className="text-gray-600">{translate("monthsOfRunway")}</div>
        </div>
      </div>
    </div>
  )
}

