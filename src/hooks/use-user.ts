import { UserContext } from "@/providers/auth-provider"
import { useContext } from "react"

export function useUser() {
  const user = useContext(UserContext)
  return user
}
