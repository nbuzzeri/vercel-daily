export type ArticleCategory =
  | "changelog"
  | "engineering"
  | "customers"
  | "company-news"
  | "community";

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  image: string;
  publishedAt: string;
};

export const mockArticles: Article[] = [
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
