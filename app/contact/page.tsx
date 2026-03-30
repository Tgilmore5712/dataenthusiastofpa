import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Data Enthusiast of PA Business Solutions",
  description:
    "Contact our team for a strategy consultation about digital transformation, process automation, or managed services.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Let us talk about your next growth initiative</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
        Share your priorities and we will propose an actionable plan with clear milestones.
      </p>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form className="rounded-2xl border border-slate-200 bg-white p-7" action="#" method="post">
          <div className="grid gap-4">
            <label className="text-sm font-medium text-slate-700">
              Full Name
              <input className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" type="text" name="name" required />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Business Email
              <input className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" type="email" name="email" required />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Company
              <input className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" type="text" name="company" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Message
              <textarea className="mt-2 min-h-32 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" name="message" required />
            </label>
            <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800" type="submit">
              Submit Inquiry
            </button>
          </div>
        </form>
        <aside className="rounded-2xl bg-slate-900 p-7 text-white">
          <h2 className="text-xl font-semibold">Engagement starts with a discovery call</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li>1. Define your highest-impact opportunities</li>
            <li>2. Align scope, timeline, and success metrics</li>
            <li>3. Receive a tailored execution roadmap</li>
          </ul>
          <p className="mt-6 text-sm text-slate-200">Prefer email? hello@yourdomain.com</p>
        </aside>
      </div>
    </main>
  );
}
