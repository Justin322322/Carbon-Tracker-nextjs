"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  gradientTitle?: boolean
  actions?: React.ReactNode
  className?: string
}

export function PageHeader({ title, description, gradientTitle = false, actions, className }: PageHeaderProps) {
  return (
    <div className={cn("mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", className)}>
      <div>
        <h1 className={cn("text-3xl font-bold tracking-tight", gradientTitle && "gradient-text")}>{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-2">{actions}</div>
      )}
    </div>
  )
}

