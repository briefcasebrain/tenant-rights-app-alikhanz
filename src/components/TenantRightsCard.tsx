"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface TenantRightsCardProps {
  title: string
  excerpt: string
  fullContent: string
}

export function TenantRightsCard({ title, excerpt, fullContent }: TenantRightsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="mb-4 shadow-sm border border-border">
      <CardContent className="p-4">
        <h3 className="mb-3">{title}</h3>

        <div className="text-muted-foreground space-y-3">
          <p>{excerpt}</p>

          {isExpanded && (
            <div className="space-y-3">
              {fullContent.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-primary hover:underline transition-colors"
          >
            {isExpanded ? "Read less" : "Read more"}
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
