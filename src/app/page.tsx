import type { Metadata } from "next";

import BreakingNewsBanner from "@/components/breaking-news-banner";
import FeaturedArticles from "@/components/featured-articles";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Browse featured stories, breaking news, and the latest updates from Vercel Daily.",
  openGraph: {
    title: "Vercel Daily",
    description:
      "Browse featured stories, breaking news, and the latest updates from Vercel Daily.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <div>
      <BreakingNewsBanner />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60">
            Daily news for the modern web
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Vercel Daily
          </h1>

          <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eius?
          </p>
        </div>
      </section>

      <FeaturedArticles />
    </div>
  );
}
