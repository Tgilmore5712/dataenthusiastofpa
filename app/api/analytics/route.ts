import { NextResponse } from "next/server";
import { Pool } from "pg";
import { ensurePostgresUrl } from "@/lib/postgres";

export const runtime = "nodejs";

type AnalyticsPayload = {
  eventName?: string;
  path?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  pageTitle?: string;
};

type PostgresError = {
  code?: string;
};

const globalForAnalyticsDb = globalThis as typeof globalThis & {
  analyticsDbPool?: Pool;
};

function getAnalyticsDbPool(connectionString: string) {
  if (!globalForAnalyticsDb.analyticsDbPool) {
    const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");

    globalForAnalyticsDb.analyticsDbPool = new Pool({
      connectionString,
      ssl: isLocal ? undefined : { rejectUnauthorized: false },
    });
  }

  return globalForAnalyticsDb.analyticsDbPool;
}

function isMissingTableError(error: unknown) {
  if (!error || typeof error !== "object") {
    return false;
  }

  return (error as PostgresError).code === "42P01";
}

function sanitize(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function normalizePath(value: unknown) {
  const path = sanitize(value, 500);

  if (!path || !path.startsWith("/")) {
    return "/";
  }

  return path;
}

function normalizeEventName(value: unknown) {
  const eventName = sanitize(value, 50);
  return eventName || "page_view";
}

async function createAnalyticsEventsTable(pool: Pool) {
  await pool.query(`
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
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at
    ON public.analytics_events (created_at DESC)
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS idx_analytics_events_path
    ON public.analytics_events (path)
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS idx_analytics_events_event_name
    ON public.analytics_events (event_name)
  `);
}

async function insertAnalyticsEvent(pool: Pool, payload: AnalyticsPayload, userAgent: string) {
  await pool.query(
    `
      INSERT INTO public.analytics_events (
        event_name,
        path,
        referrer,
        utm_source,
        utm_medium,
        utm_campaign,
        page_title,
        user_agent
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `,
    [
      normalizeEventName(payload.eventName),
      normalizePath(payload.path),
      sanitize(payload.referrer, 1000) || null,
      sanitize(payload.utmSource, 200) || null,
      sanitize(payload.utmMedium, 200) || null,
      sanitize(payload.utmCampaign, 200) || null,
      sanitize(payload.pageTitle, 300) || null,
      sanitize(userAgent, 1000) || null,
    ]
  );
}

export async function POST(request: Request) {
  const connectionString = ensurePostgresUrl();

  if (!connectionString) {
    return new NextResponse(null, { status: 204 });
  }

  const pool = getAnalyticsDbPool(connectionString);

  let payload: AnalyticsPayload = {};

  try {
    payload = (await request.json()) as AnalyticsPayload;
  } catch {
    payload = {};
  }

  try {
    await insertAnalyticsEvent(pool, payload, request.headers.get("user-agent") ?? "");
  } catch (error) {
    if (isMissingTableError(error)) {
      try {
        await createAnalyticsEventsTable(pool);
        await insertAnalyticsEvent(pool, payload, request.headers.get("user-agent") ?? "");
      } catch (retryError) {
        console.error("[analytics] failed to record event after creating table", retryError);
      }
    } else {
      console.error("[analytics] failed to record event", error);
    }
  }

  return new NextResponse(null, { status: 204 });
}
