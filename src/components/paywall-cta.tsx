import SubscribeButton from "@/components/subscribe-button";

export default function PaywallCTA() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6">
      <h2 className="text-2xl font-semibold">Subscribe to keep reading</h2>

      <p className="text-white/70">
        Subscribe to Vercel Daily for full access to every article.
      </p>

      <div>
        <SubscribeButton />
      </div>
    </div>
  );
}
