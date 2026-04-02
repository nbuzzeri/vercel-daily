type ArticlePageProps = {
  params: Promise<{
    param: string;
  }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { param } = await params;

  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-16">
      <h1 className="text-3xl font-semibold">{param}</h1>
      <p className="text-white/70">
        This is the placeholder article detail page.
      </p>
    </section>
  );
}