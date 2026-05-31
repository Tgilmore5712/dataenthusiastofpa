import { sql } from "@vercel/postgres";
import { ensurePostgresUrl } from "@/lib/postgres";

type AnalyticsPageProps = {
  searchParams?: Promise<{
    key?: string;
  }>;
};

type DailyPageViewRow = {
  day: string;
  page_views: number;
};

type TopPageRow = {
  path: string;
  visits: number;
};

type SummaryRow = {
  page_views_30d: number;
  inquiries_30d: number;
};

export const metadata = {
  title: "Admin Analytics",
  robots: {
    index: false,
    follow: false,
  },
};

async function ensureAnalyticsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS public.analytics_events (
      id BIGSERIAL PRIMARY KEY,
      event_name TEXT NOT NULL,
      path TEXT NOT NULL,
      referrer TEXT,
      utm_source TEXT,
      utm_medium TEXT,
      utm_campaign TEXT,
      page_title TEXT,
      user_agent TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at
    ON public.analytics_events (created_at DESC)
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_analytics_events_path
    ON public.analytics_events (path)
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_analytics_events_event_name
    ON public.analytics_events (event_name)
  `;
}

async function getSummary() {
  return sql<SummaryRow>`
    SELECT
      (
        SELECT COUNT(*)::int
        FROM public.analytics_events
        WHERE event_name = 'page_view'
          AND created_at >= NOW() - INTERVAL '30 days'
      ) AS page_views_30d,
      (
        SELECT COUNT(*)::int
        FROM public.contact_inquiries
        WHERE created_at >= NOW() - INTERVAL '30 days'
      ) AS inquiries_30d
  `;
}

async function getDailyPageViews() {
  return sql<DailyPageViewRow>`
    SELECT
      to_char(date_trunc('day', created_at), 'YYYY-MM-DD') AS day,
      COUNT(*)::int AS page_views
    FROM public.analytics_events
    WHERE event_name = 'page_view'
      AND created_at >= NOW() - INTERVAL '30 days'
    GROUP BY 1
    ORDER BY 1 DESC
  `;
}

async function getTopPages() {
  return sql<TopPageRow>`
    SELECT
      path,
      COUNT(*)::int AS visits
    FROM public.analytics_events
    WHERE event_name = 'page_view'
      AND created_at >= NOW() - INTERVAL '30 days'
    GROUP BY path
    ORDER BY visits DESC
    LIMIT 15
  `;
}

export default async function AdminAnalyticsPage({ searchParams }: AnalyticsPageProps) {
  const resolvedSearchParams = await searchParams;
  const accessKey = resolvedSearchParams?.key;
  const configuredKey = process.env.ADMIN_DASHBOARD_KEY ?? "";

  if (!configuredKey) {
    return (
      <main className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Analytics</h1>
        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Set ADMIN_DASHBOARD_KEY in your environment, then open this page with ?key=YOUR_KEY.
        </p>
      </main>
    );
  }

  if (!accessKey || accessKey !== configuredKey) {
    return (
      <main className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Analytics</h1>
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
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Analytics</h1>
        <p className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
          Database configuration is missing. Set POSTGRES_URL (or your supported alias) and reload.
        </p>
      </main>
    );
  }

  try {
    await ensureAnalyticsTable();

    const [summaryResult, dailyResult, topPagesResult] = await Promise.all([
      getSummary(),
      getDailyPageViews(),
      getTopPages(),
    ]);

    const summary = summaryResult.rows[0] ?? {
      page_views_30d: 0,
      inquiries_30d: 0,
    };

    const conversionRate = summary.page_views_30d > 0
      ? ((summary.inquiries_30d / summary.page_views_30d) * 100).toFixed(2)
      : "0.00";

    return (
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Analytics</h1>
        <p className="mt-3 text-sm text-slate-700">
          Last 30 days of site analytics and inquiry conversion.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Page Views (30d)</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{summary.page_views_30d}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Inquiries (30d)</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{summary.inquiries_30d}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Inquiry Conversion</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{conversionRate}%</p>
          </article>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Top Pages (30d)</h2>
          {topPagesResult.rows.length === 0 ? (
            <p className="mt-4 text-sm text-slate-700">No analytics page view events captured yet.</p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Path</th>
                    <th className="px-4 py-3 font-semibold">Visits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {topPagesResult.rows.map((row) => (
                    <tr key={row.path}>
                      <td className="px-4 py-3">{row.path}</td>
                      <td className="px-4 py-3">{row.visits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Daily Page Views (30d)</h2>
          {dailyResult.rows.length === 0 ? (
            <p className="mt-4 text-sm text-slate-700">No daily page view data yet.</p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Date</th>
                    <th className="px-4 py-3 font-semibold">Page Views</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {dailyResult.rows.map((row) => (
                    <tr key={row.day}>
                      <td className="px-4 py-3">{row.day}</td>
                      <td className="px-4 py-3">{row.page_views}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    );
  } catch (error) {
    console.error("[admin-analytics] Failed to load analytics", error);

    return (
      <main className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Analytics</h1>
        <p className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
          Unable to load analytics right now. Please confirm database access and try again.
        </p>
      </main>
    );
  }
}
