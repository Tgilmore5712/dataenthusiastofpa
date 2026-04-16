import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { ensurePostgresUrl } from "@/lib/postgres";

export const runtime = "nodejs";

type PostgresError = {
  code?: string;
};

function isMissingTableError(error: unknown) {
  if (!error || typeof error !== "object") {
    return false;
  }

  return (error as PostgresError).code === "42P01";
}

async function createContactInquiriesTable() {
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
}

async function insertInquiry(name: string, email: string, company: string, message: string) {
  await sql`
    INSERT INTO contact_inquiries (name, email, company, message)
    VALUES (${name}, ${email}, ${company || null}, ${message})
  `;
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
        console.error("[contact-form] Failed to save inquiry after creating table", retryError);
        return NextResponse.redirect(new URL("/contact?status=db-error", request.url), 303);
      }

      return NextResponse.redirect(new URL("/contact?status=success", request.url), 303);
    }

    console.error("[contact-form] Failed to save inquiry", error);
    return NextResponse.redirect(new URL("/contact?status=db-error", request.url), 303);
  }

  return NextResponse.redirect(new URL("/contact?status=success", request.url), 303);
}
