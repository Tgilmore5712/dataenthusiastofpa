import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const canonical = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: keywords ?? siteConfig.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [siteConfig.social.linkedin],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/office.jpg`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    url: siteConfig.url,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Business and Technology Solutions",
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: "United States",
    description:
      "Strategy, engineering, and managed services that improve business performance and operational resilience.",
  };
}
