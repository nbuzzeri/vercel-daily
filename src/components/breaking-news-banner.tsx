import Link from "next/link";

import { getBreakingNews } from "@/lib/api";

function formatCategoryLabel(category: string) {
  return category.replace(/-/g, " ");
}

export default async function BreakingNewsBanner() {
  const breakingNews = await getBreakingNews();

  return (
    <aside className="border-b bg-red-600 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em]">
            Breaking News
          </span>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold sm:text-base">
              {breakingNews.headline}
            </p>

            <p className="text-xs uppercase tracking-wide text-red-100 sm:text-sm">
              {formatCategoryLabel(breakingNews.category)}
            </p>
          </div>
        </div>

        <Link
          href={`/articles/${breakingNews.articleId}`}
          className="shrink-0 text-xs font-semibold uppercase tracking-wide underline underline-offset-4 transition hover:text-red-100"
        >
          Read story
        </Link>
      </div>
    </aside>
  );
}
