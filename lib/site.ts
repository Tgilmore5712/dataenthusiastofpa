export const siteConfig = {
  name: "Data of PA Business Solutions",
  legalName: "Data of PA Business Solutions LLC",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.yourdomain.com",
  phone: "+1-800-555-0199",
  email: "hello@yourdomain.com",
  address: {
    streetAddress: "100 Market Street",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    postalCode: "19106",
    addressCountry: "US",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/yourcompany",
  },
  defaultTitle: "Business Solutions for Growth, Efficiency, and Scale",
  defaultDescription:
    "Data of PA helps companies improve operations, modernize technology, and drive measurable business outcomes with strategy, engineering, and managed solutions.",
  keywords: [
    "business solutions",
    "technology consulting",
    "digital transformation",
    "managed services",
    "process automation",
    "enterprise technology",
    "business strategy",
    "software solutions",
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];
