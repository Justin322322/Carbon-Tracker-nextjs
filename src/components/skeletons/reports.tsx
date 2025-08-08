import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

function Line({ className }: { className?: string }) {
  return <div className={cn("rounded-md bg-muted/60 loading-shimmer", className)} />
}

function IconBox({ className }: { className?: string }) {
  return <div className={cn("h-8 w-8 rounded-lg bg-muted/50 loading-shimmer", className)} />
}

function Pill({ className }: { className?: string }) {
  return <div className={cn("h-7 rounded-md bg-muted/40 loading-shimmer", className)} />
}

export function ReportsQuickStatsSkeleton() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium"><Line className="h-4 w-28" /></CardTitle>
          <IconBox />
        </CardHeader>
        <CardContent>
          <Line className="h-7 w-20 mb-1" />
          <Line className="h-3 w-24" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium"><Line className="h-4 w-24" /></CardTitle>
          <IconBox />
        </CardHeader>
        <CardContent>
          <Line className="h-7 w-24 mb-1" />
          <Line className="h-3 w-28" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium"><Line className="h-4 w-32" /></CardTitle>
          <IconBox />
        </CardHeader>
        <CardContent>
          <Line className="h-7 w-24 mb-1" />
          <Line className="h-3 w-20" />
        </CardContent>
      </Card>
    </>
  )
}

export function RecentReportsSkeleton({ items = 3 }: { items?: number }) {
  return (
    <div className="space-y-4">
      {[...Array(items)].map((_, idx) => (
        <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-lg bg-muted/30 loading-shimmer h-9 w-9" />
            <div className="flex-1 space-y-2">
              <Line className="h-4 w-64" />
              <Line className="h-3 w-72" />
              <div className="flex items-center gap-4 pt-1 text-xs">
                <Line className="h-4 w-28" />
                <Line className="h-4 w-12" />
                <Pill className="w-20" />
              </div>
            </div>
          </div>
          <Pill className="w-28" />
        </div>
      ))}
    </div>
  )
}

