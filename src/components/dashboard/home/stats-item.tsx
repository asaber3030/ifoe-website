"use client"

import { LucideIcon } from "lucide-react"

type Props = {
  label: string
  color: string
  num: number
}

export const StatsItem = ({ label, num, color }: Props) => {
  return (
    <div className="flex items-center bg-white p-4 gap-4 rounded-md shadow-sm">
      <div>
        <p className="font-bold">{label}</p>
        <p className="text-gray-500">{num}</p>
      </div>
    </div>
  )
}
