# Tanmay Vaidya - Professional Portfolio

[![Deploy Status](https://img.shields.io/badge/deploy-live-brightgreen)](https://www.tvaidya.top)
[![Lighthouse Score](https://img.shields.io/badge/lighthouse-95%2B-brightgreen)](https://web.dev/measure/)
[![Accessibility](https://img.shields.io/badge/a11y-WCAG%202.1%20AA-blue)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Performance](https://img.shields.io/badge/performance-optimized-green)](https://web.dev/fast/)

Professional portfolio website for **Tanmay Vaidya**, Computer Engineer (EIT) and Memorial University graduate with 6 co-op terms and 2.5+ years of hands-on experience in site IT operations, cybersecurity, controls, robotics, and full-stack software development.

## 🌐 Live Site
**https://www.tvaidya.top/**

## ✨ Features

### SEO & AI Optimization
- **Comprehensive Schema.org structured data** (Person, WebSite, BreadcrumbList)
- **Open Graph & Twitter Cards** for social sharing
- **LLMs.txt** for AI training/retrieval systems
- **Semantic HTML5** with proper heading hierarchy
- **Dynamic sitemap.xml** with image metadata
- **Security.txt** for responsible disclosure

### Performance
- **Vite + React 18** with optimized production builds
- **Code splitting** with manual chunks (vendor, motion, emailjs)
- **Service Worker** for offline support and caching
- **Preload critical assets** (hero image, fonts)
- **Font-display: swap** for web fonts
- **Content-visibility: auto** for offscreen sections
- **Optimized images** (WebP, proper sizing, lazy loading)
- **Minified CSS/JS** with esbuild

### Accessibility (WCAG 2.1 AA)
- **Skip to main content** link
- **Focus-visible** styles for keyboard navigation
- **ARIA labels, roles, and live regions**
- **Reduced motion** support (prefers-reduced-motion)
- **High contrast** mode support
- **Touch targets** ≥44px on mobile
- **Semantic landmarks** (nav, main, section, footer)
- **Form validation** with aria-describedby

### Developer Experience
- **ESLint flat config** with React hooks rules
- **Tailwind CSS** with custom design system
- **Framer Motion** for performant animations
- **TypeScript-ready** (JSDoc types)
- **Path aliases** (@/ for src/)

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | React 18, Vite 6 |
| **Styling** | Tailwind CSS 3.4, PostCSS |
| **Animation** | Framer Motion 11 |
| **Routing** | React Router DOM 7 |
| **Forms** | EmailJS (client-side) |
| **Linting** | ESLint 9 (flat config) |
| **Build** | esbuild (via Vite) |
| **Deployment** | Static hosting (Netlify/Vercel/Cloudflare Pages) |

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 20.0.0
- npm ≥ 9.0.0

### Installation
```bash
# Clone the repository
git clone https://github.com/tvaidya99/Portfolio-Template-3.0
cd Portfolio-Template-3.0

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start dev server (Vite)
npm run build    # Production build (outputs to dist/)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
├── public/                 # Static assets (served as-is)
│   ├── .well-known/        # Security.txt
│   ├── *.webp              # Optimized images
│   ├── *.pdf               # Resume
│   ├── favicon.svg         # SVG favicon
│   ├── manifest.webmanifest # PWA manifest
│   ├── robots.txt          # Crawler directives
│   ├── sitemap.xml         # SEO sitemap
│   ├── llms.txt            # AI training data
│   ├── security-policy     # Security policy
│   └── sw.js               # Service Worker
├── src/
│   ├── assets/             # Fonts, icons, company logos
│   ├── components/         # React components
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About/Services
│   │   ├── Experience.jsx  # Work timeline
│   │   ├── Projects.jsx    # Project gallery
│   │   ├── Tech.jsx        # Skills grid
│   │   ├── Contact.jsx     # Contact form
│   │   └── Navbar.jsx      # Navigation
│   ├── constants/          # Data (experiences, projects, skills)
│   ├── hoc/                # Higher-order components
│   ├── utils/              # Animation variants
│   ├── styles.js           # Tailwind class constants
│   ├── index.css           # Global styles + Tailwind
│   ├── main.jsx            # Entry point
│   └── App.jsx             # Root component
├── index.html              # HTML template with SEO
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind design system
├── eslint.config.js        # ESLint flat config
├── postcss.config.js       # PostCSS plugins
└── package.json
```

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env.local` for local development:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_EMAIL=tvaidya@mun.ca
```

### Tailwind Customization
Edit `tailwind.config.js` for:
- Color palette (primary, semantic colors)
- Typography (Beckman, Mova font families)
- Breakpoints (xs through 3xl)
- Spacing, animations, container queries

### Vite Optimization
Edit `vite.config.js` for:
- Manual chunk splitting
- Asset naming/hashing
- Build targets
- Server headers

## 📊 Performance Budgets

| Metric | Target | Tool |
|--------|--------|------|
| **LCP** | < 2.5s | Lighthouse |
| **CLS** | < 0.1 | Lighthouse |
| **TBT** | < 200ms | Lighthouse |
| **FCP** | < 1.8s | Lighthouse |
| **Bundle JS** | < 170KB gzipped | Vite build |
| **Bundle CSS** | < 20KB gzipped | Vite build |

## ♿ Accessibility Checklist

- [x] Semantic HTML5 landmarks
- [x] Heading hierarchy (h1 → h2 → h3)
- [x] Skip link for keyboard users
- [x] Focus indicators (WCAG 2.4.7)
- [x] Color contrast ≥ 4.5:1 (AA)
- [x] Reduced motion support
- [x] Touch targets ≥ 44×44px
- [x] ARIA labels on interactive elements
- [x] Form validation with live regions
- [x] Alt text for all images
- [x] Language declaration (lang="en")

## 🤖 AI/SEO Optimization

### Structured Data (Schema.org)
```json
{
  "@type": "Person",
  "name": "Tanmay Vaidya",
  "jobTitle": "Site IT Technician 2 (TIS)",
  "worksFor": "Michelin North America",
  "knowsAbout": ["Python", "C#", "Robotics", "Cybersecurity", "..."],
  "sameAs": ["GitHub", "LinkedIn"]
}
```

### LLMs.txt
Machine-readable profile at `/llms.txt` for AI training systems.

### Meta Tags
- Open Graph (profile type)
- Twitter Card (summary_large_image)
- Canonical URLs
- Robots directives

## 🚀 Deployment

### Build for Production
```bash
npm run build
# Outputs to dist/
```

### Deploy to Netlify
```bash
# Connect repo to Netlify
# Build command: npm run build
# Publish directory: dist
# Node version: 20
```

### Deploy to Vercel
```bash
# Connect repo to Vercel
# Framework preset: Vite
# Build command: npm run build
# Output directory: dist
```

### Deploy to Cloudflare Pages
```bash
# Connect repo to Cloudflare Pages
# Build command: npm run build
# Build output directory: dist
# Node version: 20
```

### Required Headers (for all platforms)
```toml
# _headers or equivalent
/dist/*
  Cache-Control: public, max-age=31536000, immutable
/dist/index.html
  Cache-Control: public, max-age=0, must-revalidate
/sw.js
  Cache-Control: public, max-age=0, must-revalidate
  Service-Worker-Allowed: /
```

## 🔒 Security

- **Content Security Policy** via meta tags
- **Security.txt** for responsible disclosure
- **No sensitive data** in client bundle
- **EmailJS** with domain restrictions
- **HTTPS only** in production
- **X-Frame-Options: DENY** (via hosting)

## 📈 Analytics (Optional)

Add to `index.html` before `</head>`:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🧪 Testing

### Lighthouse CI
```bash
npm install -g @lhci/cli
lhci autorun
```

### Accessibility Audit
```bash
# axe-core in browser devtools
# Or: npx @axe-core/cli https://www.tvaidya.top
```

### Bundle Analysis
```bash
npm run build
npx vite-bundle-analyzer dist
```

## 📝 Customization

### Update Personal Info
1. **Hero/About:** Edit `src/components/Hero.jsx`, `src/components/About.jsx`
2. **Experience:** Edit `src/constants/index.js` → `experiences` array
3. **Projects:** Edit `src/constants/index.js` → `projects` array
4. **Skills:** Edit `src/constants/index.js` → `skillGroups` array
5. **Contact:** Edit `src/components/Contact.jsx` and `.env.local`
6. **SEO:** Edit `index.html` meta tags and structured data

### Update Resume
Replace `public/TanmayResume.pdf` and rebuild.

### Update Portrait
Replace `public/tanmay-portrait.webp` (recommended: 1200×630, WebP, <100KB).

## 🤝 Contributing

This is a personal portfolio, but suggestions welcome:
1. Fork the repo
2. Create feature branch
3. Submit PR with description

## 📄 License

MIT License - feel free to use as a template for your own portfolio.

## 📞 Contact

- **Email:** tvaidya@mun.ca
- **Phone:** +1-709-725-2557
- **LinkedIn:** [linkedin.com/in/tvaidya99](https://www.linkedin.com/in/tvaidya99)
- **GitHub:** [github.com/tvaidya99](https://github.com/tvaidya99)
- **Portfolio:** [tvaidya.top](https://www.tvaidya.top)

---

Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion.