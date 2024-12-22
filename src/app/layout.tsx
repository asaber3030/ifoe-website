import "./globals.css"

import { ReactQueryProvider } from "@/providers/react-query"
import { AuthProvider } from "@/providers/auth-provider"
import { ToastContainer } from "react-toastify"
import { Alexandria } from "next/font/google"

import { getUser } from "@/actions/auth"

const alexandria = Alexandria({ subsets: ["latin", "arabic"] })

interface Props {
  children: React.ReactNode
}

export default async function Home({ children }: Props) {
  const user = await getUser()

  return (
    <html dir="rtl" suppressHydrationWarning>
      <body>
        <ReactQueryProvider>
          <AuthProvider user={user}>
            <ToastContainer />
            <div className={alexandria.className}>{children}</div>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
