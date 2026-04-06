import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import PaywallCTA from "@/components/paywall-cta";
import TrendingArticles from "@/components/trending-articles";
import { getArticleBySlug } from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{
    param: string;
  }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { param } = await params;
  const article = getArticleBySlug(param);

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

          <h1 className="text-3xl font-semibold leading-tight">
            {article.title}
          </h1>

          <p className="text-sm text-white/50">{article.publishedAt}</p>
        </div>

        <div className="flex h-64 w-full items-center justify-center bg-white/10">
          <p className="text-sm text-white/50">image</p>
        </div>

        {isSubscribed ? (
          <div className="flex flex-col gap-4 leading-7 text-white/80">
            <p className="text-lg text-white/70">{article.excerpt}</p>
            <p>{article.content}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 leading-7 text-white/80">
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
