import Link from "next/link"
import { ArrowRight, ExternalLink, Play, Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BlogCard } from "@/components/blog-card"
import { FeaturedTool } from "@/components/featured-tool"
import { ToolCard } from "@/components/tool-card"
import { ComparisonTable } from "@/components/comparison-table"
import { MobileNav } from "@/components/mobile-nav"
import { AdBanner } from "@/components/ad-banner"
import { AdArticle } from "@/components/ad-article"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <MobileNav />
            <Link href="/" className="flex items-center space-x-2">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xl font-bold text-transparent">
                AI Video Insights
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/tools" className="text-sm font-medium hover:text-primary">
              Tools
            </Link>
            <Link href="https://instagram.com/neural_wilderness" className="text-sm font-medium hover:text-primary">
              Tutorials
            </Link>
            <Link href="https://www.synthesia.io/post/ai-tools" className="text-sm font-medium hover:text-primary">
              Comparisons</Link>
            {/* </Link>
            <Link href="/resources" className="text-sm font-medium hover:text-primary">
              Resources */}
            
          </div>
          <div className="flex items-center">
            <Button variant="outline" size="sm" className="mr-2 hidden sm:flex" asChild>
              <Link href="https://app.klingai.com/global/community/material">
                <ExternalLink className="mr-2 h-4 w-4" />
                Resources
              </Link>
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-secondary" asChild>
              <Link href="https://instagram.com/neural_wilderness">
                <Play className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Watch Demo</span>
                <span className="sm:hidden">Demo</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-8 md:py-16">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
              Transform Your Content with AI Video Tools
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-xl text-muted-foreground">
              Comprehensive guides and comparisons of the best AI tools for image-to-video and text-to-video creation.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary" asChild>
                <Link href="https://runwayml.com/">Explore Top Tools</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto mt-3 sm:mt-0" asChild>
                <Link href="https://www.copy.ai/blog/ai-content-creation">Read Latest Guides</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="b" gradientTransform="rotate(45 0.5 0.5)">
                <stop offset="0%" stopColor="hsl(265, 89%, 50%)" />
                <stop offset="100%" stopColor="hsl(217, 91%, 60%)" />
              </linearGradient>
            </defs>
            <path d="M0,1000 C200,800 800,900 1000,1000 V0 H0 Z" fill="url(#b)" />
          </svg>
        </div>
      </section>

      {/* Ad Banner - Top */}
      <div className="container my-6">
        <div className="mx-auto max-w-4xl">
          <AdBanner slot="3905317926" format="horizontal" responsive={false} />
        </div>
      </div>

      {/* Main Content */}
      <main className="container py-6 md:py-12">
        {/* Featured Tool Section */}
        <section className="mb-8 md:mb-16">
          <div className="mb-4 md:mb-6 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured AI Video Tool</h2>
            <Link href="/tools" className="flex items-center text-sm font-medium text-primary">
              View all <ArrowRight className="ml-1 h-4 w-4 hidden sm:inline" />
            </Link>
          </div>
          <FeaturedTool />
        </section>

        {/* In-article Ad */}
        <AdArticle />

        {/* Top Tools Section */}
        <section className="mb-8 md:mb-16">
          <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold tracking-tight">Top AI Video Creation Tools</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ToolCard
              name="Runway ML"
              description="Advanced AI video generation platform with text-to-video, image-to-video, and video editing capabilities."
              image="/images/runway.png?height=200&width=400"
              rating={4.8}
              link="https://runwayml.com"
              tags={["Text-to-Video", "Image-to-Video", "Editing"]}
            />
            <ToolCard
              name="Synthesia"
              description="Create AI videos with virtual presenters speaking your script in over 120 languages."
              image="/images/synthesys.jpeg?height=200&width=400"
              rating={4.6}
              link="https://synthesia.io"
              tags={["Virtual Presenters", "Multilingual", "Business"]}
            />
            <ToolCard
              name="D-ID"
              description="Turn text and images into talking avatar videos with realistic speech and expressions."
              image="/images/D-id.png?height=200&width=400"
              rating={4.5}
              link="https://d-id.com"
              tags={["Digital Humans", "Avatars", "Text-to-Video"]}
            />
          </div>
        </section>

        {/* New Tools Section */}
        <section className="mb-8 md:mb-16">
          <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold tracking-tight">New AI Video Tools</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ToolCard
              name="Kling AI"
              description="Create AI-generated videos with realistic digital humans and customizable scripts in multiple languages."
              image="/images/klingai.png?height=200&width=400"
              rating={4.3}
              link="https://kling.ai"
              tags={["Digital Humans", "Multilingual", "Customizable"]}
            />
            <ToolCard
              name="Adobe Firefly"
              description="Adobe's AI image and video generation tool with seamless integration into Creative Cloud apps."
              image="/images/adobe firefly.jpeg?height=200&width=400"
              rating={4.7}
              link="https://firefly.adobe.com"
              tags={["Creative Cloud", "Image-to-Video", "Professional"]}
            />
            <ToolCard
              name="Hailuo AI"
              description="Minimax's advanced AI video generation platform with high-quality text-to-video capabilities."
              image="/images/minimax.png?height=200&width=400"
              rating={4.4}
              link="https://minimax.io/hailuo"
              tags={["Text-to-Video", "High Quality", "Animation"]}
            />
          </div>
        </section>

        {/* Ad Banner - Middle */}
        <div className="my-8">
          <div className="mx-auto max-w-4xl">
            <AdBanner slot="3905317926" format="rectangle" responsive={false} />
          </div>
        </div>

        {/* Comparison Section */}
        <section className="mb-8 md:mb-16 rounded-xl border bg-muted/30 p-4 md:p-6 overflow-x-auto">
          <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold tracking-tight">AI Video Tools Comparison</h2>
          <ComparisonTable />
          <div className="mt-6 text-center">
            <Button variant="outline" asChild>
              <Link href="/comparisons">
                View Full Comparison <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="mb-8 md:mb-16">
          <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold tracking-tight">Learn About AI Video Creation</h2>
          <Tabs defaultValue="beginners" className="w-full">
            <TabsList className="mb-4 md:mb-6 w-full justify-start overflow-x-auto">
              <TabsTrigger value="beginners">For Beginners</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Techniques</TabsTrigger>
              <TabsTrigger value="business">Business Use Cases</TabsTrigger>
            </TabsList>
            <TabsContent value="beginners" className="space-y-4">
              <Card>
                <CardContent className="p-4 md:p-6">
                  <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-bold">Getting Started with AI Video Creation</h3>
                  <p className="mb-3 md:mb-4 text-muted-foreground">
                    AI video generation tools have revolutionized content creation, making it accessible to everyone
                    regardless of technical expertise. Here's what you need to know to get started:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>Understanding the different types of AI video tools (text-to-video, image-to-video)</li>
                    <li>Choosing the right platform based on your needs and budget</li>
                    <li>Basic principles of prompt engineering for better results</li>
                    <li>Common limitations and how to work around them</li>
                  </ul>
                  <Button className="mt-4 md:mt-6" variant="outline" asChild>
                    <Link href="/guides/beginners">Read Beginner's Guide</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="advanced" className="space-y-4">
              <Card>
                <CardContent className="p-4 md:p-6">
                  <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-bold">Advanced AI Video Techniques</h3>
                  <p className="mb-3 md:mb-4 text-muted-foreground">
                    Take your AI video creation to the next level with these advanced techniques used by professionals:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>Fine-tuning models for consistent style and branding</li>
                    <li>Combining multiple AI tools for complex workflows</li>
                    <li>Advanced prompt engineering for precise control</li>
                    <li>Post-processing techniques to enhance AI-generated content</li>
                  </ul>
                  <Button className="mt-4 md:mt-6" variant="outline" asChild>
                    <Link href="/guides/advanced">Explore Advanced Techniques</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="business" className="space-y-4">
              <Card>
                <CardContent className="p-4 md:p-6">
                  <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-bold">Business Applications of AI Video</h3>
                  <p className="mb-3 md:mb-4 text-muted-foreground">
                    Discover how businesses are leveraging AI video generation to transform their marketing, training,
                    and communication:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>Creating personalized video messages at scale</li>
                    <li>Developing multilingual content without multiple shoots</li>
                    <li>Producing training and onboarding videos efficiently</li>
                    <li>ROI analysis and cost comparison with traditional video production</li>
                  </ul>
                  <Button className="mt-4 md:mt-6" variant="outline" asChild>
                    <Link href="/guides/business">View Business Use Cases</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* In-article Ad */}
        <AdArticle />

        {/* Latest Articles */}
        <section>
          <div className="mb-4 md:mb-6 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Latest Articles</h2>
            <Link href="/articles" className="flex items-center text-sm font-medium text-primary">
              View all <ArrowRight className="ml-1 h-4 w-4 hidden sm:inline" />
            </Link>
          </div>
          <Separator className="mb-6 md:mb-8" />
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              title="Runway Gen-2: The New Standard in Text-to-Video Generation"
              excerpt="Runway's Gen-2 model has set new benchmarks for quality and control in AI video generation. We explore its capabilities and limitations."
              date="Mar 25, 2025"
              image="/placeholder.svg?height=200&width=400"
              slug="/articles/runway-gen2-standard"
              author="Alex Chen"
              readTime="8 min read"
            />
            <BlogCard
              title="How Pika Labs is Democratizing Video Creation"
              excerpt="Pika Labs has emerged as a powerful competitor in the AI video space, offering impressive capabilities through their Discord bot and new web interface."
              date="Mar 22, 2025"
              image="/placeholder.svg?height=200&width=400"
              slug="/articles/pika-labs-democratizing"
              author="Maya Johnson"
              readTime="6 min read"
            />
            <div className="hidden lg:block">
              <BlogCard
                title="HeyGen vs. Synthesia: AI Presenters Compared"
                excerpt="A detailed comparison of two leading platforms for creating videos with AI presenters, examining quality, customization options, and pricing."
                date="Mar 18, 2025"
                image="/placeholder.svg?height=200&width=400"
                slug="/articles/heygen-synthesia-comparison"
                author="David Park"
                readTime="10 min read"
              />
            </div>
          </div>
        </section>

        {/* Ad Banner - Bottom */}
        <div className="my-8">
          <AdBanner slot="3905317926" className="mx-auto max-w-4xl" />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold">AI Video Insights</h3>
              <p className="mt-4 text-muted-foreground">
                Your trusted resource for information on AI-powered video creation tools, techniques, and trends. We
                help creators, marketers, and businesses harness the power of AI for video content.
              </p>

              {/* Social Media Section */}
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-3">Follow Us for More AI Video Content</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/neural_wilderness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-primary to-secondary p-2 rounded-full text-white hover:opacity-90 transition-opacity"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/neural_wilderness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-primary to-secondary p-2 rounded-full text-white hover:opacity-90 transition-opacity"
                    aria-label="Follow us on Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://youtube.com/neural_wilderness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-primary to-secondary p-2 rounded-full text-white hover:opacity-90 transition-opacity"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Follow our Instagram{" "}
                  <a
                    href="https://www.instagram.com/neural_wilderness/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    @neural_wilderness
                  </a>{" "}
                  for the latest AI-generated video examples, tutorials, and behind-the-scenes content!
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/tools" className="hover:text-primary">
                    AI Tools Directory
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="hover:text-primary">
                    Guides & Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/comparisons" className="hover:text-primary">
                    Tool Comparisons
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-primary">
                    Free Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-primary">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-primary/20 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 AI Video Insights. All information is provided for educational purposes only.</p>
            <p className="mt-2">
              <span className="text-primary font-medium">Follow us on Instagram:</span> Check out{" "}
              <a
                href="https://www.instagram.com/neural_wilderness/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                @neural_wilderness
              </a>{" "}
              for more AI video generation examples and tutorials!
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

