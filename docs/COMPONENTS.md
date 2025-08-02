# Component Documentation

## Dashboard Components

### EmissionsOverview
Displays key carbon footprint metrics in an animated card layout.

**Location:** `src/components/dashboard/emissions-overview.tsx`

**Props:**
```typescript
interface EmissionsOverviewProps {
  totalEmissions: number
  monthlyChange: number
  yearGoal: number
  currentProgress: number
}
```

**Features:**
- Four overview cards with different metrics
- Animated entrance effects using Framer Motion
- Color-coded indicators for positive/negative changes
- Progress bars for goal tracking
- Responsive design for all screen sizes

**Cards Displayed:**
1. **Total Emissions** - Current total with monthly change
2. **Year Goal Progress** - Progress towards annual target
3. **This Month** - Current month's emissions
4. **Efficiency Rating** - Performance rating with visual indicators

### EmissionsBreakdown
Shows category-wise emission distribution with interactive charts.

**Location:** `src/components/dashboard/emissions-breakdown.tsx`

**Features:**
- Pie chart visualization of emission categories
- Interactive tooltips and hover effects
- Category filtering capabilities
- Percentage breakdown display
- Responsive chart sizing

### EmissionsTrend
Displays historical emission data with trend analysis.

**Location:** `src/components/dashboard/emissions-trend.tsx`

**Features:**
- Line chart showing emission trends over time
- Multiple time range options (week, month, year)
- Category filtering
- Trend indicators and annotations
- Smooth animations and transitions

### ActivityFeed
Shows recent user activities and system notifications.

**Location:** `src/components/dashboard/activity-feed.tsx`

**Features:**
- Real-time activity updates
- Different activity types with icons
- Timestamp display
- Scrollable feed with pagination
- Activity filtering options

## Layout Components

### DashboardLayout
Main layout wrapper that provides the overall page structure.

**Location:** `src/components/layout/dashboard-layout.tsx`

**Props:**
```typescript
interface DashboardLayoutProps {
  children: React.ReactNode
}
```

**Features:**
- Responsive sidebar navigation
- Mobile menu with overlay
- Fixed desktop sidebar
- Main content area with proper spacing
- Backdrop blur effects
- Smooth mobile menu transitions

### Navbar
Top navigation bar with user controls and branding.

**Location:** `src/components/layout/navbar.tsx`

**Features:**
- Application branding and title
- Theme toggle button
- User avatar and profile menu
- Mobile menu trigger
- Responsive design
- Glass morphism effects

### Sidebar
Navigation sidebar with menu items and user information.

**Location:** `src/components/layout/sidebar.tsx`

**Props:**
```typescript
interface SidebarProps {
  className?: string
}
```

**Features:**
- Navigation menu with icons
- User profile section
- Active state indicators
- Collapsible sections
- Smooth hover effects
- Accessibility support

## UI Components

### Card
Reusable card component with multiple variants.

**Location:** `src/components/ui/card.tsx`

**Components:**
- `Card` - Main card container
- `CardHeader` - Card header section
- `CardTitle` - Card title component
- `CardDescription` - Card description text
- `CardContent` - Card content area
- `CardFooter` - Card footer section

**Features:**
- Multiple size variants
- Hover and focus states
- Border and shadow options
- Responsive padding
- Accessibility attributes

### Button
Versatile button component with multiple variants and sizes.

**Location:** `src/components/ui/button.tsx`

**Variants:**
- `default` - Primary button style
- `destructive` - Danger/delete actions
- `outline` - Secondary actions
- `secondary` - Alternative primary style
- `ghost` - Minimal styling
- `link` - Link-like appearance

**Sizes:**
- `default` - Standard size
- `sm` - Small button
- `lg` - Large button
- `icon` - Square icon button

**Features:**
- Loading states
- Disabled states
- Icon support
- Full width option
- Focus management

### Switch
Toggle switch component for settings and preferences.

**Location:** `src/components/ui/switch.tsx`

**Props:**
```typescript
interface SwitchProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  disabled?: boolean
}
```

**Features:**
- Smooth toggle animation
- Disabled state styling
- Keyboard navigation
- Screen reader support
- Custom styling options

### Avatar
User avatar component with fallback support.

**Location:** `src/components/ui/avatar.tsx`

**Components:**
- `Avatar` - Main avatar container
- `AvatarImage` - Avatar image element
- `AvatarFallback` - Fallback content

**Features:**
- Image loading with fallback
- Initials display
- Multiple sizes
- Circular design
- Loading states

### ThemeToggle
Theme switching component with system preference detection.

**Location:** `src/components/ui/theme-toggle.tsx`

**Features:**
- Light/dark/system theme options
- Smooth transition animations
- System preference detection
- Persistent theme storage
- Icon indicators

## Page Components

### Dashboard Page
Main dashboard page with overview and analytics.

**Location:** `src/app/page.tsx`

**Features:**
- Animated page header
- Overview cards grid
- Chart sections
- Quick actions panel
- Environmental tips
- Progress summary

### Reports Page
Reports management and generation interface.

**Location:** `src/app/reports/page.tsx`

**Features:**
- Report listing with metadata
- Download functionality
- Report generation options
- Statistics overview
- Filtering and sorting

### Settings Page
User preferences and application settings.

**Location:** `src/app/settings/page.tsx`

**Features:**
- Theme customization
- Notification preferences
- Privacy settings
- Integration management
- Data export options

## Utility Components

### Loading
Loading state component with skeleton UI.

**Location:** `src/app/loading.tsx`

**Features:**
- Skeleton loading states
- Animated loading indicators
- Responsive design
- Consistent with app theme

### Error
Error boundary component for graceful error handling.

**Location:** `src/app/error.tsx`

**Features:**
- User-friendly error messages
- Retry functionality
- Error reporting
- Fallback UI

## Component Patterns

### Animation Patterns
- **Entrance Animations** - Staggered card animations
- **Hover Effects** - Subtle scale and color transitions
- **Loading States** - Skeleton screens and spinners
- **Micro-interactions** - Button clicks and form interactions

### Responsive Patterns
- **Mobile-First** - Base styles for mobile
- **Breakpoint System** - Tailwind CSS breakpoints
- **Flexible Layouts** - Grid and flexbox layouts
- **Touch-Friendly** - Appropriate touch targets

### Accessibility Patterns
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Tab and arrow key support
- **Focus Management** - Visible focus indicators
- **Semantic HTML** - Proper heading hierarchy

### Performance Patterns
- **Lazy Loading** - Component-level code splitting
- **Memoization** - React.memo for expensive components
- **Debouncing** - User input optimization
- **Virtual Scrolling** - Large list optimization

## Component Guidelines

### Naming Conventions
- Use PascalCase for component names
- Use camelCase for props and variables
- Use kebab-case for CSS classes
- Use descriptive, semantic names

### File Organization
- One component per file
- Export components as default exports
- Group related components in folders
- Use index files for clean imports

### Props Design
- Use TypeScript interfaces for prop types
- Provide default values where appropriate
- Use optional props for non-essential features
- Document complex prop requirements

### Styling Approach
- Use Tailwind CSS utility classes
- Create component variants with class-variance-authority
- Maintain consistent spacing and typography
- Support dark mode themes 