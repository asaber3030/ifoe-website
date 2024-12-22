import { AdminPageTitle } from "@/components/dashboard/title"

import { notFound } from "next/navigation"
import { getFranchise } from "@/actions/franchises"
import { getRequestHistory } from "@/actions/franchise-requests"
import { EmptyState } from "@/components/app/empty-state"
import { FranchiseRequestHistoryTable } from "@/components/dashboard/franchises/requests/history"

type Props = {
  params: Promise<{
    franchiesId: string
    requestId: string
  }>
}

export default async function FranchiseRequestIdPage({ params }: Props) {
  const franchiseId = +(await params).franchiesId
  const requestId = +(await params).requestId
  const franchise = await getFranchise(franchiseId)

  const history = await getRequestHistory(franchiseId, requestId)

  if (!franchise.franchise) return notFound()

  return (
    <div className="space-y-4">
      <AdminPageTitle title={`التاريخ الخاص بطلب رقم #${requestId}`} />
      {!history || history.length === 0 ? (
        <EmptyState />
      ) : (
        <FranchiseRequestHistoryTable history={history} />
      )}
    </div>
  )
}
