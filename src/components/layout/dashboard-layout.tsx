"use client"

import * as React from "react"
import { AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Sidebar } from "@/components/layout/sidebar"
import { Button } from "@/components/ui/button"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navbar onMobileMenuToggle={toggleMobileMenu} />
      
      {/* Fixed Desktop Sidebar */}
      <div className="fixed left-0 top-16 bottom-0 z-30 w-64 hidden lg:block">
        <div className="h-full border-r bg-background/80 backdrop-blur-xl shadow-lg">
          <Sidebar className="h-full" />
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Sidebar */}
            <div className="fixed left-0 top-0 bottom-0 z-50 lg:hidden w-80 sm:w-96">
              <div className="relative h-full bg-background/95 backdrop-blur-xl shadow-2xl">
                <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 border-b bg-background/50">
                  <span className="font-semibold text-base sm:text-lg">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeMobileMenu}
                    className="hover:bg-muted/80 transition-colors h-9 w-9 sm:h-10 sm:w-10"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
                <Sidebar className="h-[calc(100%-3.5rem)] sm:h-[calc(100%-4rem)]" />
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
      
      {/* Main Content */}
      <main className="min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] lg:ml-64">
        <div className="h-full p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}