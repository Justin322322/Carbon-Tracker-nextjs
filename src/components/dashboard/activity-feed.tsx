"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { 
  Car, 
  Zap, 
  Utensils, 
  Recycle, 
  Flame, 
  Plus, 
  TrendingDown,
  Award,
  Target,
  Clock,
  Eye
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatCO2 } from "@/lib/utils"
import type { ActivityLog, EmissionCategory } from "@/types"

const categoryIcons = {
  transportation: Car,
  electricity: Zap,
  food: Utensils,
  waste: Recycle,
  heating: Flame,
  other: Plus,
}

const activityIcons = {
  emission_added: Plus,
  goal_set: Target,
  achievement_unlocked: Award,
}

const mockActivities: ActivityLog[] = [
  {
    id: "1",
    type: "emission_added",
    message: "Added car trip to downtown",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    metadata: { category: "transportation", amount: 12.3 }
  },
  {
    id: "2", 
    type: "achievement_unlocked",
    message: "Reached weekly goal - 15% reduction!",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    metadata: { achievement: "weekly_goal" }
  },
  {
    id: "3",
    type: "emission_added", 
    message: "Electricity usage logged",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    metadata: { category: "electricity", amount: 8.7 }
  },
  {
    id: "4",
    type: "goal_set",
    message: "Set monthly reduction target to 20%",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    metadata: { target: 20 }
  },
  {
    id: "5",
    type: "emission_added",
    message: "Weekly grocery shopping trip",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    metadata: { category: "food", amount: 15.6 }
  },
  {
    id: "6",
    type: "emission_added",
    message: "Home heating usage updated",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    metadata: { category: "heating", amount: 22.1 }
  },
]

interface ActivityFeedProps {
  activities?: ActivityLog[]
  maxItems?: number
}

export function ActivityFeed({ 
  activities = mockActivities, 
  maxItems = 6 
}: ActivityFeedProps) {
  const [showAll, setShowAll] = React.useState(false)
  const displayedActivities = showAll ? activities : activities.slice(0, maxItems)

  const getActivityIcon = (activity: ActivityLog) => {
    if (activity.type === "emission_added" && activity.metadata?.category) {
      const CategoryIcon = categoryIcons[activity.metadata.category as EmissionCategory]
      return CategoryIcon || Plus
    }
    return activityIcons[activity.type] || Plus
  }

  const getActivityColor = (activity: ActivityLog) => {
    switch (activity.type) {
      case "achievement_unlocked":
        return {
          bg: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
          icon: "text-yellow-600 dark:text-yellow-400",
          border: "border-yellow-200/50 dark:border-yellow-800/30"
        }
      case "goal_set":
        return {
          bg: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
          icon: "text-blue-600 dark:text-blue-400",
          border: "border-blue-200/50 dark:border-blue-800/30"
        }
      case "emission_added":
        return {
          bg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
          icon: "text-green-600 dark:text-green-400",
          border: "border-green-200/50 dark:border-green-800/30"
        }
      default:
        return {
          bg: "bg-gradient-to-br from-muted/50 to-muted/30",
          icon: "text-muted-foreground",
          border: "border-border/50"
        }
    }
  }

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours}h ago`
    
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays === 1) return "Yesterday"
    if (diffInDays < 7) return `${diffInDays}d ago`
    
    return format(timestamp, "MMM d")
  }

  return (
    <Card className="transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm overflow-hidden shadow-xl">
      {/* Enhanced gradient overlay - increased opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-50 transition-opacity duration-500" />
      
      <CardHeader className="relative">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="space-y-1 sm:space-y-2">
            <CardTitle className="text-lg sm:text-xl font-bold bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text">
              Recent Activity
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Your latest emissions and achievements
            </CardDescription>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="sm"
              className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 text-xs sm:text-sm"
            >
              <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              View All
            </Button>
          </motion.div>
        </div>
      </CardHeader>
      
      {/* Enhanced divider */}
      <div className="px-4 sm:px-6 relative">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      
      <CardContent className="pt-4 sm:pt-6 space-y-0 relative">
        {displayedActivities.map((activity, index) => {
          const ActivityIcon = getActivityIcon(activity)
          const colorClasses = getActivityColor(activity)
          
          return (
            <React.Fragment key={activity.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-muted/30 transition-all duration-200 group/item"
              >
                <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl ${colorClasses.bg} ${colorClasses.border} ring-1 ring-white/10 transition-all duration-200`}>
                  <ActivityIcon className={`h-5 w-5 sm:h-6 sm:w-6 ${colorClasses.icon}`} />
                </div>
                
                <div className="flex-1 min-w-0 space-y-1 sm:space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                    <p className="text-xs sm:text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors">
                      {activity.message}
                    </p>
                    {activity.type === "emission_added" && (
                      <div className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium w-fit">
                        <TrendingDown className="h-3 w-3" />
                        <span>Tracked</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-1">
                    {activity.metadata?.amount && (
                      <motion.p 
                        className="text-xs sm:text-sm text-primary font-semibold"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        +{formatCO2(Number(activity.metadata.amount))}
                      </motion.p>
                    )}
                    
                    {activity.metadata?.target && (
                      <motion.p 
                        className="text-xs sm:text-sm text-blue-600 font-semibold"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        Target: {activity.metadata.target}% reduction
                      </motion.p>
                    )}
                    
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {formatTimestamp(activity.timestamp)}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced divider between activities */}
              {index < displayedActivities.length - 1 && (
                <div className="mx-3 sm:mx-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
              )}
            </React.Fragment>
          )
        })}

        {activities.length > maxItems && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-3 sm:pt-4"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAll(true)}
              className="w-full hover:bg-muted/50 transition-all duration-200 text-xs sm:text-sm"
            >
              Show {activities.length - maxItems} more activities
            </Button>
          </motion.div>
        )}

        {showAll && activities.length > maxItems && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-3 sm:pt-4"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAll(false)}
              className="w-full hover:bg-muted/50 transition-all duration-200 text-xs sm:text-sm"
            >
              Show less
            </Button>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}