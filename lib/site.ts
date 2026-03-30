export const siteConfig = {
  name: "Data Enthusiast of PA Business Solutions",
  legalName: "Data Enthusiast of PA Business Solutions LLC",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.yourdomain.com",
  phone: "717-802-9344",
  email: "Todd@dataenthusiastofpa.com",
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
    "Data Enthusiast of PA helps companies improve operations, modernize technology, and drive measurable business outcomes with strategy, engineering, and managed solutions.",
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
