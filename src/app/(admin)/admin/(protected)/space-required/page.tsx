import { getSpaceRequireds } from "@/actions/space-required"

import { CreateSpaceRequiredModal } from "@/components/dashboard/space-required/create-modal"
import { SpaceRequiredsTable } from "@/components/dashboard/space-required/table"
import { AdminPageTitle } from "@/components/dashboard/title"
import { EmptyState } from "@/components/app/empty-state"

export default async function AdminSpaceRequiredPage() {
  const spaceRequireds = await getSpaceRequireds()

  return (
    <div>
      <AdminPageTitle title="المساحات المطلوبة">
        <CreateSpaceRequiredModal />
      </AdminPageTitle>
      {spaceRequireds.length === 0 ? (
        <EmptyState />
      ) : (
        <SpaceRequiredsTable spaceRequireds={spaceRequireds} />
      )}
    </div>
  )
}
