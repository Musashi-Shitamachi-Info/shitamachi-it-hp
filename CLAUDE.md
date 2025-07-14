# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for "武蔵下町情報舎" (Musashi Shimomachi Information House), a local IT support business serving the Tama region in Japan. The site is configured for static export deployment and features a single-page landing page with sections for services, strengths, target areas, and contact information.

## Commands

### Development
- `npm run dev` - Start development server (opens at http://localhost:3000)
- `npm run build` - Build the project for production (static export)
- `npm run start` - Serve the built static files using serve
- `npm run lint` - Run ESLint to check code quality

### Build Process
The project uses Next.js static export (`output: "export"`) which generates static HTML files in the `out/` directory. Images are unoptimized for static hosting compatibility.

## Architecture

### Project Structure
- `src/app/` - Next.js App Router structure
  - `layout.tsx` - Root layout with Japanese font (Noto Sans JP) and global Header
  - `page.tsx` - Main landing page with all sections
  - `globals.css` - Global styles
- `src/components/` - Reusable React components
  - `header.tsx` - Navigation header with anchor links
- `public/` - Static assets (SVG icons)

### Key Technologies
- **Next.js 15.3.5** with App Router
- **React 19** 
- **TypeScript**
- **Tailwind CSS 4** for styling
- **Noto Sans JP** Google Font for Japanese text
- **Static Export** for deployment

### Styling Approach
- Uses Tailwind CSS with gradient backgrounds and responsive design
- Japanese language support with proper font fallbacks
- Smooth scrolling navigation between sections
- Hover effects and transitions throughout

### Content Structure
The main page (`src/app/page.tsx`) contains:
- Hero section with call-to-action
- Services section (4 service cards)
- Strengths section (3 strength cards)
- Target area section (coverage map)
- About section
- Contact section

Navigation is handled by the Header component with smooth scroll anchor links to page sections.

## Language and Localization
- Primary language: Japanese (`lang="ja"`)
- Content is focused on IT services for local businesses in the Tama region
- Font configuration includes Japanese-specific fallbacks for optimal rendering