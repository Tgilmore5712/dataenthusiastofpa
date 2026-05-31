import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
            {siteConfig.name}
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 md:hidden"
          >
            Book Consultation
          </Link>
        </div>
        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-700 md:flex-nowrap md:gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 md:inline-flex"
        >
          Book Consultation
        </Link>
      </div>
    </header>
  );
}
