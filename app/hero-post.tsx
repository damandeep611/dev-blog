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
    <section className="relative my-8  max-w-6xl mx-auto  rounded-md border border-zinc-600">
      <Link href={`posts/${slug}`}>
        <div className="relative   rounded-lg">
          <div className="md:flex justify-between">
            <div className="p-6 md:w-1/2 md:p-8">
              <div className=" flex justify-center items-start space-y-6 flex-col">
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
                <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
                <div className="flex items-center text-sm text-white">
                  <Avatar name={author.name} picture={author.picture} />
                  <span className="ml-2">
                    <Date dateString={date} />
                  </span>
                </div>
                <p className=" text-sm mb-4">{excerpt}</p>
              </div>
            </div>
            {/* image section */}
            <div className="">
              <CoverImage title={title} url={coverImage.url} />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
