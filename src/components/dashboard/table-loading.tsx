import { Skeleton } from "../ui/skeleton"

type Props = {}
export const TableLoading = ({}: Props) => {
  return (
    <div className="xl:px-8 py-8">
      <div className={"flex items-center justify-between border-b mb-4 pb-4"}>
        <Skeleton className="h-10 w-44" />
        <div className="flex gap-2 items-center">
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-20" />
        </div>
      </div>

      <div className="space-y-3 bg-white p-4 rounded-md">
        <div className="grid xl:grid-cols-5 grid-cols-3 gap-4 w-full">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg">
            <div className="grid xl:grid-cols-5 grid-cols-3 gap-4 w-full">
              <div className="space-y-2">
                <Skeleton className="h-2 w-44" />
                <Skeleton className="h-2 w-32" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-2 w-full" />
                <Skeleton className="h-2 w-16" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-2 w-full" />
                <Skeleton className="h-2 w-32" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-2 w-full" />
                <Skeleton className="h-2 w-32" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
