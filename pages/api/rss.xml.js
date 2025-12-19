import { getAllPosts } from '../../lib/posts'

export default function handler(req, res){
  const posts = getAllPosts()
  const siteUrl = 'https://dataenthusiastofpa.com'
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
  <channel>
    <title>Data Enthusiast of PA</title>
    <link>${siteUrl}</link>
    <description>Data Enthusiast of PA blog</description>
    ${posts.map(p => `
      <item>
        <title><![CDATA[${p.title}]]></title>
        <link>${siteUrl}/blog/${p.slug}</link>
        <pubDate>${new Date(p.date).toUTCString()}</pubDate>
        <description><![CDATA[${p.content.slice(0,200)}]]></description>
      </item>
    `).join('\n')}
  </channel>
  </rss>`

  res.setHeader('Content-Type', 'application/rss+xml')
  res.write(feed)
  res.end()
}
