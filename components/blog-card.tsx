import Link from "next/link"
import { CalendarIcon, Clock } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
  author: string
  readTime: string
}

export function BlogCard({ title, excerpt, date, image, slug, author, readTime }: BlogCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={slug}>
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="p-4 pb-0">
          <h3 className="line-clamp-2 text-lg font-bold">{title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <p className="line-clamp-3 text-sm text-muted-foreground">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 pt-0">
          <div className="text-xs text-muted-foreground">
            <span className="font-medium">{author}</span>
          </div>
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              {readTime}
            </div>
          </div>
        </CardFooter>
      </Link>
    </Card>
  )
}

