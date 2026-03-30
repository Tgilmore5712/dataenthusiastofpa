# Data Enthusiast of PA Business Solutions Website

Professional Next.js business website with strong foundational SEO:

- App Router with dedicated pages: Home, About, Services, Industries, Case Studies, Contact
- Per-page metadata, canonical URLs, Open Graph, Twitter tags
- Structured data via JSON-LD (Organization, LocalBusiness, Service)
- SEO route handlers for robots.txt and sitemap.xml
- Mobile-first responsive corporate design and accessible semantic markup

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build and Production

```bash
npm run build
npm run start
```

## Domain Setup (Important)

Set your production domain in environment variables:

1. Create a .env.local file in the project root.
2. Add your real domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

This value is used for canonical tags, sitemap URLs, robots host entry, and structured data URLs.

## SEO Checklist

1. Replace placeholder contact information in lib/site.ts.
2. Add a real brand logo at public/logo.png.
3. Add a real office image at public/office.jpg (or update schema references).
4. Update social profile links in lib/site.ts.
5. Connect Search Console and submit /sitemap.xml.
6. Verify indexing rules in /robots.txt.
7. Run Lighthouse and target high scores in Performance, SEO, and Accessibility.
8. Add analytics and conversion tracking after go-live.

## Content Editing

- Homepage content: app/page.tsx
- Service details: app/services/page.tsx
- Case studies: app/case-studies/page.tsx
- Global site identity and contact details: lib/site.ts
- SEO helper logic and structured data: lib/seo.ts

## Deploy

Deploy to your preferred host (Vercel, Netlify, or a Node-compatible platform) and point your existing domain DNS to that host.
