import ArticleCard from "@/components/article-card";

export default function FeaturedArticles() {
  return (
    <section className="flex flex-col gap-4 mx-auto max-w-6xl px-4 py-16">
      <h2>Featured Articles</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </section>
  );
}
