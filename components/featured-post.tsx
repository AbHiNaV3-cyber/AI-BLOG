import Link from "next/link"
import { CalendarIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function FeaturedPost() {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
      <div className="md:grid md:grid-cols-2">
        <div className="aspect-video md:aspect-auto md:h-full">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="AI-generated video showcase"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-6">
          <div className="mb-2 flex items-center justify-between">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Featured
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="mr-1 h-4 w-4" />
              Mar 28, 2025
            </div>
          </div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
            The Future of AI Video Generation: 2025 Trends and Predictions
          </h2>
          <p className="mb-6 text-muted-foreground">
            Explore the cutting-edge advancements in AI-powered video creation tools and how they're transforming
            content creation for marketers, filmmakers, and everyday creators.
          </p>
          <div className="mt-auto">
            <Button asChild>
              <Link href="/blog/future-ai-video-generation">Read Article</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

