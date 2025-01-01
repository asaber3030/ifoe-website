import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function FranchiseRequestLoading() {
  return (
    <div className='grid xl:grid-cols-7 grid-cols-1 gap-4 mx-auto container mt-10 pb-10'>
      <div className='col-span-5'>
        <Skeleton className='h-8 w-3/4 mb-4' />
        <div className='space-y-4'>
          {[...Array(6)].map((_, index) => (
            <div key={index} className='space-y-2'>
              <Skeleton className='h-4 w-1/4' />
              <Skeleton className='h-10 w-full' />
            </div>
          ))}
          <div className='grid xl:grid-cols-2 grid-cols-1 gap-4'>
            {[...Array(2)].map((_, index) => (
              <div key={index} className='space-y-2'>
                <Skeleton className='h-4 w-1/4' />
                <Skeleton className='h-10 w-full' />
              </div>
            ))}
          </div>
          <div className='flex items-center space-x-2'>
            <Skeleton className='h-4 w-4' />
            <Skeleton className='h-4 w-1/4' />
          </div>
          <Skeleton className='h-10 w-1/4' />
        </div>
      </div>
      <div className='col-span-2 pt-8'>
        <Card className='bg-white rounded-md py-8 pb-0 shadow-md border overflow-hidden h-fit'>
          <div className='border p-4 py-8 rounded-md w-fit mx-4 mb-8'>
            <Skeleton className='h-[100px] w-[100px] rounded-md' />
          </div>
          <ul className='grid grid-cols-2 justify-between gap-8 px-8'>
            {[...Array(6)].map((_, index) => (
              <li key={index}>
                <Skeleton className='h-4 w-3/4 mb-2' />
                <Skeleton className='h-4 w-1/2' />
              </li>
            ))}
          </ul>
          <div className='bg-gray-100 flex justify-between gap-2 p-8 mt-14'>
            <Skeleton className='h-10 w-1/3' />
            <Skeleton className='h-10 w-1/3' />
          </div>
        </Card>
      </div>
    </div>
  )
}
