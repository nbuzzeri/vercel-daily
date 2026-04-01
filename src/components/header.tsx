export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="text-xl font-semibold tracking-tight">
          Vercel Daily
        </a>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a href="/" className="hover:opacity-80">
                Home
              </a>
            </li>
            <li>
              <a href="/search" className="hover:opacity-80">
                Search
              </a>
            </li>
            <li>
              <button
                type="button"
                className="rounded-full border border-white/15 px-4 py-2 text-sm"
              >
                Subscribe
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
