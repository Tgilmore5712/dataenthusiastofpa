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
NEXT_PUBLIC_SITE_URL=https://www.dataenthusiastofpa.com
```

This value is used for canonical tags, sitemap URLs, robots host entry, and structured data URLs.

## Contact Form Storage (Vercel Postgres)

The contact form now saves submissions to PostgreSQL table `contact_inquiries`.

Required environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://www.dataenthusiastofpa.com
POSTGRES_URL=postgres://...
```

On Vercel, create/connect your Postgres storage and Vercel will provide the variable automatically.

Table schema reference:

- `db/schema.sql`

Notes:

- The API route also runs `CREATE TABLE IF NOT EXISTS` on submit, so first submission can self-initialize the table.
- If database connection fails, users are redirected to `/contact?status=db-error`.

## Built-In Analytics (Database-Backed)

This project now includes built-in analytics event capture to PostgreSQL:

- Client page views are recorded via `POST /api/analytics`
- Contact form submissions are additionally recorded as `inquiry_submitted` events
- Admin analytics dashboard: `/admin/analytics?key=YOUR_ADMIN_DASHBOARD_KEY`

Required environment variables:

```bash
POSTGRES_URL=postgres://...
ADMIN_DASHBOARD_KEY=your_secure_admin_key
```

Analytics table schema reference:

- `db/schema.sql` (`analytics_events`)

## SEO Checklist

1. Confirm `NEXT_PUBLIC_SITE_URL` matches the production domain.
2. Connect Search Console and submit `/sitemap.xml`.
3. Verify indexing rules in `/robots.txt`.
4. Run Lighthouse and target high scores in Performance, SEO, and Accessibility.
5. Add analytics and conversion tracking after go-live.

## Search Console and Bing Verification

Set verification tokens as environment variables in your host (for example, Vercel Project Settings -> Environment Variables):

```bash
GOOGLE_SITE_VERIFICATION=your_google_token
BING_SITE_VERIFICATION=your_bing_token
```

After deployment:

1. Open Google Search Console and add property `https://www.dataenthusiastofpa.com`.
2. Choose HTML tag verification and confirm the generated token matches `GOOGLE_SITE_VERIFICATION`.
3. In Bing Webmaster Tools, add the same site and choose meta tag verification.
4. Confirm the Bing token matches `BING_SITE_VERIFICATION`.
5. Submit `https://www.dataenthusiastofpa.com/sitemap.xml` in both tools.

## Content Editing

- Homepage content: app/page.tsx
- Service details: app/services/page.tsx
- Global site identity and contact details: lib/site.ts
- SEO helper logic and structured data: lib/seo.ts

## Deploy

Deploy to your preferred host (Vercel, Netlify, or a Node-compatible platform) and point your existing domain DNS to that host.
