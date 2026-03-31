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
  title: "Automation Workflows, Web and App Development",
  description:
    "Workflow automation, custom web and mobile apps, Procore development, and QuickBooks Online integrations built for operational speed.",
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
          Automation and Product Engineering
        </p>
        <h1 className="mt-7 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
          We build automation workflows, web apps, and mobile apps that eliminate manual work.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
          From Procore development to QuickBooks Online integrations, we implement practical systems your team can use immediately.
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
          <h2 className="text-lg font-semibold text-slate-900">Workflow Automation</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Automate repetitive back-office processes across operations, finance, and project teams.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Web and App Builds</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Design and delivery of custom web platforms, field apps, and internal business tools.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Platform Integrations</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Procore development, QBO integrations, and API connections that keep systems in sync.
          </p>
        </article>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
        <h2 className="font-serif text-3xl tracking-tight text-slate-900 md:text-4xl">Why enterprise teams choose us</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Builder mindset</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">We focus on shipping working automations and applications, not slide decks.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Integration depth</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">Strong experience with Procore APIs, QBO, and multi-system workflow orchestration.</p>
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
    </main>
  );
}
