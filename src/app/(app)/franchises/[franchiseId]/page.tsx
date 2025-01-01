import FranchiseView from "@/components/app/franchises/view"

import { getFranchise } from "@/actions/franchises"
import { notFound } from "next/navigation"
import LoadingFrancises from "./loading"

type Props = {
  params: Promise<{ franchiseId: string }>
}

export default async function FranchiseIdPage({ params }: Props) {
  const franchiseId = +(await params).franchiseId
  const data = await getFranchise(franchiseId)
  const franchise = data.franchise

  if (isNaN(franchiseId) || !franchise) notFound()

  return <FranchiseView data={franchise} />
}
