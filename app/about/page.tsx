import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us | Data of PA Business Solutions",
  description:
    "Learn how our consulting, engineering, and managed teams help organizations improve performance and reduce risk.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Built for measurable outcomes</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
        We partner with growth-focused companies to solve operational bottlenecks, modernize legacy systems, and create resilient digital workflows.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Advisory</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">Business strategy, process mapping, and roadmap design aligned with ROI goals.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Delivery</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">Cross-functional teams that execute platform builds, automation, and integrations.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Optimization</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">Continuous improvement with reporting, KPI dashboards, and operational support.</p>
        </article>
      </div>
    </main>
  );
}
