import React from "react";
import MoreStories from "../more-stories";
import CoverImage from "../cover-image";
import Link from "next/link";
import DateComponent from "../date";
import Avatar from "../avatar";
import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";

function HeroPost({
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
  author: any;
  slug: string;
}) {
  return (
    <section className="w-full max-h-[400px] border mb-12 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 relative overflow-hidden">
          <div className="h-64 sm:h-80 lg:h-full transform hover:scale-105 transition-transform duration-500">
            <CoverImage title={title} slug={slug} url={coverImage.url} />
          </div>
        </div>
        <div className="p-6 lg:p-8 lg:w-1/2 flex flex-col justify-between">
          <div>
            <div className="mb-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              <DateComponent dateString={date} />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              <Link
                href={`/posts/${slug}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                {title}
              </Link>
            </h3>
            <p className="text-base lg:text-lg mb-6  line-clamp-3">{excerpt}</p>
          </div>
          <div className="mt-4 border-t pt-4 ">
            <div className="flex items-center">
              {author && (
                <div className="flex items-center">
                  <Avatar name={author.name} picture={author.picture} />
                  <span className="ml-2 text-sm font-medium">
                    {author.name}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Some Blogs
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Occassionally written articles related to tech and CS
          </p>
        </header>

        <div className="flex flex-col items-center">
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}

          <h2 className="text-2xl md:text-3xl font-bold mb-8 self-start text-gray-900 dark:text-white pl-4 border-l-4 border-indigo-600 mt-12">
            Latest Posts
          </h2>

          {morePosts?.length > 0 && <MoreStories morePosts={morePosts} />}
        </div>
      </div>
    </div>
  );
}