"use client"

import { User } from "@/types"
import React, { createContext } from "react"

export const UserContext = createContext<User | null>(null)

type AuthProviderProps = {
  user: User | null
  children: React.ReactNode
}

export const AuthProvider = ({ user, children }: AuthProviderProps) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
