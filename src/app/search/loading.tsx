export default function SearchLoading() {
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

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="h-12.5 w-full animate-pulse rounded-lg bg-white/10" />
        <div className="h-12.5 w-full animate-pulse rounded-lg bg-white/10 md:max-w-55" />
        <div className="h-12.5 w-full animate-pulse rounded-lg bg-white/10 md:max-w-30" />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Loading Results</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-white/10"
            >
              <div className="aspect-video animate-pulse bg-white/10" />
              <div className="flex flex-col gap-3 p-4">
                <div className="h-4 w-24 animate-pulse rounded bg-white/10" />
                <div className="h-6 w-3/4 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-full animate-pulse rounded bg-white/10" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-white/10" />
                <div className="h-3 w-20 animate-pulse rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
