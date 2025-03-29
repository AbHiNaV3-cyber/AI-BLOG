"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AddingNewContent() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Guide: Adding New Content to AI Video Insights</h1>

      <Tabs defaultValue="tools">
        <TabsList className="mb-4">
          <TabsTrigger value="tools">Adding New Tools</TabsTrigger>
          <TabsTrigger value="articles">Adding New Articles</TabsTrigger>
          <TabsTrigger value="sections">Adding New Sections</TabsTrigger>
        </TabsList>

        <TabsContent value="tools">
          <Card>
            <CardHeader>
              <CardTitle>How to Add New AI Video Tools</CardTitle>
              <CardDescription>Follow these steps to add new tools to the website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-medium">Step 1: Add Tool Card in page.tsx</h3>
              <p>
                To add a new tool, locate the "Top Tools Section" or "New Tools Section" in the{" "}
                <code>app/page.tsx</code> file and add a new ToolCard component:
              </p>

              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                {`<ToolCard
  name="New Tool Name"
  description="Description of the new tool and its capabilities."
  image="https://path-to-tool-image.jpg"
  rating={4.5}
  link="https://tool-website.com"
  tags={["Tag1", "Tag2", "Tag3"]}
/>`}
              </pre>

              <h3 className="text-lg font-medium">Step 2: Update Comparison Table</h3>
              <p>
                Add the new tool to the comparison table in <code>components/comparison-table.tsx</code>:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Add a new column in the TableHeader row</li>
                <li>Add corresponding cells in each TableRow with Check or X components</li>
              </ul>

              <h3 className="text-lg font-medium">Step 3: Create a Detailed Tool Page</h3>
              <p>
                Create a new file at <code>app/tools/[tool-name]/page.tsx</code> with detailed information about the
                tool.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="articles">
          <Card>
            <CardHeader>
              <CardTitle>How to Add New Articles</CardTitle>
              <CardDescription>Follow these steps to add new blog articles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-medium">Step 1: Add Blog Card in page.tsx</h3>
              <p>
                To add a new article to the homepage, locate the "Latest Articles" section in <code>app/page.tsx</code>{" "}
                and add a new BlogCard component:
              </p>

              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                {`<BlogCard
  title="Article Title"
  excerpt="Brief description of the article content."
  date="Month DD, YYYY"
  image="https://path-to-article-image.jpg"
  slug="/articles/article-slug"
  author="Author Name"
  readTime="X min read"
/>`}
              </pre>

              <h3 className="text-lg font-medium">Step 2: Create the Article Page</h3>
              <p>
                Create a new file at <code>app/articles/[article-slug]/page.tsx</code> with the full article content.
              </p>

              <h3 className="text-lg font-medium">Step 3: Update Article Index</h3>
              <p>If you have an articles index page, update it to include the new article.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sections">
          <Card>
            <CardHeader>
              <CardTitle>How to Add New Sections</CardTitle>
              <CardDescription>Follow these steps to add entirely new sections to the website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-medium">Step 1: Design the New Section</h3>
              <p>Decide on the purpose and layout of your new section. Create a new component if needed.</p>

              <h3 className="text-lg font-medium">Step 2: Add the Section to page.tsx</h3>
              <p>
                Insert your new section in the appropriate place in <code>app/page.tsx</code>:
              </p>

              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                {`{/* New Section */}
<section className="mb-8 md:mb-16">
  <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold tracking-tight">New Section Title</h2>
  
  {/* Section content goes here */}
  <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {/* Components or content */}
  </div>
</section>`}
              </pre>

              <h3 className="text-lg font-medium">Step 3: Update Navigation</h3>
              <p>If your new section needs to be accessible from the navigation menu, update:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Header navigation in <code>app/page.tsx</code>
                </li>
                <li>
                  Mobile navigation in <code>components/mobile-nav.tsx</code>
                </li>
                <li>Footer links if applicable</li>
              </ul>

              <h3 className="text-lg font-medium">Step 4: Create Dedicated Pages</h3>
              <p>If your section needs dedicated pages, create them in the appropriate directory structure.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

