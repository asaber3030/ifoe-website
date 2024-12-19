import { getCategories } from "@/actions/categories"

import { AdminPageTitle } from "@/components/dashboard/title"
import { CreateCategoryModal } from "@/components/dashboard/categories/create-modal"
import { CategoriesTable } from "@/components/dashboard/categories/table"

export default async function AdminCategoriesPage() {
  const categories = await getCategories()

  return (
    <div>
      <AdminPageTitle title="الاقسام">
        <CreateCategoryModal />
      </AdminPageTitle>

      <CategoriesTable categories={categories} />
    </div>
  )
}
