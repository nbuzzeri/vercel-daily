import { unsubscribeAction } from "@/app/actions/subscription";

export default function UnsubscribeButton() {
  return (
    <form action={unsubscribeAction}>
      <button
        type="submit"
        className="cursor-pointer rounded-full border border-white/15 px-4 py-2 text-sm transition active:scale-95 active:bg-white/10"
      >
        Unsubscribe
      </button>
    </form>
  );
}
