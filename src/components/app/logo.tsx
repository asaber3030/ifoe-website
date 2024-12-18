"use client"

import Link from "next/link"
import Image from "next/image"

type Props = {
  width?: number
  height?: number
  url?: string
}

export const AppLogo = ({ width = 100, height = 50, url = "/" }: Props) => {
  return (
    <Link href={url} className="hover:text-gray-400 text-[28px]">
      <Image src="/ifoe-logo.png" width={width} height={height} alt="Logo" />
    </Link>
  )
}
