export default function ArticlePageShellFallback() {
  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-16">
      <div className="flex flex-col gap-2">
        <div className="h-4 w-24 animate-pulse rounded bg-white/10" />
        <div className="h-10 w-3/4 animate-pulse rounded bg-white/10" />
        <div className="h-4 w-48 animate-pulse rounded bg-white/10" />
      </div>

      <div className="aspect-video animate-pulse rounded-lg bg-white/10" />

      <div className="flex flex-col gap-4">
        <div className="h-5 w-full animate-pulse rounded bg-white/10" />
        <div className="h-5 w-5/6 animate-pulse rounded bg-white/10" />
        <div className="h-5 w-2/3 animate-pulse rounded bg-white/10" />
      </div>
    </article>
  );
}
