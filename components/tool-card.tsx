import Link from "next/link"
import { ExternalLink, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ToolCardProps {
  name: string
  description: string
  image: string
  rating: number
  link: string
  tags: string[]
}

export function ToolCard({ name, description, image, rating, link, tags }: ToolCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="mb-3 text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <Button asChild variant="outline" size="sm">
          <Link href={`/tools/${name.toLowerCase().replace(/\s+/g, "-")}`}>Details</Link>
        </Button>
        <Button asChild size="sm" className="bg-gradient-to-r from-primary to-secondary">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visit <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

