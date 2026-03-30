import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://abhinavvp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abhinav VP — Senior Software Engineer",
    template: "%s | Abhinav VP",
  },
  description:
    "Senior software engineer with 5+ years of experience building scalable web applications. Currently building MakeBetterResume, an AI-powered resume builder.",
  keywords: [
    "Abhinav VP",
    "senior software engineer",
    "frontend engineer",
    "React",
    "Next.js",
    "TypeScript",
    "web development",
    "Bangalore",
    "India",
    "MakeBetterResume",
    "Scispace",
  ],
  authors: [{ name: "Abhinav VP", url: siteUrl }],
  creator: "Abhinav VP",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abhinav VP",
    title: "Abhinav VP — Senior Software Engineer",
    description:
      "Senior software engineer with 5+ years of experience building scalable web applications. Currently building MakeBetterResume, an AI-powered resume builder.",
  },
  twitter: {
    card: "summary",
    site: "@abhi_vp_",
    creator: "@abhi_vp_",
    title: "Abhinav VP — Senior Software Engineer",
    description:
      "Senior software engineer with 5+ years of experience building scalable web applications. Currently building MakeBetterResume, an AI-powered resume builder.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhinav VP",
  url: siteUrl,
  jobTitle: "Senior Software Engineer",
  description:
    "Senior software engineer with 5+ years of experience building scalable web applications.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  sameAs: [
    "https://x.com/abhi_vp_",
    "https://www.linkedin.com/in/abhinavvp/",
    "https://github.com/abhi12123",
  ],
  knowsAbout: ["React", "Next.js", "TypeScript", "Web Development", "AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
