import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export const runtime = "nodejs";

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

    await sql`
      INSERT INTO contact_inquiries (name, email, company, message)
      VALUES (${name}, ${email}, ${company || null}, ${message})
    `;
  } catch (error) {
    console.error("[contact-form] Failed to save inquiry", error);
    return NextResponse.redirect(new URL("/contact?status=db-error", request.url), 303);
  }

  return NextResponse.redirect(new URL("/contact?status=success", request.url), 303);
}
