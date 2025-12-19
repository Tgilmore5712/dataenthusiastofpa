import Head from 'next/head'

export default function About(){
  return (
    <>
      <Head><title>About — Data Enthusiast of PA</title></Head>
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p className="text-gray-700">I'm focused on data projects, analysis, and visualization with roots in Pennsylvania. I work with public datasets, create reproducible analyses, and build interactive visualizations. I enjoy exploring housing, transportation, and demographic data across PA.</p>
        <h3 className="mt-6 text-xl font-semibold">Background</h3>
        <p className="text-gray-700">I have experience in Python, R, and JavaScript for data analysis and visualization. My goal is to publish tutorials and share open data projects that help local communities.</p>
      </section>
    </>
  )
}
