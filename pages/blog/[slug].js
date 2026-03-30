import Head from 'next/head'
import { getPostBySlug, getAllPosts } from '../../lib/posts'
import { remark } from 'remark'
import html from 'remark-html'

export default function Post({ post, contentHtml }){
  if (!post) return <p>Post not found</p>
  return (
    <>
      <Head><title>{post.title} — Data Enthusiast of PA</title></Head>
      <article className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-sm text-gray-600 mb-6">{post.date}</div>
        <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </>
  )
}

export async function getStaticPaths(){
  const posts = getAllPosts()
  return { paths: posts.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }){
  const post = getPostBySlug(params.slug)
  const processed = await remark().use(html).process(post.content)
  const contentHtml = processed.toString()
  return { props: { post, contentHtml } }
}
