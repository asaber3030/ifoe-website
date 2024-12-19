import {
  HomeIcon,
  KeyIcon,
  UserIcon,
  BuildingOffice2Icon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon
} from "@heroicons/react/24/outline"
import { FlagIcon, ListCheck } from "lucide-react"

export const DASHBOARD_NAVIGATION = [
  {
    href: "/admin",
    icon: HomeIcon,
    label: "الصفحة الرئيسية"
  },
  {
    href: "/admin/countries",
    icon: FlagIcon,
    label: "الدول"
  },
  {
    href: "/admin/categories",
    icon: ListCheck,
    label: "الاقسام"
  },
  {
    href: "/admin/franchises",
    icon: BuildingOffice2Icon,
    label: "الخدمات"
  },
  {
    href: "/admin/blogs",
    icon: KeyIcon,
    label: "المقالات"
  },
  {
    href: "/admin/partners",
    icon: UserIcon,
    label: "الشركاء"
  },
  {
    href: "/admin/users",
    icon: UserCircleIcon,
    label: "المستخدمين"
  },
  {
    href: "/admin/logout",
    icon: ArrowRightOnRectangleIcon,
    label: "تسجيل الخروج"
  }
]
