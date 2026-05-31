import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import {
  buildMetadata,
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Procore, Database, and Analytics Engineering",
  description:
    "Procore app development, database engineering, analytics engineering, and AI upskilling training for Pennsylvania construction and operations teams.",
  path: "/",
});

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What Procore development services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build custom Procore apps, workflow automations, API integrations, and reporting workflows for construction operations teams.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only build software, or do you train our team too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We combine implementation and team enablement, including AI upskilling training workshops, so your project managers, admins, and operations teams can operate and improve the system after launch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle integrations beyond Procore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are Procore-first, and we also connect Procore to accounting, ERP, and internal systems when that is required for full workflow continuity.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-14 md:py-20">
      <JsonLd data={organizationSchema()} />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={serviceSchema()} />
      <JsonLd data={homeFaqSchema} />

      <section className="rounded-3xl bg-slate-900 px-8 py-14 text-white md:px-14">
        <p className="inline-flex rounded-full border border-slate-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
          Construction Technology Partner
        </p>
        <h1 className="mt-7 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
          Procore, database, and analytics engineering that eliminates project friction from field to office.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
          We design and deliver Procore-centric workflows, reliable data platforms, analytics systems, and AI upskilling programs for teams that need faster execution and cleaner project visibility.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Talk to an Expert
          </Link>
          <Link
            href="/services/procore-app-development"
            className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
          >
            Explore Procore App Development
          </Link>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Procore App Development</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Custom Procore apps and role-based workflows for PMs, supers, and operations leaders.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Procore Workflow Automation</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Automate RFIs, submittals, approvals, document handoffs, and reporting cycles.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Database and Analytics Engineering</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Build reliable data models, pipelines, and KPI dashboards that turn project data into decisions.
          </p>
        </article>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">AI Upskilling Training for Your Team</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
          We run practical AI upskilling sessions for project, operations, and back-office teams so adoption is safe, role-specific, and measurable after implementation.
        </p>
        <Link
          href="/services/ai-upskilling-training"
          className="mt-5 inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
        >
          Explore AI Upskilling Training
        </Link>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
        <h2 className="font-serif text-3xl tracking-tight text-slate-900 md:text-4xl">Why construction teams choose us</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-5 md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Team enablement model</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">You already have strong employees. We close skill gaps in a fast-changing environment by building with your team, documenting every system, and training team members so you can reduce long-term outside dependency.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Builder mindset</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">We focus on shipping production-ready Procore solutions, not strategy slides.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Integration depth</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">Strong depth in Procore APIs, event-driven automation, and cross-platform construction operations architecture.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Fast implementation</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">Rapid sprint execution with visible progress every week.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Maintainable systems</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">Clean architecture, documentation, and support so your team can scale confidently.</p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
        <h2 className="font-serif text-3xl tracking-tight text-slate-900 md:text-4xl">Procore-focused packages with practical ROI</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
          We package work around Procore outcomes, not vague consulting hours. Engagements range from contained app builds to workflow automation pilots and ongoing optimization retainers.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Audit and Plan</p>
            <p className="mt-2 text-sm text-slate-700">Procore discovery and architecture sprints starting at $3,500.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Build and Deploy</p>
            <p className="mt-2 text-sm text-slate-700">Procore app and workflow builds from $6,000-$20,000 per implementation.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Optimize Monthly</p>
            <p className="mt-2 text-sm text-slate-700">Ongoing Procore optimization retainers starting at $2,500/month.</p>
          </div>
        </div>
        <Link
          href="/services"
          className="mt-7 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          See Full Pricing and Packages
        </Link>
      </section>
    </main>
  );
}
