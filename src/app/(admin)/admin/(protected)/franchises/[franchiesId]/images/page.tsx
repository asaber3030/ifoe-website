import { AdminPageTitle } from "@/components/dashboard/title"

import { notFound } from "next/navigation"
import { getFranchise, getFranchiseImages } from "@/actions/franchises"
import { EmptyState } from "@/components/app/empty-state"
import { FranchiseImagesTable } from "@/components/dashboard/franchises/images/table"
import { CreateFranchiseImageModal } from "@/components/dashboard/franchises/images/create-modal"

type Props = {
  params: Promise<{
    franchiesId: string
  }>
}

export default async function FranchiseRequestIdPage({ params }: Props) {
  const franchiseId = +(await params).franchiesId
  const franchise = await getFranchise(franchiseId)

  if (!franchise.franchise) return notFound()

  const images = await getFranchiseImages(franchiseId)

  return (
    <div className="space-y-4">
      <AdminPageTitle title={`صور الامتياز - ${franchise.franchise.name}`}>
        <CreateFranchiseImageModal franchiseId={franchiseId} />
      </AdminPageTitle>
      {!images || images.length === 0 ? <EmptyState /> : <FranchiseImagesTable images={images} />}
    </div>
  )
}
