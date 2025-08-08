import * as React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

function Line({ className }: { className?: string }) {
  return <div className={cn("h-3 rounded-md bg-muted/60 loading-shimmer", className)} />
}

function Pill({ className }: { className?: string }) {
  return <div className={cn("h-8 rounded-lg bg-muted/50 loading-shimmer", className)} />
}

export function EmissionsOverviewSkeleton() {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {[1,2,3,4].map((i) => (
        <Card key={i} className="relative overflow-hidden h-48 sm:h-56">
          <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-3 sm:pb-4">
            <Line className="h-4 w-28" />
            <div className="h-8 w-8 rounded-lg bg-muted/50 loading-shimmer" />
          </CardHeader>
          <div className="px-4 sm:px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          <CardContent className="pt-3 sm:pt-4 h-28 sm:h-36">
            <Line className="h-6 w-24 mb-3" />
            <div className="flex items-center justify-between">
              <div className="flex-1 space-y-2">
                <Line className="w-3/4" />
                <Line className="w-2/3" />
              </div>
              <div className="ml-3">
                <Pill className="h-6 w-20" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function EmissionsTrendSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
          <div className="space-y-2">
            <Line className="h-5 w-40" />
            <Line className="h-3 w-60" />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
            <div className="flex rounded-xl border bg-muted/50 p-1 backdrop-blur-sm w-fit">
              <Pill className="w-16" />
              <Pill className="w-16 ml-1" />
            </div>
            <div className="flex rounded-xl border bg-muted/50 p-1 backdrop-blur-sm w-fit">
              <Pill className="w-14" />
              <Pill className="w-14 ml-1" />
              <Pill className="w-14 ml-1" />
            </div>
          </div>
        </div>
      </CardHeader>
      <div className="px-4 sm:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <CardContent className="pt-4 sm:pt-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          {[1,2,3,4].map((i) => (
            <div key={i} className="text-center space-y-2">
              <div className="flex justify-center"><div className="h-5 w-5 rounded-md bg-muted/50 loading-shimmer" /></div>
              <Line className="h-5 w-20 mx-auto" />
              <Line className="h-3 w-24 mx-auto" />
            </div>
          ))}
        </div>
        <div className="h-64 sm:h-80 rounded-xl bg-muted/30 loading-shimmer" />
      </CardContent>
    </Card>
  )
}

export function EmissionsBreakdownSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
          <div className="space-y-2">
            <Line className="h-5 w-52" />
            <Line className="h-3 w-64" />
          </div>
          <div className="flex rounded-xl border bg-muted/50 p-1 w-fit">
            <Pill className="w-16" />
            <Pill className="w-16 ml-1" />
          </div>
        </div>
      </CardHeader>
      <div className="px-4 sm:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <CardContent className="pt-4 sm:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <div className="h-64 sm:h-80 rounded-xl bg-muted/30 loading-shimmer" />
          </div>
          <div className="space-y-3 sm:space-y-4">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-4 w-4 rounded-full bg-muted/60 loading-shimmer" />
                  <Line className="h-3 w-24" />
                </div>
                <div className="text-right">
                  <Line className="h-4 w-16 ml-auto" />
                  <Line className="h-3 w-12 ml-auto mt-1" />
                </div>
              </div>
            ))}
            <div className="p-4 rounded-xl bg-muted/20 border border-border/50">
              <Line className="h-4 w-20 mb-3" />
              <div className="space-y-2 text-xs">
                <div className="flex justify-between"><Line className="h-3 w-28" /><Line className="h-3 w-10" /></div>
                <div className="flex justify-between"><Line className="h-3 w-24" /><Line className="h-3 w-8" /></div>
                <div className="flex justify-between"><Line className="h-3 w-20" /><Line className="h-3 w-6" /></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function ActivityFeedSkeleton({ items = 4 }: { items?: number }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <Line className="h-5 w-40" />
        <Line className="h-3 w-64" />
      </CardHeader>
      <div className="px-4 sm:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <CardContent className="pt-4 space-y-0">
        {[...Array(items)].map((_, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-start space-x-4 p-4 rounded-xl">
              <div className="h-12 w-12 rounded-xl bg-muted/40 loading-shimmer" />
              <div className="flex-1 min-w-0 space-y-2">
                <Line className="h-4 w-2/3" />
                <Line className="h-3 w-1/2" />
                <Line className="h-3 w-1/3" />
              </div>
              <div className="h-7 w-24 rounded-full bg-muted/40 loading-shimmer" />
            </div>
            {idx < items - 1 && (
              <div className="mx-4">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
            )}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  )
}

