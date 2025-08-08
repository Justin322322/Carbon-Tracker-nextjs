"use client"

import * as React from "react"
import { Save, Bell, Shield, Palette, Zap } from "lucide-react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/hooks/use-theme"
import { Skeleton } from "@/components/ui/skeleton"
import { SettingsAppearanceSkeleton, SettingsNotificationsSkeleton, SettingsPrivacySkeleton, SettingsIntegrationsSkeleton } from "@/components/skeletons/settings"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [settings, setSettings] = React.useState({
    notifications: true,
    emailReports: false,
    dataSharing: false,
    autoTracking: true,
    unit: "metric" as "metric" | "imperial",
    language: "en",
  })
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])


  const handleSave = () => {
    // Save settings logic here
    console.log("Settings saved:", settings)
  }

  const updateSetting = (key: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Customize your experience and preferences</p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Appearance Settings */}
        <div>
          {loading ? (
            <SettingsAppearanceSkeleton />
          ) : (
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-50" />
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Appearance
                </CardTitle>
                <CardDescription>
                  Customize the look and feel of your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Theme</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["light", "dark", "system"].map((themeOption) => (
                      <button
                        key={themeOption}
                        onClick={() => setTheme(themeOption as "light" | "dark" | "system")}
                        className={`p-3 rounded-lg border text-sm capitalize transition-colors ${
                          theme === themeOption
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        {themeOption}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Units</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["metric", "imperial"].map((unit) => (
                      <button
                        key={unit}
                        onClick={() => updateSetting("unit", unit)}
                        className={`p-3 rounded-lg border text-sm capitalize transition-colors ${
                          settings.unit === unit
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        {unit === "metric" ? "Metric (kg, km)" : "Imperial (lbs, mi)"}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Notifications Settings */}
        <div>
          {loading ? (
            <SettingsNotificationsSkeleton />
          ) : (
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-50" />
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
                <CardDescription>
                  Manage how you receive updates and alerts
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Push Notifications</label>
                    <p className="text-xs text-muted-foreground">
                      Receive alerts about your carbon footprint
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications}
                    onCheckedChange={(checked) => updateSetting("notifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Email Reports</label>
                    <p className="text-xs text-muted-foreground">
                      Weekly summary reports via email
                    </p>
                  </div>
                  <Switch
                    checked={settings.emailReports}
                    onCheckedChange={(checked) => updateSetting("emailReports", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Auto Tracking</label>
                    <p className="text-xs text-muted-foreground">
                      Automatically detect transportation modes
                    </p>
                  </div>
                  <Switch
                    checked={settings.autoTracking}
                    onCheckedChange={(checked) => updateSetting("autoTracking", checked)}
                  />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Privacy Settings */}
        <div>
          {loading ? (
            <SettingsPrivacySkeleton />
          ) : (
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-50" />
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Privacy & Data
                </CardTitle>
                <CardDescription>
                  Control your data sharing and privacy settings
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Anonymous Data Sharing</label>
                    <p className="text-xs text-muted-foreground">
                      Help improve our carbon tracking algorithms
                    </p>
                  </div>
                  <Switch
                    checked={settings.dataSharing}
                    onCheckedChange={(checked) => updateSetting("dataSharing", checked)}
                  />
                </div>

                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    Export My Data
                  </Button>
                  <Button variant="outline" className="w-full">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Integrations */}
        <div>
          {loading ? (
            <SettingsIntegrationsSkeleton />
          ) : (
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-50" />
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Integrations
                </CardTitle>
                <CardDescription>
                  Connect external services to track emissions automatically
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                {[
                  { name: "Google Calendar", description: "Track travel emissions from calendar events", connected: false },
                  { name: "Spotify", description: "Estimate streaming carbon footprint", connected: true },
                  { name: "Bank Account", description: "Analyze spending-based emissions", connected: false },
                  { name: "Smart Home", description: "Monitor home energy usage", connected: true },
                ].map((integration) => (
                  <div key={integration.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="text-sm font-medium">{integration.name}</div>
                      <div className="text-xs text-muted-foreground">{integration.description}</div>
                    </div>
                    <Button
                      variant={integration.connected ? "secondary" : "default"}
                      size="sm"
                    >
                      {integration.connected ? "Connected" : "Connect"}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-8">
        <Button onClick={handleSave} className="gap-2">
          <Save className="h-4 w-4" />
          Save Settings
        </Button>
      </div>
    </DashboardLayout>
  )
}