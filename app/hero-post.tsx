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
    <section className="relative max-w-6xl mx-auto border rounded-lg border-gray-200 dark:border-gray-600 shadow-md">
      <Link href={`posts/${slug}`}>
        <div className="relative  h-[60vh] overflow-hidden rounded-lg">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <CoverImage title={title} url={coverImage.url} />
            </div>
            <div className="p-8 md:w-1/2 md:p-10">
              <div className="">
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4">{title}</h2>
                <div className="flex items-center text-white mb-4">
                  <Avatar name={author.name} picture={author.picture} />
                  <span className="ml-2">
                    <Date dateString={date} />
                  </span>
                </div>
                <p className=" mb-4">{excerpt}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
