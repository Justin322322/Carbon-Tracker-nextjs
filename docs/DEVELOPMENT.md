# Development Guide

## Overview

This guide covers the development workflow, coding standards, and best practices for contributing to the CarbonTracker application. The project uses modern React patterns with TypeScript and follows a component-based architecture.

## Development Environment Setup

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Git
- Code editor (VS Code recommended)
- Browser developer tools

### Initial Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd carbonfootprint
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
Navigate to `http://localhost:3000`

### Recommended VS Code Extensions

- **TypeScript and JavaScript Language Features**
- **Tailwind CSS IntelliSense**
- **ESLint**
- **Prettier**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**
- **GitLens**

## Project Structure

### Directory Organization

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Dashboard home
│   ├── reports/           # Reports page
│   └── settings/          # Settings page
├── components/            # Reusable components
│   ├── dashboard/         # Dashboard-specific components
│   ├── layout/            # Layout components
│   └── ui/               # Base UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── types/                # TypeScript definitions
```

### File Naming Conventions

- **Components:** PascalCase (e.g., `EmissionsOverview.tsx`)
- **Hooks:** camelCase with `use` prefix (e.g., `use-theme.tsx`)
- **Utilities:** camelCase (e.g., `utils.ts`)
- **Types:** camelCase (e.g., `index.ts`)

## Coding Standards

### TypeScript Guidelines

1. **Strict Type Checking:**
```typescript
// Use strict type definitions
interface EmissionsOverviewProps {
  totalEmissions: number
  monthlyChange: number
  yearGoal: number
  currentProgress: number
}
```

2. **Type Safety:**
```typescript
// Avoid any type, use proper typing
const handleChange = (value: string) => {
  setValue(value)
}
```

3. **Interface vs Type:**
```typescript
// Use interfaces for object shapes
interface User {
  id: string
  name: string
}

// Use types for unions and primitives
type Status = 'loading' | 'success' | 'error'
```

### React Patterns

1. **Functional Components:**
```typescript
// Use functional components with hooks
export function EmissionsOverview({ totalEmissions, monthlyChange }: EmissionsOverviewProps) {
  return (
    <div>
      {/* Component content */}
    </div>
  )
}
```

2. **Custom Hooks:**
```typescript
// Extract reusable logic into custom hooks
export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')
  
  return { theme, setTheme }
}
```

3. **Props Interface:**
```typescript
// Define props interface for each component
interface ComponentProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outline'
}
```

### Styling Guidelines

1. **Tailwind CSS Classes:**
```typescript
// Use Tailwind utility classes
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-semibold text-gray-900">Title</h2>
</div>
```

2. **Responsive Design:**
```typescript
// Use responsive prefixes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>
```

3. **Dark Mode Support:**
```typescript
// Include dark mode variants
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  {/* Dark mode compatible content */}
</div>
```

## Component Development

### Component Structure

```typescript
// 1. Imports
import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

// 2. Props interface
interface ComponentProps {
  title: string
  value: number
  onChange?: (value: number) => void
}

// 3. Component definition
export function Component({ title, value, onChange }: ComponentProps) {
  // 4. State and hooks
  const [isLoading, setIsLoading] = React.useState(false)
  
  // 5. Event handlers
  const handleClick = () => {
    onChange?.(value + 1)
  }
  
  // 6. Render
  return (
    <Card>
      <CardContent>
        <h3>{title}</h3>
        <p>{value}</p>
        <button onClick={handleClick}>Increment</button>
      </CardContent>
    </Card>
  )
}
```

### Animation Guidelines

1. **Framer Motion Usage:**
```typescript
// Use motion components for animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Animated content */}
</motion.div>
```

2. **Staggered Animations:**
```typescript
// Use delay for staggered effects
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  >
    {item.content}
  </motion.div>
))}
```

### Accessibility Standards

1. **ARIA Labels:**
```typescript
// Include proper ARIA labels
<button
  aria-label="Toggle theme"
  onClick={toggleTheme}
>
  <Sun className="h-4 w-4" />
</button>
```

2. **Keyboard Navigation:**
```typescript
// Support keyboard navigation
<div
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
    }
  }}
>
  {/* Clickable content */}
</div>
```

3. **Focus Management:**
```typescript
// Manage focus properly
const focusRef = useRef<HTMLButtonElement>(null)

useEffect(() => {
  focusRef.current?.focus()
}, [])
```

## State Management

### Local State

```typescript
// Use useState for component-specific state
const [isOpen, setIsOpen] = useState(false)
const [data, setData] = useState<Data[]>([])
```

### Context State

```typescript
// Use Context for global state
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

### Custom Hooks

```typescript
// Extract reusable state logic
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })
  
  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }
  
  return [storedValue, setValue] as const
}
```

## Testing Guidelines

### Unit Testing

```typescript
// Test component functionality
import { render, screen, fireEvent } from '@testing-library/react'
import { EmissionsOverview } from './emissions-overview'

describe('EmissionsOverview', () => {
  it('renders total emissions', () => {
    render(<EmissionsOverview totalEmissions={100} monthlyChange={-5} yearGoal={1000} currentProgress={50} />)
    expect(screen.getByText('100 kg CO₂')).toBeInTheDocument()
  })
})
```

