import { AdminPageTitle } from "@/components/dashboard/title"

import { notFound } from "next/navigation"
import { getFranchise } from "@/actions/franchises"
import { getFranchiseRequestsOfFranchise } from "@/actions/franchise-requests"
import { FranchiseRequestsTable } from "@/components/dashboard/franchises/requests/table"
import { EmptyState } from "@/components/app/empty-state"

type Props = {
  params: Promise<{
    franchiesId: string
  }>
}

export default async function FranchiseRequestsPage({ params }: Props) {
  const franchiseId = +(await params).franchiesId
  const franchise = await getFranchise(franchiseId)
  const requests = await getFranchiseRequestsOfFranchise(franchiseId)

  if (!franchise.franchise) return notFound()

  return (
    <div className="space-y-4">
      <AdminPageTitle title={`طلبات الخدمة - ${franchise.franchise.name}`} />
      {!requests || requests.length === 0 ? (
        <EmptyState />
      ) : (
        <FranchiseRequestsTable franchiseId={franchiseId} requests={requests} />
      )}
    </div>
  )
}
