import { LinkBtn } from "@/components/ui/link-btn"
import { FrenchiseCard } from "../franchises/card"
import { Franchise } from "@/types"

import { routes } from "@/lib/routes"
import { EmptyState } from "../empty-state"

type Props = {
  franchises: Franchise[]
}

export const HomeFranchisesList = ({ franchises }: Props) => {
  return (
    <div className='p-4 xl:px-24'>
      <div className='flex justify-between mb-5'>
        <h1 className='text-blue-600'>الامتيازات</h1>
        <LinkBtn href={routes.franchises.root} className='rounded-3xl' variant='blue'>
          عرض الكل
        </LinkBtn>
      </div>

      {franchises.length === 0 ? (
        <EmptyState />
      ) : (
        <section className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
          {franchises.map((franchise) => (
            <FrenchiseCard key={`fr-card-${franchise.id}`} franchise={franchise} />
          ))}
        </section>
      )}
    </div>
  )
}
