import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services | Data of PA Business Solutions",
  description:
    "Explore strategy, implementation, automation, and managed services designed to improve productivity and business performance.",
  path: "/services",
});

const services = [
  {
    name: "Business Strategy and Transformation",
    description:
      "Executive advisory, digital strategy, and process redesign focused on operational excellence.",
  },
  {
    name: "Custom Software and Integrations",
    description:
      "Modern web platforms, API integrations, and internal tools that eliminate manual work.",
  },
  {
    name: "Automation and Data Workflows",
    description:
      "Workflow automation, analytics pipelines, and reporting systems that support faster decisions.",
  },
  {
    name: "Managed Operations Support",
    description:
      "Proactive maintenance, performance monitoring, and enhancement cycles for ongoing reliability.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <JsonLd data={serviceSchema()} />
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Services that move your business forward</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
        Flexible engagement models that combine strategic leadership with practical delivery.
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
        <h2 className="text-2xl font-semibold">Need a tailored service mix?</h2>
        <p className="mt-3 max-w-2xl text-slate-200">
          We design a custom delivery model around your goals, timeline, and internal capabilities.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          Schedule a Strategy Call
        </Link>
      </div>
    </main>
  );
}
