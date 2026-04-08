import { ArticleContentSectionProps } from "@/lib/types";

export default function ArticleContentFallback({
  article,
}: ArticleContentSectionProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 text-white/80">
        <p className="text-lg text-white/70">{article.excerpt}</p>
      </div>

      <div className="rounded-xl border border-white/10 p-6">
        <div className="h-8 w-56 animate-pulse rounded bg-white/10" />
        <div className="mt-4 h-4 w-full animate-pulse rounded bg-white/10" />
        <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-white/10" />
        <div className="mt-6 h-11 w-32 animate-pulse rounded-full bg-white/10" />
      </div>
    </div>
  );
}
