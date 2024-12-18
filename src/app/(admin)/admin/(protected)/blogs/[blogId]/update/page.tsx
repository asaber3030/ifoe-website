import { UpdateBlogForm } from "@/components/dashboard/blogs/update-form"
import { AdminPageTitle } from "@/components/dashboard/title"

export default function UpdateBlogPage() {
  return (
    <div className="space-y-4">
      <AdminPageTitle title="تعديل مقالة" />
      <div className="max-w-2xl">
        <UpdateBlogForm blog="" />
      </div>
    </div>
  )
}
