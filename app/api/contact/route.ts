import { NextResponse } from "next/server";
import { Pool } from "pg";
import { ensurePostgresUrl } from "@/lib/postgres";

export const runtime = "nodejs";

type PostgresError = {
  code?: string;
};

const globalForContactDb = globalThis as typeof globalThis & {
  contactDbPool?: Pool;
};

function getContactDbPool(connectionString: string) {
  if (!globalForContactDb.contactDbPool) {
    const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");

    globalForContactDb.contactDbPool = new Pool({
      connectionString,
      ssl: isLocal ? undefined : { rejectUnauthorized: false },
    });
  }

  return globalForContactDb.contactDbPool;
}

function isMissingTableError(error: unknown) {
  if (!error || typeof error !== "object") {
    return false;
  }

  return (error as PostgresError).code === "42P01";
}

function getPostgresErrorCode(error: unknown) {
  if (!error || typeof error !== "object") {
    return "";
  }

  return (error as PostgresError).code ?? "";
}

function getFailureStatusFromCode(code: string) {
  if (code === "42P01") {
    return "missing-table";
  }

  if (code === "42501") {
    return "permission-error";
  }

  if (code.startsWith("28")) {
    return "auth-error";
  }

  return "db-error";
}

async function createContactInquiriesTable() {
  const connectionString = ensurePostgresUrl();
  const pool = getContactDbPool(connectionString);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS public.contact_inquiries (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
}

async function insertInquiry(name: string, email: string, company: string, message: string) {
  const connectionString = ensurePostgresUrl();
  const pool = getContactDbPool(connectionString);

  await pool.query(
    `
      INSERT INTO public.contact_inquiries (name, email, company, message)
      VALUES ($1, $2, $3, $4)
    `,
    [name, email, company || null, message]
  );
}

function readTextValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = readTextValue(formData, "name");
  const email = readTextValue(formData, "email");
  const company = readTextValue(formData, "company");
  const message = readTextValue(formData, "message");

  if (!name || !email || !message) {
    return NextResponse.redirect(new URL("/contact?status=error", request.url), 303);
  }

  const connectionString = ensurePostgresUrl();

  if (!connectionString) {
    console.error("[contact-form] Missing database connection string");
    return NextResponse.redirect(new URL("/contact?status=config-error", request.url), 303);
  }

  try {
    await insertInquiry(name, email, company, message);
  } catch (error) {
    if (isMissingTableError(error)) {
      try {
        await createContactInquiriesTable();
        await insertInquiry(name, email, company, message);
      } catch (retryError) {
        const retryCode = getPostgresErrorCode(retryError);
        console.error("[contact-form] Failed to save inquiry after creating table", retryError);
        return NextResponse.redirect(new URL(`/contact?status=${getFailureStatusFromCode(retryCode)}`, request.url), 303);
      }

      return NextResponse.redirect(new URL("/contact?status=success", request.url), 303);
    }

    const code = getPostgresErrorCode(error);
    console.error("[contact-form] Failed to save inquiry", error);
    return NextResponse.redirect(new URL(`/contact?status=${getFailureStatusFromCode(code)}`, request.url), 303);
  }

  return NextResponse.redirect(new URL("/contact?status=success", request.url), 303);
}
