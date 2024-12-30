import { Skeleton } from "@/components/ui/skeleton"

export const FranchiseLoadingCard = () => {
  return (
    <div className="space-y-4 bg-white rounded-md py-8 pb-0 shadow-md border overflow-hidden h-fit">
      <div className="border p-4 py-4 rounded-md w-fit mx-4 mb-8">
        <Skeleton className="w-20 h-20" />
      </div>

      <ul className="grid grid-cols-2 justify-between gap-8 px-8">
        <li className="space-y-2">
          <Skeleton className="w-32 h-2" />
          <Skeleton className="w-20 h-2" />
        </li>

        <li className="space-y-2">
          <Skeleton className="w-32 h-2" />
          <Skeleton className="w-20 h-2" />
        </li>

        <li className="space-y-2">
          <Skeleton className="w-32 h-2" />
          <Skeleton className="w-20 h-2" />
        </li>

        <li className="space-y-2">
          <Skeleton className="w-32 h-2" />
          <Skeleton className="w-20 h-2" />
        </li>

        <li className="space-y-2">
          <Skeleton className="w-32 h-2" />
          <Skeleton className="w-20 h-2" />
        </li>

        <li className="space-y-2">
          <Skeleton className="w-32 h-2" />
          <Skeleton className="w-20 h-2" />
        </li>
      </ul>

      <div className="bg-gray-100 flex justify-between p-8 mt-14">
        <Skeleton className="w-20 h-10 rounded-md" />
        <Skeleton className="w-20 h-10 rounded-md" />
      </div>
    </div>
  )
}
