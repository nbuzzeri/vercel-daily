import Image from "next/image";
import Link from "next/link";

import type { Article } from "@/lib/articles";
import { formatPublishedDate, imageSizes } from "@/lib/media";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block overflow-hidden rounded-lg border border-white/10 transition hover:bg-white/5"
    >
      <div className="relative aspect-video w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes={imageSizes.card}
          className="object-cover"
          loading="eager"
        />
      </div>

      <div className="p-4">
        <p className="text-sm text-white/60">{article.category}</p>

        <h3 className="mt-2 text-lg font-semibold">{article.title}</h3>

        <p className="mt-2 text-sm text-white/70">{article.excerpt}</p>

        <p className="mt-4 text-xs text-white/50">
          {formatPublishedDate(article.publishedAt)}
        </p>
      </div>
    </Link>
  );
}
