import {
  Briefcase,
  Check,
  FlagIcon,
  ListCheck,
  Menu,
  MoveHorizontal,
  ScrollText,
  Star,
  Tractor
} from "lucide-react"
import {
  HomeIcon,
  KeyIcon,
  UserIcon,
  BuildingOffice2Icon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon
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
    href: "/admin/franchise-characteristics",
    icon: Star,
    label: "خصائص الخدمات"
  },
  {
    href: "/admin/franchise-types",
    icon: Menu,
    label: "انواع الخدمات"
  },
  {
    href: "/admin/training-periods",
    icon: Briefcase,
    label: "فترات التدريب"
  },
  {
    href: "/admin/contract-periods",
    icon: ScrollText,
    label: "العقود"
  },
  {
    href: "/admin/equipment-cost",
    icon: Tractor,
    label: "تكلفة الادوات"
  },
  {
    href: "/admin/space-required",
    icon: MoveHorizontal,
    label: "المساحات المطلوبه"
  },
  {
    href: "/admin/logout",
    icon: ArrowRightOnRectangleIcon,
    label: "تسجيل الخروج"
  }
]
