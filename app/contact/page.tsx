import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Data Enthusiast of PA Business Solutions",
  description:
    "Contact our team for workflow automation, app development, and team enablement that helps your staff own the solution long term.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams?: Promise<{ status?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const status = resolvedSearchParams?.status;

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Let us build with your team, not around it</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
        You have strong employees. We help close skill gaps in a fast-changing environment, implement quickly, and transfer knowledge so your team keeps the capability after launch.
      </p>
      {status === "success" ? (
        <p className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Thank you. Your inquiry was submitted successfully.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          Please complete all required fields and try again.
        </p>
      ) : null}
      {status === "db-error" ? (
        <p className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          We could not save your inquiry right now. Please email us directly and we will respond quickly.
        </p>
      ) : null}
      {status === "config-error" ? (
        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          The inquiry form is not configured yet. Please email us directly while we finish setup.
        </p>
      ) : null}
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form className="rounded-2xl border border-slate-200 bg-white p-7" action="/api/contact" method="post">
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
            <li>2. Align scope, timeline, and internal team ownership</li>
            <li>3. Receive a tailored build and knowledge-transfer roadmap</li>
          </ul>
          <p className="mt-6 text-sm text-slate-200">
            Prefer email?{" "}
            <a href="mailto:Todd@dataenthusiastofpa.com" className="underline underline-offset-2 hover:text-white">
              Todd@dataenthusiastofpa.com
            </a>
          </p>
        </aside>
      </div>
    </main>
  );
}
