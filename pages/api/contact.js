import sendgrid from '@sendgrid/mail'

export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  // Local mock mode: set MOCK_CONTACT=true in your environment to return success without sending email.
  if (process.env.MOCK_CONTACT === 'true') {
    console.log('Contact API mock enabled — returning success without sending email')
    return res.status(200).json({ ok: true, mocked: true })
  }

  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL

  if (!SENDGRID_API_KEY || !CONTACT_EMAIL) {
    return res.status(500).json({ error: 'Email not configured. Set SENDGRID_API_KEY and CONTACT_EMAIL.' })
  }

  try {
    sendgrid.setApiKey(SENDGRID_API_KEY)
    const msg = {
      to: CONTACT_EMAIL,
      from: CONTACT_EMAIL,
      subject: `Contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    }
    await sendgrid.send(msg)
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('SendGrid error', err)
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
