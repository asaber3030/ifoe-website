import { getUnits } from "@/actions/units"
import { useQuery } from "@tanstack/react-query"

export function useUnits() {
  const query = useQuery({
    queryKey: ["units"],
    queryFn: () => getUnits()
  })

  return {
    units: query.data,
    isLoading: query.isLoading,
    isError: query.isError
  }
}
