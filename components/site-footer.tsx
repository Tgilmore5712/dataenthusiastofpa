import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-base font-bold text-slate-900">{siteConfig.name}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Strategic business and technology partner helping organizations modernize operations and scale with confidence.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>
              {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/about" className="hover:text-slate-900">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-slate-900">Services</Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-slate-900">Case Studies</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">
        Copyright {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
