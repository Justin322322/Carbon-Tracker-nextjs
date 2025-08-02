"use client"

import * as React from "react"
import Link from "next/link"
import { Bell, Search, User, Menu, Sparkles } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

interface NavbarProps {
  onMobileMenuToggle?: () => void
}

export function Navbar({ onMobileMenuToggle }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-base sm:text-lg">🌱</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:from-green-500 group-hover:to-emerald-500 transition-all duration-300">
                CarbonTracker
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Pro</span>
            </div>
          </div>
        </Link>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 sm:mx-8">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search emissions, reports..."
              className="w-full rounded-xl border border-input bg-muted/30 pl-12 pr-4 py-2 sm:py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200 hover:bg-muted/50 focus:bg-background"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <kbd className="pointer-events-none inline-flex h-4 sm:h-5 select-none items-center gap-1 rounded border bg-muted px-1 sm:px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden hover:bg-muted/80 transition-colors h-9 w-9 sm:h-10 sm:w-10"
            onClick={onMobileMenuToggle}
          >
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Open menu</span>
          </Button>

          {/* Search button for mobile */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden lg:flex hover:bg-muted/80 transition-colors h-9 w-9 sm:h-10 sm:w-10"
          >
            <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative h-9 w-9 sm:h-10 sm:w-10 hover:bg-muted/80 transition-colors"
          >
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-[8px] sm:text-[10px] text-white flex items-center justify-center font-medium shadow-lg">
              3
            </span>
            <span className="sr-only">Notifications</span>
          </Button>

          {/* Theme Toggle */}
          <div className="hover:bg-muted/80 rounded-lg transition-colors">
            <ThemeToggle />
          </div>

          {/* User Avatar */}
          <Button 
            variant="ghost" 
            className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl hover:bg-muted/80 transition-all duration-200 hover:scale-105"
          >
            <Avatar className="h-9 w-9 sm:h-10 sm:w-10 ring-2 ring-transparent hover:ring-primary/20 transition-all duration-200">
              <AvatarImage src="/avatars/user.png" alt="User" />
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-background" />
          </Button>

          {/* Quick Action Button */}
          <div>
            <Button 
              size="sm" 
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Quick Add</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}