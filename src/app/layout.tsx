import "./globals.css"

import { ReactQueryProvider } from "@/providers/react-query"
import { AuthProvider } from "@/providers/auth-provider"
import { ToastContainer } from "react-toastify"
import { Alexandria } from "next/font/google"
import { Metadata } from "next"

import { getUser } from "@/actions/auth"
import { getLanguage } from "@/actions/app"
import { LanguageProvider } from "@/providers/language"

const alexandria = Alexandria({ subsets: ["latin", "arabic"] })

export const metadata: Metadata = {
  title: "IFOE",
  description: "معلومات عن شركتنا وتاريخها والخدمات التي نقدمها.",
  keywords: [
    "IFOE",
    "franchise, franchising, entrepreneurship",
    "company, consulting, investment",
    "امتياز، فرنشايز، ريادة الأعمال",
    "شركة، استشارات، استثمار"
  ]
}

interface Props {
  children: React.ReactNode
}

export default async function Home({ children }: Props) {
  const user = await getUser()
  const language = await getLanguage()

  return (
    <html dir={language === "ar" ? "rtl" : "ltr"}>
      <body>
        <ReactQueryProvider>
          <LanguageProvider language={language}>
            <AuthProvider user={user}>
              <ToastContainer />
              <div className={alexandria.className}>{children}</div>
            </AuthProvider>
          </LanguageProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
