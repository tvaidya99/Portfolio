---
name: enhancements-plan
description: Plan for portfolio enhancements with personal touch and mobile improvements
---
# Enhancement Plan

## Goals
- Add personal touch reflecting 1.5 years full-time + coop experience at Michelin
- Make mobile view highly accessible and polished
- Remove generic "AI-generator" feel, add personal branding
- Keep all existing functionality working

## Key Changes

### 1. Hero Section (Hero.jsx)
- Add meaningful subtitle about experience and skills
- Improve mobile layout - currently has weird ml-[50vw] values
- Add smoother animations that work well on mobile
- Make the shaq image responsive with better mobile sizing
- Add a personal tagline that reflects the user's journey

### 2. Navbar (Navbar.jsx)
- Mobile menu: improve closing animation, add better focus management
- Add reduced-motion preference respect
- Make dropdown more accessible with keyboard navigation
- Improve the sm:hidden toggle behavior

### 3. Projects (Projects.jsx)
- Better mobile grid layout - currently flex-col can be cramped
- Add lazy loading for images
- Improve touch target sizes
- Better spacing on small screens

### 4. Experience (Experience.jsx)
- Mobile: vertical timeline already works, but improve spacing
- Add better resume download CTA on mobile

### 5. CSS/Tailwind Improvements
- Add mobile-first breakpoints
- Improve touch target sizes (minimum 44px)
- Add prefers-reduced-motion support
- Better contrast for accessibility

## Mobile-First Approach
- Test at 375px (iPhone SE), 768px (iPad), 1440px (desktop)
- Ensure all tap targets are at least 44x44px
- Make sure text is readable without zoom (minimum 16px)
- Navigation should work with thumb-friendly areas