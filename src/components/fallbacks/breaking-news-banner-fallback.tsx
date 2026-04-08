export default function BreakingNewsBannerFallback() {
  return (
    <aside className="border-b bg-red-600 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em]">
            Breaking News
          </span>

          <div className="min-w-0">
            <div className="h-4 w-64 animate-pulse rounded bg-white/20" />
            <div className="mt-2 h-3 w-24 animate-pulse rounded bg-white/20" />
          </div>
        </div>

        <span className="shrink-0 text-xs font-semibold uppercase tracking-wide underline underline-offset-4">
          Read story
        </span>
      </div>
    </aside>
  );
}
