# Overview

This is a jewelry management and e-commerce system for Palaniappa Jewellers. The application provides a public-facing website for customers to browse products and an admin dashboard for managing inventory and billing. Built with a modern full-stack architecture using React for the frontend and Express.js for the backend, the system supports dual-currency pricing (INR and BHD) and includes WhatsApp integration for customer inquiries.

## Recent Changes (August 2025)
- **Royal Purple & Gold (Majestic Elegance) Color Palette**: Updated the entire application color scheme to a majestic royal purple and gold palette featuring Royal Purple (#4B0082), Deep Violet (#2E0854), Gold (#FFD700), Pearl White (#F8F8F8), and Smokey Gray (#5C5470) - perfect for luxury, exclusivity, and regal highlights with bold richness and sophisticated elegance
- **Migration from Replit Agent to Replit Environment**: Successfully migrated the entire application to run natively on Replit with proper workflows, enhanced PDF bill generation, repositioned WhatsApp integration to header, and added comprehensive product details with enhanced descriptions
- **Enhanced WhatsApp Integration**: Updated WhatsApp number to correct Bahrain number (+97333444088), added WhatsApp enquiry buttons on all product cards, and enhanced product-specific enquiry messaging with detailed product information
- **Enhanced Product Details**: Added detailed product descriptions with "Why Choose This Piece?" section and comprehensive specifications
- **WhatsApp Integration Enhancement**: Added WhatsApp enquiry buttons on main product image and all thumbnails with specific product messaging, plus global WhatsApp button in header for general inquiries
- **Admin Product Creation Fix**: Resolved product creation issues with improved error handling, flexible schema validation, and proper authentication
- **Enhanced PDF Bill Generation**: Completely redesigned PDF bills with professional formatting, removed standard gold rates section, improved table structure with golden headers, better payment summary layout, and proper visibility for all text elements
- **Indian Payment Options**: Added GPay, PhonePe, and Paytm payment methods specifically for Indian customers alongside existing Stripe integration
- **Admin Login Fix**: Resolved admin authentication redirect issue using proper wouter navigation instead of window.location
- **Enhanced Filtering & Sorting**: Added advanced sorting options including weight-based sorting, popularity, ratings, and stock-first sorting
- **Improved Filter System**: Enhanced product filters with better categorization and real-time price range sliders
- **Better Product Navigation**: Enhanced navigation from product cards to individual detail pages with improved user flow
- **Stripe Configuration Fix**: Corrected Stripe public key configuration to resolve "secret key with Stripe.js" error
- **Premium Design Enhancement**: Completely redesigned with luxurious styling featuring animated gradients, glass morphism effects, sophisticated shadows, premium buttons with shimmer animations, and enhanced typography with larger hero text
- **Currency Default Changed**: Set Bahrain Dinar (BHD) as the default currency instead of Indian Rupees (INR)  
- **Removed Product Details Elements**: Removed warranty information and "Why Choose This Piece?" sections from product details page as requested

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and variables
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL (Neon database)
- **Authentication**: JWT-based authentication with role-based access control
- **File Upload**: Multer middleware for handling product image uploads
- **API Design**: RESTful API structure with centralized error handling

## Data Storage
- **Database**: PostgreSQL using Neon serverless database
- **Schema**: Three main entities - users (admin/guest roles), products (with dual pricing), and bills (with customer and item details)
- **File Storage**: Local filesystem storage for uploaded product images
- **Migrations**: Drizzle Kit for database schema management

## Authentication & Authorization
- **JWT Tokens**: Stored in localStorage for session management
- **Role-based Access**: Admin and guest user roles with different permissions
- **Protected Routes**: Admin dashboard requires authentication and admin role
- **Hardcoded Admin**: Single admin account with predefined credentials

## External Integrations
- **WhatsApp Business**: Direct integration for customer inquiries with product details
- **PDF Generation**: Server-side PDF creation using PDFKit for bills and invoices
- **Image Handling**: Support for JPEG, PNG, and WebP formats with file size limits

## Key Features
- **Multi-currency Support**: Dual pricing in Indian Rupees (INR) and Bahrain Dinar (BHD)
- **Product Management**: Full CRUD operations for jewelry inventory with image uploads
- **Billing System**: Complete invoicing with customer details, item management, and PDF export
- **Responsive Design**: Mobile-first approach with dark mode support
- **Real-time Updates**: Optimistic updates and automatic cache invalidation

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database with connection pooling
- **Drizzle ORM**: Type-safe database queries and schema management

## UI & Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Fast build tool with HMR and TypeScript support
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution environment for development

## Authentication & Security
- **bcryptjs**: Password hashing for secure authentication
- **jsonwebtoken**: JWT token generation and verification

## File Processing
- **Multer**: Multipart form data handling for file uploads
- **PDFKit**: PDF document generation for bills and reports

## Communication
- **WhatsApp Web API**: Direct messaging integration for customer support

## Testing & Quality
- **TypeScript**: Static type checking and enhanced developer experience
- **Zod**: Runtime type validation and schema parsing