export type ArticleCategory =
  | "changelog"
  | "engineering"
  | "customers"
  | "company-news"
  | "community";

export type Author = {
  name: string;
  avatar: string;
};

export type ParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type HeadingBlock = {
  type: "heading";
  level: 2 | 3;
  text: string;
};

export type BlockquoteBlock = {
  type: "blockquote";
  text: string;
};

export type UnorderedListBlock = {
  type: "unordered-list";
  items: string[];
};

export type OrderedListBlock = {
  type: "ordered-list";
  items: string[];
};

export type ImageBlock = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
};

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | BlockquoteBlock
  | UnorderedListBlock
  | OrderedListBlock
  | ImageBlock;

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: ContentBlock[];
  category: ArticleCategory;
  author: Author;
  image: string;
  publishedAt: string;
  featured: boolean;
  tags: string[];
};

export type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type ApiSuccess<T> = {
  success: true;
  data: T;
  meta?: {
    pagination?: PaginationMeta;
  };
};

export type ApiError = {
  success: false;
  error: {
    code: string;
    message: string;
  };
};

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export type BreakingNews = {
  id: string;
  headline: string;
  summary: string;
  articleId: string;
  category: ArticleCategory;
  publishedAt: string;
  urgent: boolean;
};

export function isArticleCategory(value: string): value is ArticleCategory {
  return [
    "changelog",
    "engineering",
    "customers",
    "company-news",
    "community",
  ].includes(value);
}
