import { getLanguage } from "@/actions/app"
import { getCurrentUserFranchiseRequest, getFranchiseRequest } from "@/actions/franchise-requests"
import { FranchiseRequestsTableProfile } from "@/components/app/profile/requests-table"
import translate from "@/lib/translate"

export const dynamic = "force-dynamic"

const ProfilePage = async () => {
  const requests = await getCurrentUserFranchiseRequest()
  const language = await getLanguage()

  return (
    <div>
      <h1 className='text-xl font-bold mb-4'>{translate("franchiseRequests", language)}</h1>
      <FranchiseRequestsTableProfile requests={requests} />
    </div>
  )
}

export default ProfilePage
