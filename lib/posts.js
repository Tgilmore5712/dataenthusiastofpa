import fs from 'fs'
import path from 'path'

const postsDir = path.join(process.cwd(), 'posts')

function parseFrontmatter(content){
  const fm = { title: null, date: null }
  if (content.startsWith('---')){
    const end = content.indexOf('\n---', 3)
    if (end !== -1){
      const block = content.slice(3, end+1).trim()
      block.split('\n').forEach(line => {
        const [k, ...rest] = line.split(':')
        if (!k) return
        const key = k.trim()
        const val = rest.join(':').trim()
        if (key === 'title') fm.title = val.replace(/^\"|\"$/g, '')
        if (key === 'date') fm.date = val
      })
      const body = content.slice(end+4)
      return { fm, body }
    }
  }
  return { fm, body: content }
}

export function getAllPosts(){
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  const posts = files.map(file => {
    const slug = file.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(postsDir, file),'utf8')
    const { fm, body } = parseFrontmatter(raw)
    return { slug, title: fm.title || slug, date: fm.date || null, content: body }
  })
  return posts.sort((a,b) => (b.date || '').localeCompare(a.date || ''))
}

export function getPostBySlug(slug){
  const file = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file,'utf8')
  const { fm, body } = parseFrontmatter(raw)
  return { slug, title: fm.title || slug, date: fm.date || null, content: body }
}
