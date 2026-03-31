import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | Data Enthusiast of PA Business Solutions",
  description:
    "Review delivery outcomes from automation workflows, analytics platforms, and cross-system implementation projects.",
  path: "/case-studies",
});

const studies = [
  {
    title: "Enterprise KPI and Reporting Platform",
    result: "Real-time KPI visibility across leadership and operations",
    summary: "Built and deployed Power BI reporting frameworks and SQL-backed dashboards to replace fragmented manual reporting.",
  },
  {
    title: "Workflow and Program Automation",
    result: "Faster cross-functional execution with fewer manual handoffs",
    summary: "Implemented automation-driven workstreams for operations and finance teams, improving delivery speed and consistency.",
  },
  {
    title: "Operational Redesign and Margin Improvement",
    result: "10-point gross profit improvement",
    summary: "Used SQL analysis, KPI design, and system-level process redesign to improve cost-to-serve and execution quality.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Delivery outcomes that improve operations</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
        Every build is tied to measurable performance improvements across workflows, reporting, and operational execution.
      </p>
      <div className="mt-10 space-y-6">
        {studies.map((study) => (
          <article key={study.title} className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{study.result}</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">{study.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">{study.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
