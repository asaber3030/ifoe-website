import { useContext } from "react"

import { ArabicTranslations, EnglishTranslations } from "@/languages"
import { LanguageContext } from "@/providers/language"
import { Language } from "@/types"

function translate(key: string, lang: Language = "ar") {
  if (lang === "en") {
    if (EnglishTranslations[key]) {
      return EnglishTranslations[key]
    } else {
      return `_${key}`
    }
  } else if (lang === "ar") {
    if (ArabicTranslations[key]) {
      return ArabicTranslations[key]
    } else {
      return `_${key}`
    }
  }
  return `_${key}`
}

export function useTranslate() {
  const language = useContext(LanguageContext)
  return (key: string) => translate(key, language)
}

export function useLanguage() {
  const language = useContext(LanguageContext)
  return language
}
