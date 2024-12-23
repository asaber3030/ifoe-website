import { RegisterForm } from "@/components/app/auth/register-form"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "تسجيل حساب جديد",
  description: "تسجيل حساب جديد"
}

export const dynamic = "force-dynamic"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl border p-2">
        <div className="p-8 rounded-2xl bg-blue-600 mb-8">
          <h1 className="text-2xl font-bold text-center py-4 text-white">تسجيل حساب جديد</h1>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}
