export async function fetcher<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(url, options)

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || "Something went wrong")
  }

  return response.json()
}
