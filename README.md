# Piixel Studio - Professional Websites with Modular Add-Ons

A modern, conversion-focused homepage built with Next.js 16 showcasing Piixel's subscription-based web development service.

## Features

- **Modular Design Philosophy**: Visual representation of base website + bolt-on modules
- **Interactive Pricing Calculator**: Real-time monthly cost calculation as users select modules
- **Comprehensive Service Showcase**: All 6 add-on modules with detailed descriptions
- **Conversion-Optimized**: Clear CTAs, benefit-focused copy, and transparent pricing
- **Fully Responsive**: Mobile-first design across all breakpoints
- **SEO Optimized**: Complete metadata, Open Graph tags, and semantic HTML

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Components**: ShadCN UI with Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: System font stack for maximum reliability

## Page Sections

1. **Hero**: Modular "bolt-on" visualization with pricing overview
2. **Problem/Solution**: Three-column comparison (DIY vs Piixel vs Agencies)
3. **Features**: Grid of 6 advanced modules with pricing badges
4. **How It Works**: 3-step process explanation
5. **Base Includes**: Detailed breakdown of £45/month package
6. **Pricing**: Interactive calculator with module selection
7. **Who Is This For**: 4 target audience cards
8. **FAQ**: Accordion with 10 common questions
9. **Final CTA**: Strong conversion section with contact options

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
/app
  /page.tsx           # Main homepage
  /layout.tsx         # Root layout with metadata
  /globals.css        # Global styles and theme
/components
  /ui                 # ShadCN UI components
    /button.tsx
    /card.tsx
    /badge.tsx
    /accordion.tsx
  /homepage           # Page-specific components
    /Hero.tsx
    /ProblemSolution.tsx
    /Features.tsx
    /HowItWorks.tsx
    /BaseIncludes.tsx
    /Pricing.tsx
    /WhoIsThisFor.tsx
    /FAQ.tsx
    /FinalCTA.tsx
```

## Color Scheme

The site uses a professional blue palette:

- **Primary**: Deep blue (`oklch(0.45 0.15 260)`)
- **Accent**: Bright cyan (`oklch(0.75 0.15 210)`)
- **Background**: Off-white (`oklch(0.99 0 0)`)

Both light and dark modes are fully supported.

## Key Design Decisions

### Modular Visualization
The hero section uses a circular orbit pattern to show how modules connect to the base website, emphasizing the "bolt-on" nature of the service.

### Transparent Pricing
All prices are displayed upfront with no hidden costs. The interactive calculator helps users understand their exact monthly cost.

### Conversion Focus
Multiple CTAs throughout the page, all leading to either the pricing calculator or contact form.

## Content Management

The homepage is currently static. For future CMS integration:
- All text content is in component files
- Pricing data is in arrays at the top of components
- Easy to extract to JSON or API endpoints

## TODO: Future Enhancements

- [ ] Connect "Get Started" button to Lemon Squeezy checkout
- [ ] Add contact form instead of mailto link
- [ ] Implement smooth scroll animations
- [ ] Add loading states to interactive elements
- [ ] Create additional pages (About, Contact, Terms)
- [ ] Set up analytics tracking
- [ ] Add testimonials section
- [ ] Create case study examples

## Performance

Current build successfully compiles with TypeScript strict mode and all optimizations enabled.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact

For questions about this codebase: hello@piixel.com
