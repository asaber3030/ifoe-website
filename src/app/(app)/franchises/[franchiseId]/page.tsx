import FranchiseView from "@/components/app/franchises/view"

import { getFranchise, getFranchiseImages } from "@/actions/franchises"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ franchiseId: string }>
}

export default async function FranchiseIdPage({ params }: Props) {
  const franchiseId = +(await params).franchiseId
  const dataPromise = getFranchise(franchiseId)
  const franchiseImages = getFranchiseImages(franchiseId)

  const [franchise, images] = await Promise.all([dataPromise, franchiseImages])

  if (isNaN(franchiseId) || !franchise.franchise) notFound()

  return <FranchiseView images={images} data={franchise.franchise} />
}
