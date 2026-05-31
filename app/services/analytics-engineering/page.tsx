import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Analytics Engineering Services",
  description:
    "Analytics engineering services for construction and operations teams. Build KPI models, data pipelines, and dashboards that support faster decisions.",
  path: "/services/analytics-engineering",
  keywords: [
    "analytics engineering services",
    "kpi dashboard development",
    "data pipeline engineering",
    "construction analytics consulting",
    "operations analytics",
    "business intelligence engineering",
  ],
});

const analyticsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Analytics Engineering Services",
  serviceType: "KPI Modeling, Data Pipelines, and Dashboard Engineering",
  areaServed: ["Pennsylvania", "United States"],
  provider: {
    "@type": "Organization",
    name: "Data Enthusiast of PA Business Solutions LLC",
    url: "https://www.dataenthusiastofpa.com",
  },
  description:
    "Analytics engineering services for KPI definitions, pipeline automation, and dashboard delivery for operations and finance teams.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does analytics engineering include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Analytics engineering includes KPI definition, data modeling, pipeline automation, dashboard design, and data quality controls so leadership can trust reporting outputs.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Procore and financial reporting data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build analytics pipelines and semantic models that combine Procore and financial or operational sources for unified reporting.",
      },
    },
  ],
};

export default function AnalyticsEngineeringPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <JsonLd data={analyticsServiceSchema} />
      <JsonLd data={faqSchema} />

      <section className="rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12">
        <p className="inline-flex rounded-full border border-slate-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
          Analytics Engineering
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Analytics Engineering Services
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
          We build KPI frameworks, data pipelines, and dashboards that give operations, project, and finance teams faster and more reliable decision support.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          Schedule an Analytics Planning Call
        </Link>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">KPI and Metric Modeling</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Define metric logic and governance so teams align on one source of truth for performance tracking.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Pipeline Automation</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Build ETL/ELT workflows that reduce spreadsheet dependency and keep dashboards refreshed automatically.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Dashboard Delivery</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Ship role-specific dashboards for executives, project leaders, and operations teams with practical drill-downs.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Common analytics outcomes</h2>
        <ul className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Faster executive visibility into project and financial health</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Reduced reporting lag and fewer manual report cycles</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Consistent KPI definitions across departments</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Higher confidence in operational and forecast decisions</li>
        </ul>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Need a KPI and dashboard roadmap?</h2>
        <p className="mt-3 max-w-2xl text-slate-200">
          We can scope the data model, pipeline plan, and dashboard rollout sequence to deliver high-value reporting quickly.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Start Analytics Discovery
          </Link>
          <Link
            href="/services/database-engineering"
            className="inline-flex rounded-full border border-slate-400 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
          >
            Explore Database Engineering
          </Link>
        </div>
      </section>
    </main>
  );
}
