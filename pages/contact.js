import { useState } from 'react'
import Head from 'next/head'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        const body = await res.json()
        setStatus(body?.error || 'error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <Head><title>Contact — Data Enthusiast of PA</title></Head>
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700 mb-4">Want to collaborate or ask a question? Email me at <a href="mailto:hello@dataenthusiastofpa.com">hello@dataenthusiastofpa.com</a>, or use the form below.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
          <input name="name" value={form.name} onChange={handleChange} required className="border p-2" placeholder="Your name" />
          <input name="email" value={form.email} onChange={handleChange} required type="email" className="border p-2" placeholder="Your email" />
          <textarea name="message" value={form.message} onChange={handleChange} required className="border p-2" rows="6" placeholder="Message" />
          <button disabled={status==='loading'} className="bg-sky-600 text-white py-2 px-4 rounded">{status==='loading' ? 'Sending…' : 'Send'}</button>
        </form>

        <div className="mt-4">
          {status==='sent' && <p className="text-green-600">Message sent — thank you!</p>}
          {status==='error' && <p className="text-red-600">An error occurred. Try again later.</p>}
          {status && typeof status === 'string' && status !== 'sent' && status !== 'loading' && status !== 'error' && <p className="text-red-600">{status}</p>}
        </div>
      </section>
    </>
  )
}
