import { notFound } from "next/navigation";
import { mockArticles } from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{
    param: string;
  }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { param } = await params;

  const article = mockArticles.find((item) => item.slug === param);

  if (!article) {
    notFound();
  }

  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-16">
      <p className="text-sm text-white/60">{article.category}</p>

      <h1 className="text-3xl font-semibold">{article.title}</h1>

      <p className="text-sm text-white/50">{article.publishedAt}</p>

      <p className="text-white/70">{article.excerpt}</p>
    </section>
  );
}
