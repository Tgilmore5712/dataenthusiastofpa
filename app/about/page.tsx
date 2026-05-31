import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Meet the Pennsylvania-based technical team behind workflow automation, app builds, and practical business systems enablement.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Execution-first technical partner</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
        Data Enthusiast of PA is a Pennsylvania-based technical partner with deep experience in analytics, operations, and software delivery. We build practical automation systems, reporting platforms, and custom applications while enabling your team to own and scale what we implement.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Analytics Engineering</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">Advanced SQL, KPI frameworks, and Power BI dashboards designed for real-time operational visibility.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Automation Delivery</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">AI-assisted workflow automation and integrations that reduce manual steps and cycle time.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Team Enablement</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">Hands-on knowledge transfer, process documentation, and training that keeps long-term capability with your employees.</p>
        </article>
      </div>
    </main>
  );
}
