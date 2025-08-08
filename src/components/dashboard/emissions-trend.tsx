"use client"

import * as React from "react"

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCO2 } from "@/lib/utils"
import type { TimeRange, TrendData } from "@/types"
import { BarChart3, TrendingUp, TrendingDown, Star } from "lucide-react"

const mockTrendData: Record<TimeRange, TrendData[]> = {
  week: [
    { date: "Mon", value: 8.2 },
    { date: "Tue", value: 12.1 },
    { date: "Wed", value: 9.8 },
    { date: "Thu", value: 15.3 },
    { date: "Fri", value: 11.7 },
    { date: "Sat", value: 6.4 },
    { date: "Sun", value: 4.9 },
  ],
  month: [
    { date: "Week 1", value: 67.3 },
    { date: "Week 2", value: 58.9 },
    { date: "Week 3", value: 72.1 },
    { date: "Week 4", value: 49.0 },
  ],
  year: [
    { date: "Jan", value: 245.6 },
    { date: "Feb", value: 198.4 },
    { date: "Mar", value: 267.8 },
    { date: "Apr", value: 234.2 },
    { date: "May", value: 189.7 },
    { date: "Jun", value: 256.1 },
    { date: "Jul", value: 278.9 },
    { date: "Aug", value: 247.3 },
    { date: "Sep", value: 0 },
    { date: "Oct", value: 0 },
    { date: "Nov", value: 0 },
    { date: "Dec", value: 0 },
  ]
}

interface EmissionsTrendProps {
  data?: Record<TimeRange, TrendData[]>
  chartType?: "line" | "area"
}

export function EmissionsTrend({ 
  data = mockTrendData, 
  chartType = "area" 
}: EmissionsTrendProps) {
  const [selectedRange, setSelectedRange] = React.useState<TimeRange>("month")
  const [selectedChart, setSelectedChart] = React.useState<"line" | "area">(chartType)

  const currentData = data[selectedRange]
  const total = currentData.reduce((acc, item) => acc + item.value, 0)
  const average = total / currentData.filter(item => item.value > 0).length

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-xl border bg-background/95 backdrop-blur-sm p-3 sm:p-4 shadow-xl">
          <p className="font-semibold text-sm mb-1">{label}</p>
          <p className="text-sm text-primary font-medium">
            {formatCO2(payload[0].value)}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <Card className="transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm overflow-hidden shadow-xl">
      {/* Enhanced gradient overlay - increased opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-50 transition-opacity duration-500" />
      
      <CardHeader className="relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
          <div className="space-y-1 sm:space-y-2">
            <CardTitle className="text-lg sm:text-xl font-bold bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text">
              Emissions Trend
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Track your carbon footprint over time with detailed analytics
            </CardDescription>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
            {/* Compact Chart Type Toggle - Reduced width while maintaining touch targets */}
            <div className="flex rounded-xl border bg-muted/50 p-1 backdrop-blur-sm w-fit">
              <button
                onClick={() => setSelectedChart("area")}
                className={`rounded-lg px-3 sm:px-3 py-2.5 sm:py-2 text-sm font-medium transition-all duration-200 min-h-[44px] sm:min-h-0 ${
                  selectedChart === "area"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted/80 text-muted-foreground"
                }`}
              >
                Area
              </button>
              <button
                onClick={() => setSelectedChart("line")}
                className={`rounded-lg px-3 sm:px-3 py-2.5 sm:py-2 text-sm font-medium transition-all duration-200 min-h-[44px] sm:min-h-0 ${
                  selectedChart === "line"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted/80 text-muted-foreground"
                }`}
              >
                Line
              </button>
            </div>

            {/* Compact Time Range Selector - Reduced width while maintaining touch targets */}
            <div className="flex rounded-xl border bg-muted/50 p-1 backdrop-blur-sm w-fit">
              {(["week", "month", "year"] as TimeRange[]).map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedRange(range)}
                  className={`rounded-lg px-3 sm:px-3 py-2.5 sm:py-2 text-sm font-medium capitalize transition-all duration-200 min-h-[44px] sm:min-h-0 ${
                    selectedRange === range
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "hover:bg-muted/80 text-muted-foreground"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      
      {/* Enhanced divider */}
      <div className="px-4 sm:px-6 relative">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      
      <CardContent className="pt-4 sm:pt-6 relative">
        {/* Enhanced Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          {[
            { label: `Total ${selectedRange}`, value: formatCO2(total), color: "text-primary", icon: BarChart3 },
            { label: "Daily Average", value: formatCO2(average), color: "text-foreground", icon: TrendingUp },
            { label: "vs Previous", value: "-12%", color: "text-green-600", icon: TrendingDown },
            { label: "Efficiency", value: "B+", color: "text-blue-600", icon: Star }
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center space-y-1 sm:space-y-2"
            >
              <div className="flex justify-center mb-1">
                <stat.icon className="h-4 w-4 sm:h-6 sm:w-6 text-muted-foreground" />
              </div>
              <div className={`text-lg sm:text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Chart */}
        <div className="h-64 sm:h-80 relative">
          <ResponsiveContainer width="100%" height="100%">
            {selectedChart === "area" ? (
              <AreaChart data={currentData}>
                <defs>
                  <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="date" 
                  fontSize={10}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                  angle={selectedRange === "year" ? -45 : 0}
                  textAnchor={selectedRange === "year" ? "end" : "middle"}
                  height={selectedRange === "year" ? 60 : 30}
                  interval={selectedRange === "year" ? 1 : 0}
                />
                <YAxis 
                  fontSize={10}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => formatCO2(value)}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                  width={60}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  fill="url(#colorEmissions)"
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 6, strokeWidth: 0, fill: "hsl(var(--primary))" }}
                />
              </AreaChart>
            ) : (
              <LineChart data={currentData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="date" 
                  fontSize={10}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                  angle={selectedRange === "year" ? -45 : 0}
                  textAnchor={selectedRange === "year" ? "end" : "middle"}
                  height={selectedRange === "year" ? 60 : 30}
                  interval={selectedRange === "year" ? 1 : 0}
                />
                <YAxis 
                  fontSize={10}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => formatCO2(value)}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                  width={60}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 6, strokeWidth: 0, fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}