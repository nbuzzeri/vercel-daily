type ArticleCardProps = {
  article: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    publishedAt: string;
  };
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="rounded-lg border border-white/10 p-4">
      <p className="text-sm text-white/60">{article.category}</p>

      <h3 className="mt-2 text-lg font-semibold">{article.title}</h3>

      <p className="mt-2 text-sm text-white/70">{article.excerpt}</p>

      <p className="mt-4 text-xs text-white/50">{article.publishedAt}</p>
    </div>
  );
}
