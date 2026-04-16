"use client";

import { useMemo, useState } from "react";

type InquiryFollowUpDraftProps = {
  name: string;
  email: string;
  company: string | null;
  message: string;
};

function buildDraft({ name, company, message }: Omit<InquiryFollowUpDraftProps, "email">) {
  const safeCompany = company?.trim() ? company.trim() : "your team";
  const trimmedMessage = message.trim();

  return [
    `Hi ${name},`,
    "",
    `Thank you for reaching out about ${safeCompany}. I reviewed your note and wanted to follow up with a practical next step.`,
    "",
    "From your message:",
    `${trimmedMessage || "No message provided."}`,
    "",
    "If useful, we can schedule a 20-minute discovery call to identify:",
    "- The highest-value opportunities to improve revenue and efficiency",
    "- Which wins can be delivered quickly with your current team",
    "- A clear enablement plan so your team can own the solution long term",
    "",
    "If you share two times that work for you this week, I will confirm one.",
    "",
    "Best,",
    "Todd Gilmore",
    "Data Enthusiast of PA",
  ].join("\n");
}

export function InquiryFollowUpDraft({ name, email, company, message }: InquiryFollowUpDraftProps) {
  const [showDraft, setShowDraft] = useState(false);
  const [copied, setCopied] = useState(false);

  const draft = useMemo(() => buildDraft({ name, company, message }), [name, company, message]);
  const subject = `Quick follow-up for ${company?.trim() || "your team"}`;
  const mailtoHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
        onClick={() => setShowDraft((current) => !current)}
      >
        {showDraft ? "Hide Draft" : "Generate Draft"}
      </button>

      {showDraft ? (
        <>
          <textarea readOnly value={draft} className="min-h-40 w-80 rounded-md border border-slate-300 bg-slate-50 p-2 text-xs text-slate-800" />
          <div className="flex gap-2">
            <button type="button" className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800" onClick={handleCopy}>
              {copied ? "Copied" : "Copy Draft"}
            </button>
            <a href={mailtoHref} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100">
              Open Email
            </a>
          </div>
        </>
      ) : null}
    </div>
  );
}