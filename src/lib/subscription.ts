import "server-only";

import { cookies } from "next/headers";

const SUBSCRIPTION_COOKIE = "vercel-daily-subscribed";
const SUBSCRIPTION_TOKEN_COOKIE = "vercel-daily-subscription-token";

export async function getSubscriptionState() {
  const cookieStore = await cookies();

  return {
    isSubscribed: cookieStore.get(SUBSCRIPTION_COOKIE)?.value === "true",
    token: cookieStore.get(SUBSCRIPTION_TOKEN_COOKIE)?.value,
  };
}

export async function setSubscriptionCookies(token: string) {
  const cookieStore = await cookies();

  cookieStore.set(SUBSCRIPTION_COOKIE, "true", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  cookieStore.set(SUBSCRIPTION_TOKEN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}

export async function clearSubscriptionCookies() {
  const cookieStore = await cookies();

  cookieStore.delete(SUBSCRIPTION_COOKIE);
  cookieStore.delete(SUBSCRIPTION_TOKEN_COOKIE);
}
