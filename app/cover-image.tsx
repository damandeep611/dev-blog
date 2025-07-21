import ContentfulImage from "../lib/contentful-image";
import Link from "next/link";

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CoverImage({
  title,
  url,
  slug,
}: {
  title: string;
  url: string;
  slug?: string;
}) {
  const image = (
    <ContentfulImage
      alt={`Cover Image for ${title}`}
      priority
      width={2000}
      height={1000}
      className={cn("w-full h-full object-cover transition-all duration-500", {
        " transform": slug,
      })}
      src={url}
    />
  );

  return (
    <div className="w-full h-full">
      {slug ? (
        <Link
          href={`/posts/${slug}`}
          aria-label={title}
          className="hidden md:block w-full h-full"
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
