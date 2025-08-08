"use client"

import * as React from "react"
import { Download, FileText, Calendar, TrendingUp } from "lucide-react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/ui/page-header"
import { SegmentedControl, type Segment } from "@/components/ui/segmented-control"

import { ReportsQuickStatsSkeleton, RecentReportsSkeleton } from "@/components/skeletons/reports"


export default function ReportsPage() {
  const reports = [
    {
      id: "1",
      title: "Monthly Carbon Report - December 2024",
      description: "Comprehensive analysis of your carbon footprint for December",
      date: "2024-12-31",
      type: "monthly",
      size: "2.3 MB"
    },
    {
      id: "2",
      title: "Q4 2024 Sustainability Summary",
      description: "Quarterly review of emissions and sustainability goals",
      date: "2024-12-31",
      type: "quarterly",
      size: "4.1 MB"
    },
    {
      id: "3",
      title: "Transportation Analysis - December",
      description: "Detailed breakdown of transport-related emissions",
      date: "2024-12-30",
      type: "category",
      size: "1.8 MB"
    }
  ]

  const [filter, setFilter] = React.useState<string>("all")
  const segments: Segment[] = [
    { value: "all", label: "All" },
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "category", label: "Category" },
  ]

  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  const filteredReports = reports.filter(r => filter === "all" ? true : r.type === filter)

  return (
    <DashboardLayout>
      <PageHeader
        title="Reports"
        description="Download detailed analysis and insights"
        actions={<Button className="gap-2"><FileText className="h-4 w-4" />Generate Report</Button>}
      />

      {/* Filters */}
      <div className="mb-6">
        <SegmentedControl ariaLabel="Filter reports" value={filter} onChange={setFilter} segments={segments} />
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {loading ? (
          <ReportsQuickStatsSkeleton />
        ) : (
          <>
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-50" />
              <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 this month</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-50" />
              <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Downloads</CardTitle>
                <Download className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold">847</div>
                <p className="text-xs text-muted-foreground">+23% from last month</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-50" />
              <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Reduction</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold text-green-600">-15.2%</div>
                <p className="text-xs text-muted-foreground">Monthly average</p>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Recent Reports */}
      <div>
        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-50" />
          <CardHeader className="relative">
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>
              Your latest generated reports and analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            {loading ? (
              <RecentReportsSkeleton items={3} />
            ) : filteredReports.length > 0 ? (
              <div className="space-y-4">
                {filteredReports.map((report) => (
                  <div
                    key={report.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{report.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {report.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(report.date).toLocaleDateString()}
                          </span>
                          <span>{report.size}</span>
                          <span className="capitalize px-2 py-1 bg-muted rounded-md">
                            {report.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="mb-4 p-3 bg-muted rounded-full">
                  <FileText className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-semibold">No reports yet</h3>
                  <p className="text-sm text-muted-foreground">Generate your first report to see detailed insights</p>
                  <div className="pt-2">
                    <Button variant="outline" className="gap-2">
                      <FileText className="h-4 w-4" />
                      Create Report
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}