export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/70">
        <p>© {new Date().getFullYear()} Vercel Daily. All rights reserved.</p>
      </div>
    </footer>
  );
}
