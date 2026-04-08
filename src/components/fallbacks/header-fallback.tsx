import Link from "next/link";

export default function HeaderFallback() {
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
              <span className="rounded-full border border-white/15 px-4 py-2 text-sm">
                Subscribe
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}