import { Footer } from "@/components/app/footer"
import { Header } from "@/components/app/header"
import React from "react"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
