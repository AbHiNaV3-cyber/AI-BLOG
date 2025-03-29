import Link from "next/link"

import { Badge } from "@/components/ui/badge"

const categories = [
  { name: "Tools", count: 12, slug: "/category/tools" },
  { name: "Tutorials", count: 8, slug: "/category/tutorials" },
  { name: "Reviews", count: 6, slug: "/category/reviews" },
  { name: "Trends", count: 5, slug: "/category/trends" },
  { name: "Case Studies", count: 4, slug: "/category/case-studies" },
  { name: "Interviews", count: 3, slug: "/category/interviews" },
]

export function CategoryList() {
  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <Link key={category.slug} href={category.slug} className="block">
          <div className="flex items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-muted">
            <span className="text-sm">{category.name}</span>
            <Badge variant="outline" className="text-xs">
              {category.count}
            </Badge>
          </div>
        </Link>
      ))}
    </div>
  )
}

