import ReactQueryProvider from "@/providers/react-query"
import "./globals.css"

import { Alexandria } from "next/font/google"
import React from "react"
import { ToastContainer } from "react-toastify"

const alexandria = Alexandria({ subsets: ["latin", "arabic"] })

interface Props {
  children: React.ReactNode
}

export default function Home({ children }: Props) {
  return (
    <html dir="rtl">
      <body>
        <ReactQueryProvider>
          <ToastContainer />
          <div className={alexandria.className}>{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
