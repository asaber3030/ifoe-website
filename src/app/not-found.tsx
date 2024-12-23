import { MapPin } from "lucide-react"
import { LinkBtn } from "@/components/ui/link-btn"
import { Header } from "@/components/app/header"

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="text-center space-y-6 p-6 max-w-md">
          <div className="relative">
            <div className="text-9xl font-bold text-muted-foreground opacity-20">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="h-24 w-24 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Page Not Found</h1>
          <p className="text-muted-foreground">
            Oops! It seems you've wandered off the map. The page you're looking for doesn't exist or
            has been moved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <LinkBtn href="/" variant="outline">
              Go to Home Page
            </LinkBtn>
          </div>
        </div>
      </div>
    </div>
  )
}
