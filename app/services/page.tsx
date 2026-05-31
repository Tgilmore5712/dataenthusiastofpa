import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Procore app development, database engineering, analytics engineering, and AI upskilling training services for construction and operations teams in Pennsylvania and across the U.S.",
  path: "/services",
});

const services = [
  {
    name: "Procore Custom App Development",
    description:
      "Design and build custom Procore app experiences for project management, field operations, and leadership reporting.",
  },
  {
    name: "Procore Workflow Automation",
    description:
      "Automate RFIs, submittals, approvals, and document workflows to reduce manual coordination and cycle times.",
  },
  {
    name: "Procore API Integrations",
    description:
      "Connect Procore with accounting, ERP, reporting, and internal systems to keep project and financial data aligned.",
  },
  {
    name: "Database Engineering Services",
    description:
      "Design data models, optimize query performance, and build resilient data foundations across operational systems.",
  },
  {
    name: "Analytics Engineering Services",
    description:
      "Create KPI models, automated pipelines, and dashboards that improve decision-making across project, operations, and finance teams.",
  },
  {
    name: "AI Upskilling and Team Training",
    description:
      "Deliver role-based AI training programs, safe usage guidelines, and repeatable workflows so your team can adopt AI with confidence.",
  },
  {
    name: "Team Enablement and Knowledge Transfer",
    description:
      "We pair with your existing team, train key contributors, and provide documentation and handoff guides so capability remains with your employees after implementation.",
  },
];

const packagedOffers = [
  {
    name: "Procore Discovery Sprint",
    price: "Starting at $3,500",
    details:
      "Current-state workflow mapping, integration architecture, ROI model, and a practical Procore implementation roadmap.",
  },
  {
    name: "Procore Workflow Build",
    price: "$6,000-$20,000 per workflow",
    details:
      "Build and deployment of one high-impact Procore workflow with testing, documentation, and rollout support.",
  },
  {
    name: "Procore App Build",
    price: "Starting at $4,500",
    details:
      "Role-specific app features and dashboards to support PM, field, and operations workflows in one practical release.",
  },
  {
    name: "Procore Integration Pilot",
    price: "$12,000-$25,000",
    details:
      "A focused integration pilot to validate data sync reliability, reporting consistency, and adoption before scale-out.",
  },
  {
    name: "Ongoing Procore Optimization Retainer",
    price: "$2,500-$5,000/month",
    details:
      "Continuous workflow optimization, monthly enhancements, and team support as operations and project volume evolve.",
  },
  {
    name: "Database and Analytics Audit",
    price: "Starting at $4,000",
    details:
      "Schema review, query bottleneck analysis, KPI alignment, and a prioritized execution plan for data reliability and reporting improvements.",
  },
  {
    name: "KPI Dashboard Sprint",
    price: "$6,000-$15,000",
    details:
      "Rapid delivery of executive and operations dashboards with documented metric definitions and data quality checks.",
  },
  {
    name: "Pipeline and Warehouse Build",
    price: "$12,000-$35,000",
    details:
      "Implementation of ETL/ELT pipelines and data models that unify Procore and operational systems for reliable analytics.",
  },
  {
    name: "AI Upskilling Workshop Program",
    price: "$2,500-$10,000",
    details:
      "Role-based AI training sessions, prompt and SOP playbooks, and manager enablement to support safe day-to-day adoption.",
  },
];

const investmentBands = [
  "Contained Procore workflow: $3,000-$10,000",
  "Cross-system Procore integration: $10,000-$30,000",
  "Database optimization and schema modernization: $5,000-$20,000",
  "Analytics dashboard and KPI delivery: $6,000-$18,000",
  "Pipeline and warehouse implementation: $12,000-$35,000",
  "AI upskilling and training programs: $2,500-$10,000",
  "Multi-department rollouts: $30,000+",
  "Role-based team enablement workshops: $1,500-$8,000",
  "Structured Procore upskilling programs: $5,000-$15,000",
  "Advisory and managed optimization: $1,500-$8,000+/month",
];

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <JsonLd data={serviceSchema()} />
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Services that move your business forward</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
        Procore-first implementation plus database and analytics engineering services for teams that need cleaner execution and stronger decision systems.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.name} className="rounded-2xl border border-slate-200 bg-white p-7">
            <h2 className="text-xl font-semibold text-slate-900">{service.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">{service.description}</p>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Packaged offers for Procore, data, and analytics teams</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
          We lead with packaged outcomes instead of vague hourly consulting. Engagements are scoped around measurable improvements in handoff speed, data reliability, reporting visibility, and adoption.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {packagedOffers.map((offer) => (
            <article key={offer.name} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{offer.price}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{offer.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{offer.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Typical investment bands</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
          Final pricing depends on system complexity, data quality, stakeholder coordination, and the depth of training required. These ranges help buyers budget realistically.
        </p>
        <ul className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          {investmentBands.map((band) => (
            <li key={band} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
              {band}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-8">
        <h2 className="text-2xl font-semibold text-slate-900">How we price: business outcomes first</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          We price around value delivered, not generic platform activity. If we reduce admin overhead, tighten project handoffs, and improve reporting velocity, the business case is clear.
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Our strongest model combines implementation plus upskilling so your team can operate and improve your Procore ecosystem long term.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/services/procore-app-development"
            className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
          >
            Procore App Development
          </Link>
          <Link
            href="/services/procore-workflow-automation"
            className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
          >
            Procore Workflow Automation
          </Link>
          <Link
            href="/services/procore-integration-pennsylvania"
            className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
          >
            Procore Integration Services
          </Link>
          <Link
            href="/services/database-engineering"
            className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
          >
            Database Engineering
          </Link>
          <Link
            href="/services/analytics-engineering"
            className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
          >
            Analytics Engineering
          </Link>
          <Link
            href="/services/ai-upskilling-training"
            className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
          >
            AI Upskilling Training
          </Link>
        </div>
      </section>

      <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Need a tailored build plan?</h2>
        <p className="mt-3 max-w-2xl text-slate-200">
          We define scope, integration points, and milestones, then build, enable your team, and deploy with rapid weekly progress.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          Schedule a Build Call
        </Link>
      </div>
    </main>
  );
}
