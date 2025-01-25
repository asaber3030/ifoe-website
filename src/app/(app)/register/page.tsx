import { getLanguage } from "@/actions/app"
import { RegisterForm } from "@/components/app/auth/register-form"
import translate from "@/lib/translate"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "تسجيل حساب جديد",
  description: "تسجيل حساب جديد"
}

export const dynamic = "force-dynamic"

export default async function RegisterPage() {
  const language = await getLanguage()

  return (
    <div className='min-h-screen bg-background text-foreground p-2  mt-20'>
      <div className='max-w-3xl mx-auto bg-white rounded-xl border p-4'>
        <div className='p-8 rounded-2xl bg-gray-100 mb-8'>
          <h1 className='text-2xl font-bold text-center py-4 text-blue-600'>
            {translate("createNewAccount", language)}
          </h1>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}
