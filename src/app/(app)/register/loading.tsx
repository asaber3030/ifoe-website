import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className='min-h-screen bg-background text-foreground p-2'>
      <div className='max-w-3xl mx-auto bg-white rounded-xl border p-2'>
        <div className='p-8 rounded-2xl bg-blue-600 mb-8'>
          <Skeleton className='h-8 w-3/4 mx-auto bg-blue-400' />
        </div>
        <div className='space-y-4 p-4'>
          <div className='space-y-2'>
            <Skeleton className='h-4 w-1/4' />
            <Skeleton className='h-10 w-full' />
          </div>
          <div className='space-y-2'>
            <Skeleton className='h-4 w-1/4' />
            <Skeleton className='h-10 w-full' />
          </div>
          <div className='flex items-center space-x-2'>
            <Skeleton className='h-4 w-4' />
            <Skeleton className='h-4 w-1/4' />
          </div>

          <div className='flex items-center space-x-2'>
            <Skeleton className='h-4 w-4' />
            <Skeleton className='h-4 w-1/4' />
          </div>
          <Skeleton className='h-10 w-full' />
          <Skeleton className='h-4 w-1/2 mx-auto' />
        </div>
      </div>
    </div>
  )
}
