import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.defaultTitle}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.defaultTitle}`,
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.defaultTitle}`,
    description: siteConfig.defaultDescription,
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon", sizes: "16x16 32x32 48x48 64x64 128x128 256x256" }],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  manifest: "/site.webmanifest",
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-100 text-slate-900">
        <div className="min-h-full bg-[radial-gradient(circle_at_top,_#dbeafe_0%,_#f8fafc_45%,_#f1f5f9_100%)]">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
