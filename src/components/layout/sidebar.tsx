"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  BarChart3, 
  FileText, 
  Zap, 
  Settings, 
  Home,
  TrendingUp,
  Calendar,
  Target
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    href: "/reports", 
    icon: FileText,
  },
  {
    title: "Emissions Sources",
    href: "/sources",
    icon: Zap,
  },
  {
    title: "Trends",
    href: "/trends",
    icon: TrendingUp,
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: Calendar,
  },
  {
    title: "Goals",
    href: "/goals",
    icon: Target,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "flex h-full w-full flex-col bg-background",
        className
      )}
    >
      <div className="flex h-full flex-col p-3 sm:p-4">
        {/* Quick Stats */}
        <div className="mb-4 sm:mb-6 rounded-lg border bg-card p-3 sm:p-4">
          <div className="text-xs sm:text-sm font-medium text-muted-foreground">This Month</div>
          <div className="text-xl sm:text-2xl font-bold text-primary">247.3 kg</div>
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="text-green-600">↓</span>
            12% from last month
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <div key={item.href}>
                <Link href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-2 sm:gap-3 h-10 sm:h-11 text-xs sm:text-sm font-medium",
                      isActive ? 
                        "bg-primary text-primary-foreground" :
                        "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                    {item.title}
                  </Button>
                </Link>
              </div>
            )
          })}
        </nav>

        {/* Bottom CTA */}
        <div className="mt-auto">
          <div className="rounded-lg bg-primary/5 p-3 sm:p-4 text-center">
            <div className="text-xs sm:text-sm font-medium">Upgrade to Pro</div>
            <div className="text-xs text-muted-foreground mt-1">
              Unlock advanced analytics
            </div>
            <Button size="sm" className="mt-2 sm:mt-3 w-full text-xs">
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}