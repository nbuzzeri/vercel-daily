import ArticleCard from "@/components/article-card";
import SearchForm from "@/components/search-form";
import { mockArticles } from "@/lib/articles";

export default function SearchPage() {
  const searchResults = mockArticles.slice(0, 5);

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">
          Search
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          Search Articles
        </h1>

        <p className="text-white/70">
          Browse recent stories and filter by keyword or category.
        </p>
      </div>

      <SearchForm />

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Results</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {searchResults.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
