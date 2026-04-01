import ArticleCard from "@/components/article-card";

const featuredArticles = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "engineering",
    publishedAt: "April 1, 2026",
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "company-news",
    publishedAt: "April 1, 2026",
  },
  {
    id: "3",
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "changelog",
    publishedAt: "April 1, 2026",
  },
  {
    id: "4",
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "customers",
    publishedAt: "April 1, 2026",
  },
  {
    id: "5",
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "community",
    publishedAt: "April 1, 2026",
  },
  {
    id: "6",
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "engineering",
    publishedAt: "April 1, 2026",
  },
];

export default function FeaturedArticles() {
  return (
    <section className="flex flex-col gap-4 mx-auto max-w-6xl px-4 py-16">
      <h2>Featured Articles</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
