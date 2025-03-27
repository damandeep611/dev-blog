import Link from "next/link";
import Date from "./date";
import CoverImage from "./cover-image";
import Avatar from "./avatar";

interface Post {
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

interface MoreStoriesProps {
  posts: Post[];
}

export default function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="relative h-48">
            <CoverImage title={post.title} url={post.coverImage.url} />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">
              <Link href={`/posts/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h3>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
              <Avatar name={post.author.name} picture={post.author.picture} />
              <span className="ml-2">
                <Date dateString={post.date} />
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {post.excerpt}
            </p>
            <Link
              href={`/posts/${post.slug}`}
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
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
        </article>
      ))}
    </div>
  );
}