export default function TrendingArticlesFallback() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-16">
      <h2 className="text-2xl font-semibold">Trending Articles</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-white/10"
          >
            <div className="aspect-video animate-pulse bg-white/10" />
            <div className="p-4">
              <div className="h-4 w-20 animate-pulse rounded bg-white/10" />
              <div className="mt-3 h-6 w-3/4 animate-pulse rounded bg-white/10" />
              <div className="mt-3 h-4 w-full animate-pulse rounded bg-white/10" />
              <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-white/10" />
              <div className="mt-4 h-3 w-24 animate-pulse rounded bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}