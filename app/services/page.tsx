import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services | Data Enthusiast of PA Business Solutions",
  description:
    "Workflow automation, custom web and mobile development, Procore integrations, QBO integration services, and team enablement.",
  path: "/services",
});

const services = [
  {
    name: "Workflow Automation and AI Operations",
    description:
      "Design and implementation of automation workflows that remove repetitive tasks from operations, finance, and project teams.",
  },
  {
    name: "Custom Web and Mobile App Development",
    description:
      "Build production-ready internal tools, customer portals, and field apps tailored to your workflows.",
  },
  {
    name: "Procore Development and API Integrations",
    description:
      "Extend Procore with custom workflows, syncs, and data integrations that fit your project operations.",
  },
  {
    name: "QuickBooks Online (QBO) Integrations",
    description:
      "Connect QBO with your systems to automate billing, reconciliations, and financial reporting workflows.",
  },
  {
    name: "Team Enablement and Knowledge Transfer",
    description:
      "We pair with your existing team, train key contributors, and provide documentation and handoff guides so capability remains with your employees after implementation.",
  },
];

const packagedOffers = [
  {
    name: "AI Readiness Audit",
    price: "Starting at $3,500",
    details:
      "Opportunity assessment, workflow risk review, ROI model, and implementation roadmap for leaders who need a practical starting point.",
  },
  {
    name: "Workflow Automation Build",
    price: "$6,000-$15,000 per workflow",
    details:
      "Implementation of one contained high-impact workflow across systems like Procore, QuickBooks, email, and spreadsheets.",
  },
  {
    name: "Team AI Upskilling Day",
    price: "Starting at $4,500",
    details:
      "Live role-based training, prompt and SOP templates, and manager guidance so adoption sticks after go-live.",
  },
  {
    name: "30-Day AI Pilot Program",
    price: "$12,000-$25,000",
    details:
      "A focused pilot combining build plus enablement to prove value quickly and create an executable scale plan.",
  },
  {
    name: "Ongoing Optimization Retainer",
    price: "$2,500-$5,000/month",
    details:
      "Continuous optimization, small automation builds, onboarding support, and usage improvements as operations evolve.",
  },
];

const investmentBands = [
  "Contained automation workflow: $3,000-$10,000",
  "Cross-system automation: $10,000-$30,000",
  "Multi-department rollouts: $30,000+",
  "Live team workshops: $1,500-$8,000",
  "Structured upskilling programs: $5,000-$15,000",
  "Advisory and managed support: $1,500-$8,000+/month",
];

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <JsonLd data={serviceSchema()} />
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Services that move your business forward</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
        Technical implementation services focused on delivering automation and application solutions quickly.
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
        <h2 className="text-2xl font-semibold text-slate-900">Packaged offers for SMB operations teams</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
          We lead with packaged outcomes instead of vague hourly consulting. Engagements are scoped around measurable improvements in speed, handoffs, visibility, and team adoption.
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
          We price around value delivered, not generic AI activity. If we can reduce manual admin hours, shorten billing cycles, improve project handoffs, and make reporting visible sooner, the business case becomes clear.
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Our strongest model combines implementation plus upskilling so your team can operate and improve the system long term.
        </p>
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
