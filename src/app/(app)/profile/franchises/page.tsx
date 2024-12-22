import { getCurrentUserFranchiseRequest, getFranchiseRequest } from "@/actions/franchise-requests"
import { FranchiseRequestsTableProfile } from "@/components/app/profile/requests-table"
import { PersonalInfoForm } from "@/components/app/profile/update-info"

const ProfilePage = async () => {
  const requests = await getCurrentUserFranchiseRequest()
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">طلبات الامتيازات</h1>
      <FranchiseRequestsTableProfile requests={requests} />
    </div>
  )
}

export default ProfilePage
