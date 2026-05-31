import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Procore Workflow Automation Services",
  description:
    "Procore workflow automation services to streamline RFIs, submittals, approvals, and project reporting for construction operations teams.",
  path: "/services/procore-workflow-automation",
  keywords: [
    "procore workflow automation",
    "procore rfi automation",
    "procore submittal workflow",
    "construction process automation",
    "procore implementation services",
  ],
});

const procoreWorkflowSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Procore Workflow Automation Services",
  serviceType: "Procore Workflow Design and Automation",
  areaServed: ["Pennsylvania", "United States"],
  provider: {
    "@type": "Organization",
    name: "Data Enthusiast of PA Business Solutions LLC",
    url: "https://www.dataenthusiastofpa.com",
  },
  description:
    "Design and automation of Procore-centered workflows for RFIs, approvals, document movement, and project reporting.",
};

export default function ProcoreWorkflowAutomationPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <JsonLd data={procoreWorkflowSchema} />

      <section className="rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12">
        <p className="inline-flex rounded-full border border-slate-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
          Procore Operations Automation
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Procore Workflow Automation Services
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
          We automate high-friction Procore workflows so your team spends less time chasing approvals, documents, and status updates, and more time executing projects.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          Schedule a Workflow Review
        </Link>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-xl font-semibold text-slate-900">Workflow targets we automate</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>RFI routing and response accountability</li>
            <li>Submittal coordination and review cycles</li>
            <li>Approval handoffs across operations and finance</li>
            <li>Document and status synchronization</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-xl font-semibold text-slate-900">Delivery model</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>Current-state process mapping</li>
            <li>Workflow architecture and implementation</li>
            <li>UAT and launch support</li>
            <li>Team enablement and operating guides</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">What improves after automation</h2>
        <div className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <p className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Shorter turnaround times on approval-dependent tasks</p>
          <p className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Fewer dropped handoffs between field and office</p>
          <p className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Better consistency in project records and reporting</p>
          <p className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Lower administrative workload on project teams</p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Ready to automate your highest-friction workflow?</h2>
        <p className="mt-3 max-w-2xl text-slate-200">
          We can identify the best first automation candidate and deliver it quickly with clear business impact.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Start a Workflow Pilot
          </Link>
          <Link
            href="/services"
            className="inline-flex rounded-full border border-slate-400 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
          >
            Back to Services
          </Link>
        </div>
      </section>
    </main>
  );
}
