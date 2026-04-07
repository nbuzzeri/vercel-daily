import "server-only";

import type {
  ApiResponse,
  Article,
  ArticleCategory,
  BreakingNews,
} from "@/lib/articles";

const API_BASE_URL = "https://vercel-daily-news-api.vercel.app/api";

function getBypassToken(): string {
  const token = process.env.VERCEL_DAILY_BYPASS_TOKEN;

  if (!token) {
    throw new Error("Missing VERCEL_DAILY_BYPASS_TOKEN environment variable");
  }

  return token;
}

const BYPASS_TOKEN = getBypassToken();

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "x-vercel-protection-bypass": BYPASS_TOKEN,
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status} ${response.statusText}`,
    );
  }

  const json = (await response.json()) as ApiResponse<T>;

  if (!json.success) {
    throw new Error(json.error.message);
  }

  return json.data;
}

type SearchArticlesParams = {
  query?: string;
  category?: ArticleCategory;
  featured?: boolean;
  limit?: number;
  page?: number;
};

export async function getFeaturedArticles() {
  return apiFetch<Article[]>("/articles?featured=true&limit=6");
}

export async function getArticleBySlug(slug: string) {
  return apiFetch<Article>(`/articles/${slug}`);
}

export async function getTrendingArticles() {
  return apiFetch<Article[]>("/articles/trending");
}

export async function getBreakingNews() {
  return apiFetch<BreakingNews>("/breaking-news");
}

export async function searchArticles({
  query,
  category,
  featured,
  limit = 5,
  page = 1,
}: SearchArticlesParams) {
  const params = new URLSearchParams();

  params.set("page", String(page));
  params.set("limit", String(limit));

  if (query) {
    params.set("search", query);
  }

  if (category) {
    params.set("category", category);
  }

  if (typeof featured === "boolean") {
    params.set("featured", String(featured));
  }

  return apiFetch<Article[]>(`/articles?${params.toString()}`);
}
