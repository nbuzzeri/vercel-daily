import Link from "next/link";
import { cookies } from "next/headers";
import SubscribeButton from "@/components/subscribe-button";
import UnsubscribeButton from "@/components/unsubscribe-button";

export default async function Header() {
  const cookieStore = await cookies();
  const isSubscribed =
    cookieStore.get("vercel-daily-subscribed")?.value === "true";

  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Vercel Daily
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link href="/" className="hover:opacity-80">
                Home
              </Link>
            </li>
            <li>
              <Link href="/search" className="hover:opacity-80">
                Search
              </Link>
            </li>
            <li>
              {isSubscribed ? <UnsubscribeButton /> : <SubscribeButton />}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
