import Head from 'next/head'

export default function Contact(){
  return (
    <>
      <Head><title>Contact — Data Enthusiast of PA</title></Head>
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700 mb-4">Want to collaborate or ask a question? Email me at <a href="mailto:hello@dataenthusiastofpa.com">hello@dataenthusiastofpa.com</a>.</p>
        <form className="flex flex-col gap-3 max-w-md">
          <input className="border p-2" placeholder="Your name" />
          <input className="border p-2" placeholder="Your email" />
          <textarea className="border p-2" rows="4" placeholder="Message" />
          <button className="bg-sky-600 text-white py-2 px-4 rounded">Send</button>
        </form>
      </section>
    </>
  )
}
