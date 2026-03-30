import Head from 'next/head'
import Link from 'next/link'
import { getAllPosts } from '../lib/posts'

export default function Home({ posts }){
  return (
    <>
      <Head>
        <title>Data Enthusiast of PA</title>
      </Head>
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">Hi — I'm the Data Enthusiast of PA</h1>
        <p className="text-lg text-gray-700">I write about data analysis, visualization, and projects from Pennsylvania.</p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Latest posts</h2>
          <ul className="space-y-2">
            {posts.slice(0,3).map(p => (
              <li key={p.slug}><Link href={`/blog/${p.slug}`} className="text-sky-600">{p.title}</Link> <span className="text-sm text-gray-600">{p.date}</span></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps(){
  const posts = getAllPosts().map(p => ({ slug: p.slug, title: p.title, date: p.date }))
  return { props: { posts } }
}
