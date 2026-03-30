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
  title: "Business Solutions for Revenue, Efficiency, and Scale",
  description:
    "Professional business solutions that combine strategy, technology implementation, and managed support to accelerate growth.",
  path: "/",
});

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-14 md:py-20">
      <JsonLd data={organizationSchema()} />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={serviceSchema()} />

      <section className="rounded-3xl bg-slate-900 px-8 py-14 text-white md:px-14">
        <p className="inline-flex rounded-full border border-slate-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
          Professional Corporate Solutions
        </p>
        <h1 className="mt-7 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
          Business solutions that turn complex operations into scalable growth engines.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
          We help leadership teams modernize systems, automate workflows, and build high-performance operating models with clear ROI.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Talk to an Expert
          </Link>
          <Link
            href="/case-studies"
            className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
          >
            View Case Studies
          </Link>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Strategic Consulting</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Business architecture, capability mapping, and transformation roadmaps for executive teams.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Technology Delivery</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Full-cycle engineering and integration programs that reduce technical debt and speed execution.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Managed Improvement</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Ongoing optimization, reporting, and operational support to sustain long-term gains.
          </p>
        </article>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
        <h2 className="font-serif text-3xl tracking-tight text-slate-900 md:text-4xl">Why enterprise teams choose us</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Execution confidence</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">Cross-functional teams that align strategy, delivery, and measurable outcomes.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Operational rigor</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">Governance, risk control, and transparent KPIs throughout every engagement.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Speed to value</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">Phased implementation that delivers early business wins while scaling sustainably.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Future-ready architecture</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">Modern foundations built for growth, resilience, and evolving customer demands.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
