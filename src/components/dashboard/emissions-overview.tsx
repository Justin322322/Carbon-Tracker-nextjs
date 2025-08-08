"use client"

import * as React from "react"

import { TrendingDown, Zap, ArrowUp, ArrowDown, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCO2 } from "@/lib/utils"

interface EmissionsOverviewProps {
  totalEmissions: number
  monthlyChange: number
  yearGoal: number
  currentProgress: number
}

export function EmissionsOverview({
  totalEmissions = 247.3,
  monthlyChange = -12,
  yearGoal = 2500,
  currentProgress = 68.2
}: EmissionsOverviewProps) {
  const isPositiveChange = monthlyChange > 0

  const cards = [
    {
      title: "Total Emissions",
      value: formatCO2(totalEmissions),
      description: `${Math.abs(monthlyChange)}% ${isPositiveChange ? 'increase' : 'decrease'} from last month`,
      icon: Zap,
      trend: isPositiveChange ? "up" : "down",
      color: isPositiveChange ? "text-red-500" : "text-green-500",
      bgColor: isPositiveChange ? "bg-red-50 dark:bg-red-950/30" : "bg-green-50 dark:bg-green-950/30",
      gradient: isPositiveChange ? "from-red-500 to-red-600" : "from-green-500 to-green-600",
      accentColor: isPositiveChange ? "bg-red-100 dark:bg-red-900/30" : "bg-green-100 dark:bg-green-900/30"
    },
    {
      title: "Year Goal Progress",
      value: `${currentProgress}%`,
      description: `${formatCO2(yearGoal - (totalEmissions * 12))} remaining for year goal`,
      icon: Star,
      trend: "neutral",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      gradient: "from-blue-500 to-blue-600",
      accentColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      title: "This Month",
      value: formatCO2(totalEmissions),
      description: "Average daily: " + formatCO2(totalEmissions / 30),
      icon: TrendingDown,
      trend: "down",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      gradient: "from-emerald-500 to-emerald-600",
      accentColor: "bg-emerald-100 dark:bg-emerald-900/30"
    },
    {
      title: "Efficiency Rating",
      value: "B+",
      description: "Above average for your region",
      icon: Star,
      trend: "up",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      gradient: "from-purple-500 to-purple-600",
      accentColor: "bg-purple-100 dark:bg-purple-900/30"
    }
  ]

  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div key={card.title}>
          <Card className="relative overflow-hidden h-48 sm:h-56 shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/90 backdrop-blur-sm">
            {/* Enhanced background gradient overlay - increased opacity */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.bgColor} opacity-40 transition-opacity duration-500`} />
            
            {/* Enhanced animated border - increased opacity */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-80 transition-opacity duration-500" />
            
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-3 sm:pb-4">
              <CardTitle className="text-sm sm:text-base font-semibold truncate text-foreground transition-colors">
                {card.title}
              </CardTitle>
              <div className="transition-transform duration-300">
                <card.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${card.color}`} />
              </div>
            </CardHeader>
            
            {/* Enhanced divider */}
            <div className="px-4 sm:px-6 relative">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            
            <CardContent className="pt-3 sm:pt-4 flex flex-col justify-between h-28 sm:h-36 relative">
              <div className="flex items-center justify-between">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text">
                  {card.value}
                </div>
                {card.trend !== "neutral" && (
                  <div
                    className={`flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium ${card.accentColor} ${
                      card.trend === "up"
                        ? "text-green-700 dark:text-green-400"
                        : "text-red-700 dark:text-red-400"
                    }`}
                  >
                    {card.trend === "up" ? (
                      <ArrowUp className="h-3 w-3" />
                    ) : (
                      <ArrowDown className="h-3 w-3" />
                    )}
                    {Math.abs(monthlyChange)}%
                  </div>
                )}
              </div>
              
              <div className="flex-1 flex flex-col justify-end space-y-2 sm:space-y-3">
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {card.description}
                </p>
                
                {/* Enhanced progress bar for goal */}
                {card.title === "Year Goal Progress" && (
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{currentProgress}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary/50 overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-to-r ${card.gradient}`} style={{ width: `${currentProgress}%` }} />
                    </div>
                  </div>
                )}

                {/* Efficiency indicator for rating card */}
                {card.title === "Efficiency Rating" && (
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                            i < 4 ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">Good</span>
                  </div>
                )}
              </div>
            </CardContent>

            {/* Enhanced glow effect - increased opacity */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/10 opacity-60 transition-opacity duration-300 pointer-events-none" />
          </Card>
        </div>
      ))}
    </div>
  )
}