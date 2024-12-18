import {
  HomeIcon,
  KeyIcon,
  UserIcon,
  BuildingOffice2Icon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon
} from "@heroicons/react/24/outline"

export const DASHBOARD_NAVIGATION = [
  {
    href: "/admin",
    icon: HomeIcon,
    label: "الصفحة الرئيسية"
  },
  {
    href: "/dashboard/frenchises",
    icon: BuildingOffice2Icon,
    label: "الخدمات"
  },
  {
    href: "/dashboard/blogs",
    icon: KeyIcon,
    label: "المقالات"
  },
  {
    href: "/dashboard/partners",
    icon: UserIcon,
    label: "الشركاء"
  },
  {
    href: "/dashboard/users",
    icon: UserCircleIcon,
    label: "المستخدمين"
  },
  {
    href: "/dashboard/logout",
    icon: ArrowRightOnRectangleIcon,
    label: "تسجيل الخروج"
  }
]
