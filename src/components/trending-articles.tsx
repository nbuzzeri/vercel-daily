import ArticleCard from "@/components/article-card";
import { mockArticles } from "@/lib/articles";

export default function TrendingArticles() {
  const trendingArticles = mockArticles.slice(0, 3);

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-16">
      <h2 className="text-2xl font-semibold">Trending Articles</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trendingArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
