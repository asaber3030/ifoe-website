"use client"

import cookies from "js-cookie"

import { useRouter } from "next/navigation"
import { useLanguage, useTranslate } from "@/hooks/use-translate"
import { cn } from "@/lib/utils"

import { Button, ButtonProps } from "@/components/ui/button"
import { Language } from "@/types"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { LANGUAGE_COOKIE_NAME } from "@/lib/constants"

type Props = ButtonProps & {
  label?: string
}

export function LanguageSwitcher({ label, className, size = "icon", variant = "ghost" }: Props) {
  const language = useLanguage()
  const translate = useTranslate()
  const router = useRouter()

  const changeLanguage = (language: Language) => {
    cookies.set(LANGUAGE_COOKIE_NAME, language)
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={size}
          className={cn("transition-all flex gap-4 border text-gray-500", className)}
          variant={variant}
        >
          {!label && <span className='uppercase'>{language}</span>}
          {label && <Globe className='size-5' />}
          {label && label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='border-none w-44 space-y-0.5'>
        <DropdownMenuItem
          onClick={() => changeLanguage("ar")}
          className={cn("flex gap-2 items-center", language === "ar" && "bg-accent justify-end")}
        >
          {translate("arabic")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "flex gap-2 items-center",
            language === "en" && "bg-accent",
            language === "ar" && "justify-end"
          )}
          onClick={() => changeLanguage("en")}
        >
          {translate("english")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
