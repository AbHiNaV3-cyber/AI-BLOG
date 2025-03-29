"use client"

import { useEffect, useRef, useState } from "react"
import { AdErrorBoundary } from "./ad-error-boundary"

export function AdArticle() {
  const adRef = useRef<HTMLDivElement>(null)
  const [adLoaded, setAdLoaded] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Make sure the container is visible and has dimensions before loading ad
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only load ad when element is visible
          if (entry.isIntersecting && !adLoaded) {
            // Ensure the container has width before loading ad
            const width = adRef.current?.offsetWidth || 0
            if (width > 0) {
              try {
                const adsbygoogle = (window as any).adsbygoogle || []
                adsbygoogle.push({})
                setAdLoaded(true)
              } catch (error) {
                console.error("AdSense error:", error)
              }
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (adRef.current) {
      observer.observe(adRef.current)
    }

    return () => {
      if (adRef.current) {
        observer.unobserve(adRef.current)
      }
    }
  }, [adLoaded])

  return (
    <AdErrorBoundary>
      <div ref={adRef} className="my-8 text-center w-full" style={{ minHeight: "200px" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center", minHeight: "200px" }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-1719878509694138"
          data-ad-slot="3905317926"
        ></ins>
        <div className="text-xs text-muted-foreground text-center mt-1">Advertisement</div>
      </div>
    </AdErrorBoundary>
  )
}

