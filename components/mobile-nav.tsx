"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <div className="flex items-center justify-between border-b pb-4">
          <Link
            href="/"
            className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xl font-bold text-transparent"
            onClick={() => setOpen(false)}
          >
            AI Video Insights
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="mt-6 flex flex-col space-y-4">
          <Link href="/tools" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Tools
          </Link>
          <Link href="/tutorials" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Tutorials
          </Link>
          <Link href="/comparisons" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Comparisons
          </Link>
          <Link href="/resources" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Resources
          </Link>
        </nav>
        <div className="mt-auto space-y-4 pt-6">
          <Button className="w-full" variant="outline">
            Resources
          </Button>
          <Button className="w-full bg-gradient-to-r from-primary to-secondary">Watch Demo</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

