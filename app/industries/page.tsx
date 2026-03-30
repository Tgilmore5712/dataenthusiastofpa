import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries | Data of PA Business Solutions",
  description:
    "See how our business solutions adapt to healthcare, finance, logistics, and professional services organizations.",
  path: "/industries",
});

const industries = [
  "Healthcare and MedTech",
  "Financial and Insurance Services",
  "Logistics and Supply Chain",
  "Professional Services",
  "Manufacturing and Operations",
  "Government and Public Sector",
];

export default function IndustriesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Industry expertise with practical execution</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
        We bring repeatable frameworks and compliance-aware delivery practices to complex operating environments.
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
