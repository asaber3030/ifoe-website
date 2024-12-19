"use client"

import { Card, CardContent } from "@/components/ui/card"
import { PenLine, Sparkles } from "lucide-react"

export function EmptyState() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6 px-8 pb-8">
        <div className={`transition-opacity duration-1000`}>
          <div className="flex justify-center mb-6">
            <div className="relative">
              <PenLine className="w-16 h-16 text-primary" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-2">لا يوجد بيانات حتى الان</h3>
        </div>
      </CardContent>
    </Card>
  )
}
