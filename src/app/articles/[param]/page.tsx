import { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import ArticleContent from "@/components/article-content";
import PaywallCTA from "@/components/paywall-cta";
import TrendingArticles from "@/components/trending-articles";
import { getArticleBySlug } from "@/lib/api";
import { formatPublishedDate, imageSizes } from "@/lib/media";

type ArticlePageProps = {
  params: Promise<{
    param: string;
  }>;
};

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { param } = await params;
  const article = await getArticleBySlug(param);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/articles/${article.slug}`,
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { param } = await params;
  const article = await getArticleBySlug(param);

  if (!article) {
    notFound();
  }

  const cookieStore = await cookies();
  const isSubscribed =
    cookieStore.get("vercel-daily-subscribed")?.value === "true";

  return (
    <>
      <article className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-16">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-white/60">{article.category}</p>

          <h1 className="text-3xl font-semibold">{article.title}</h1>

          <p className="text-sm text-white/50">
            {formatPublishedDate(article.publishedAt)}
          </p>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes={imageSizes.articleHero}
            className="object-cover"
            priority
          />
        </div>

        {isSubscribed ? (
          <div className="flex flex-col gap-4">
            <p className="text-lg text-white/70">{article.excerpt}</p>
            <ArticleContent content={article.content} />
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-white/80">
              <p className="text-lg text-white/70">{article.excerpt}</p>
            </div>

            <PaywallCTA />
          </div>
        )}
      </article>

      <TrendingArticles />
    </>
  );
}
