# CarbonTracker - Carbon Footprint Dashboard

A modern, responsive web application for tracking and analyzing personal carbon footprint with real-time monitoring, detailed reporting, and sustainability insights.

## Overview

CarbonTracker is a comprehensive carbon footprint tracking dashboard built with Next.js 15, React 19, and TypeScript. The application provides users with tools to monitor their environmental impact, set sustainability goals, and track progress towards reducing their carbon footprint.

## Screenshot

## Desktop
<img width="1919" height="913" alt="image" src="https://github.com/user-attachments/assets/d80d88f6-123b-42bb-8596-c631cd22b63f" />

## Mobile
<img width="386" height="830" alt="image" src="https://github.com/user-attachments/assets/8af29e6e-468b-4c6a-ac8a-9c1c0994c708" />


## Features

### Dashboard
- Real-time carbon emissions overview with key metrics
- Monthly and yearly progress tracking
- Efficiency rating system
- Animated charts and visualizations
- Quick action buttons for common tasks
- Environmental tips and sustainability recommendations

### Emissions Tracking
- Multi-category emission tracking (transportation, electricity, food, waste, heating)
- Historical data visualization with trend analysis
- Goal setting and progress monitoring
- Efficiency comparisons with regional averages

### Reports
- Comprehensive monthly and quarterly reports
- Detailed category-specific analysis
- Exportable PDF reports
- Historical data comparison
- Custom date range reporting

### Settings & Customization
- Theme customization (light, dark, system)
- Unit preferences (metric/imperial)
- Notification settings
- Privacy and data sharing controls
- Integration management with external services

## Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Recharts** - Chart components
- **Radix UI** - Accessible component primitives

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Playwright** - End-to-end testing

## Documentation

For detailed information about the application, please refer to the following documentation:

- **[API Documentation](docs/API.md)** - Data types, interfaces, and utility functions
- **[Component Documentation](docs/COMPONENTS.md)** - Detailed component descriptions and usage
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Deployment options and best practices
- **[Development Guide](docs/DEVELOPMENT.md)** - Development workflow and coding standards

## Project Structure

```
carbonfootprint/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Dashboard home page
│   │   ├── reports/           # Reports page
│   │   └── settings/          # Settings page
│   ├── components/            # Reusable UI components
│   │   ├── dashboard/         # Dashboard-specific components
│   │   ├── layout/            # Layout components
│   │   └── ui/               # Base UI components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
└── configuration files       # Various config files
```

## Key Components

### Dashboard Components
- **EmissionsOverview** - Overview cards with key metrics
- **EmissionsBreakdown** - Category-wise emission analysis
- **EmissionsTrend** - Historical trend visualization
- **ActivityFeed** - Recent activity and notifications

### Layout Components
- **DashboardLayout** - Main layout wrapper with sidebar
- **Navbar** - Top navigation bar
- **Sidebar** - Navigation sidebar with menu items

### UI Components
- **Card** - Reusable card component
- **Button** - Button component with variants
- **Switch** - Toggle switch component
- **Avatar** - User avatar component
- **ThemeToggle** - Theme switching component

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd carbonfootprint
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Detail

### Carbon Footprint Tracking
The application tracks emissions across multiple categories:
- **Transportation** - Vehicle emissions, public transport, flights
- **Electricity** - Home and office energy consumption
- **Food** - Dietary choices and food waste
- **Waste** - Waste generation and disposal
- **Heating** - Home heating and cooling systems
- **Other** - Miscellaneous emissions sources

### Data Visualization
- Interactive charts using Recharts library
- Real-time data updates
- Responsive design for all screen sizes
- Dark/light theme support
- Animated transitions and micro-interactions

### Goal Setting and Progress
- Annual carbon reduction goals
- Monthly progress tracking
- Efficiency ratings and comparisons
- Achievement system for motivation
- Customizable targets and milestones

### Reporting System
- Automated monthly and quarterly reports
- Category-specific analysis
- Historical data comparison
- Export functionality for external sharing
- Custom date range reporting

### Settings and Customization
- Theme preferences (light, dark, system)
- Unit system selection (metric/imperial)
- Notification preferences
- Privacy and data sharing controls
- Integration management with external services

## Architecture

### State Management
The application uses React's built-in state management with custom hooks for:
- Theme management (`use-theme.tsx`)
- Application state
- User preferences
- Data persistence

### Routing
Next.js App Router provides:
- File-based routing
- Dynamic routes
- Layout composition
- Server-side rendering capabilities

### Styling
- Tailwind CSS for utility-first styling
- CSS custom properties for theming
- Responsive design patterns
- Dark mode support
- Custom component variants

## Performance Optimizations

- Server-side rendering with Next.js
- Image optimization
- Code splitting and lazy loading
- Efficient re-rendering with React 19
- Optimized bundle size
- Caching strategies

## Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Focus management
- Semantic HTML structure

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support and questions, please refer to the project documentation or create an issue in the repository.

## Roadmap

- Mobile application development
- Advanced analytics and insights
- Social features and community
- API integration with external services
- Machine learning for emission predictions
- Carbon offset marketplace integration
