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