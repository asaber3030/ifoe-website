import { getFranchiseRequestHistory } from "@/actions/franchise-requests"
import { FranchiseRequestHistoryTableProfile } from "@/components/app/profile/request-history-table"

type Props = {
  params: Promise<{
    requestId: string
  }>
}

export default async function page({ params }: Props) {
  const requestId = +(await params).requestId
  const history = await getFranchiseRequestHistory(requestId)

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">سجل الطلب رقم: {requestId}</h1>
      <FranchiseRequestHistoryTableProfile history={history} />
    </div>
  )
}
