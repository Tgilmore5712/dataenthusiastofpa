import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Procore App Development Services",
  description:
    "Procore app development services for construction operations teams. Build role-based workflows, dashboards, and integrations that improve project execution.",
  path: "/services/procore-app-development",
  keywords: [
    "procore app development",
    "procore custom app",
    "procore developer",
    "construction app development",
    "procore workflow app",
  ],
});

const procoreAppSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Procore App Development Services",
  serviceType: "Custom Procore Application Development",
  areaServed: ["Pennsylvania", "United States"],
  provider: {
    "@type": "Organization",
    name: "Data Enthusiast of PA Business Solutions LLC",
    url: "https://www.dataenthusiastofpa.com",
  },
  description:
    "Design and delivery of custom Procore applications for construction project operations, team handoffs, and leadership visibility.",
};

export default function ProcoreAppDevelopmentPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <JsonLd data={procoreAppSchema} />

      <section className="rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12">
        <p className="inline-flex rounded-full border border-slate-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
          Procore Engineering Services
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Procore App Development Services
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
          Build Procore apps that match how your projects actually run. We deliver role-based features for field teams, PMs, and operations leaders, with practical rollout support and documentation.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          Book a Procore App Strategy Call
        </Link>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Role-Based Workflow Design</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Build experiences tailored to superintendents, project engineers, PMs, and back-office teams.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Data and Reporting Architecture</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Create dependable data flows and reporting views that support decisions across active projects.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Deployment and Enablement</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Launch with testing, documentation, and team onboarding so the app can be sustained internally.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Common Procore app outcomes</h2>
        <ul className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Faster field-to-office issue resolution</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Cleaner handoffs between operations and finance</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Improved consistency in project status reporting</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Reduced manual admin burden for PMs and coordinators</li>
        </ul>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Need an implementation roadmap?</h2>
        <p className="mt-3 max-w-2xl text-slate-200">
          We can scope your app in phases and prioritize what drives measurable project performance first.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Start with Discovery
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
