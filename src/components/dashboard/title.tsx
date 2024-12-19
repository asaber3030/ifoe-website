import { cn } from "@/lib/utils"
import { ClassValue } from "class-variance-authority/types"

import React from "react"

type Props = {
  title: React.ReactNode
  children?: React.ReactNode
  className?: ClassValue
}

export const AdminPageTitle = ({ title, children, className }: Props) => {
  return (
    <div className={cn("flex items-center justify-between border-b mb-4 pb-4", className)}>
      <h1 className="font-bold text-3xl">{title}</h1>
      <div className="flex gap-2 items-center">{children}</div>
    </div>
  )
}
