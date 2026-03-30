import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | Data Enthusiast of PA Business Solutions",
  description:
    "Review real-world outcomes from modernization, automation, and platform transformation engagements.",
  path: "/case-studies",
});

const studies = [
  {
    title: "Operations Dashboard Rollout",
    result: "38% faster reporting cycles",
    summary: "Built executive and team dashboards that replaced fragmented manual spreadsheets.",
  },
  {
    title: "Client Intake Workflow Automation",
    result: "52% reduction in processing time",
    summary: "Automated intake, approvals, and document routing across multiple business units.",
  },
  {
    title: "Legacy Platform Modernization",
    result: "99.95% uptime with lower support cost",
    summary: "Re-architected core systems with phased migration and zero-downtime cutover planning.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Results you can present to leadership</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
        Every engagement is measured against business outcomes, not just technical deliverables.
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