### Integration Testing

```typescript
// Test component interactions
it('calls onChange when value changes', () => {
  const handleChange = jest.fn()
  render(<Component onChange={handleChange} />)
  
  fireEvent.click(screen.getByRole('button'))
  expect(handleChange).toHaveBeenCalledWith(1)
})
```

## Performance Optimization

### Code Splitting

```typescript
// Use dynamic imports for large components
const HeavyComponent = dynamic(() => import('./heavy-component'), {
  loading: () => <div>Loading...</div>
})
```

### Memoization

```typescript
// Memoize expensive components
export const ExpensiveComponent = React.memo(({ data }: Props) => {
  return <div>{/* Expensive rendering */}</div>
})
```

### Optimization Techniques

1. **useMemo for expensive calculations:**
```typescript
const expensiveValue = useMemo(() => {
  return data.reduce((acc, item) => acc + item.value, 0)
}, [data])
```

2. **useCallback for event handlers:**
```typescript
const handleClick = useCallback(() => {
  setValue(prev => prev + 1)
}, [])
```

## Error Handling

### Error Boundaries

```typescript
// Create error boundary components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>
    }
    
    return this.props.children
  }
}
```

### Try-Catch Blocks

```typescript
// Handle async operations
const fetchData = async () => {
  try {
    const response = await fetch('/api/data')
    const data = await response.json()
    setData(data)
  } catch (error) {
    console.error('Failed to fetch data:', error)
    setError(error.message)
  }
}
```

## Git Workflow

### Branch Naming

- `feature/component-name` - New features
- `fix/issue-description` - Bug fixes
- `refactor/component-name` - Code refactoring
- `docs/documentation-update` - Documentation changes

### Commit Messages

```
feat: add emissions breakdown chart
fix: resolve theme toggle issue
refactor: optimize component performance
docs: update API documentation
```

### Pull Request Process

1. **Create feature branch**
2. **Make changes with tests**
3. **Update documentation**
4. **Create pull request**
5. **Code review**
6. **Merge to main**

## Code Review Checklist

### Functionality
- [ ] Component works as expected
- [ ] All props are properly typed
- [ ] Error handling is implemented
- [ ] Accessibility requirements met

### Performance
- [ ] No unnecessary re-renders
- [ ] Large dependencies are code-split
- [ ] Images are optimized
- [ ] Bundle size is reasonable

### Code Quality
- [ ] TypeScript types are correct
- [ ] ESLint passes without errors
- [ ] Code is properly formatted
- [ ] Comments explain complex logic

### Testing
- [ ] Unit tests are written
- [ ] Integration tests cover user flows
- [ ] Edge cases are handled
- [ ] Tests pass consistently

## Debugging

### Development Tools

1. **React Developer Tools**
2. **Redux DevTools** (if using Redux)
3. **Network tab** for API calls
4. **Console** for errors and logs

### Common Debugging Techniques

```typescript
// Use console.log for debugging
console.log('Component props:', props)

// Use React DevTools profiler
// Use browser breakpoints
// Use error boundaries for error tracking
```

### Performance Debugging

```typescript
// Use React.memo for component memoization
// Use useMemo for expensive calculations
// Use useCallback for event handlers
// Use React DevTools profiler
```

## Documentation Standards

### Component Documentation

```typescript
/**
 * EmissionsOverview component displays key carbon footprint metrics
 * 
 * @param totalEmissions - Total emissions in kg CO₂
 * @param monthlyChange - Monthly change percentage
 * @param yearGoal - Annual goal in kg CO₂
 * @param currentProgress - Progress percentage towards goal
 */
export function EmissionsOverview({ totalEmissions, monthlyChange, yearGoal, currentProgress }: EmissionsOverviewProps) {
  // Component implementation
}
```

### API Documentation

```typescript
/**
 * Formats carbon dioxide values with appropriate units
 * 
 * @param value - The CO2 value to format
 * @returns Formatted string with units (e.g., "247.3 kg CO₂")
 * 
 * @example
 * formatCO2(123.45) // Returns "123.5 kg CO₂"
 */
export function formatCO2(value: number): string {
  return `${value.toFixed(1)} kg CO₂`
}
```

## Best Practices

### General Guidelines

1. **Keep components small and focused**
2. **Use TypeScript for type safety**
3. **Follow React hooks rules**
4. **Write self-documenting code**
5. **Test critical user flows**
6. **Optimize for performance**
7. **Maintain accessibility standards**
8. **Document complex logic**

### Performance Best Practices

1. **Avoid unnecessary re-renders**
2. **Use proper dependency arrays**
3. **Implement code splitting**
4. **Optimize images and assets**
5. **Use appropriate caching strategies**

### Security Best Practices

1. **Validate user inputs**
2. **Sanitize data before rendering**
3. **Use HTTPS in production**
4. **Implement proper authentication**
5. **Follow OWASP guidelines** 