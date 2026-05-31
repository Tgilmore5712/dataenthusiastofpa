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
  const sameAs = [siteConfig.social.linkedin].filter(Boolean);
  const logoUrl = `${siteConfig.url}${siteConfig.logoPath}`;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: logoUrl,
    image: logoUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.serviceAreas,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: siteConfig.serviceAreas,
        availableLanguage: ["en"],
      },
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.logoPath}`,
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.countryCode,
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        availableLanguage: ["en"],
      },
    ],
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
    "@id": `${siteConfig.url}/services#primary-service`,
    name: "Workflow Automation and Custom Software Development",
    serviceType: "Workflow Automation and Software Development",
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: siteConfig.serviceAreas,
    description:
      "Automation workflows, custom web and mobile app development, Procore solutions, and QuickBooks Online integrations.",
  };
}
