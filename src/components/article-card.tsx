import Link from "next/link";
import type { Article } from "@/lib/articles";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block rounded-lg border border-white/10 p-4 transition hover:bg-white/5"
    >
      <div>
        <p className="text-sm text-white/60">{article.category}</p>

        <h3 className="mt-2 text-lg font-semibold">{article.title}</h3>

        <p className="mt-2 text-sm text-white/70">{article.excerpt}</p>

        <p className="mt-4 text-xs text-white/50">{article.publishedAt}</p>
      </div>
    </Link>
  );
}
