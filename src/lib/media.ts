export function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export const imageSizes = {
  card: "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  articleHero: "(min-width: 1024px) 896px, 100vw",
  content: "(min-width: 768px) 768px, 100vw",
};
