import {
  Briefcase,
  Check,
  FlagIcon,
  ListCheck,
  Menu,
  MoveHorizontal,
  ScrollText,
  Tractor
} from "lucide-react"
import {
  HomeIcon,
  KeyIcon,
  UserIcon,
  BuildingOffice2Icon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline"

export const DASHBOARD_URLS = [
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
    href: "/admin/units",
    icon: Check,
    label: "الوحدات"
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
    href: "/admin/franchise-types",
    icon: Menu,
    label: "انواع الخدمات"
  },
  {
    href: "/admin/training-periods",
    icon: Briefcase,
    label: "الوحدات الزمنية للتدريب"
  },
  {
    href: "/admin/contract-periods",
    icon: ScrollText,
    label: "وحدات قياس العقود"
  },
  {
    href: "/admin/equipment-cost",
    icon: Tractor,
    label: "العملات"
  },
  {
    href: "/admin/space-required",
    icon: MoveHorizontal,
    label: "وحدات المساحات"
  },
  {
    href: "/admin/logout",
    icon: ArrowRightOnRectangleIcon,
    label: "تسجيل الخروج"
  }
]
