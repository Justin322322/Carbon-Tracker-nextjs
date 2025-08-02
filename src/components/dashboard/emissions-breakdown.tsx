"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCO2, formatPercentage } from "@/lib/utils"
import type { ChartData } from "@/types"

const mockData: ChartData[] = [
  { name: "Transportation", value: 89.2, percentage: 36.1, color: "#ef4444" },
  { name: "Electricity", value: 67.8, percentage: 27.4, color: "#f59e0b" },
  { name: "Food", value: 45.3, percentage: 18.3, color: "#10b981" },
  { name: "Heating", value: 32.1, percentage: 13.0, color: "#f97316" },
  { name: "Waste", value: 8.9, percentage: 3.6, color: "#8b5cf6" },
  { name: "Other", value: 4.0, percentage: 1.6, color: "#6b7280" },
]

interface EmissionsBreakdownProps {
  data?: ChartData[]
  viewType?: "pie chart" | "bar chart"
}

export function EmissionsBreakdown({ 
  data = mockData, 
  viewType = "pie chart" 
}: EmissionsBreakdownProps) {
  const [selectedView, setSelectedView] = React.useState<"pie chart" | "bar chart">(viewType)

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ value: number; payload: ChartData }> }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl border bg-background/95 backdrop-blur-sm p-3 sm:p-4 shadow-xl"
        >
          <p className="font-semibold text-sm mb-1">{data.name}</p>
          <p className="text-sm text-primary font-medium">
            {formatCO2(data.value)} ({formatPercentage(data.percentage ?? 0)})
          </p>
        </motion.div>
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
              Emissions Breakdown
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Distribution by category this month
            </CardDescription>
          </div>
          
          {/* Compact View Toggle - Reduced width while maintaining touch targets */}
          <div className="flex rounded-xl border bg-muted/50 p-1 backdrop-blur-sm w-fit">
            <motion.button
              onClick={() => setSelectedView("pie chart")}
              className={`rounded-lg px-3 sm:px-3 py-2.5 sm:py-2 text-sm font-medium transition-all duration-200 min-h-[44px] sm:min-h-0 ${
                selectedView === "pie chart" 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "hover:bg-muted/80 text-muted-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pie Chart
            </motion.button>
            <motion.button
              onClick={() => setSelectedView("bar chart")}
              className={`rounded-lg px-3 sm:px-3 py-2.5 sm:py-2 text-sm font-medium transition-all duration-200 min-h-[44px] sm:min-h-0 ${
                selectedView === "bar chart" 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "hover:bg-muted/80 text-muted-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bar Chart
            </motion.button>
          </div>
        </div>
      </CardHeader>
      
      {/* Enhanced divider */}
      <div className="px-4 sm:px-6 relative">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      
      <CardContent className="pt-4 sm:pt-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Enhanced Chart */}
          <div className="lg:col-span-2">
            <motion.div
              key={selectedView}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-64 sm:h-80"
            >
              <ResponsiveContainer width="100%" height="100%">
                {selectedView === "pie chart" ? (
                  <PieChart>
                    <Pie
                      data={data}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      innerRadius={40}
                      paddingAngle={3}
                      startAngle={90}
                      endAngle={450}
                    >
                      {data.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          stroke="transparent"
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                ) : (
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="name" 
                      fontSize={10}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis fontSize={10} tick={{ fill: "hsl(var(--muted-foreground))" }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                      dataKey="value" 
                      radius={[4, 4, 0, 0]}
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                )}
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Enhanced Legend */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Categories</h4>
            <div className="space-y-2 sm:space-y-3">
              {data.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-muted/30 transition-all duration-200 group/item"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <motion.div 
                      className="h-3 w-3 sm:h-4 sm:w-4 rounded-full shadow-sm" 
                      style={{ backgroundColor: item.color }}
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="text-xs sm:text-sm font-medium group-hover/item:text-primary transition-colors truncate">
                      {item.name}
                    </span>
                  </div>
                  <div className="text-right min-w-0">
                    <motion.div 
                      className="text-xs sm:text-sm font-semibold text-primary truncate"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {formatCO2(item.value)}
                    </motion.div>
                    <div className="text-xs text-muted-foreground font-medium">
                      {formatPercentage(item.percentage ?? 0)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Enhanced Summary Stats */}
            <motion.div 
              className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-primary/15 to-primary/25 border border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-sm font-semibold text-primary mb-2">Summary</div>
              <div className="space-y-1 sm:space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Emissions</span>
                  <span className="font-medium">{formatCO2(data.reduce((sum, item) => sum + item.value, 0))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Top Category</span>
                  <span className="font-medium truncate">{data[0]?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Categories</span>
                  <span className="font-medium">{data.length}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}