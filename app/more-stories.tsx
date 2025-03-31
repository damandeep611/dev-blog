import Link from "next/link";
import Date from "./date";
import CoverImage from "./cover-image";
import Avatar from "./avatar";
import { calculateReadingTime } from "@/lib/reading-time";
import { useEffect, useRef } from "react";

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {posts.map((post) => (
        <article key={post.slug} className="flex justify-center">
          <Link href={`/posts/${post.slug}`} className=" block max-w-sm w-full">
            {/* <div className="relative h-48">
              <CoverImage title={post.title} url={post.coverImage.url} />
            </div> */}
            <div className=" bg-gray-100 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-3xl transition-shadow p-6 shadow-sm cursor-pointer h-full">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className=" px-4 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 "
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
              <p className="text-gray-700 text-sm dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="ml-2">
                  <Date dateString={post.date} />
                </span>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}