import { getLanguage } from "@/actions/app"
import { getFranchiseRequestHistory } from "@/actions/franchise-requests"
import { FranchiseRequestHistoryTableProfile } from "@/components/app/profile/request-history-table"
import translate from "@/lib/translate"

type Props = {
  params: Promise<{
    requestId: string
  }>
}

export default async function page({ params }: Props) {
  const requestId = +(await params).requestId
  const history = await getFranchiseRequestHistory(requestId)
  const language = await getLanguage()

  return (
    <div>
      <h1 className='text-xl font-semibold mb-4'>
        {translate("requestHistory", language)}: <b>#{requestId}</b>
      </h1>
      <FranchiseRequestHistoryTableProfile history={history} />
    </div>
  )
}
