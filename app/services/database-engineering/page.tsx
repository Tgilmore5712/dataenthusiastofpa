import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Database Engineering Services",
  description:
    "Database engineering services for construction and operations teams. Improve schema design, performance, reliability, and reporting readiness.",
  path: "/services/database-engineering",
  keywords: [
    "database engineering services",
    "postgresql consulting",
    "database optimization",
    "schema design services",
    "sql performance tuning",
    "construction data engineering",
  ],
});

const databaseServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Database Engineering Services",
  serviceType: "Database Architecture, Optimization, and Reliability Engineering",
  areaServed: ["Pennsylvania", "United States"],
  provider: {
    "@type": "Organization",
    name: "Data Enthusiast of PA Business Solutions LLC",
    url: "https://www.dataenthusiastofpa.com",
  },
  description:
    "Database engineering services for schema design, query optimization, and reliable data foundations across operations systems.",
};

export default function DatabaseEngineeringPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <JsonLd data={databaseServiceSchema} />

      <section className="rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12">
        <p className="inline-flex rounded-full border border-slate-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
          Data Platform Services
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Database Engineering Services
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
          We design and optimize operational databases so your team can trust the numbers, move faster, and scale without query bottlenecks.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          Schedule a Database Review
        </Link>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Schema and Data Model Design</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Design normalized and analytics-ready schemas that support reliable application behavior and reporting.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">SQL Performance Tuning</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Improve slow queries, indexing strategy, and execution plans to reduce latency and cloud database costs.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Reliability and Governance</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Implement migration discipline, guardrails, and quality checks so production data stays dependable.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Typical engagements</h2>
        <ul className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Schema modernization and legacy database cleanup</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">PostgreSQL performance and indexing optimization</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Data migration from spreadsheets and disconnected systems</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Operational reporting data model foundations</li>
        </ul>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Need a database health plan?</h2>
        <p className="mt-3 max-w-2xl text-slate-200">
          We can audit your current environment and deliver a prioritized roadmap for performance, reliability, and analytics readiness.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Book a Database Audit
          </Link>
          <Link
            href="/services/analytics-engineering"
            className="inline-flex rounded-full border border-slate-400 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
          >
            Explore Analytics Engineering
          </Link>
        </div>
      </section>
    </main>
  );
}
