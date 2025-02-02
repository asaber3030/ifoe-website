import { CreateBlogForm } from "@/components/dashboard/blogs/create-form"
import { AdminPageTitle } from "@/components/dashboard/title"

export default function CreateBlogPage() {
  return (
    <div className="space-y-4">
      <AdminPageTitle title="انشاء مقالة" />
      <CreateBlogForm />
    </div>
  )
}
