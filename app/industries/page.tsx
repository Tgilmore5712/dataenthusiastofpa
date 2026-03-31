import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries | Data Enthusiast of PA Business Solutions",
  description:
    "Automation and app development expertise for construction, logistics, fulfillment, operations, and service businesses.",
  path: "/industries",
});

const industries = [
  "Construction and Field Operations",
  "Logistics and Supply Chain",
  "3PL Fulfillment (D2C and B2B)",
  "Finance and Accounting Workflows",
  "Professional Services",
  "Multi-Site Operations",
];

export default function IndustriesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Industry context plus technical delivery</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
        We build systems for teams that manage complex operations, large data sets, and tight execution timelines.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {industries.map((industry) => (
          <article key={industry} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-base font-semibold text-slate-900">{industry}</h2>
          </article>
        ))}
      </div>
    </main>
  );
}
