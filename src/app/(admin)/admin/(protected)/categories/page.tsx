import { getCategories } from "@/actions/categories"

import { AdminPageTitle } from "@/components/dashboard/title"
import { CreateCategoryModal } from "@/components/dashboard/categories/create-modal"
import { CategoriesTable } from "@/components/dashboard/categories/table"
import { EmptyState } from "@/components/app/empty-state"

export default async function AdminCategoriesPage() {
  const categories = await getCategories()

  return (
    <div>
      <AdminPageTitle title="الاقسام">
        <CreateCategoryModal />
      </AdminPageTitle>

      {!categories ? <EmptyState /> : <CategoriesTable categories={categories} />}
    </div>
  )
}
