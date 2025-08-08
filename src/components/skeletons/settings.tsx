import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

function Line({ className }: { className?: string }) {
  return <div className={cn("rounded-md bg-muted/60 loading-shimmer", className)} />
}

function Pill({ className }: { className?: string }) {
  return <div className={cn("rounded-md bg-muted/40 loading-shimmer", className)} />
}

export function SettingsAppearanceSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Line className="h-5 w-40" /></CardTitle>
        <CardDescription><Line className="h-3 w-72" /></CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Line className="h-4 w-20 mb-3" />
          <div className="grid grid-cols-3 gap-2">
            <Pill className="h-9" />
            <Pill className="h-9" />
            <Pill className="h-9" />
          </div>
        </div>
        <div>
          <Line className="h-4 w-16 mb-3" />
          <div className="grid grid-cols-2 gap-2">
            <Pill className="h-9" />
            <Pill className="h-9" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function SettingsNotificationsSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Line className="h-5 w-36" /></CardTitle>
        <CardDescription><Line className="h-3 w-64" /></CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {[1,2,3].map((i) => (
          <div key={i} className="flex items-center justify-between">
            <div>
              <Line className="h-4 w-40" />
              <Line className="h-3 w-56 mt-1" />
            </div>
            <div className="h-5 w-10 rounded-full bg-muted/40 loading-shimmer" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export function SettingsPrivacySkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Line className="h-5 w-40" /></CardTitle>
        <CardDescription><Line className="h-3 w-72" /></CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Line className="h-4 w-48" />
            <Line className="h-3 w-64 mt-1" />
          </div>
          <div className="h-5 w-10 rounded-full bg-muted/40 loading-shimmer" />
        </div>
        <div className="space-y-2">
          <Pill className="h-9" />
          <Pill className="h-9" />
        </div>
      </CardContent>
    </Card>
  )
}

export function SettingsIntegrationsSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Line className="h-5 w-36" /></CardTitle>
        <CardDescription><Line className="h-3 w-80" /></CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {[1,2,3,4].map((i) => (
          <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <Line className="h-4 w-40" />
              <Line className="h-3 w-64 mt-1" />
            </div>
            <Pill className="h-8 w-28" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

