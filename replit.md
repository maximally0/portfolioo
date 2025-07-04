# Rishul Chanana Portfolio

## Overview

This is a futuristic, immersive personal portfolio website for Rishul Chanana built as a full-stack application. The project features a React frontend with a modern sci-fi aesthetic, an Express.js backend with PostgreSQL database integration using Drizzle ORM, and a comprehensive UI component system powered by shadcn/ui and Radix UI primitives.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth animations and interactions
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Hot reload with tsx for TypeScript execution

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express.js application
├── shared/          # Shared TypeScript types and schemas
├── attached_assets/ # Design specifications and assets
└── migrations/      # Database migration files
```

## Key Components

### Frontend Components
1. **AnimatedBackground**: Interactive starfield with floating orbs that respond to mouse movement
2. **HeroSection**: Main landing section with animated name, bio, and contact button
3. **SocialSidebar**: Responsive social media links sidebar that collapses to bottom on mobile
4. **ContactModal**: Glassmorphism modal with email contact information and copy functionality
5. **UI Components**: Comprehensive set of reusable components from shadcn/ui

### Backend Components
1. **Storage Interface**: Abstracted data layer with in-memory implementation (ready for PostgreSQL)
2. **Route Registration**: Modular API route system with Express.js
3. **Vite Integration**: Development server integration for hot reloading

### Shared Schema
- User management schema with Drizzle ORM
- Type-safe database operations with Zod validation
- PostgreSQL table definitions for users

## Data Flow

1. **Client Request**: User interacts with React frontend
2. **State Management**: TanStack React Query manages API calls and caching
3. **API Layer**: Express.js backend handles requests with proper error handling
4. **Data Storage**: Drizzle ORM provides type-safe database operations
5. **Response**: JSON responses sent back to frontend with proper status codes

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, TanStack React Query, Wouter routing
- **UI Framework**: Radix UI primitives, shadcn/ui components, Framer Motion
- **Backend**: Express.js, Drizzle ORM, Neon Database
- **Development**: Vite, TypeScript, ESBuild, tsx

### Key Libraries
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Icons**: React Icons (FontAwesome 6)
- **Forms**: React Hook Form with Hookform Resolvers
- **Utilities**: date-fns, nanoid

### External Services
- **Database**: Neon Database (serverless PostgreSQL)
- **Fonts**: Google Fonts (Inter font family)
- **Development**: Replit environment integration

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx with nodemon-like reloading
- **Database**: Environment variable-based configuration

### Production Build
1. **Frontend**: Vite builds optimized React bundle to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command
4. **Serving**: Express.js serves both API routes and static frontend assets

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment detection for development/production modes
- Automatic Replit environment detection and integration

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```