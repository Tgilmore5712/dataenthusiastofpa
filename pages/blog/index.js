import Head from 'next/head'

export default function Blog(){
  return (
    <>
      <Head><title>Blog — Data Enthusiast of PA</title></Head>
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        <p className="text-gray-700">No posts yet — I'll publish tutorials and notes on data work here.</p>
      </section>
    </>
  )
}
