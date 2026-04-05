# Data Enthusiast of PA Business Solutions Website

Professional Next.js business website with strong foundational SEO:

- App Router with dedicated pages: Home, About, Services, Industries, Contact
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
NEXT_PUBLIC_SITE_URL=https://dataenthusiastofpa.com
```

This value is used for canonical tags, sitemap URLs, robots host entry, and structured data URLs.

## Contact Form Storage (Vercel Postgres)

The contact form now saves submissions to PostgreSQL table `contact_inquiries`.

Required environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://dataenthusiastofpa.com
POSTGRES_URL=postgres://...
```

On Vercel, create/connect your Postgres storage and Vercel will provide the variable automatically.

Table schema reference:

- `db/schema.sql`

Notes:

- The API route also runs `CREATE TABLE IF NOT EXISTS` on submit, so first submission can self-initialize the table.
- If database connection fails, users are redirected to `/contact?status=db-error`.

## SEO Checklist

1. Confirm `NEXT_PUBLIC_SITE_URL` matches the production domain.
2. Connect Search Console and submit `/sitemap.xml`.
3. Verify indexing rules in `/robots.txt`.
4. Run Lighthouse and target high scores in Performance, SEO, and Accessibility.
5. Add analytics and conversion tracking after go-live.

## Content Editing

- Homepage content: app/page.tsx
- Service details: app/services/page.tsx
- Global site identity and contact details: lib/site.ts
- SEO helper logic and structured data: lib/seo.ts

## Deploy

Deploy to your preferred host (Vercel, Netlify, or a Node-compatible platform) and point your existing domain DNS to that host.
