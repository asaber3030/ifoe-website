import "./globals.css"

import { Alexandria } from "next/font/google"
import React from "react"

const alexandria = Alexandria({ subsets: ["latin", "arabic"] })

interface Props {
  children: React.ReactNode
}

export default function Home({ children }: Props) {
  return (
    <html dir="rtl">
      <body>
        <div className={alexandria.className}>{children}</div>
      </body>
    </html>
  )
}
