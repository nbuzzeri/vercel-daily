import Image from "next/image";
import { getFeaturedArticles } from "@/lib/api";
import { imageSizes } from "@/lib/media";
import Link from "next/link";

export default async function Hero() {
  const articles = await getFeaturedArticles();
  const featured = articles[0];

  if (!featured) return null;

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">
          Daily news for the modern web
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Vercel Daily
        </h1>

        <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg">
          Stay up to date with the latest engineering insights, product updates,
          and stories from the Vercel community.
        </p>
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={featured.image}
          alt={featured.title}
          fill
          sizes={imageSizes.articleHero}
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent" />

        <div className="absolute bottom-0 p-4">
          <p className="text-xs uppercase text-white/80">Featured Story</p>
          <Link
            href={`/articles/${featured.slug}`}
            className="mt-1 block text-lg font-semibold hover:underline"
          >
            {featured.title}
          </Link>
        </div>
      </div>
    </section>
  );
}
