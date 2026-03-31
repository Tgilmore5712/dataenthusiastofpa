import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services | Data Enthusiast of PA Business Solutions",
  description:
    "Workflow automation, custom web and mobile development, Procore integrations, and QuickBooks Online integration services.",
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
];

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <JsonLd data={serviceSchema()} />
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Services that move your business forward</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
        Technical implementation services focused on shipping automation and application solutions quickly.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.name} className="rounded-2xl border border-slate-200 bg-white p-7">
            <h2 className="text-xl font-semibold text-slate-900">{service.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">{service.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Need a tailored build plan?</h2>
        <p className="mt-3 max-w-2xl text-slate-200">
          We define scope, integration points, and milestones, then build and deploy with rapid weekly progress.
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
