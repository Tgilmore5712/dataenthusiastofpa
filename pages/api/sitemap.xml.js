import { getAllPosts } from '../../lib/posts'

export default function handler(req, res){
  const posts = getAllPosts()
  const siteUrl = 'https://dataenthusiastofpa.com'
  const urls = [
    `${siteUrl}/`,
    `${siteUrl}/about`,
    `${siteUrl}/blog`,
    `${siteUrl}/projects`,
    `${siteUrl}/contact`,
    ...posts.map(p => `${siteUrl}/blog/${p.slug}`)
  ]
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u => `<url><loc>${u}</loc></url>`).join('\n')}
  </urlset>`
  res.setHeader('Content-Type','application/xml')
  res.write(xml)
  res.end()
}
