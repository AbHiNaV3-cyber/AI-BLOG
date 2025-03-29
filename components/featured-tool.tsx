import Link from "next/link"
import { Check, ExternalLink, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function FeaturedTool() {
  return (
    <div className="overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm">
      <div className="md:grid md:grid-cols-2">
        <div className="relative aspect-video md:aspect-auto md:h-full">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Runway ML Gen-2 interface"
            className="h-full w-full object-cover"
          />
          <div className="absolute left-4 top-4">
            <Badge className="bg-primary px-3 py-1 text-sm font-medium">Featured Tool</Badge>
          </div>
        </div>
        <div className="flex flex-col justify-center p-6 md:p-8">
          <div className="mb-2 flex items-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Runway ML</h2>
            <div className="ml-auto flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 font-medium">4.8/5</span>
            </div>
          </div>
          <p className="mb-6 text-muted-foreground">
            Runway ML has revolutionized AI video generation with their Gen-2 model, offering unprecedented quality and
            control. Create videos from text prompts, images, or edit existing videos with AI-powered tools.
          </p>

          <div className="mb-6 grid grid-cols-2 gap-3">
            <div className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-primary" />
              <span className="text-sm">Text-to-Video</span>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-primary" />
              <span className="text-sm">Image-to-Video</span>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-primary" />
              <span className="text-sm">Video Editing</span>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-primary" />
              <span className="text-sm">Motion Brush</span>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-primary" />
              <span className="text-sm">Gen-2 Model</span>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-primary" />
              <span className="text-sm">Cloud-based</span>
            </div>
          </div>

          <div className="mt-auto flex flex-wrap gap-3">
            <Button asChild className="bg-gradient-to-r from-primary to-secondary">
              <Link href="/tools/runway-ml">Read Full Review</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer">
                Visit Website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

