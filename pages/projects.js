import Head from 'next/head'

export default function Projects(){
  return (
    <>
      <Head><title>Projects — Data Enthusiast of PA</title></Head>
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <p className="text-gray-700">Project list will appear here. Below are a few example projects to showcase the kind of work you'll find.</p>
        <ul className="mt-4 space-y-3">
          <li>
            <strong>PA Housing Explorer</strong> — interactive maps and charts analyzing housing prices and inventory across Pennsylvania counties.
          </li>
          <li>
            <strong>Transit Ridership Trends</strong> — time series analysis of public transit ridership and seasonal patterns.
          </li>
          <li>
            <strong>Demographics Dashboard</strong> — visualizations combining Census and local datasets to highlight demographic changes.
          </li>
        </ul>
      </section>
    </>
  )
}
