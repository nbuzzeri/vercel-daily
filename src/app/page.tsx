import BreakingNewsBanner from "@/components/breaking-news-banner";
import ArticleCard from "@/components/article-card";

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

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Featured Articles
          </h2>
          <p className="text-sm text-white/60">Placeholder content</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </section>
    </div>
  );
}
