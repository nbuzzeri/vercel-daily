import "server-only";
import { cacheLife } from "next/cache";

import type {
  ApiResponse,
  Article,
  ArticleCategory,
  BreakingNews,
} from "@/lib/articles";

function getApiBaseUrl(): string {
  const url = process.env.API_BASE_URL;

  if (!url) {
    throw new Error("Missing API_BASE_URL environment variable");
  }

  return url;
}

function getBypassToken(): string {
  const token = process.env.VERCEL_DAILY_BYPASS_TOKEN;

  if (!token) {
    throw new Error("Missing VERCEL_DAILY_BYPASS_TOKEN environment variable");
  }

  return token;
}

const API_BASE_URL = getApiBaseUrl();
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
  "use cache";
  cacheLife("minutes");

  return apiFetch<Article[]>("/articles?featured=true&limit=6");
}

export async function getArticleBySlug(slug: string) {
  "use cache";
  cacheLife("hours");

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

export type SubscriptionStatus = {
  token: string;
  status: "active" | "inactive";
  subscribedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export async function createSubscription() {
  const response = await fetch(`${API_BASE_URL}/subscription/create`, {
    method: "POST",
    headers: {
      "x-vercel-protection-bypass": BYPASS_TOKEN,
    },
  });

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status} ${response.statusText}`,
    );
  }

  const token = response.headers.get("x-subscription-token");

  if (!token) {
    throw new Error("Missing x-subscription-token response header");
  }

  const json = (await response.json()) as ApiResponse<SubscriptionStatus>;

  if (!json.success) {
    throw new Error(json.error.message);
  }

  return {
    token,
    subscription: json.data,
  };
}

export async function getSubscription(token: string) {
  return apiFetch<SubscriptionStatus>("/subscription", {
    headers: {
      "x-subscription-token": token,
    },
  });
}

export async function activateSubscription(token: string) {
  return apiFetch<SubscriptionStatus>("/subscription", {
    method: "POST",
    headers: {
      "x-subscription-token": token,
    },
  });
}

export async function deactivateSubscription(token: string) {
  return apiFetch<SubscriptionStatus>("/subscription", {
    method: "DELETE",
    headers: {
      "x-subscription-token": token,
    },
  });
}
