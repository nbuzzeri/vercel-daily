import type { ContentBlock } from "@/lib/articles";

type ArticleContentProps = {
  content: ContentBlock[];
};

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="flex flex-col gap-4 text-white/80">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}>{block.text}</p>;

          case "heading":
            return block.level === 2 ? (
              <h2 key={index} className="text-2xl font-semibold">
                {block.text}
              </h2>
            ) : (
              <h3 key={index} className="text-xl font-semibold">
                {block.text}
              </h3>
            );

          case "blockquote":
            return (
              <blockquote
                key={index}
                className="border-l-2 border-white/20 pl-4 italic text-white/70"
              >
                {block.text}
              </blockquote>
            );

          case "unordered-list":
            return (
              <ul key={index} className="list-disc pl-6">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );

          case "ordered-list":
            return (
              <ol key={index} className="list-decimal pl-6">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ol>
            );

          case "image":
            return (
              <figure key={index} className="flex flex-col gap-2">
                <img
                  src={block.src}
                  alt={block.alt}
                  className="h-auto w-full rounded-lg"
                />
                {block.caption ? (
                  <figcaption className="text-sm text-white/50">
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
