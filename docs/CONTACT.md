Contact form (serverless using SendGrid)

This project includes a contact form that posts to `/api/contact` and sends email using SendGrid.

Environment variables required (set in Vercel Project > Settings > Environment Variables):

- `SENDGRID_API_KEY` = your SendGrid API key
- `CONTACT_EMAIL` = email address that will receive messages (also used as the `from` address)

After you set these environment variables in Vercel, redeploy or trigger a new deployment. The contact form at `/contact` will then send messages.

If you prefer Formspree or a different provider, the form can be adjusted to post to that service directly.

Local mock (for UI testing)

If you want to test the contact form locally without configuring SendGrid, enable the mock endpoint:

- Create a file named `.env.local` at the project root with the content:

```
MOCK_CONTACT=true
```

- Start the dev server (`npm run dev`). The API route `/api/contact` will return a successful response without sending email.

Remove or set `MOCK_CONTACT` to `false` before deploying to production.
