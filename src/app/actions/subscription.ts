"use server";

import { cookies } from "next/headers";

export async function subscribeAction() {
  const cookieStore = await cookies();

  cookieStore.set("vercel-daily-subscribed", "true", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}
