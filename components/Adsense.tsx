"use client";  // ✅ Ensures it's a Client Component

import { useEffect } from "react";

export default function AdSense() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1719878509694138";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No need to return anything, it's just loading the script
}
