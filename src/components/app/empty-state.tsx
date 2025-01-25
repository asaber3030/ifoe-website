"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTranslate } from "@/hooks/use-translate"
import { cn } from "@/lib/utils"
import { ClassValue } from "class-variance-authority/types"
import { PenLine, Sparkles } from "lucide-react"

export function EmptyState({ parentClassName }: { parentClassName?: ClassValue }) {
  const translate = useTranslate()

  return (
    <Card className={cn('w-full max-w-md mx-auto', parentClassName)}>
      <CardContent className='pt-6 px-8 pb-8'>
        <div className={`transition-opacity duration-1000`}>
          <div className='flex justify-center mb-6'>
            <div className='relative'>
              <PenLine className='w-16 h-16 text-primary' />
              <Sparkles className='w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse' />
            </div>
          </div>
          <h3 className='text-2xl font-bold text-center mb-2'>{translate("emptyState")}</h3>
        </div>
      </CardContent>
    </Card>
  )
}
