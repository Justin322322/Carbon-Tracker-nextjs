export type EmissionCategory = 
  | "transportation"
  | "electricity"
  | "food"
  | "waste"
  | "heating"
  | "other"

export interface TrendData {
  date: string
  value: number
  category?: EmissionCategory
}

export interface ActivityLog {
  id: string
  type: "emission_added" | "goal_set" | "achievement_unlocked"
  message: string
  timestamp: Date
  metadata?: Record<string, string | number | boolean>
}

export type TimeRange = "week" | "month" | "year"

export interface ChartData {
  name: string
  value: number
  color?: string
  percentage?: number
}