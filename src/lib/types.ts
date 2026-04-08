import { getArticleBySlug } from "./api";

export type ArticleContentSectionProps = {
  article: Awaited<ReturnType<typeof getArticleBySlug>>;
};
