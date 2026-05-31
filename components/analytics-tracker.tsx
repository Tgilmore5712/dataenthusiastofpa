"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type AnalyticsPayload = {
  eventName: "page_view";
  path: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  pageTitle: string;
};

function toPayload(pathname: string, searchParams: URLSearchParams): AnalyticsPayload {
  return {
    eventName: "page_view",
    path: pathname || "/",
    referrer: document.referrer || "",
    utmSource: searchParams.get("utm_source") ?? "",
    utmMedium: searchParams.get("utm_medium") ?? "",
    utmCampaign: searchParams.get("utm_campaign") ?? "",
    pageTitle: document.title || "",
  };
}

export function AnalyticsTracker() {
  const pathname = usePathname();
  const lastTrackedPathRef = useRef("");

  useEffect(() => {
    if (!pathname) {
      return;
    }

    if (lastTrackedPathRef.current === pathname) {
      return;
    }

    lastTrackedPathRef.current = pathname;

    const currentSearchParams = new URLSearchParams(window.location.search);
    const payload = toPayload(pathname, currentSearchParams);
    const body = JSON.stringify(payload);

    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/analytics", body);
      return;
    }

    void fetch("/api/analytics", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body,
      keepalive: true,
    });
  }, [pathname]);

  return null;
}
