import type { Metadata } from "next";
import { Suspense } from "react";

import BreakingNewsBanner from "@/components/breaking-news-banner";
import FeaturedArticles from "@/components/featured-articles";
import BreakingNewsBannerFallback from "@/components/fallbacks/breaking-news-banner-fallback";
import FeaturedArticlesFallback from "@/components/fallbacks/featured-article-fallback";

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
      <Suspense fallback={<BreakingNewsBannerFallback />}>
        <BreakingNewsBanner />
      </Suspense>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60">
            Daily news for the modern web
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Vercel Daily
          </h1>
        </div>
      </section>

      <Suspense fallback={<FeaturedArticlesFallback />}>
        <FeaturedArticles />
      </Suspense>
    </div>
  );
}
