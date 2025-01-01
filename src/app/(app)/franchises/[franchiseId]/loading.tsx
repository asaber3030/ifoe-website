import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

export default function FranchiseDetailsLoading() {
  return (
    <div className='container mx-auto py-10'>
      <Card className='w-full'>
        <CardHeader>
          <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
              <Skeleton className='h-20 w-20 rounded-full' />
              <div>
                <Skeleton className='h-8 w-48 mb-2' />
                <Skeleton className='h-4 w-64 mb-2' />
                <div className='mt-2 flex gap-2'>
                  <Skeleton className='h-6 w-20' />
                  <Skeleton className='h-6 w-24' />
                </div>
              </div>
            </div>
            <Skeleton className='h-10 w-32' />
          </div>
        </CardHeader>
        <CardContent>
          <div className='grid gap-6 md:grid-cols-2'>
            {[1, 2].map((index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className='h-6 w-40' />
                </CardHeader>
                <CardContent className='grid gap-2'>
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className='flex items-center gap-2'>
                      <Skeleton className='h-4 w-4' />
                      <Skeleton className='h-4 w-full' />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          <Separator className='my-6' />
          <div className='grid gap-6 md:grid-cols-4'>
            {[1, 2, 3, 4].map((index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className='h-6 w-32' />
                </CardHeader>
                <CardContent>
                  <Skeleton className='h-8 w-24' />
                </CardContent>
              </Card>
            ))}
          </div>
          <Separator className='my-6' />
          <Card>
            <CardHeader>
              <Skeleton className='h-6 w-48' />
            </CardHeader>
            <CardContent>
              <Skeleton className='h-4 w-full mb-2' />
              <Skeleton className='h-4 w-full' />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}
