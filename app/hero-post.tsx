import Link from "next/link";
import Date from "./date";
import CoverImage from "./cover-image";
import Avatar from "./avatar";

interface HeroPostProps {
  title: string;
  coverImage: {
    url: string;
  };
  date: string;
  excerpt: string;
  author: {
    name: string;
    picture: {
      url: string;
    };
  };
  slug: string;
  tags?: string[];
}

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}: HeroPostProps) {
  return (
    <section className="relative">
      <div className="relative w-full h-[60vh] overflow-hidden rounded-lg">
        <div className="absolute inset-0">
          <CoverImage title={title} url={coverImage.url} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-indigo-600/80 text-white text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h2>
            <div className="flex items-center text-white mb-4">
              <Avatar name={author.name} picture={author.picture} />
              <span className="ml-2">
                <Date dateString={date} />
              </span>
            </div>
            <p className="text-lg text-gray-200 mb-4">{excerpt}</p>
            <Link
              href={`/posts/${slug}`}
              className="inline-flex items-center text-white hover:text-indigo-300 transition-colors"
            >
              Read more
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
