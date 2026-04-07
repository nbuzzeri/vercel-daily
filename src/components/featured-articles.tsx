import ArticleCard from "@/components/article-card";
import { getFeaturedArticles } from "@/lib/api";

export default async function FeaturedArticles() {
  const featuredArticles = await getFeaturedArticles();

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-16">
      <h2>Featured Articles</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
