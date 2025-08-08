import * as React from "react"
import { cn } from "@/lib/utils"

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-muted/50 loading-shimmer",
        className
      )}
      {...props}
    />
  )
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border bg-card/70 backdrop-blur-sm", className)}>
      <div className="p-6 space-y-4">
        <div className="h-4 w-1/3 rounded-md bg-muted/60 loading-shimmer" />
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="space-y-3">
          <div className="h-6 w-1/2 rounded-md bg-muted/60 loading-shimmer" />
          <div className="h-4 w-3/4 rounded-md bg-muted/50 loading-shimmer" />
          <div className="h-4 w-2/3 rounded-md bg-muted/40 loading-shimmer" />
        </div>
      </div>
    </div>
  )
}

