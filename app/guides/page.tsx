import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuidesPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl md:text-4xl font-bold">AI Video Creation Guides</h1>
        <p className="mt-2 text-muted-foreground">
          Comprehensive guides to help you master AI video creation tools and techniques
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started with AI Video Creation</CardTitle>
            <CardDescription>For beginners looking to create their first AI videos</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Learn the basics of AI video generation, including tool selection, prompt engineering, and understanding
              different AI video types.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/guides/beginners">Read Guide</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Advanced AI Video Techniques</CardTitle>
            <CardDescription>Take your AI video creation to the next level</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Discover advanced techniques for creating professional-quality AI videos, including fine-tuning,
              multi-tool workflows, and post-processing.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/guides/advanced">Read Guide</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Business Applications of AI Video</CardTitle>
            <CardDescription>Leverage AI video for business growth</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Learn how businesses are using AI video generation to enhance marketing, training, and communication while
              reducing costs and increasing engagement.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/guides/business">Read Guide</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

