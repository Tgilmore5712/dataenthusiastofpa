import Head from 'next/head'

export default function Home(){
  return (
    <>
      <Head>
        <title>Data Enthusiast of PA</title>
      </Head>
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">Hi — I'm the Data Enthusiast of PA</h1>
        <p className="text-lg text-gray-700">I write about data analysis, visualization, and projects from Pennsylvania.</p>
      </section>
    </>
  )
}
