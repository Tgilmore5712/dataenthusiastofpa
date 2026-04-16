import { sql } from "@vercel/postgres";
import { InquiryFollowUpDraft } from "@/components/inquiry-follow-up-draft";
import { ensurePostgresUrl } from "@/lib/postgres";

type InquiriesPageProps = {
  searchParams?: Promise<{
    key?: string;
    email?: string;
    company?: string;
    from?: string;
    to?: string;
  }>;
};

type InquiryRow = {
  id: number;
  name: string;
  email: string;
  company: string | null;
  message: string;
  created_at: Date | string;
};

export const metadata = {
  title: "Admin Inquiries",
  robots: {
    index: false,
    follow: false,
  },
};

function formatDate(value: Date | string) {
  const date = typeof value === "string" ? new Date(value) : value;
  return Number.isNaN(date.getTime()) ? "Unknown" : date.toLocaleString();
}

export default async function AdminInquiriesPage({ searchParams }: InquiriesPageProps) {
  const resolvedSearchParams = await searchParams;
  const accessKey = resolvedSearchParams?.key;
  const configuredKey = process.env.ADMIN_DASHBOARD_KEY ?? "";
  const emailFilter = (resolvedSearchParams?.email ?? "").trim().toLowerCase();
  const companyFilter = (resolvedSearchParams?.company ?? "").trim().toLowerCase();
  const fromFilter = (resolvedSearchParams?.from ?? "").trim();
  const toFilter = (resolvedSearchParams?.to ?? "").trim();

  if (!configuredKey) {
    return (
      <main className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Inquiries</h1>
        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Set ADMIN_DASHBOARD_KEY in your environment, then open this page with ?key=YOUR_KEY.
        </p>
      </main>
    );
  }

  if (!accessKey || accessKey !== configuredKey) {
    return (
      <main className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Inquiries</h1>
        <p className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
          Access denied. Provide a valid key query parameter.
        </p>
      </main>
    );
  }

  const connectionString = ensurePostgresUrl();

  if (!connectionString) {
    return (
      <main className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Inquiries</h1>
        <p className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
          Database configuration is missing. Set POSTGRES_URL (or your supported alias) and reload.
        </p>
      </main>
    );
  }

  let rows: InquiryRow[] = [];
  let dbError = "";

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contact_inquiries (
        id BIGSERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;

    const result = await sql<InquiryRow>`
      SELECT id, name, email, company, message, created_at
      FROM contact_inquiries
      ORDER BY created_at DESC
      LIMIT 250
    `;

    rows = result.rows;
  } catch (error) {
    console.error("[admin-inquiries] Failed to load inquiries", error);
    dbError = "Unable to load submissions from the database right now.";
  }

  const fromDate = fromFilter ? new Date(`${fromFilter}T00:00:00`) : null;
  const toDate = toFilter ? new Date(`${toFilter}T23:59:59.999`) : null;
  const hasValidFromDate = fromDate ? !Number.isNaN(fromDate.getTime()) : false;
  const hasValidToDate = toDate ? !Number.isNaN(toDate.getTime()) : false;

  const filteredRows = rows.filter((row) => {
    const rowEmail = row.email.toLowerCase();
    const rowCompany = (row.company ?? "").toLowerCase();
    const rowDate = new Date(row.created_at);

    const emailMatches = emailFilter ? rowEmail.includes(emailFilter) : true;
    const companyMatches = companyFilter ? rowCompany.includes(companyFilter) : true;
    const fromMatches = hasValidFromDate ? rowDate >= fromDate! : true;
    const toMatches = hasValidToDate ? rowDate <= toDate! : true;

    return emailMatches && companyMatches && fromMatches && toMatches;
  });

  const visibleRows = filteredRows.slice(0, 20);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Recent Inquiries</h1>
      <p className="mt-3 text-sm text-slate-700">Filter submissions by date, email, or company. The table shows the latest 20 matches.</p>

      <form method="get" className="mt-6 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-5">
        <input type="hidden" name="key" value={accessKey} />
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
          Email contains
          <input
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm normal-case"
            type="text"
            name="email"
            defaultValue={resolvedSearchParams?.email ?? ""}
            placeholder="example@company.com"
          />
        </label>
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
          Company contains
          <input
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm normal-case"
            type="text"
            name="company"
            defaultValue={resolvedSearchParams?.company ?? ""}
            placeholder="Company name"
          />
        </label>
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
          From date
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm normal-case" type="date" name="from" defaultValue={fromFilter} />
        </label>
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
          To date
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm normal-case" type="date" name="to" defaultValue={toFilter} />
        </label>
        <div className="flex items-end gap-2">
          <button type="submit" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Apply Filters
          </button>
          <a href={`/admin/inquiries?key=${encodeURIComponent(accessKey ?? "")}`} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
            Clear
          </a>
        </div>
      </form>

      {!dbError ? <p className="mt-3 text-xs text-slate-600">{filteredRows.length} matching inquiries found.</p> : null}

      {dbError ? (
        <p className="mt-6 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">{dbError}</p>
      ) : null}

      {!dbError && filteredRows.length === 0 ? (
        <p className="mt-6 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">No inquiries match the current filters.</p>
      ) : null}

      {visibleRows.length > 0 ? (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Company</th>
                <th className="px-4 py-3 font-semibold">Message</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {visibleRows.map((row) => (
                <tr key={row.id}>
                  <td className="whitespace-nowrap px-4 py-3 align-top">{formatDate(row.created_at)}</td>
                  <td className="whitespace-nowrap px-4 py-3 align-top">{row.name}</td>
                  <td className="whitespace-nowrap px-4 py-3 align-top">{row.email}</td>
                  <td className="whitespace-nowrap px-4 py-3 align-top">{row.company || "-"}</td>
                  <td className="px-4 py-3 align-top">{row.message}</td>
                  <td className="px-4 py-3 align-top">
                    <InquiryFollowUpDraft name={row.name} email={row.email} company={row.company} message={row.message} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </main>
  );
}