import { FranchiseLoadingCard } from "@/components/app/franchises/loading-card"
import { FranchisesStartJourneyBox } from "@/components/app/franchises/start-journey-box"
import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingFrancises() {
  return (
    <main>
      <div className='p-10 xl:px-24'>
        <div>
          <div className='flex justify-between flex-wrap'>
            <h1 className='text-blue-600 my-4 mb-10'>الامتيازات</h1>
            <div className='flex gap-2 items-center'>
              <Skeleton className='w-40 h-10' />
              <Skeleton className='w-40 h-10' />
            </div>
          </div>

          <section className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
            {Array.from({ length: 6 }).map((_, index) => (
              <FranchiseLoadingCard key={`loading-card-${index}-fr`} />
            ))}
          </section>
        </div>
      </div>

      <FranchisesStartJourneyBox />
    </main>
  )
}
