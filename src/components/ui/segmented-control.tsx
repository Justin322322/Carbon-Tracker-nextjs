"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type Segment = { value: string; label: string }

interface SegmentedControlProps {
  value: string
  onChange: (value: string) => void
  segments: Segment[]
  className?: string
  ariaLabel?: string
}

export function SegmentedControl({ value, onChange, segments, className, ariaLabel }: SegmentedControlProps) {
  return (
    <div role="tablist" aria-label={ariaLabel} className={cn("inline-flex rounded-xl border bg-muted/50 p-1 backdrop-blur-sm w-fit", className)}>
      {segments.map((s) => {
        const selected = value === s.value
        return (
          <button
            key={s.value}
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(s.value)}
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium min-h-[40px] sm:min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              selected ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted/80 text-muted-foreground"
            )}
          >
            {s.label}
          </button>
        )
      })}
    </div>
  )
}

