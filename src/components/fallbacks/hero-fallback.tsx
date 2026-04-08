export default function HeroFallback() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center">
      <div className="max-w-2xl">
        <div className="h-4 w-48 animate-pulse rounded bg-white/10" />
        <div className="mt-4 h-10 w-3/4 animate-pulse rounded bg-white/10" />
        <div className="mt-6 h-5 w-full animate-pulse rounded bg-white/10" />
        <div className="mt-2 h-5 w-2/3 animate-pulse rounded bg-white/10" />
      </div>

      <div className="aspect-video animate-pulse rounded-lg bg-white/10" />
    </section>
  );
}
