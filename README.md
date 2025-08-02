# Think.Feel.Be. Therapy Website

A modern, accessible website for Think.Feel.Be. Therapy - a mental health practice in Grand Rapids, MI offering therapy services for individuals, couples, and families both in-person and remotely across California, Massachusetts, and Michigan.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **CMS**: [PayloadCMS](https://payloadcms.com/) for content management
- **Styling**: [TailwindCSS](https://tailwindcss.com/) with custom design system
- **UI Components**: [Radix UI](https://www.radix-ui.com/) for accessible components
- **Database**: MongoDB with PayloadCMS
- **Deployment**: Vercel (recommended)
- **Package Manager**: pnpm

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- MongoDB database

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd think-feel-be-therapy
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file with the following variables:
   ```bash
   # Database
   MONGODB_URI=your_mongodb_connection_string

   # PayloadCMS
   PAYLOAD_SECRET=your_payload_secret_key

   # Google Analytics (optional)
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **Start the development server**:
   ```bash
   pnpm dev
   ```

5. **Access the application**:
   - Website: [http://localhost:3000](http://localhost:3000)
   - CMS Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

## 📁 Project Structure

```
src/
├── app/
│   ├── (app)/
│   └── (payload)/
├── blocks/
├── collections/
├── components/
│   ├── ui/
│   └── google-analytics/
├── fields/
├── globals/
└── types/
```

## 🎨 Content Management

This website uses PayloadCMS for content management, allowing easy updates to:

- **Pages**: Dynamic page creation and editing
- **Media**: Image and file management
- **Navigation**: Menu structure and links
- **Testimonials**: Client testimonials and reviews
- **Global Content**: Footer, navigation, and site-wide content

### Accessing the CMS

1. Navigate to `/admin` on your site
2. Create an admin user on first visit
3. Manage all content through the intuitive interface

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production

Ensure these are set in your deployment platform:

```bash
MONGODB_URI=your_production_mongodb_uri
PAYLOAD_SECRET=your_production_secret
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🛠️ Development Commands

```bash
# Development
pnpm dev                    # Start development server
pnpm build                  # Build for production
pnpm start                  # Start production server

# Code Quality
pnpm lint                   # Run linter
pnpm lint:fix               # Fix linting issues
pnpm format                 # Format code
pnpm typecheck              # TypeScript type checking

# CMS
pnpm generate:types         # Generate PayloadCMS types
pnpm generate:importmap     # Generate import map
```

## 🎯 Features

- **Responsive Design**: Mobile-first, accessible design
- **SEO Optimized**: Built-in SEO features and meta tags
- **Performance**: Optimized images and fast loading
- **Accessibility**: WCAG compliant components
- **Content Management**: Easy-to-use CMS for non-technical users
- **Analytics**: Google Analytics 4 integration
- **Modern UI**: Beautiful, professional therapy website design

## Google Analytics Setup

This project includes Google Analytics 4 (GA4) integration. To set up Google Analytics:

1. **Get your GA4 Measurement ID**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Navigate to Admin > Data Streams > Web Stream
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Add the environment variable**:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **For local development**: Add this to your `.env.local` file
4. **For production**: Add this to your deployment platform's environment variables

The Google Analytics component will automatically track page views and user interactions once the environment variable is set.
