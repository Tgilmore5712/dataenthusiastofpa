import Head from 'next/head'
import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'

export default function Blog({ posts }){
  const hasPosts = posts.length > 0
  return (
    <>
      <Head><title>Blog — Data Enthusiast of PA</title></Head>
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        {hasPosts ? (
          <ul className="space-y-4">
            {posts.map(p => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="text-sky-600 font-medium">{p.title}</Link>
                <div className="text-sm text-gray-600">{p.date}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No posts yet — I will publish tutorials and notes on data work here.</p>
        )}
      </section>
    </>
  )
}

export async function getStaticProps(){
  const posts = getAllPosts().map(p => ({ slug: p.slug, title: p.title, date: p.date }))
  return { props: { posts } }
}
