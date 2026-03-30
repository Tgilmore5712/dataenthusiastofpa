Development notes

- Run `npm install` to install dependencies (Node required).
- Start dev server with `npm run dev`.
- Posts live in `/posts` as markdown files with simple frontmatter:

```
---
title: "Post title"
date: 2025-12-17
---

Post content here.
```

- RSS available at `/rss.xml` and sitemap at `/sitemap.xml`.
- To test contact form locally, create `.env.local` with `MOCK_CONTACT=true`.
