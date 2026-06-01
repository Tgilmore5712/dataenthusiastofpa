import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Pool } from "pg";
import { ensurePostgresUrl } from "@/lib/postgres";

export const runtime = "nodejs";

type PostgresError = {
  code?: string;
};

const globalForContactDb = globalThis as typeof globalThis & {
  contactDbPool?: Pool;
  contactMailerTransport?: nodemailer.Transporter;
};

type InquiryPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type MailSettings = {
  host: string;
  port: number;
  from: string;
  alertTo: string;
  user: string;
  pass: string;
  sendConfirmation: boolean;
  confirmationFrom: string;
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

function getMailSettings(): MailSettings | null {
  const host = process.env.SMTP_HOST?.trim() ?? "";
  const portRaw = process.env.SMTP_PORT?.trim() ?? "";
  const from = process.env.SMTP_FROM?.trim() ?? "";
  const alertTo = process.env.CONTACT_ALERT_EMAIL?.trim() ?? "";
  const user = process.env.SMTP_USER?.trim() ?? "";
  const pass = process.env.SMTP_PASS?.trim() ?? "";
  const sendConfirmation = (process.env.CONTACT_CONFIRMATION_ENABLED ?? "false").toLowerCase() === "true";
  const confirmationFrom = process.env.CONTACT_CONFIRMATION_FROM?.trim() || from;

  if (!host || !portRaw || !from || !alertTo) {
    return null;
  }

  const port = Number.parseInt(portRaw, 10);

  if (!Number.isFinite(port) || port <= 0) {
    return null;
  }

  return {
    host,
    port,
    from,
    alertTo,
    user,
    pass,
    sendConfirmation,
    confirmationFrom,
  };
}

function getMailerTransport(settings: MailSettings) {
  if (!globalForContactDb.contactMailerTransport) {
    const hasAuth = Boolean(settings.user && settings.pass);

    globalForContactDb.contactMailerTransport = nodemailer.createTransport({
      host: settings.host,
      port: settings.port,
      secure: settings.port === 465,
      ...(hasAuth ? { auth: { user: settings.user, pass: settings.pass } } : {}),
    });
  }

  return globalForContactDb.contactMailerTransport;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
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

async function createAnalyticsEventsTable() {
  const connectionString = ensurePostgresUrl();
  const pool = getContactDbPool(connectionString);

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

async function insertInquiryAnalyticsEvent() {
  const connectionString = ensurePostgresUrl();
  const pool = getContactDbPool(connectionString);

  await pool.query(
    `
      INSERT INTO public.analytics_events (event_name, path)
      VALUES ($1, $2)
    `,
    ["inquiry_submitted", "/contact"]
  );
}

async function recordInquiryAnalyticsEvent() {
  try {
    await insertInquiryAnalyticsEvent();
  } catch (analyticsError) {
    if (isMissingTableError(analyticsError)) {
      try {
        await createAnalyticsEventsTable();
        await insertInquiryAnalyticsEvent();
      } catch (analyticsRetryError) {
        console.error("[contact-form] Failed to record inquiry analytics event", analyticsRetryError);
      }
    } else {
      console.error("[contact-form] Failed to record inquiry analytics event", analyticsError);
    }
  }
}

async function sendInquiryNotifications(payload: InquiryPayload) {
  const settings = getMailSettings();

  if (!settings) {
    return;
  }

  try {
    const transport = getMailerTransport(settings);
    const companyLine = payload.company ? `Company: ${payload.company}\n` : "";

    await transport.sendMail({
      from: settings.from,
      to: settings.alertTo,
      replyTo: payload.email,
      subject: `New inquiry from ${payload.name}`,
      text: `New inquiry received.\n\nName: ${payload.name}\nEmail: ${payload.email}\n${companyLine}\nMessage:\n${payload.message}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        ${payload.company ? `<p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.message).replaceAll("\n", "<br/>")}</p>
      `,
    });

    if (settings.sendConfirmation) {
      await transport.sendMail({
        from: settings.confirmationFrom,
        to: payload.email,
        subject: "We received your inquiry",
        text: `Hi ${payload.name},\n\nThanks for contacting Data Enthusiast of PA Business Solutions. We received your inquiry and will get back to you shortly.\n\nBest,\nData Enthusiast of PA Business Solutions`,
      });
    }
  } catch (mailError) {
    console.error("[contact-form] Failed to send inquiry email notifications", mailError);
  }
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
    await recordInquiryAnalyticsEvent();
    await sendInquiryNotifications({ name, email, company, message });
  } catch (error) {
    if (isMissingTableError(error)) {
      try {
        await createContactInquiriesTable();
        await insertInquiry(name, email, company, message);
        await recordInquiryAnalyticsEvent();
        await sendInquiryNotifications({ name, email, company, message });
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
