"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { DashboardLayout } from "../components/layout/dashboard-layout"
import { EmissionsOverview } from "@/components/dashboard/emissions-overview"
import { EmissionsBreakdown } from "@/components/dashboard/emissions-breakdown"
import { EmissionsTrend } from "@/components/dashboard/emissions-trend"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { Lightbulb } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Enhanced Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-6 lg:mb-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-2">
            <motion.h1 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Carbon Dashboard
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Monitor your environmental impact and track progress towards sustainability goals
            </motion.p>
          </div>
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-right space-y-1">
              <div className="text-xs sm:text-sm text-muted-foreground">Last updated</div>
              <div className="text-xs sm:text-sm font-medium">2 hours ago</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium">Live</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Overview Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-6 lg:mb-8"
      >
        <EmissionsOverview 
          totalEmissions={247.3}
          monthlyChange={-12}
          yearGoal={2500}
          currentProgress={68.2}
        />
      </motion.div>

      {/* Enhanced Main Content Grid */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <EmissionsTrend />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <EmissionsBreakdown />
          </motion.div>
        </div>

        {/* Right Column - Activity Feed & Cards */}
        <div className="space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <ActivityFeed />
          </motion.div>

          {/* Enhanced Quick Actions Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="rounded-2xl border bg-card/90 backdrop-blur-sm p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Quick Actions
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <motion.button 
                className="w-full text-left p-3 sm:p-4 rounded-xl hover:bg-muted/50 transition-all duration-200 border border-transparent hover:border-border group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-medium text-sm group-hover:text-primary transition-colors">Add Emission Entry</div>
                <div className="text-xs text-muted-foreground mt-1">Log new carbon footprint data</div>
              </motion.button>
              <motion.button 
                className="w-full text-left p-3 sm:p-4 rounded-xl hover:bg-muted/50 transition-all duration-200 border border-transparent hover:border-border group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-medium text-sm group-hover:text-primary transition-colors">View Reports</div>
                <div className="text-xs text-muted-foreground mt-1">Generate detailed analysis</div>
              </motion.button>
              <motion.button 
                className="w-full text-left p-3 sm:p-4 rounded-xl hover:bg-muted/50 transition-all duration-200 border border-transparent hover:border-border group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-medium text-sm group-hover:text-primary transition-colors">Set Goals</div>
                <div className="text-xs text-muted-foreground mt-1">Define reduction targets</div>
              </motion.button>
            </div>
          </motion.div>

          {/* Enhanced Environmental Tip */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="rounded-2xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/50 dark:via-emerald-950/50 dark:to-teal-950/50 p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-200/50 dark:border-green-800/30"
          >
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
          </motion.div>

          {/* Enhanced Progress Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="rounded-2xl border bg-card/90 backdrop-blur-sm p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              This Week&apos;s Progress
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-muted-foreground">Weekly Goal</span>
                <span className="text-xs sm:text-sm font-medium">75%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>0 kg CO₂</span>
                <span>50 kg CO₂</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  )
}