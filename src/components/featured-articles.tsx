import ArticleCard from "@/components/article-card";
import type { Article } from "@/lib/articles";

const featuredArticles: Article[] = [
  {
    id: "1",
    slug: "lorem-1",
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "engineering",
    image: "/placeholder.jpg",
    publishedAt: "April 1, 2026",
  },
  {
    id: "2",
    slug: "lorem-2",
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "company-news",
    image: "/placeholder.jpg",
    publishedAt: "April 1, 2026",
  },
  {
    id: "3",
    slug: "lorem-3",
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "changelog",
    image: "/placeholder.jpg",
    publishedAt: "April 1, 2026",
  },
  {
    id: "4",
    slug: "lorem-4",
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "customers",
    image: "/placeholder.jpg",
    publishedAt: "April 1, 2026",
  },
  {
    id: "5",
    slug: "lorem-5",
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "community",
    image: "/placeholder.jpg",
    publishedAt: "April 1, 2026",
  },
  {
    id: "6",
    slug: "lorem-6",
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "engineering",
    image: "/placeholder.jpg",
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
