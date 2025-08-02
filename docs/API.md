# API Documentation

## Data Types

### EmissionCategory
Defines the different categories of carbon emissions tracked by the application.

```typescript
type EmissionCategory = 
  | "transportation"
  | "electricity"
  | "food"
  | "waste"
  | "heating"
  | "other"
```

### TrendData
Represents time-series data for emission tracking and visualization.

```typescript
interface TrendData {
  date: string
  value: number
  category?: EmissionCategory
}
```

### ActivityLog
Represents user activities and system events for the activity feed.

```typescript
interface ActivityLog {
  id: string
  type: "emission_added" | "goal_set" | "achievement_unlocked"
  message: string
  timestamp: Date
  metadata?: Record<string, string | number | boolean>
}
```

### TimeRange
Defines the time periods for data filtering and reporting.

```typescript
type TimeRange = "week" | "month" | "year"
```

### ChartData
Represents data points for chart visualization components.

```typescript
interface ChartData {
  name: string
  value: number
  color?: string
  percentage?: number
}
```

## Component Props

### EmissionsOverview Props
```typescript
interface EmissionsOverviewProps {
  totalEmissions: number
  monthlyChange: number
  yearGoal: number
  currentProgress: number
}
```

### DashboardLayout Props
```typescript
interface DashboardLayoutProps {
  children: React.ReactNode
}
```

## Utility Functions

### formatCO2
Formats carbon dioxide values with appropriate units and precision.

```typescript
function formatCO2(value: number): string
```

**Parameters:**
- `value: number` - The CO2 value to format

**Returns:**
- `string` - Formatted CO2 value with units (e.g., "247.3 kg CO₂")

## Theme Management

### useTheme Hook
Custom hook for managing application theme state.

```typescript
interface ThemeContextType {
  theme: "light" | "dark" | "system"
  setTheme: (theme: "light" | "dark" | "system") => void
}
```

**Usage:**
```typescript
const { theme, setTheme } = useTheme()
```

## Settings Interface

### UserSettings
Defines the structure for user preferences and settings.

```typescript
interface UserSettings {
  notifications: boolean
  emailReports: boolean
  dataSharing: boolean
  autoTracking: boolean
  unit: "metric" | "imperial"
  language: string
}
```

## Report Data Structure

### Report
Represents a generated report with metadata.

```typescript
interface Report {
  id: string
  title: string
  description: string
  date: string
  type: "monthly" | "quarterly" | "category"
  size: string
}
```

## Integration Types

### Integration
Represents external service integrations.

```typescript
interface Integration {
  name: string
  description: string
  connected: boolean
}
```

## Event Types

### Application Events
The application supports various event types for activity tracking:

- `emission_added` - New emission entry added
- `goal_set` - New goal or target set
- `achievement_unlocked` - Achievement or milestone reached

## Data Flow

### State Management
The application uses React's built-in state management with the following patterns:

1. **Local State** - Component-specific state using `useState`
2. **Context State** - Global state using React Context (theme, settings)
3. **Derived State** - Computed values from props and state

### Data Persistence
- Theme preferences stored in localStorage
- User settings persisted across sessions
- Report data cached for performance

## Error Handling

### Error Boundaries
The application implements error boundaries for graceful error handling:

- Component-level error boundaries
- Global error handling
- User-friendly error messages
- Fallback UI components

## Performance Considerations

### Data Optimization
- Lazy loading of chart components
- Memoization of expensive calculations
- Debounced user inputs
- Efficient re-rendering with React 19

### Caching Strategy
- Local storage for user preferences
- Session storage for temporary data
- Memory caching for frequently accessed data 