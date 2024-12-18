export interface BlogPost {
  id: number
  title: string
  description: string
  imageUrl: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "البداية مع Next.js",
    description:
      "تعلم كيفية بناء تطبيقات ويب حديثة باستخدام Next.js، إطار العمل المخصص لـ React للإنتاج.",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 2,
    title: "إتقان Tailwind CSS",
    description: "اكتشف قوة CSS القائم على الأدوات مع Tailwind واصنع تصاميم رائعة بسرعة.",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 3,
    title: "فن إدارة الحالة",
    description: "استكشف تقنيات إدارة الحالة المختلفة في React واختر الأنسب لمشروعك.",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 4,
    title: "بناء تطبيقات ويب ميسرة",
    description: "تعلم أفضل الممارسات لإنشاء تجارب ويب شاملة وميسرة لجميع المستخدمين.",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 5,
    title: "تحسين الأداء في تطبيقات React",
    description: "اكتشف تقنيات لتحسين أداء تطبيقات React وتقديم تجربة مستخدم سلسة.",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 6,
    title: "مقدمة إلى GraphQL",
    description:
      "تعلم كيفية استخدام GraphQL لبناء واجهات برمجة تطبيقات مرنة وفعالة لتطبيقات الويب الخاصة بك.",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 7,
    title: "هندسة بدون خادم مع Vercel",
    description: "استكشف فوائد الهندسة بدون خادم وكيفية نشر تطبيقاتك باستخدام Vercel.",
    imageUrl: "/placeholder.svg?height=200&width=300"
  }
]
