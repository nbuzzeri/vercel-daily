import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeaderFallback from "../components/fallbacks/header-fallback";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vercel Daily",
    template: "%s | Vercel Daily",
  },
  description:
    "A news publication website using Next.js 16 to demonstrate my understanding of modern React Server Component patterns.",
  openGraph: {
    type: "website",
    siteName: "Vercel Daily",
    title: "Vercel Daily",
    description:
      "A news publication website using Next.js 16 to demonstrate my understanding of modern React Server Component patterns.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-screen bg-black text-white">
        <div className="flex min-h-screen flex-col">
          <Suspense fallback={<HeaderFallback />}>
            <Header />
          </Suspense>

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
