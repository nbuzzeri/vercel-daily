"use server";

import {
  activateSubscription,
  createSubscription,
  deactivateSubscription,
} from "@/lib/api";

import {
  clearSubscriptionCookies,
  getSubscriptionState,
  setSubscriptionCookies,
} from "@/lib/subscription";

export async function subscribeAction() {
  const { token } = await getSubscriptionState();

  if (token) {
    await activateSubscription(token);
    await setSubscriptionCookies(token);
    return;
  }

  const created = await createSubscription();
  await activateSubscription(created.token);
  await setSubscriptionCookies(created.token);
}

export async function unsubscribeAction() {
  const { token } = await getSubscriptionState();

  if (token) {
    await deactivateSubscription(token);
  }

  await clearSubscriptionCookies();
}
