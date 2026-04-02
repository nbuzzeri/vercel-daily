import { notFound } from "next/navigation";
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

  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-16">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-white/60">{article.category}</p>

        <h1 className="text-3xl font-semibold leading-tight">
          {article.title}
        </h1>

        <p className="text-sm text-white/50">{article.publishedAt}</p>
      </div>

      <div className="h-64 w-full bg-white/10 flex items-center justify-center">
        <p className="text-sm text-white/50">image</p>
      </div>

      <div className="flex flex-col gap-4 text-white/80 leading-7">
        <p>{article.content}</p>
      </div>
    </article>
  );
}
