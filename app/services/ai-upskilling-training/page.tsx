import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "AI Upskilling Training Services",
  description:
    "AI upskilling training services for operations and construction teams. Build safe AI adoption with role-based training, SOPs, and practical workflows.",
  path: "/services/ai-upskilling-training",
  keywords: [
    "ai upskilling training",
    "ai team training",
    "ai adoption workshop",
    "ai enablement services",
    "operations ai training",
    "construction ai training",
  ],
});

const aiTrainingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Upskilling Training Services",
  serviceType: "AI Team Training and Adoption Enablement",
  areaServed: ["Pennsylvania", "United States"],
  provider: {
    "@type": "Organization",
    name: "Data Enthusiast of PA Business Solutions LLC",
    url: "https://www.dataenthusiastofpa.com",
  },
  description:
    "Role-based AI upskilling training for project, operations, and finance teams with practical workflows and governance guidance.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does AI upskilling training include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI upskilling includes role-based training sessions, prompt frameworks, SOP templates, and safe-usage guardrails so teams can adopt AI reliably.",
      },
    },
    {
      "@type": "Question",
      name: "Can training be tailored to project and operations roles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We tailor sessions for project management, field operations, finance, and leadership so each team learns practical AI workflows relevant to daily work.",
      },
    },
  ],
};

export default function AiUpskillingTrainingPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <JsonLd data={aiTrainingServiceSchema} />
      <JsonLd data={faqSchema} />

      <section className="rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12">
        <p className="inline-flex rounded-full border border-slate-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
          Team Enablement Services
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          AI Upskilling Training Services
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
          We help your team adopt AI safely and practically through role-based training, workflow design, and management-level guidance that supports real usage after go-live.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          Schedule an AI Training Call
        </Link>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Role-Based Learning Paths</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Training modules tailored for PMs, operations coordinators, admins, finance teams, and leadership.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Practical Workflow Adoption</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Build prompt libraries, SOP templates, and repeatable process playbooks teams can use immediately.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Governance and Safety</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Define acceptable-use guidelines, review checkpoints, and escalation paths for responsible AI usage.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Common outcomes from AI upskilling</h2>
        <ul className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Faster drafting, reporting, and routine analysis tasks</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Higher confidence in role-specific AI usage</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Lower risk through clear governance and review workflows</li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Stronger long-term internal capability without constant outside dependency</li>
        </ul>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Need an AI enablement roadmap for your team?</h2>
        <p className="mt-3 max-w-2xl text-slate-200">
          We can scope your training plan, role tracks, and rollout schedule so adoption stays practical and measurable.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Start AI Upskilling Planning
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
