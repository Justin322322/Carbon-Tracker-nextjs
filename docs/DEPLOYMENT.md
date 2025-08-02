# Deployment Guide

## Overview

This guide covers deployment options and best practices for the CarbonTracker application. The application is built with Next.js 15 and can be deployed to various platforms.

## Prerequisites

- Node.js 18+ installed
- Git repository access
- Package manager (npm, yarn, or pnpm)
- Environment variables configured

## Build Process

### Local Build Testing

1. Install dependencies:
```bash
npm install
```

2. Build the application:
```bash
npm run build
```

3. Test the production build locally:
```bash
npm start
```

### Build Optimization

The application includes several optimizations:

- **Code Splitting** - Automatic route-based code splitting
- **Image Optimization** - Next.js built-in image optimization
- **Tree Shaking** - Unused code elimination
- **Minification** - JavaScript and CSS minification
- **Compression** - Gzip/Brotli compression

## Environment Variables

Create a `.env.local` file for local development:

```env
# Application
NEXT_PUBLIC_APP_NAME=CarbonTracker
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# External APIs (if applicable)
NEXT_PUBLIC_API_URL=your-api-url
```

For production, set environment variables in your deployment platform.

## Deployment Options

### Vercel (Recommended)

Vercel is the platform created by the Next.js team and provides optimal performance.

#### Setup Steps:

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Production deployment:**
```bash
vercel --prod
```

#### Configuration:

Create a `vercel.json` file for custom configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

#### Environment Variables:

Set in Vercel dashboard:
- Go to Project Settings > Environment Variables
- Add all required environment variables

### Netlify

Netlify provides excellent static site hosting with serverless functions.

#### Setup Steps:

1. **Connect repository** to Netlify dashboard
2. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18`

#### Configuration:

Create a `netlify.toml` file:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### AWS Amplify

AWS Amplify provides full-stack deployment with backend services.

#### Setup Steps:

1. **Install Amplify CLI:**
```bash
npm install -g @aws-amplify/cli
```

2. **Initialize Amplify:**
```bash
amplify init
```

3. **Deploy:**
```bash
amplify publish
```

#### Configuration:

Create `amplify.yml`:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Docker Deployment

For containerized deployments.

#### Dockerfile:

```dockerfile
# Use the official Node.js runtime as base image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### Docker Compose:

```yaml
version: '3.8'
services:
  carbontracker:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### Kubernetes Deployment

For container orchestration environments.

#### Deployment YAML:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: carbontracker
spec:
  replicas: 3
  selector:
    matchLabels:
      app: carbontracker
  template:
    metadata:
      labels:
        app: carbontracker
    spec:
      containers:
      - name: carbontracker
        image: carbontracker:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: carbontracker-service
spec:
  selector:
    app: carbontracker
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer
```

## Performance Optimization

### Build Optimizations

1. **Enable SWC minification** in `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
```

2. **Bundle Analyzer** for optimization:
```bash
npm install --save-dev @next/bundle-analyzer
```

### Runtime Optimizations

1. **Enable compression** in your hosting platform
2. **Configure CDN** for static assets
3. **Enable caching** headers
4. **Use HTTP/2** for better performance

## Monitoring and Analytics

### Performance Monitoring

1. **Vercel Analytics** (if using Vercel):
```bash
npm install @vercel/analytics
```

2. **Google Analytics**:
```javascript
// Add to _app.tsx or layout.tsx
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GoogleAnalytics trackPageViews />
        {children}
      </body>
    </html>
  )
}
```

### Error Monitoring

1. **Sentry** integration:
```bash
npm install @sentry/nextjs
```

2. **Configure Sentry** in `sentry.client.config.js`:
```javascript
import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
})
```

## Security Considerations

### Environment Variables

- Never commit sensitive environment variables
- Use platform-specific secret management
- Rotate API keys regularly
- Use HTTPS in production

### Security Headers

Add security headers in `next.config.js`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### Content Security Policy

Add CSP headers for additional security:

```javascript
{
  key: 'Content-Security-Policy',
  value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
}
```

## CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build application
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

### GitLab CI

Create `.gitlab-ci.yml`:

```yaml
stages:
  - test
  - build
  - deploy

test:
  stage: test
  image: node:18
  script:
    - npm ci
    - npm test
  only:
    - main

build:
  stage: build
  image: node:18
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - .next/
  only:
    - main

deploy:
  stage: deploy
  image: alpine:latest
  script:
    - apk add --no-cache curl
    - curl -X POST $DEPLOY_HOOK_URL
  only:
    - main
```

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Runtime Errors**:
   - Verify environment variables are set
   - Check browser console for client-side errors
   - Review server logs for server-side errors

3. **Performance Issues**:
   - Use bundle analyzer to identify large dependencies
   - Implement code splitting for large components
   - Optimize images and static assets

### Debug Commands

```bash
# Check bundle size
npm run build && npx @next/bundle-analyzer

# Check for TypeScript errors
npx tsc --noEmit

# Run linting
npm run lint

# Check for security vulnerabilities
npm audit
```

## Maintenance

### Regular Tasks

1. **Dependency Updates**:
   - Run `npm update` regularly
   - Check for security vulnerabilities
   - Update to latest LTS versions

2. **Performance Monitoring**:
   - Monitor Core Web Vitals
   - Track user experience metrics
   - Review error rates

3. **Backup Strategy**:
   - Backup environment variables
   - Document deployment procedures
   - Maintain rollback procedures 