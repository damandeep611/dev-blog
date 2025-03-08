import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";

function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author?: any;
  slug: string;
}) {
  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
      <div className="relative h-48 overflow-hidden">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2 text-xs font-medium text-indigo-600 dark:text-indigo-400">
          <DateComponent dateString={date} />
        </div>
        <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
          <Link
            href={`/posts/${slug}`}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>

        {author && (
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center">
              <Avatar name={author.name} picture={author.picture} />
              <span className="ml-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                {author.name}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {morePosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}