"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { AdErrorBoundary } from "./ad-error-boundary"

interface AdBannerProps {
  slot: string
  format?: "auto" | "rectangle" | "horizontal" | "vertical"
  responsive?: boolean
  className?: string
}

export function AdBanner({ slot, format = "auto", responsive = true, className = "" }: AdBannerProps) {
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

  // Determine ad style based on format
  let adStyle: React.CSSProperties = { display: "block", minHeight: "90px" }

  if (!responsive) {
    switch (format) {
      case "rectangle":
        adStyle = { display: "inline-block", width: "300px", height: "250px" }
        break
      case "horizontal":
        adStyle = { display: "inline-block", width: "728px", height: "90px" }
        break
      case "vertical":
        adStyle = { display: "inline-block", width: "160px", height: "600px" }
        break
      default:
        adStyle = { display: "block", minHeight: "90px" }
    }
  }

  return (
    <AdErrorBoundary>
      <div ref={adRef} className={`overflow-hidden w-full ${className}`}>
        <ins
          className="adsbygoogle"
          style={adStyle}
          data-ad-client="ca-pub-1719878509694138"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        ></ins>
        <div className="text-xs text-muted-foreground text-center mt-1">Advertisement</div>
      </div>
    </AdErrorBoundary>
  )
}

