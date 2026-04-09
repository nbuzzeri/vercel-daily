"use client";

import { useFormStatus } from "react-dom";

import { unsubscribeAction } from "@/app/actions/subscription";

function UnsubscribeSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`cursor-pointer rounded-full border border-white/15 px-4 py-2 text-sm transition active:scale-95 active:bg-white/10 ${
        pending ? "animate-pulse opacity-70" : ""
      }`}
    >
      {pending ? "Unsubscribing..." : "Unsubscribe"}
    </button>
  );
}

export default function UnsubscribeButton() {
  return (
    <form action={unsubscribeAction}>
      <UnsubscribeSubmitButton />
    </form>
  );
}
