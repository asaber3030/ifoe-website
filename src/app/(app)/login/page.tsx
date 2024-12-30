import { LoginForm } from "@/components/app/auth/login-form"
import { type Metadata } from "next"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "تسجيل الدخول الى حسابك",
  description: "تسجيل الدخول الى حسابك"
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl border p-2">
        <div className="p-8 rounded-2xl bg-blue-600 mb-8">
          <h1 className="text-2xl font-bold text-center py-4 text-white">تسجيل الدخول الى حسابك</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
