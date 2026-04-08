import type { Metadata } from "next";
import { Suspense } from "react";

import BreakingNewsBanner from "@/components/breaking-news-banner";
import FeaturedArticles from "@/components/featured-articles";
import BreakingNewsBannerFallback from "@/components/fallbacks/breaking-news-banner-fallback";
import FeaturedArticlesFallback from "@/components/fallbacks/featured-article-fallback";
import HeroFallback from "@/components/fallbacks/hero-fallback";
import Hero from "@/components/hero";

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

      <Suspense fallback={<HeroFallback />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<FeaturedArticlesFallback />}>
        <FeaturedArticles />
      </Suspense>
    </div>
  );
}
