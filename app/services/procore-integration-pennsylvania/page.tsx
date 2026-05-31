import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Procore Integration Services in Pennsylvania",
  description:
    "Procore integration services for Pennsylvania construction teams. Automate workflows, connect QuickBooks Online, and reduce manual project administration.",
  path: "/services/procore-integration-pennsylvania",
  keywords: [
    "procore integration services",
    "procore api development",
    "procore consulting pennsylvania",
    "quickbooks procore integration",
    "construction workflow automation",
    "construction software integration",
  ],
});

const procoreServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Procore Integration Services in Pennsylvania",
  serviceType: "Procore API Integrations and Construction Workflow Automation",
  areaServed: ["Pennsylvania", "United States"],
  provider: {
    "@type": "Organization",
    name: "Data Enthusiast of PA Business Solutions LLC",
    url: "https://www.dataenthusiastofpa.com",
  },
  description:
    "Custom Procore integrations, workflow automation, and QuickBooks Online connectivity for construction and field operations teams.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you integrate Procore with QuickBooks Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build secure integrations that sync project financial and operational data between Procore and QuickBooks Online to reduce duplicate entry and reporting delays.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Procore integration project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most contained integrations are delivered in 2 to 6 weeks depending on data mapping complexity, approval workflows, and number of connected systems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you train our internal team after implementation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We include documentation and team enablement so your staff can confidently manage and improve the integration after launch.",
      },
    },
  ],
};

export default function ProcoreIntegrationPennsylvaniaPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <JsonLd data={procoreServiceSchema} />
      <JsonLd data={faqSchema} />

      <section className="rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12">
        <p className="inline-flex rounded-full border border-slate-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
          Construction Technology Services
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Procore Integration Services in Pennsylvania
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
          We help construction and field operations teams connect Procore with QuickBooks Online and other systems to remove manual handoffs, improve project visibility, and speed financial reporting.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          Schedule a Procore Integration Call
        </Link>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Procore API Integration</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Build custom Procore workflows for project setup, daily field updates, and approval routing across departments.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Procore + QuickBooks Sync</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Reduce duplicate entry and reconcile faster by syncing financial data between Procore and QuickBooks Online.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Team Enablement</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            We train project managers and back-office staff so your team can own, operate, and improve the system long term.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Who this is for</h2>
        <ul className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">General contractors managing multiple active jobs</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Construction finance teams handling delayed project reconciliations</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Operations leaders needing cleaner handoffs between field and accounting</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Growing teams that need scalable, documented workflows</li>
        </ul>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Need a scoped implementation plan?</h2>
        <p className="mt-3 max-w-2xl text-slate-200">
          We can map your current process, identify bottlenecks, and propose a practical Procore integration roadmap with timeline and cost bands.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Start with a Discovery Call
          </Link>
          <Link
            href="/services"
            className="inline-flex rounded-full border border-slate-400 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
          >
            View All Services
          </Link>
        </div>
      </section>
    </main>
  );
}
