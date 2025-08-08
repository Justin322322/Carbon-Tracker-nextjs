"use client"

import * as React from "react"
import { DashboardLayout } from "../components/layout/dashboard-layout"
import { EmissionsOverview } from "@/components/dashboard/emissions-overview"
import { EmissionsBreakdown } from "@/components/dashboard/emissions-breakdown"
import { EmissionsTrend } from "@/components/dashboard/emissions-trend"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { Lightbulb } from "lucide-react"
import { CardSkeleton } from "@/components/ui/skeleton"
import { EmissionsOverviewSkeleton, EmissionsTrendSkeleton, EmissionsBreakdownSkeleton, ActivityFeedSkeleton } from "@/components/skeletons/dashboard"


export default function DashboardPage() {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <DashboardLayout>
      {/* Header with skeletons */}
      <div className="mb-6 lg:mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Carbon Dashboard
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
              Monitor your environmental impact and track progress towards sustainability goals
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="text-right space-y-1">
              <div className="text-xs sm:text-sm text-muted-foreground">Last updated</div>
              <div className="text-xs sm:text-sm font-medium">2 hours ago</div>
            </div>


            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium">Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="mb-6 lg:mb-8">
        {loading ? (
          <EmissionsOverviewSkeleton />
        ) : (
          <EmissionsOverview
            totalEmissions={247.3}
            monthlyChange={-12}
            yearGoal={2500}
            currentProgress={68.2}
          />
        )}
      </div>

      {/* Enhanced Main Content Grid */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {loading ? (
            <>
              <EmissionsTrendSkeleton />
              <EmissionsBreakdownSkeleton />
            </>
          ) : (
            <>
              <EmissionsTrend />
              <EmissionsBreakdown />
            </>
          )}
        </div>

        {/* Right Column - Activity Feed & Cards */}
        <div className="space-y-4 sm:space-y-6">
          {loading ? (
            <>
              <ActivityFeedSkeleton />
              <CardSkeleton className="h-60" />
              <CardSkeleton className="h-56" />
            </>
          ) : (
            <>
              <ActivityFeed />

              {/* Quick Actions Card */}
              <div className="relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm p-4 sm:p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-50 pointer-events-none" />
                <h3 className="relative font-semibold mb-3 sm:mb-4 text-base sm:text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Quick Actions
                </h3>
                <div className="relative space-y-2 sm:space-y-3">
                  <button className="w-full text-left p-3 sm:p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border group">
                    <div className="font-medium text-sm group-hover:text-primary transition-colors">Add Emission Entry</div>
                    <div className="text-xs text-muted-foreground mt-1">Log new carbon footprint data</div>
                  </button>
                  <button className="w-full text-left p-3 sm:p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border group">
                    <div className="font-medium text-sm group-hover:text-primary transition-colors">View Reports</div>
                    <div className="text-xs text-muted-foreground mt-1">Generate detailed analysis</div>
                  </button>
                  <button className="w-full text-left p-3 sm:p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border group">
                    <div className="font-medium text-sm group-hover:text-primary transition-colors">Set Goals</div>
                    <div className="text-xs text-muted-foreground mt-1">Define reduction targets</div>
                  </button>
                </div>
              </div>

              {/* Environmental Tip */}
              <div className="rounded-2xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/50 dark:via-emerald-950/50 dark:to-teal-950/50 p-4 sm:p-6 shadow-xl transition-all duration-500 border border-green-200/50 dark:border-green-800/30">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm text-green-800 dark:text-green-200">
                      Sustainability Tip
                    </h3>
                    <p className="text-xs sm:text-sm text-green-700 dark:text-green-300 leading-relaxed">
                      Using public transportation instead of driving can reduce your daily carbon footprint by up to 45%. Consider carpooling or biking for short trips!
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Summary Card */}
              <div className="relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm p-4 sm:p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-50 pointer-events-none" />
                <h3 className="relative font-semibold mb-3 sm:mb-4 text-base sm:text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  This Week&apos;s Progress
                </h3>
                <div className="relative space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Weekly Goal</span>
                    <span className="text-xs sm:text-sm font-medium">75%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-3/4" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>0 kg CO₂</span>
                    <span>50 kg CO₂</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}